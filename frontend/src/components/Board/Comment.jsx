import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './BoardDetail.style.css';
// import { useSelector } from 'react-redux';
import CommentView from './CommentView';

export default function CommentWrite() {
  const [isSend, setSend] = useState(false); // 임시변수
  const [isWrite, setWrite] = useState('');
  const [Comments, setComments] = useState([]); // { content: isWrite, postId: '' }
  const user = '나의닉네임'; // useSelector((state) => state.user);

  const commentChange = (event) => {
    setWrite(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      content: isWrite,
      writer: user,
      postId: '',
    };
    setComments(Comments.concat(variables));
    setSend(true);
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
      {isSend ? <CommentView Comments={Comments} /> : <span />}
    </div>
  );
}
