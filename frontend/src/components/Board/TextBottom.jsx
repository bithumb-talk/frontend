/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@mui/material/Grid';
// eslint-disable-next-line object-curly-newline
import { SendButton, SendButtonIcon, OutButton, OutIcon } from './Board.style';

export default function TextBottom(props) {
  const { onClick, goBack } = props;
  return (
    <div>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={6}>
          <OutButton type="input" onClick={goBack}>
            <OutIcon />
            나가기
          </OutButton>
        </Grid>
        <Grid item xs={6}>
          <SendButton style={{ float: 'right' }} type="submit" onClick={onClick}>
            등록
            <SendButtonIcon />
          </SendButton>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
