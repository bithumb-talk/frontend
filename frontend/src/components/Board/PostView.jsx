/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ReactHtmlParser from 'react-html-parser';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/api/api';
import { categoryList } from '@/assets/index';
import { gapTime } from '@/utils/utils';
import ConfirmModal from '../Modal/ConfirmModal';
import { ContentLikeButton, ContentLikeIcon, ContentLikeEmptyIcon, ContentLikeEmptyButton } from './Board.style';
import './BoardDetail.style.css';

export default function PostView(props) {
  const { postItem } = props;
  const { id, nickname } = useSelector((state) => state.userInfo.userInfo);
  const history = useHistory();
  const [postTitle, setTitle] = useState(postItem.boardTitle);
  const [postNo, setNo] = useState(postItem.boardNo);
  const [postName, setName] = useState(postItem.nickname);
  const [postDate, setDate] = useState(postItem.boardCreatedDate);
  const [postContent, setContent] = useState(postItem.boardContent);
  const [postCatagory, setCatagory] = useState(postItem.boardCategory);
  const [cataogryUrl, setCatagoryUrl] = useState(`/board/${postItem.boardCategory}`);
  const [renameCatagory, setRename] = useState('');
  const [viewCount, setViewCnt] = useState(postItem.boardViews);
  const [likeCount, setLikeCnt] = useState(postItem.boardRecommend);
  const [likeCheck, setLikeCheck] = useState(false);
  const [isDeleteAble, setDelete] = useState(false);

  const [Modalopen, setModalopen] = useState(false);
  const [Modaltitle, setModaltitle] = useState('');
  const [Modalcontent, setModalcontent] = useState('');

  const onClickContent = async () => {
    if (id) {
      if (likeCheck) {
        const resUser = await api.deleteUserBoardRecommend(id, postNo);
        const res = await api.postBoardRecommend(postNo, { boardRecommend: 'false' });

        if (res.data.status === 'SUCCESS' && resUser.data.status === 'SUCCESS') {
          setLikeCheck(!likeCheck);
          setLikeCnt(likeCount - 1);
        } else toast.error('저장에 실패하였습니다');
      } else {
        const resUser = await api.postUserBoardRecommend(id, postNo);
        const res = await api.postBoardRecommend(postNo, { boardRecommend: 'true' });

        if (res.data.status === 'SUCCESS' && resUser.data.status === 'SUCCESS') {
          setLikeCheck(!likeCheck);
          setLikeCnt(likeCount + 1);
        } else toast.error('저장에 실패하였습니다');
      }
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  const getUserBoardRecommend = useCallback(async () => {
    await api.getUserBoardRecommend(id, postNo).then((res) => {
      if (res.data.status === 'SUCCESS') {
        if (res.data.data.likeStatus === 'false') setLikeCheck(false);
        else if (res.data.data.likeStatus === 'true') setLikeCheck(true);
      }
    });
  });

  const onOpenModal = async () => {
    setModalopen(!Modalopen);
    setModaltitle('글 삭제');
    setModalcontent('해당 글을 정말 삭제하시겠습니까?');
  };

  const onDelete = async () => {
    await api.deleteBoard(postNo, id).then((res) => {
      if (res.data.status === 'SUCCESS') {
        toast.success('글이 삭제 되었습니다');
        setTimeout(history.push({ pathname: '/' }), 2500);
      } else {
        toast.error('삭제되지 않았습니다');
      }
    });
  };

  const onUpdate = async () => {
    history.push({
      pathname: '/boardwrite',
      state: { postNo, postCatagory, renameCatagory, postContent, postTitle, postName },
    });
  };

  useEffect(() => {
    if (postNo) getUserBoardRecommend(postNo);
  }, [getUserBoardRecommend, postNo, props]);

  useEffect(() => {
    if (nickname && postName && nickname === postName) {
      setDelete(true);
    }
  }, [nickname, postName]);

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setNo(postItem.boardNo);
    setName(postItem.nickname);
    setDate(gapTime(postItem.boardCreatedDate));
    setContent(postItem.boardContent);
    setCatagoryUrl(`/board/${postItem.boardCategory}`);
    setViewCnt(postItem.boardViews);
    setLikeCnt(postItem.boardRecommend);
    setCatagory(postItem.boardCategory);
  }, [postItem]);

  useEffect(() => {
    if (categoryList && postCatagory) {
      const name = categoryList.find((item) => item.name === postCatagory);
      if (name) setRename(name.label);
    }
  }, [postCatagory]);
  return (
    <>
      <div>
        <div>
          커뮤니티 <Link href={cataogryUrl}>{renameCatagory}</Link>
        </div>
        <div className="postTitle">
          <span className="titleText">{postTitle}</span>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={6} className="postTopInfo">
              <span>{postName}&nbsp;</span>&nbsp; |&nbsp; <span>&nbsp;{postDate}&nbsp;</span>
            </Grid>
            <Grid item xs={6} className="postTopInfo_right">
              <span>조회 &nbsp;{viewCount}&nbsp;</span> &nbsp;|&nbsp; <span>&nbsp;추천&nbsp; {likeCount}</span>
            </Grid>
          </Grid>
        </div>
        <div className="postContent">
          <div>{ReactHtmlParser(postContent)}</div>
        </div>
        <div className="contentLike">
          {likeCheck ? (
            <div>
              <ContentLikeButton onClick={onClickContent}>
                <ContentLikeIcon />
                <span> Like {likeCount}</span>
              </ContentLikeButton>
            </div>
          ) : (
            <div>
              <ContentLikeEmptyButton onClick={onClickContent}>
                <ContentLikeEmptyIcon />
                <span> Like Up {likeCount}</span>
              </ContentLikeEmptyButton>
            </div>
          )}
        </div>
        <div>
          {isDeleteAble ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: ' flex-end',
                margin: '1em',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={onUpdate}
              >
                <UpdateIcon style={{ padding: '0.2em' }} />
                <span style={{ fontSize: '14px' }}>글 수정</span>
              </div>
              &nbsp;&nbsp;
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={onOpenModal}
              >
                <DeleteIcon style={{ padding: '0.2em' }} />
                <span style={{ fontSize: '14px' }}>글 삭제</span>
              </div>
            </div>
          ) : (
            <span />
          )}
          <ConfirmModal isOpen={Modalopen} title={Modaltitle} content={Modalcontent} onClickConfirm={onDelete} />
        </div>
      </div>
    </>
  );
}
