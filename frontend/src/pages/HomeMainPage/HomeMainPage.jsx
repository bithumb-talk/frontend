/* eslint-disable react/no-array-index-key */
// import Grid from '@mui/material/Grid';
import React from 'react';
import CommonLayout from '@/components/@layout/CommonLayout';
import { PostGrid } from '@/components/index';

const HomeMainPage = () => (
  <>
    <CommonLayout>
      {/* 여기다 추가! */}
      <PostGrid />
    </CommonLayout>
  </>
);

export default HomeMainPage;
