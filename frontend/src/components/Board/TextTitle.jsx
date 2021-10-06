import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { CssTextField } from './Board.style';

export default function TextTitle(props) {
  const { name, inputRef, onChange } = props;

  return (
    <Box component="form">
      <FormControl variant="standard" />
      <CssTextField label="Title" id="custom-css-outlined-input" name={name} ref={inputRef} onChange={onChange} />
    </Box>
  );
}

TextTitle.propTypes = {
  name: PropTypes.element.isRequired,
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
