/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import proptypes from 'prop-types';
import { CommentLikeIcon, CommentLikeEmptyIcon } from './Board.style';
import './BoardDetail.style.css';

export default function CommentView(props) {
  const { item } = props;
  const [check, setCheck] = useState(false);

  const onClickComment = () => {
    setCheck(!check);
  };

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
