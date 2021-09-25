import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { CssTextField } from './Board.style';

export default function TextTitle() {
  return (
    <Box component="form">
      <FormControl variant="standard" />
      <CssTextField label="Title" id="custom-css-outlined-input" />
    </Box>
  );
}
