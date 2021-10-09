/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ReactHtmlParser from 'react-html-parser';
import api from '@/api/api';
import { categoryList } from '@/assets/index';
import { gapTime } from '@/utils/utils';
import { ContentLikeButton, ContentLikeIcon, ContentLikeEmptyIcon, ContentLikeEmptyButton } from './Board.style';
import './BoardDetail.style.css';

export default function PostView(props) {
  const { postItem } = props;
  const { id } = useSelector((state) => state.userInfo);
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
      setLikeCheck(!likeCheck);

      const data = {
        boardRecommend: null,
      };

      if (likeCheck) {
        data.boardRecommend = 'false';
      } else {
        data.boardRecommend = 'true';
      }

      await api.postBoardRecommend(postNo, data).then((res) => {
        if (res.data.status === 'SUCCESS') {
          alert('저장 성공');
        } else {
          alert('저장 실패');
        }
      });
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setNo(postItem.boardNo);
    setName(postItem.nickname);
    setDate(gapTime(postItem.boardCreatedDate));
    setContent(postItem.boardContent);
    setCatagory(postItem.boardCategory);
    setCatagoryUrl(`/board/${postItem.boardCategory}`);
    setViewCnt(postItem.boardViews);
    setLikeCnt(postItem.boardRecommend);
  }, [postItem]);
  return (
    <div>
      <div>
        커뮤니티 <Link href={cataogryUrl}>{categoryList.filter((item) => item.name === postCatagory)[0].label}</Link>
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
  );
}
