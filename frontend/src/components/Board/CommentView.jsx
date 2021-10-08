import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import api from '@/api/api';
import { CommentLikeIcon, CommentLikeEmptyIcon } from './Board.style';
import './BoardDetail.style.css';

export default function CommentView(props) {
  const { item } = props;
  const [check, setCheck] = useState(false);
  const [boardNo, setNo] = useState('');

  const onClickComment = async () => {
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
      if (res.data.status === 'SUCCESS') {
        alert('저장 성공');
      } else {
        alert('저장 실패');
      }
    });
  };

  useEffect(() => {
    if (item && item.links) {
      setNo(item.links[0].href.split('/')[4]);
    }
  }, [item]);

  return (
    <div>
      <div className="commentRead">
        <div className="commentName">{item.nickname}</div>
        <div className="commentReadText">{item.commentContent}</div>
        {check === false ? (
          <div className="commentBottom">
            {/* <span className="writeReply">대댓글 달기</span> */}
            <span className="writeReplyLike">
              <CommentLikeEmptyIcon onClick={onClickComment} /> 좋아요 {item.commentRecommend}
            </span>
          </div>
        ) : (
          <div className="commentBottom">
            {/* <span className="writeReply">대댓글 달기</span> */}
            <span className="writeReplyLike">
              <CommentLikeIcon onClick={onClickComment} /> 좋아요 {item.commentRecommend + 1}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

CommentView.propTypes = {
  item: proptypes.elementType.isRequired,
};
