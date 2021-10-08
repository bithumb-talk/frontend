/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Grid from '@mui/material/Grid';
import api from '@/api/api';
import defaultImg from '@/assets/image/defaultImg.png';
import { CardProfile, CardInfo, Like, LikeEmpty, CardBottom, CardWrap } from './PostCard.style';

function PostCard(props) {
  const { postItem } = props;
  const { id } = useSelector((state) => state.userInfo);
  const [title, setTitle] = useState(postItem.boardTitle);
  const [postNo, setNo] = useState(postItem.boardNo);
  const [postName, setName] = useState(postItem.nickname);
  const [postDate, setDate] = useState(postItem.boardCreatedDate);
  const [postContent, setContent] = useState(postItem.boardContent);
  const [postImg, setImg] = useState(postItem.boardImg);
  const [linkUrl, setlinkUrl] = useState(`/boarddetail/${postItem.boardNo}`);
  // const links = useState(postItem.links);

  const [isChecked, setChecked] = useState(false);

  const onClick = async () => {
    if (id) {
      setChecked(!isChecked);

      const data = {
        boardRecommend: null,
      };

      if (isChecked) {
        data.boardRecommend = 'false';
      } else {
        data.boardRecommend = 'true';
      }

      await api.postBoardRecommend(postNo, data).then((res) => {
        if (res.data.status === 'SUCCESS') {
          alert('저장 성공');
        } else {
          alert('저장 실패');
        }
      });
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setNo(postItem.boardNo);
    setDate(postItem.boardCreatedDate);
    setName(postItem.nickname);
    setlinkUrl(`/boarddetail/${postItem.boardNo}`);
    setContent(postItem.boardContent);

    // DefaultImg 설정
    if (postItem.boardImg.indexOf('http') !== -1) {
      setImg(postItem.boardImg);
    } else if (postItem.boardImg.indexOf('http') === -1) {
      setImg(defaultImg);
    }

    // 내용글 설정
    if (postItem.boardContent.indexOf('<img src') !== -1) {
      const withoutImg = postItem.boardContent.replace(/<img[^>]*src=[\\']?([^>\\']+)[\\']?[^>]*>/gi, '');
      setContent(ReactHtmlParser(withoutImg));
    } else {
      setContent(ReactHtmlParser(postItem.boardContent));
    }
  }, [postItem]);

  return (
    <CardWrap>
      <Link to={linkUrl}>
        <CardMedia component="img" width="225" height="134" image={postImg} alt="img" />
        <CardContent height="100">
          <Typography variant="body2" height="25px" style={{ fontWeight: 'bolder' }}>
            {title.length >= 15 ? `${title.substr(0, 15)}...` : title}
          </Typography>
          <Typography variant="body2" height="80px" style={{ color: 'rgb(73, 80, 87)' }}>
            {postContent}
            {/*  {ReactHtmlParser(postContent.length) >= 120
              ? `${ReactHtmlParser(postContent.substr(0, 120))}...`
              : ReactHtmlParser(postContent)} */}
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
              {postDate}
            </Typography>
            <CardInfo>by {postName}</CardInfo>
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
