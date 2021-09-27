import React from 'react';
import Grid from '@mui/material/Grid';
import { PostContentBody } from '@/components/Board/Board.style';
import { PostView, Comment } from '@/components/index';

export default function BoardReadDetail() {
  return (
    <Grid item xs={12} md={8}>
      <PostContentBody>
        <div>
          <PostView />
          <Comment />
        </div>
      </PostContentBody>
    </Grid>
  );
}
