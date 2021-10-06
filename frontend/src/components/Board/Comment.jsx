/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import proptypes from 'prop-types';
import Button from '@mui/material/Button';
import './BoardDetail.style.css';
import CommentView from './CommentView';

export default function Comment(props) {
  const { commentItem } = props;
  const [isSend, setSend] = useState(false); // 임시변수
  const [isWrite, setWrite] = useState('');
  const [Comments, setComments] = useState([]); // { content: isWrite, postId: '' }
  const user = '나의닉네임'; // useSelector((state) => state.user);

  React.useEffect(() => {
    setComments(Comments.concat(commentItem));
  }, [commentItem]);

  const commentChange = (event) => {
    setWrite(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      commentContent: isWrite,
      nickname: user,
      commentRecommend: 0,
    };
    setComments(Comments.concat(variables));
    setSend(true);
    setWrite('');
  };

  return (
    <div>
      <div className="commentWrite">
        <div className="">
          <div className="commentName">{user}</div>
          <textarea placeholder="댓글을 작성하세요" className="commentWriteText" onChange={commentChange} />
        </div>
        <Button
          onClick={onSubmit}
          size="small"
          variant="contained"
          style={{ float: 'right', background: '#ff8282', height: '25px' }}
        >
          댓글 작성
        </Button>
      </div>
      <div>
        {isSend
          ? Comments.map((item) => <CommentView key={item.CommentNo} item={item} />)
          : commentItem.map((item) => <CommentView key={item.CommentNo} item={item} />)}
      </div>
    </div>
  );
}

Comment.propTypes = {
  commentItem: proptypes.elementType.isRequired,
};
