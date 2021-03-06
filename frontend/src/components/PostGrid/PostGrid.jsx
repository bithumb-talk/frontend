/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import PostCard from '../PostCard/PostCard';

function PostGrid(props) {
  const [postGridItem, setPostGridItem] = useState(props.postItem);

  useEffect(() => {
    setPostGridItem(props.postItem);
  }, [props]);

  return (
    <div
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '1%',
        paddingRight: '3%',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={1}>
        {postGridItem.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <PostCard postItem={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PostGrid;

PostGrid.propTypes = {
  postItem: PropTypes.elementType.isRequired,
};
