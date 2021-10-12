import React, { useState, useEffect } from 'react';
import proptypes from 'prop-types';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/api/api';
import CommentView from './CommentView';
import './BoardDetail.style.css';

export default function Comment(props) {
  const { commentItem } = props;
  const { pathname } = useLocation();
  const [isSend, setSend] = useState(false);
  const [isWrite, setWrite] = useState('');
  const [Comments, setComments] = useState([]);
  const [boardNo, setNo] = useState('');
  const { nickname } = useSelector((state) => state.userInfo.userInfo);

  const commentChange = (event) => {
    setWrite(event.currentTarget.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (nickname) {
      const variables = {
        commentContent: isWrite,
        commentCreateDate: '',
        nickname,
        commentRecommend: 0,
      };

      await api.postComment(boardNo, variables).then((res) => {
        if (res.data.status === 'SUCCESS') {
          setComments([variables].concat(Comments));
          setWrite(' ');
          setSend(true);
        } else {
          toast.error('저장에 실패하였습니다');
        }
      });
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    setComments(commentItem);
  }, [commentItem]);

  useEffect(() => {
    setNo(pathname.split('/')[2]);
  }, [pathname]);

  return (
    <div>
      <div className="commentWrite">
        <div className="">
          <div className="commentName">{nickname}</div>
          <textarea
            value={isWrite}
            placeholder="댓글을 작성하세요"
            className="commentWriteText"
            onChange={commentChange}
          />
        </div>
        <Button
          onClick={onSubmit}
          size="small"
          variant="contained"
          style={{ float: 'right', background: 'rgb(255, 130, 130)', height: '25px', color: 'white' }}
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
