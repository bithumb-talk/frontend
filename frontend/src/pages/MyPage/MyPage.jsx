import React, { useState } from 'react';
import { Typography, Box, Alert, AlertTitle, Snackbar } from '@mui/material';
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
  ImgDeleteButton,
  ImgUploadButton,
} from './MyPage.style';

export default function MyPage() {
  const id = window.localStorage.getItem('id');
  const nickname = window.localStorage.getItem('nickname');
  // const

  const [changeToggle, setchangeToggle] = useState('change');
  const [errorStatus, seterrorStatus] = useState(false);
  const [pwOpenToggle, setpwOpenToggle] = useState(false);
  const [quitOpenToggle, setquitOpenToggle] = useState(false);
  const [newNickname, setnewNickname] = useState(nickname);
  const [validationCheck, setValidationCheck] = useState({
    userNicknameCheck: 'default',
    userPWCheck: 'default',
  });

  const { userNicknameCheck, userPWCheck } = validationCheck;

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

  return (
    <Box sx={{ padding: '30px', bgcolor: '#eee' }}>
      <Box sx={{ display: 'flex', width: '100%', bgcolor: '#fff', borderRadius: '20px', padding: '10px', boxShadow: '7px 7px 30px -12px rgba(0,0,0,0.4)' }}>
        <UserProfileBox>
          <Typography variant="h6" sx={{ width: '100%' }}>
            <b>프로필 사진</b>
          </Typography>
          <ProfileImage sx={{ margin: '20px 0px 20px 0px', width: '200px', height: '200px' }} />
          <Box>
            <ImgUploadButton
              onClick={clickChangeButton}
            >
              이미지 업로드
            </ImgUploadButton>
            <ImgDeleteButton
              onClick={clickChangeButton}
            >
              이미지 제거
            </ImgDeleteButton>
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
                  <b>{newNickname}</b>
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
  );
}
