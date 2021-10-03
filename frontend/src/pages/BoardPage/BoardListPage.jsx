import React from 'react';
import { Grid } from '@mui/material';
import './BoradWrite.style.css';
import { Link } from 'react-router-dom';
import PostGrid from '@/components/PostGrid/PostGrid';
import { WriteButton, WriteIcon, PlusIcon } from './BoardList.style';

export default function BoardListPage() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Grid item xs={10} md={10} lg={10}>
          <PostGrid />
        </Grid>
        <div
          style={{
            position: 'fixed',
            bottom: '3%',
            left: '87%',
            zIndex: '1000',
          }}
        >
          <Link to="/boardwrite">
            <WriteButton aria-label="wirte">
              <WriteIcon />
              Write
              <PlusIcon />
            </WriteButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
