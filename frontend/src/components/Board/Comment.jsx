/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import api from '@/api/api';
import CommentView from './CommentView';
import './BoardDetail.style.css';

export default function Comment(props) {
  const { commentItem } = props;
  const { pathname } = useLocation();
  const [isSend, setSend] = useState(false); // 임시변수
  const [isWrite, setWrite] = useState('');
  const [Comments, setComments] = useState([]); // { content: isWrite, postId: '' }
  const [boardNo, setNo] = useState('');
  const user = '나의닉네임'; // useSelector((state) => state.user);

  useEffect(() => {
    setComments(Comments.concat(commentItem));
  }, [commentItem]);

  useEffect(() => {
    setNo(pathname.split('/')[2]);
  }, [pathname]);

  const commentChange = (event) => {
    setWrite(event.currentTarget.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const variables = {
      commentContent: isWrite,
      commentCreateDate: '',
      nickname: user,
      commentRecommend: 0,
    };

    await api.postComment(boardNo, variables).then((res) => {
      if (res.data.status === 'SUCCESS') {
        alert('저장 성공');
        setComments(Comments.concat(variables));
        setSend(true);
        setWrite('');
      } else {
        alert('저장 실패');
      }
    });
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
