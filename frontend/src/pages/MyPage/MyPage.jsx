import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Box, Alert, AlertTitle, Snackbar } from '@mui/material';
import { actLogOut, getUserInfo, getMyBoardList, getMyLikeBoardList, getMyInterestStockList } from '@/redux/userInfoSlice';
import api from '@/api/api';
import logo from '@/assets/image/newLogo.png';
import PostGrid from '@/components/PostGrid/PostGrid';
import PasswordModal from './PasswordModal';
import QuitModal from './QuitModal';
import EmptyContent from './EmptyContent';
import MyInterestStock from './MyInterestStock';
import {
  UserProfileBox,
  ProfileImage,
  UserNickname,
  ChangeButton,
  NicknameBox,
  PWChangeButton,
  UserContentBox,
  ContentWrap,
  QuitButton,
  ImgUploadButton,
  BackArrowBox,
  InfoDivideLine,
  UserNicknameFixed,
  UpDownLine,
} from './MyPage.style';

export default function MyPage() {
  const id = window.localStorage.getItem('id');
  const fileInput = useRef(null);
  const dispatch = useDispatch();

  const profileUrl = useSelector((state) => state.userInfo.profileUrl);
  const nickname = useSelector((state) => state.userInfo.nickname);
  const myBoardList = useSelector((state) => state.userInfo.myBoardList.data);
  const myLikeBoardList = useSelector((state) => state.userInfo.myLikeBoardList.data);
  const myStockList = useSelector((state) => state.userInfo.myInterestStockList.data);

  const [changeToggle, setchangeToggle] = useState('change');
  const [myPageTab, setmyPageTab] = useState('myBoard');
  const [errorStatus, seterrorStatus] = useState(false);
  const [pwOpenToggle, setpwOpenToggle] = useState(false);
  const [quitOpenToggle, setquitOpenToggle] = useState(false);
  const [newNickname, setnewNickname] = useState(nickname);
  const [validationCheck, setValidationCheck] = useState({
    userNicknameCheck: 'default',
    userPWCheck: 'default',
  });

  const [imageUpload, setimageUpload] = useState(null);

  const { userNicknameCheck, userPWCheck } = validationCheck;

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getMyBoardList());
    dispatch(getMyLikeBoardList());
    dispatch(getMyInterestStockList());
  }, []);

  const handleInput = async (e) => {
    const newValue = e.target.value;
    const checkStatus = newValue.length > 10;

    seterrorStatus(checkStatus);

    if (checkStatus) {
      return;
    }

    setnewNickname(e.target.value);
  };

  const changeNickname = async () => {
    const res = await api.putChangeNickname(id, { nickname: `${newNickname}` });
    const changeResult = res.data;

    if (changeResult.status === 'SUCCESS') {
      setchangeToggle('change');

      setValidationCheck({
        ...validationCheck,
        userNicknameCheck: 'success',
      });
    } else {
      setValidationCheck({
        ...validationCheck,
        userNicknameCheck: 'fail',
      });
    }

    dispatch(getUserInfo());
  };

  const checkNicknameDup = async () => {
    const res = await api.checkDuplicateNickname(newNickname);
    const changeResult = res.data;

    if (changeResult.status === 'SUCCESS') {
      changeNickname();
    } else {
      setValidationCheck({
        ...validationCheck,
        userNicknameCheck: 'fail',
      });
    }
  };

  const clickChangeButton = () => {
    if (changeToggle === 'change') {
      setnewNickname(nickname);
      setchangeToggle('save');
    } else {
      checkNicknameDup();
    }
  };

  const onTogglePWOpen = (res) => {
    setpwOpenToggle(!pwOpenToggle);

    setValidationCheck({
      ...validationCheck,
      userPWCheck: res,
    });
  };

  const onToggleQuitOpen = (res) => {
    setquitOpenToggle(!quitOpenToggle);

    if (res === 'success') window.location.replace('/');
  };

  const closeUserNicknameCheck = () => {
    setValidationCheck({
      ...validationCheck,
      userNicknameCheck: 'default',
    });
  };

  const closeUserPWCheck = () => {
    setValidationCheck({
      ...validationCheck,
      userPWCheck: 'default',
    });
  };

  const handleImageChange = async (e) => {
    console.log(e.target.files[0]);
    e.preventDefault();

    const newFile = e.target.files[0];
    const formData = new FormData();

    formData.append('images', newFile);

    setimageUpload(newFile);

    console.log(imageUpload);

    const res = await api.postImageUpload(id, formData);
    const uploadResult = res.data;

    dispatch(getUserInfo());
    console.log(uploadResult);

    window.location.reload();
  };

  const changeButtonStyle = () => (changeToggle === 'save' ? {
    color: 'white',
    bgcolor: 'black',
    border: '1px solid black',
  } : {
    bgcolor: 'white',
    color: 'rgba(0,0,0,.65)',
    border: '1px solid rgb(217, 217, 217)',
    boxShadow: 'none',
  });

  const changeMenuTab = (e) => {
    setmyPageTab(e.target.name);
  };

  const printComponent = () => {
    if (myPageTab === 'myBoard' && myBoardList.length > 0) {
      return (<PostGrid postItem={myBoardList} />);
    }

    if (myPageTab === 'myLike' && myLikeBoardList.length > 0) {
      return (<PostGrid postItem={myLikeBoardList} />);
    }

    if (myPageTab === 'myStock' && myStockList.length > 0) {
      return (<MyInterestStock />);
    }

    return (<EmptyContent type={myPageTab} />);
  };

  const loginOutBtnClick = () => {
    dispatch(actLogOut());
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <BackArrowBox>
        <Link to="/">
          <img src={logo} alt="youngcha" width="105px" height="65px" />
        </Link>
      </BackArrowBox>
      <Box sx={{ display: 'flex', padding: '110px 30px 30px 30px', bgcolor: '#F1F3F5', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', width: '100%', padding: '10px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <UserProfileBox>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography variant="h6" sx={{ width: '100%' }}>
                  <b>??? ??????</b>
                </Typography>
                <ChangeButton
                  color="default"
                  onClick={loginOutBtnClick}
                  sx={{
                    minWidth: '82px',
                    maxWidth: '82px',
                    bgcolor: 'black',
                    color: 'white',
                    boxShadow: 'none',
                  }}
                >
                  ????????????
                </ChangeButton>
              </Box>
              <InfoDivideLine />
              <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                <ProfileImage src={profileUrl} />
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingLeft: '10px' }}>
                  <NicknameBox>
                    <Snackbar
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      open={userNicknameCheck === 'success'}
                      onClose={closeUserNicknameCheck}
                      autoHideDuration={3000}
                    >
                      <Alert severity="success">
                        <AlertTitle>????????? ?????? ??????</AlertTitle>
                        ????????? ????????? ?????????????????????!
                      </Alert>
                    </Snackbar>
                    <Snackbar
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      open={userNicknameCheck === 'fail'}
                      onClose={closeUserNicknameCheck}
                      autoHideDuration={3000}
                    >
                      <Alert severity="error">
                        <AlertTitle>????????? ?????????</AlertTitle>
                        ?????? ???????????? ??????????????????!
                      </Alert>
                    </Snackbar>
                    { changeToggle === 'change'
                      ? (
                        <UserNicknameFixed
                          value={nickname}
                          onChange={handleInput}
                        />
                      )
                      : (
                        <UserNickname
                          error={errorStatus}
                          InputProps={{
                            readOnly: changeToggle === 'change',
                          }}
                          value={newNickname}
                          onChange={handleInput}
                        />
                      )}
                    <ChangeButton
                      color="default"
                      onClick={clickChangeButton}
                      sx={changeButtonStyle()}
                      disabled={changeToggle === 'save' && newNickname < 2}
                    >
                      { changeToggle === 'change' ? '??????' : '??????' }
                    </ChangeButton>
                  </NicknameBox>
                  <ImgUploadButton
                    htmlFor="image-upload"
                  >
                    <i aria-label="icon: upload" className="anticon anticon-upload">
                      <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="upload" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
                      </svg>
                    </i>
                    <span style={{ marginLeft: '5px' }}>????????? ?????????</span>
                  </ImgUploadButton>
                  <input
                    type="file"
                    id="image-upload"
                    name="avatar"
                    ref={fileInput}
                    style={{ display: 'none' }}
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                  />
                </Box>
              </Box>
            </UserProfileBox>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <PWChangeButton
                color="default"
                onClick={onTogglePWOpen}
              >
                ???????????? ??????
              </PWChangeButton>
              <PasswordModal
                open={pwOpenToggle}
                onClose={onTogglePWOpen}
              />
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userPWCheck === 'success'}
                onClose={closeUserPWCheck}
                autoHideDuration={3000}
              >
                <Alert severity="success">
                  <AlertTitle>???????????? ?????? ??????</AlertTitle>
                  ???????????? ????????? ?????????????????????!
                </Alert>
              </Snackbar>
              <QuitButton
                onClick={onToggleQuitOpen}
              >
                ?????? ??????
              </QuitButton>
              <QuitModal
                open={quitOpenToggle}
                onClose={onToggleQuitOpen}
              />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            minHeight: '200px',
            border: '1px solid #EAEDF0',
            bgcolor: '#fff',
            marginLeft: '30px',
            borderRadius: '10px',
          }}
          >
            <UserContentBox>
              <ContentWrap onClick={changeMenuTab} name="myBoard">
                ?????? ??? ???
              </ContentWrap>
              <UpDownLine />
              <ContentWrap onClick={changeMenuTab} name="myLike">
                ????????? ??? ?????????
              </ContentWrap>
              <UpDownLine />
              <ContentWrap onClick={changeMenuTab} name="myStock">
                ????????????
              </ContentWrap>
            </UserContentBox>
            {printComponent()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
