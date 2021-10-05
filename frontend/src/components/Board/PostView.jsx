/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ReactHtmlParser from 'react-html-parser';
import { ContentLikeButton, ContentLikeIcon, ContentLikeEmptyIcon, ContentLikeEmptyButton } from './Board.style';
import './BoardDetail.style.css';

export default function PostView(props) {
  const { postItem } = props;
  const [title, setTitle] = useState(postItem.boardTitle);
  const [postName, setName] = useState(postItem.nickname);
  const [postDate, setDate] = useState(postItem.boardCreatedDate);
  const [postContent, setContent] = useState(postItem.boardContent);
  const [postCatagory, setCatagory] = useState(postItem.boardCategory);
  const [cataogryUrl, setCatagoryUrl] = useState(`/board/${postItem.boardCategory}`);
  const [viewCount, setViewCnt] = useState(postItem.boardViews);
  const [likeCount, setLikeCnt] = useState(postItem.boardRecommend);
  const [contentCheck, setContentCheck] = useState(0);
  const [contentCount, setContentCount] = useState(0);

  const onClickContent = () => {
    setContentCheck(1 - contentCheck);
    setContentCount(1 - contentCount);
  };

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setName(postItem.nickname);
    setDate(postItem.boardCreatedDate);
    setContent(postItem.boardContent);
    setCatagory(postItem.boardCategory);
    setCatagoryUrl(`/board/${postItem.boardCategory}`);
    setViewCnt(postItem.boardViews);
    setLikeCnt(postItem.boardRecommend);
  }, [postItem]);
  return (
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
        {contentCheck === 0 ? (
          <div>
            <ContentLikeEmptyButton onClick={onClickContent}>
              <ContentLikeEmptyIcon />
              <span> Like Up {contentCount}</span>
            </ContentLikeEmptyButton>
          </div>
        ) : (
          <div>
            <ContentLikeButton onClick={onClickContent}>
              <ContentLikeIcon />
              <span> Like {contentCount}</span>
            </ContentLikeButton>
          </div>
        )}
      </div>
    </div>
  );
}
