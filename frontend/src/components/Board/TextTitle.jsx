import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { CssTextField } from './Board.style';

export default function TextTitle(props) {
  const { name, titleRef, onChange } = props;

  return (
    <Box component="form">
      <FormControl variant="standard" />
      <CssTextField label="Title" id="custom-css-outlined-input" name={name} ref={titleRef} onChange={onChange} />
    </Box>
  );
}

TextTitle.propTypes = {
  name: PropTypes.element.isRequired,
  titleRef: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
};
