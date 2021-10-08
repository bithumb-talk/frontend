/* eslint-disable max-len */
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

function PostCard({ boardNo, boardCreatedDate, boardTitle, boardImg, boardContent, nickname, links }) {
  const [content, setcontent] = useState({
    board_title: boardTitle,
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
      board_title: boardTitle,
      board_created_date: boardCreatedDate,
      user_nickname: nickname,
      linkUrl: `/boarddetail/${boardNo}`,
      links,
    });
  }, [boardNo, boardCreatedDate, boardTitle, nickname, links]);

  useEffect(() => {
    if (content.board_img.indexOf('http') !== -1) {
      setcontent({
        ...content,
        board_img: boardImg,
      });
    } else if (content.board_img.indexOf('http') === -1) {
      setcontent({
        ...content,
        board_img: defaultImg,
      });
    }
  }, [boardImg]);

  useEffect(() => {
    if (boardContent && content.board_content) {
      if (content.board_content.indexOf('<img src') !== -1) {
        const htmlContent = ReactHtmlParser(content.board_content)[0].props.children[0];
        if (htmlContent && typeof htmlContent === 'string') {
          setcontent({
            ...content,
            board_content: content.board_content[0].props.children[0],
          });
        } else if (htmlContent && typeof htmlContent !== 'string') {
          setcontent({
            ...content,
            board_content: '',
          });
        } else {
          setcontent({
            ...content,
            board_content: boardContent,
          });
        }
      } else {
        setcontent({
          ...content,
          board_content: boardContent,
        });
      }
    }
  }, [boardContent]);

  const [isChecked, setisChecked] = useState(false);

  const onClick = () => {
    setisChecked(!isChecked);
  };

  return (
    <CardWrap>
      <Link to={content.linkUrl}>
        <CardMedia component="img" width="225" height="134" image={content.board_img} alt="img" />
        <CardContent height="100">
          <Typography variant="body2" height="20px" style={{ fontWeight: 'bolder' }}>
            {content.board_title.length >= 16 ? `${content.board_title.substr(0, 16)}...` : content.board_title}
          </Typography>
          <Typography variant="body2" height="80px" style={{ color: 'rgb(73, 80, 87)' }}>
            {ReactHtmlParser(content.board_content.length) >= 120
              ? `${ReactHtmlParser(content.board_content.substr(0, 120))}...`
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
