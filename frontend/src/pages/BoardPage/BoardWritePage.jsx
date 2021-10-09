import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { TextEditor, BoardCategory, BoardBottom } from '@/components/index';
import TextTitle from '@/components/Board/TextTitle';
import { categoryList } from '@/assets/index';
import api from '@/api/api';
import './BoradWrite.style.css';
import 'react-quill/dist/quill.snow.css';

export default function BoardWritePage() {
  const { id, nickname } = useSelector((state) => state.userInfo);
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
    nickname,
  });

  const goBack = () => {
    history.goBack();
  };

  const onCategoryChange = (e) => {
    const { innerText } = e.target;
    if (innerText) {
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
    if (id) {
      const res = await api.postBoard(id, postContent);
      if (res.data.status === 'SUCCESS') {
        alert('저장 성공');
        goBack();
      } else {
        alert('저장 실패');
      }
      setIsSend(false);
    } else {
      alert('로그인이 필요한 서비스입니다.');
    }
  };

  const onSubmit = async () => {
    if (nickname) {
      const editorContent = inputRef.current.state.value;

      let imgUrl = '';
      if (editorContent && editorContent.indexOf('<img') !== -1) {
        const htmlText = ReactHtmlParser(editorContent)[0].props.children;
        htmlText.some((item) => {
          if (typeof item === 'object' && item.type === 'img') {
            imgUrl = item.props.src;
          }
          return typeof item === 'object' && item.type === 'img';
        });
      } else if (postContent.boardImg.length === 0) imgUrl = 'https://i.ibb.co/3r0SVSb/default-Img.png';
      else imgUrl = '';

      setPostContent({
        ...postContent,
        boardContent: editorContent,
        boardTitle: titleRef.current.value,
        boardImg: imgUrl.length > 0 ? postContent.boardImg.concat(imgUrl) : postContent.boardImg,
      });
      if (postContent.boardCategory === '') {
        alert('카테고리를 선택해주세요');
      } else if (titleRef.current.value === '') {
        alert('제목을 작성해주세요');
      } else if (editorContent === '<p><br></p>') {
        alert('내용을 작성해주세요');
      } else {
        setIsSend(true);
      }
    } else {
      alert('로그인이 필요한 서비스입니다.');
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
      <BoardBottom onClick={onSubmit} goBack={goBack} />
    </div>
  );
}
