import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import { PostContentBody } from '@/components/Board/Board.style';
import { PostView, Comment } from '@/components/index';
import api from '@/api/api';

export default function BoardReadDetail() {
  const { pathname } = useLocation();
  const [item, setItem] = useState([]);

  const getboardContent = async (url) => {
    const res = await api.getBoardDetail(url);
    if (res.data.status === 'SUCCESS') {
      setItem(res.data.data);
    }
  };

  useEffect(() => {
    getboardContent(pathname.split('/')[2]);
  }, []);

  return (
    <Grid item xs={12} md={10}>
      <PostContentBody>
        <div style={{ width: '100%' }}>
          <PostView postItem={item} />
          <Comment />
        </div>
      </PostContentBody>
    </Grid>
  );
}
