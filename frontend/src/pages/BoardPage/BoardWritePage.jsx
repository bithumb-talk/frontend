import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextEditor, BoardCategory, TextBottom } from '@/components/index';
import TextTitle from '@/components/Board/TextTitle';
import { exportImgTag, exportSrcTag } from '@/utils/utils';
import api from '@/api/api';
import './BoradWrite.style.css';
import 'react-quill/dist/quill.snow.css';

export default function BoardWritePage() {
  const { id, nickname } = useSelector((state) => state.userInfo.userInfo);
  const location = useLocation();
  const history = useHistory();
  const inputRef = React.useRef();
  const titleRef = React.useRef();
  const [isSend, setIsSend] = useState(false);
  const [isModify, setModify] = useState(false);
  // const [isText] = useState('');
  const [isCategory, setCategory] = useState('');
  const [isNameCategory, setNameCategory] = useState('');
  const [boardNo, setNo] = useState('');
  const [postInputs, setPostInputs] = useState({
    boardCategory: '',
    boardTitle: '',
    boardContent: '',
    boardCreatedDate: '', // `${new Date()}`,
    boardImg: [],
    boardRecommend: 0,
    boardViews: 0,
    nickname,
  });

  useEffect(() => {
    if (location.state) {
      setPostInputs({
        ...postInputs,
        boardCategory: location.state.postCatagory,
        boardContent: location.state.postContent,
        nickname: location.state.postName,
      });
      titleRef.current.value = location.state.postTitle;
      setNo(location.state.postNo);
      setCategory(location.state.postCatagory);
      setNameCategory(location.state.renameCatagory);
      setModify(true);
    }
  }, [location]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onCategoryChange = (event, newValue) => {
    if (newValue) {
      setCategory(newValue.name);
      setNameCategory(newValue.label);

      setPostInputs({
        ...postInputs,
        boardCategory: newValue.name,
      });
    } else {
      setCategory('');
      setNameCategory('');
      setPostInputs({
        ...postInputs,
        boardCategory: '',
      });
    }
  };

  const postModifySubmit = useCallback(async () => {
    if (id) {
      const res = await api.putBoard(id, boardNo, postInputs);
      if (res.data.status === 'SUCCESS') {
        toast.success('글이 수정 되었습니다👌');
        setTimeout(goBack(), 2500);
      } else {
        toast.error('저장에 실패하였습니다');
      }
      setIsSend(false);
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  }, [goBack, id, postInputs]);

  const postSubmit = useCallback(async () => {
    if (id) {
      const res = await api.postBoard(id, postInputs);
      if (res.data.status === 'SUCCESS') {
        toast.success('글이 작성되었습니다👌');
        setTimeout(history.push({ pathname: '/' }), 2500);
      } else {
        toast.error('저장에 실패하였습니다');
      }
      setIsSend(false);
    } else {
      toast.info('로그인이 필요한 서비스입니다.');
    }
  }, [id, postInputs]);

  const onSubmit = async () => {
    if (nickname) {
      const editorContent = inputRef.current.state.value;

      let imgUrl = '';
      if (editorContent && editorContent.indexOf('<img') !== -1 && exportImgTag(editorContent)) {
        imgUrl = exportImgTag(editorContent).pop();
        imgUrl = exportSrcTag(imgUrl).pop();
        imgUrl = imgUrl.replace('"', '');
        imgUrl = imgUrl.replace('>', '');
      } else if (postInputs.boardImg.length === 0) imgUrl = 'https://i.ibb.co/3r0SVSb/default-Img.png';
      else imgUrl = '';

      setPostInputs({
        ...postInputs,
        boardContent: editorContent,
        boardTitle: titleRef.current.value,
        boardImg:
          imgUrl.length > 0 && postInputs.boardImg.length < 1
            ? postInputs.boardImg.concat(imgUrl)
            : postInputs.boardImg,
        nickname,
      });
      if (postInputs.boardCategory === '') {
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
    if (isSend && isModify) postModifySubmit();
    else if (isSend) postSubmit();
  }, [isSend, postSubmit]);

  return (
    <>
      <div className="board">
        <h3>글쓰기</h3>
        <BoardCategory
          value={isCategory}
          inputValue={isNameCategory}
          name="boardCategory"
          onChange={onCategoryChange}
        />
        <TextTitle className="css-0" titleRef={titleRef} />
        <TextEditor value={postInputs.boardContent} className="ql-editor" inputRef={inputRef} />
        <TextBottom onClick={onSubmit} goBack={goBack} />
      </div>
    </>
  );
}
