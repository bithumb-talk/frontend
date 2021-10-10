/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ReactHtmlParser from 'react-html-parser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/api/api';
import { categoryList } from '@/assets/index';
import { gapTime } from '@/utils/utils';
import { ContentLikeButton, ContentLikeIcon, ContentLikeEmptyIcon, ContentLikeEmptyButton } from './Board.style';
import './BoardDetail.style.css';

export default function PostView(props) {
  const { postItem } = props;
  const { id } = useSelector((state) => state.userInfo.userInfo);
  const [title, setTitle] = useState(postItem.boardTitle);
  const [postNo, setNo] = useState(postItem.boardNo);
  const [postName, setName] = useState(postItem.nickname);
  const [postDate, setDate] = useState(postItem.boardCreatedDate);
  const [postContent, setContent] = useState(postItem.boardContent);
  const [postCatagory, setCatagory] = useState(postItem.boardCategory);
  const [cataogryUrl, setCatagoryUrl] = useState(`/board/${postItem.boardCategory}`);
  const [viewCount, setViewCnt] = useState(postItem.boardViews);
  const [likeCount, setLikeCnt] = useState(postItem.boardRecommend);
  const [likeCheck, setLikeCheck] = useState(false);

  const onClickContent = async () => {
    if (id) {
      if (likeCheck) {
        const resUser = await api.deleteUserBoardRecommend(id, postNo);
        if (resUser.data.status !== 'SUCCESS') toast.error('딜리트에 실패하였습니다');

        const res = await api.postBoardRecommend(postNo, { boardRecommend: 'false' });
        if (res.data.status !== 'SUCCESS') {
          toast.error('저장에 실패하였습니다');
        }
        if (res.data.status === 'SUCCESS' && resUser.data.status === 'SUCCESS') setLikeCheck(!likeCheck);
      } else {
        const resUser = await api.postUserBoardRecommend(id, postNo);
        if (resUser.data.status !== 'SUCCESS') toast.error('유저 저장에 실패하였습니다');

        const res = await api.postBoardRecommend(postNo, { boardRecommend: 'true' });
        if (res.data.status !== 'SUCCESS') {
          toast.error('저장에 실패하였습니다');
        }
        if (res.data.status === 'SUCCESS' && resUser.data.status === 'SUCCESS') setLikeCheck(!likeCheck);
      }
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  const getUserBoardRecommend = async () => {
    await api.getUserBoardRecommend(id, postNo).then((res) => {
      if (res.data.status === 'SUCCESS') {
        if (res.data.data.likeStatus === 'false') setLikeCheck(false);
        else if (res.data.data.likeStatus === 'true') setLikeCheck(true);
      }
    });
  };

  useEffect(() => {
    if (id && postNo) getUserBoardRecommend(postNo);
  }, [postNo]);

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setNo(postItem.boardNo);
    setName(postItem.nickname);
    setDate(gapTime(postItem.boardCreatedDate));
    setContent(postItem.boardContent);
    setCatagoryUrl(`/board/${postItem.boardCategory}`);
    setViewCnt(postItem.boardViews);
    setLikeCnt(postItem.boardRecommend);
    setCatagory(
      categoryList && postItem.boardCategory
        ? categoryList.filter((item) => item.name === postItem.boardCategory).label
        : postItem.boardCategory,
    );
  }, [postItem]);

  return (
    <>
      <div>
        <div>
          커뮤니티 <Link href={cataogryUrl}>{postCatagory}</Link>
        </div>
        <div className="postTitle">
          <span className="titleText">{title}</span>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={6} className="postTopInfo">
              <span>{postName}</span> | <span>{postDate}</span>
            </Grid>
            <Grid item xs={6} className="postTopInfo_right">
              <span>조회 {viewCount}</span> | <span>추천 {likeCount}</span>
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
                <span> Like {likeCount + 1}</span>
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
      </div>
    </>
  );
}
