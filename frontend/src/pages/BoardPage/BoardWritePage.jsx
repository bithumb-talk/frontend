import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextEditor, BoardCategory, TextBottom } from '@/components/index';
import TextTitle from '@/components/Board/TextTitle';
import { exportImgTag, exportSrcTag } from '@/utils/utils';
import { categoryList } from '@/assets/index';
import api from '@/api/api';
import './BoradWrite.style.css';
import 'react-quill/dist/quill.snow.css';

export default function BoardWritePage() {
  const { id, nickname } = useSelector((state) => state.userInfo.userInfo);
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

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

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

  const postSubmit = useCallback(async () => {
    if (id) {
      const res = await api.postBoard(1, postContent);
      if (res.data.status === 'SUCCESS') {
        toast.success('글이 작성되었습니다👌');
        //  setTimeout(history.push({ pathname: '/' }), 3000);
        setTimeout(goBack(), 2000);
      } else {
        toast.error('저장에 실패하였습니다');
      }
      setIsSend(false);
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  }, [goBack, id, postContent]);

  const onSubmit = async () => {
    if (nickname) {
      const editorContent = inputRef.current.state.value;

      let imgUrl = '';
      if (editorContent && editorContent.indexOf('<img') !== -1 && exportImgTag(editorContent)) {
        imgUrl = exportImgTag(editorContent).pop();
        imgUrl = exportSrcTag(imgUrl).pop();
        imgUrl = imgUrl.replace('"', '');
        imgUrl = imgUrl.replace('>', '');
      } else if (postContent.boardImg.length === 0) imgUrl = 'https://i.ibb.co/3r0SVSb/default-Img.png';
      else imgUrl = '';

      setPostContent({
        ...postContent,
        boardContent: editorContent,
        boardTitle: titleRef.current.value,
        boardImg: imgUrl.length > 0 ? postContent.boardImg.concat(imgUrl) : postContent.boardImg,
        nickname,
      });
      if (postContent.boardCategory === '') {
        toast('카테고리를 선택해주세요');
      } else if (titleRef.current.value === '') {
        toast('제목을 작성해주세요');
      } else if (editorContent === '<p><br></p>') {
        toast('내용을 작성해주세요');
      } else {
        setIsSend(true);
      }
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  };

  useEffect(() => {
    if (isSend) postSubmit();
  }, [isSend, postSubmit]);

  return (
    <>
      <div className="board">
        <h3>글쓰기</h3>
        <BoardCategory name="boardCategory" onChange={onCategoryChange} />
        <TextTitle className="css-0" titleRef={titleRef} />
        <TextEditor className="ql-editor" inputRef={inputRef} />
        <TextBottom onClick={onSubmit} goBack={goBack} />
      </div>
    </>
  );
}
