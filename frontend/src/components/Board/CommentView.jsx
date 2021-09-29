/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import proptypes from 'prop-types';
import { CommentLikeIcon, CommentLikeEmptyIcon } from './Board.style';
import './BoardDetail.style.css';

export default function CommentView(props) {
  const { Comments } = props;
  const [content] = useState(Comments);
  const [commentCheck, setCommentCheck] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const onClickComment = () => {
    setCommentCheck(1 - commentCheck);
    setCommentCount(1 - commentCount);
  };

  return (
    <div>
      {content.map((item) => (
        <div className="commentRead">
          <div className="commentName">{item.writer}</div>
          <div className="commentReadText">{item.content}</div>
          {commentCheck === 0 ? (
            <div className="commentBottom">
              {/* <span className="writeReply">대댓글 달기</span> */}
              <span className="writeReplyLike">
                <CommentLikeEmptyIcon onClick={onClickComment} /> 좋아요 {commentCount}
              </span>
            </div>
          ) : (
            <div className="commentBottom">
              {/* <span className="writeReply">대댓글 달기</span> */}
              <span className="writeReplyLike">
                <CommentLikeIcon onClick={onClickComment} /> 좋아요 {commentCount}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

CommentView.propTypes = {
  // props: PropTypes.elementType.isRequired,
  Comments: proptypes.elementType.isRequired,
};
