/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import Grid from '@mui/material/Grid';
import PostCard from '../PostCard/PostCard';

function PostGrid(props) {
  const postArr = props.postItem;
  const [postGridItem, setPostGridItem] = React.useState(postArr);

  React.useEffect(() => {
    setPostGridItem(postArr);
  }, [postArr]);

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
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default PostGrid;

PostGrid.propTypes = {
  postItem: PropTypes.elementType.isRequired,
};
