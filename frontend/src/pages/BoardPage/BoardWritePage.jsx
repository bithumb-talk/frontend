// eslint-disable-next-line object-curly-newline
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { SendButton, SendButtonIcon, OutButton, OutIcon } from '@/components/Board/Board.style';
import { TextEditor, BoardCategory, TextTitle } from '@/components/index';
import api from '@/api/api';
import './BoradWrite.style.css';
import 'react-quill/dist/quill.snow.css';

export default function BoardWritePage() {
  const userId = 1;
  const history = useHistory();
  const inputRef = React.useRef();
  const titleRef = React.useRef();
  const [isSend, setIsSend] = useState(false);
  const [postContent, setPostContent] = useState({
    boardCategory: '',
    boardTitle: '',
    boardContent: '',
    boardCreatedDate: '', // `${new Date()}`,
    boardImg: [''],
    boardRecommend: 0,
    boardViews: 0,
    nickname: 'USER1',
  });

  const goBack = () => {
    history.goBack();
  };

  const onCategoryChange = (e) => {
    const { innerText } = e.target;
    const categoryList = [
      { name: 'talk', label: '자유게시판' },
      { name: 'cointalk', label: '코인잡담' },
      { name: 'coinBeginner', label: '코인초보' },
    ];
    const value = categoryList.filter((item) => item.label === innerText)[0].name;
    setPostContent({
      ...postContent,
      boardCategory: value,
    });
  };

  const postSubmit = async () => {
    console.log(postContent);
    const res = await api.postBoard(userId, postContent);
    if (res.data.status === 'SUCCESS') {
      console.log('성공');
      goBack();
    }
  };

  const onClick = async () => {
    setPostContent({
      ...postContent,
      boardContent: inputRef.current.state.value,
      boardTitle: titleRef.current.state.value,
    });
    setIsSend(true);
  };

  useEffect(() => {
    console.log('타이틀 입력중...');
    console.log(titleRef);
  }, [postContent.boardTitle]);

  useEffect(() => {
    if (isSend === true) postSubmit();
  }, [isSend]);

  return (
    <div className="board">
      <h3>글쓰기</h3>
      <BoardCategory name="boardCategory" onChange={onCategoryChange} />
      <TextTitle className="css-0" titleRef={titleRef} />
      <TextEditor className="ql-editor" inputRef={inputRef} />
      <div>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={6}>
            <OutButton type="input" onClick={goBack}>
              <OutIcon />
              나가기
            </OutButton>
          </Grid>
          <Grid item xs={6}>
            <SendButton style={{ float: 'right' }} type="submit" onClick={onClick}>
              등록
              <SendButtonIcon />
            </SendButton>
          </Grid>
        </Grid>
        <br />
      </div>
    </div>
  );
}
