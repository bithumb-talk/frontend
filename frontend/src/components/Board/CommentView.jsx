/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/api/api';
// import { gapTime } from '@/utils/utils';
import { CommentLikeIcon, CommentLikeEmptyIcon } from './Board.style';
import './BoardDetail.style.css';

export default function CommentView(props) {
  const { item } = props;
  const { id } = useSelector((state) => state.userInfo.userInfo);
  const [postDate, setDate] = useState(item.commentCreatedDate);
  const [check, setCheck] = useState(false);
  const [boardNo, setNo] = useState('');

  const onClickComment = async () => {
    if (id) {
      setCheck(!check);
      const data = {
        commentRecommend: null,
      };
      if (check) {
        data.commentRecommend = 'false';
      } else {
        data.commentRecommend = 'true';
      }
      await api.postCommentRecommend(boardNo, item.commentNo, data).then((res) => {
        if (res.data.status !== 'SUCCESS') {
          toast.error('저장에 실패하였습니다');
        }
      });
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    setDate(item.commentCreatedDate);
    if (item && item.links) {
      setNo(item.links[0].href.split('/')[4]);
    }
  }, [item]);

  return (
    <div>
      <div className="commentRead">
        <div className="commentName">
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={6} className="postTopInfo">
              {item.nickname}
            </Grid>
            <Grid item xs={6} className="postTopInfo_right">
              {postDate}
            </Grid>
          </Grid>
        </div>
        <div className="commentReadText">{item.commentContent}</div>
        {check === false ? (
          <div className="commentBottom">
            {/* <span className="writeReply">대댓글 달기</span> */}
            <span className="writeReplyLike" onClick={onClickComment}>
              <CommentLikeEmptyIcon /> 좋아요 {item.commentRecommend}
            </span>
          </div>
        ) : (
          <div className="commentBottom">
            {/* <span className="writeReply">대댓글 달기</span> */}
            <span className="writeReplyLike" onClick={onClickComment}>
              <CommentLikeIcon /> 좋아요 {item.commentRecommend + 1}
            </span>
          </div>
        )}
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

CommentView.propTypes = {
  item: proptypes.elementType.isRequired,
};
