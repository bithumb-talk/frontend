import React from 'react';
import { Box, Typography } from '@mui/material';
import proptypes from 'prop-types';

export default function EmptyContent(props) {
  const { type } = props;

  const printComponent = () => {
    if (type === 'myBoard') {
      return (<Typography variant="h6" sx={{ color: '#aaa' }}>작성한 글이 없습니다.</Typography>);
    }

    if (type === 'myLike') {
      return (<Typography variant="h6" sx={{ color: '#aaa' }}>좋아요한 글이 없습니다.</Typography>);
    }

    return (<Typography variant="h6" sx={{ color: '#aaa' }}>관심 종목이 없습니다.</Typography>);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      {printComponent()}
    </Box>
  );
}

EmptyContent.propTypes = {
  type: proptypes.elementType.isRequired,
};
