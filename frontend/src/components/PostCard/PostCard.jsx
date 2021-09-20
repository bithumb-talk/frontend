import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {
  CardProfile, CardInfo, Like, LikeEmpty, CardBottom, CardWrap,
} from './PostCard.style';

function PostCard() {
  const content = {
    board_created_date: '2O21-09-19',
    board_content: 'Add 1 cup of frozen peas along with the mussels, if you like Add 1 cup of frozen peas',
    board_img: 'https://source.unsplash.com/random',
    user_nickname: '빗썸',
  };
  const [isChecked, setisChecked] = useState(0);

  const onClick = () => {
    setisChecked(1 - isChecked);
  };

  return (
    <CardWrap sx={{ maxWidth: 250 }}>
      <CardMedia component="img" width="250" height="154" image={content.board_img} alt="img" />
      <CardContent height="100">
        <Typography variant="body2" height="100px">
          {content.board_content.length >= 150 ? `${content.board_content.substr(0, 150)}...` : content.board_content}
        </Typography>
      </CardContent>
      <CardBottom height="100">
        <hr />
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={2}>
            <CardProfile />
          </Grid>
          <Grid item xs={8}>
            <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
              {content.board_created_date}
            </Typography>
            <CardInfo>by {content.user_nickname}</CardInfo>
          </Grid>
          <Grid item xs={2}>
            {isChecked === 0 ? (
              <Like className="button red" onClick={onClick} />
            ) : (
              <LikeEmpty className="button" onClick={onClick} />
            )}
          </Grid>
        </Grid>
      </CardBottom>
    </CardWrap>
  );
}

export default PostCard;
