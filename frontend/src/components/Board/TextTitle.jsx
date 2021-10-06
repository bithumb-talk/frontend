import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { CssTextField } from './Board.style';

export default function TextTitle(props) {
  const { titleRef } = props;

  return (
    <Box component="form">
      <FormControl variant="standard" ref={titleRef} />
      <CssTextField label="Title" id="custom-css-outlined-input" ref={titleRef} />
    </Box>
  );
}

TextTitle.propTypes = {
  titleRef: PropTypes.element.isRequired,
};
