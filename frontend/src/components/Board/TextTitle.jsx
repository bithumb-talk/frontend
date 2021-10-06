import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
// import { CssTextField } from './Board.style';

export default function TextTitle(props) {
  const { titleRef } = props;

  return (
    <Box component="form">
      <FormControl variant="standard" />
      <input
        style={{
          width: '100%',
          background: '#fffcf6',
          display: ' flex',
          border: '1px solid transparent',
          boxShadow: ' 0 2px 5px 1px rgb(64 60 67 / 16%)',
          height: '39px',
          borderRadius: '24px',
          paddingLeft: '2em',
        }}
        placeholder="제목을 입력하세요..."
        ref={titleRef}
      />
    </Box>
  );
}

TextTitle.propTypes = {
  titleRef: PropTypes.element.isRequired,
};
