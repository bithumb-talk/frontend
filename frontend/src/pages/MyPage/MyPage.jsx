import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Typography, Box, Alert, AlertTitle, Snackbar } from '@mui/material';
import { getUserInfo } from '@/redux/userInfoSlice';
import api from '@/api/api';
import PasswordModal from './PasswordModal';
import QuitModal from './QuitModal';
import {
  UserProfileBox,
  ProfileImage,
  UserNickname,
  ChangeButton,
  NicknameBox,
  PWChangeButton,
  UserContentBox,
  ContentTitle,
  ContentWrap,
  DivideLine,
  QuitButton,
  InfoDivideLine,
  ImgUploadButton,
  BackArrowBox,
  BackArrowIcon,
} from './MyPage.style';

export default function MyPage() {
  const id = window.localStorage.getItem('id');
  const fileInput = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const profileUrl = useSelector((state) => state.userInfo.profileUrl);
  const nickname = useSelector((state) => state.userInfo.nickname);

  const [changeToggle, setchangeToggle] = useState('change');
  const [errorStatus, seterrorStatus] = useState(false);
  const [pwOpenToggle, setpwOpenToggle] = useState(false);
  const [quitOpenToggle, setquitOpenToggle] = useState(false);
  const [newNickname, setnewNickname] = useState('');
  const [validationCheck, setValidationCheck] = useState({
    userNicknameCheck: 'default',
    userPWCheck: 'default',
  });

  const [imageUpload, setimageUpload] = useState(null);

  const { userNicknameCheck, userPWCheck } = validationCheck;

  useEffect(() => {
    dispatch(getUserInfo());
    setnewNickname(nickname);
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

  const clickGoBack = () => {
    history.push('/');
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <BackArrowBox>
        <BackArrowIcon onClick={clickGoBack} />
      </BackArrowBox>
      <Box sx={{ padding: '110px 30px 30px 30px', bgcolor: '#eee', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', width: '100%', height: '100%', bgcolor: '#fff', borderRadius: '20px', padding: '10px', boxShadow: '7px 7px 30px -12px rgba(0,0,0,0.4)' }}>
          <UserProfileBox>
            <Typography variant="h6" sx={{ width: '100%' }}>
              <b>프로필 사진</b>
            </Typography>
            <ProfileImage src={profileUrl} />
            {/* {
              !imagePreviewUrl
                ? (<ProfileImage src={profileUrl} />)
                : (<ProfileImage src={imagePreviewUrl} />)
            } */}
            <Box>
              <ImgUploadButton
                htmlFor="image-upload"
              >
                이미지 업로드
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

            <InfoDivideLine />
            <Typography variant="h6" sx={{ width: '100%' }}>
              <b>기본 정보</b>
            </Typography>
            <NicknameBox>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userNicknameCheck === 'success'}
                onClose={closeUserNicknameCheck}
                autoHideDuration={3000}
              >
                <Alert severity="success">
                  <AlertTitle>닉네임 변경 완료</AlertTitle>
                  닉네임 변경이 완료되었습니다!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userNicknameCheck === 'fail'}
                onClose={closeUserNicknameCheck}
                autoHideDuration={3000}
              >
                <Alert severity="error">
                  <AlertTitle>중복된 닉네임</AlertTitle>
                  사용 불가능한 닉네임입니다!
                </Alert>
              </Snackbar>
              {
                changeToggle === 'change' ? (
                  <Typography variant="subtitle1" sx={{ paddingLeft: '15px', marginRight: '15px' }}>
                    <b>{nickname}</b>
                  </Typography>
                )
                  : (
                    <UserNickname
                      error={errorStatus}
                      disabled={changeToggle === 'change'}
                      value={newNickname}
                      onChange={handleInput}
                    />
                  )
              }
              <ChangeButton
                onClick={clickChangeButton}
              >
                { changeToggle === 'change' ? '변경' : '저장' }
              </ChangeButton>
            </NicknameBox>
            <PWChangeButton
              onClick={onTogglePWOpen}
            >
              비밀번호 변경
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
                <AlertTitle>비밀번호 변경 완료</AlertTitle>
                비밀번호 변경이 완료되었습니다!
              </Alert>
            </Snackbar>
          </UserProfileBox>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            // marginLeft: '390px',
            marginRight: '30px',
            padding: '20px',
          }}
          >
            <UserContentBox>
              <ContentWrap>
                <ContentTitle>내가 구독한 사람</ContentTitle>
              </ContentWrap>

              <ContentWrap>
                <ContentTitle>좋아요 한 게시글</ContentTitle>
              </ContentWrap>

              <ContentWrap>
                <ContentTitle>관심종목</ContentTitle>
              </ContentWrap>
            </UserContentBox>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <DivideLine />
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Typography variant="h6"><b>회원 탈퇴</b></Typography>
                <QuitButton
                  onClick={onToggleQuitOpen}
                >
                  회원 탈퇴
                </QuitButton>
                <QuitModal
                  open={quitOpenToggle}
                  onClose={onToggleQuitOpen}
                />
              </Box>
              <Typography color="gray" variant="body2" sx={{ paddingTop: '20px' }}>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
