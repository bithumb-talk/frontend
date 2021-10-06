/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Grid from '@mui/material/Grid';
import defaultImg from '@/assets/image/defaultImg.png';
import { CardProfile, CardInfo, Like, LikeEmpty, CardBottom, CardWrap } from './PostCard.style';

function PostCard({ boardNo, boardCreatedDate, boardImg, boardContent, nickname, links }) {
  const [content, setcontent] = useState({
    board_created_date: boardCreatedDate,
    board_content: boardContent,
    board_img: boardImg,
    user_nickname: nickname,
    linkUrl: `/boarddetail/${boardNo}`,
    links,
  });

  useEffect(() => {
    setcontent({
      ...content,
      board_created_date: boardCreatedDate,
      board_content: boardContent,
      board_img: boardImg,
      user_nickname: nickname,
      linkUrl: `/boarddetail/${boardNo}`,
      links,
    });
  }, [boardNo, boardCreatedDate, boardImg, boardContent, nickname, links]);

  useEffect(() => {
    if (content.board_img.indexOf('http') === -1) {
      setcontent({
        ...content,
        board_img: defaultImg,
      });
    }
  }, [boardImg]);

  const [isChecked, setisChecked] = useState(false);

  const onClick = () => {
    setisChecked(!isChecked);
  };

  return (
    <CardWrap>
      <Link to={content.linkUrl}>
        <CardMedia component="img" width="225" height="134" image={content.board_img} alt="img" />
        <CardContent height="100">
          <Typography variant="body2" height="100px">
            {content.board_content.length >= 150
              ? `${ReactHtmlParser(content.board_content.substr(0, 150))}...`
              : ReactHtmlParser(content.board_content)}
          </Typography>
        </CardContent>
      </Link>
      <CardBottom height="100">
        <Grid container spacing={0} alignItems=" center">
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
            {isChecked ? (
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

PostCard.propTypes = {
  // props: PropTypes.elementType.isRequired,
  boardCreatedDate: proptypes.elementType.isRequired,
};
