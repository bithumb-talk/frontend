/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import api from '@/api/api';
import { PostContentBody } from '@/components/Board/Board.style';
import { PostView, Comment } from '@/components/index';

export default function BoardReadDetail() {
  const { pathname } = useLocation();
  const [item, setItem] = useState([]);
  const [comment, setComment] = useState([]);

  const getCommentList = async (urlNum) => {
    const res = await api.getComment(urlNum);
    if (res.data.status === 'SUCCESS') {
      setComment(res.data.data.content);
    }
  };

  const getBoardDetail = async (url) => {
    await api.getBoardDetail(url).then((res) => {
      if (res.data.status === 'SUCCESS') {
        setItem(res.data.data);
        getCommentList(res.data.data.links[0].href.split('/')[4]);
      }
    });
  };

  useEffect(() => {
    getBoardDetail(pathname.split('/')[2]);
  }, []);

  return (
    <Grid item xs={12} md={12}>
      <PostContentBody>
        <div style={{ width: '100%' }}>
          <PostView postItem={item} />
          <Comment commentItem={comment} />
        </div>
      </PostContentBody>
    </Grid>
  );
}
