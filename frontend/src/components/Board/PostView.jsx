/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ReactHtmlParser from 'react-html-parser';
import { ContentLikeButton, ContentLikeIcon, ContentLikeEmptyIcon, ContentLikeEmptyButton } from './Board.style';
import './BoardDetail.style.css';

export default function PostView() {
  const title = useState('제목');
  const [postContent] = useState(
    '<b> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </b>Override the digital divide with additional clickthroughs from DevOps.<br /> Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
  );
  const [postCatagory] = useState('자유게시판');
  const [viewCount] = useState(0);
  const [likeCount] = useState(0);
  const [contentCheck, setContentCheck] = useState(0);
  const [contentCount, setContentCount] = useState(0);

  const onClickContent = () => {
    setContentCheck(1 - contentCheck);
    setContentCount(1 - contentCount);
  };

  return (
    <div>
      <div>
        커뮤니티 <Link href=" ">{postCatagory}</Link>
      </div>
      <div className="postTitle">
        <span className="titleText">{title}</span>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={6} className="postTopInfo">
            <span>닉네임</span> | <span>2021.10.21</span>
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
