/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ReactHtmlParser from 'react-html-parser';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from '@mui/material/Skeleton';
import api from '@/api/api';
import defaultImg from '@/assets/image/defaultImg.png';
import { withoutImgTag, gapTime } from '@/utils/utils';
import { CardProfile, CardInfo, Like, LikeEmpty, CardBottom, CardWrap } from './PostCard.style';

function PostCard(props) {
  const { postItem } = props;
  const [loading, setLoading] = useState(true);
  const { id } = useSelector((state) => state.userInfo.userInfo);

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
        if (res.data.status !== 'SUCCESS') {
          toast.error('저장에 실패하였습니다');
        }
      });
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    setTitle(postItem.boardTitle);
    setNo(postItem.boardNo);
    setName(postItem.nickname);
    setlinkUrl(`/boarddetail/${postItem.boardNo}`);
    setContent(postItem.boardContent);

    // 시간 설정
    setDate(gapTime(postItem.boardCreatedDate));

    // DefaultImg 설정
    if (postItem.boardImg.indexOf('http') !== -1) {
      setImg(postItem.boardImg);
    } else if (postItem.boardImg.indexOf('http') === -1) {
      setImg(defaultImg);
    }

    // 내용글 설정
    if (postItem.boardContent.indexOf('<img src') !== -1) {
      const withoutImg = withoutImgTag(postItem.boardContent);
      setContent(ReactHtmlParser(withoutImg));
    } else {
      setContent(ReactHtmlParser(postItem.boardContent));
    }
  }, [postItem]);

  useEffect(() => {
    setLoading(false);
  }, [postImg, postContent]);

  return (
    <>
      <CardWrap>
        <Link to={linkUrl}>
          {loading ? (
            <Skeleton sx={{ height: 134 }} animation="wave" variant="rectangular" />
          ) : (
            <CardMedia component="img" width="225" height="134" image={postImg} alt="img" />
          )}
          <CardContent height="100">
            {loading ? (
              <Skeleton sx={{ height: 105 }} animation="wave" variant="rectangular" />
            ) : (
              <>
                <Typography variant="body2" height="25px" style={{ fontWeight: 'bolder' }}>
                  {title.length >= 15 ? `${title.substr(0, 15)}...` : title}
                </Typography>
                <Typography variant="body2" height="80px" style={{ color: 'rgb(73, 80, 87)' }}>
                  {postContent}
                  {/*  {ReactHtmlParser(postContent.length) >= 120
              ? `${ReactHtmlParser(postContent.substr(0, 120))}...`
              : ReactHtmlParser(postContent)} */}
                </Typography>
              </>
            )}
          </CardContent>
        </Link>
        <CardBottom height="100">
          <Grid container spacing={0} alignItems=" center">
            <Grid item xs={2}>
              {loading ? <Skeleton variant="circular" width={30} height={30} /> : <CardProfile />}
            </Grid>
            <Grid item xs={8}>
              {loading ? (
                <>
                  <Skeleton variant="text" animation="wave" width={100} height={15} />
                  <Skeleton variant="text" animation="wave" width={100} height={15} />
                </>
              ) : (
                <>
                  <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                    {postDate}
                  </Typography>
                  <CardInfo>by {postName}</CardInfo>
                </>
              )}
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
    </>
  );
}

export default PostCard;

PostCard.propTypes = {
  // props: PropTypes.elementType.isRequired,
  boardCreatedDate: proptypes.elementType.isRequired,
};
