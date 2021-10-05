import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
// eslint-disable-next-line object-curly-newline
import api from '@/api/api';
import { SendButton, SendButtonIcon, OutButton, OutIcon } from './Board.style';

export default function BoardBottom() {
  const userId = useState(1);
  const postContent = async () => {
    const res = await api.postBoard(userId);
    console.log(res);
    if (res.data.status === 'SUCCESS') {
      console.log('성공');
    }
  };

  const onClick = () => {
    postContent();
  };

  return (
    <div>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={6}>
          <OutButton type="input">
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
