import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { SendButton, SendButtonIcon, OutButton, OutIcon } from '@/components/Board/Board.style';
import { TextEditor, BoardCategory } from '@/components/index';
import TextTitle from '@/components/Board/TextTitle';
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
    boardImg: [],
    boardRecommend: 0,
    boardViews: 0,
    nickname: 'USER1',
  });

  const goBack = () => {
    history.goBack();
  };

  const onCategoryChange = (e) => {
    const { innerText } = e.target;
    if (innerText) {
      const categoryList = [
        { name: 'talk', label: '자유게시판' },
        { name: 'cointalk', label: '코인잡담' },
        { name: 'coinBeginner', label: '코인초보' },
      ];

      const pick = categoryList.filter((item) => item.label === innerText)[0].name;
      setPostContent({
        ...postContent,
        boardCategory: pick,
      });
    } else {
      setPostContent({
        ...postContent,
        boardCategory: '',
      });
    }
  };

  const postSubmit = async () => {
    const res = await api.postBoard(userId, postContent);
    if (res.data.status === 'SUCCESS') {
      alert('저장 성공');
      goBack();
    } else {
      alert('저장 실패');
    }
    setIsSend(false);
  };

  const onClick = async () => {
    const editorContent = inputRef.current.state.value;

    let imgUrl = '';
    if (!!editorContent && editorContent.indexOf('<img') !== -1) {
      const textGroup = ReactHtmlParser(editorContent)[0].props.children;
      textGroup.forEach((item) => {
        if (typeof item === 'object' && item.type === 'img' && item.key === '1') {
          imgUrl = item.props.src;
        }
      });
    }

    setPostContent({
      ...postContent,
      boardContent: editorContent,
      boardTitle: titleRef.current.value,
      boardImg: postContent.boardImg.concat(imgUrl),
    });
    if (postContent.boardCategory === '') {
      alert('카테고리를 선택해주세요');
    } else if (titleRef.current.value === '') {
      console.log(postContent.boardCategory);
      alert('제목을 작성해주세요');
    } else if (editorContent === '<p><br></p>') {
      alert('내용을 작성해주세요');
    } else {
      setIsSend(true);
    }
  };

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
