/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
// import Grid from '@mui/material/Grid';
import React from 'react';
import Grid from '@mui/material/Grid';
import PostCard from '../PostCard/PostCard';

// export default function PostGrid() {
function PostGrid(props) {
  console.log(props);
  const postSample = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '-1%',
        paddingLeft: '3%',
        paddingRight: '3%',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={3}>
        {postSample.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <PostCard user={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PostGrid;
