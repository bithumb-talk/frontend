import {
  Button, Typography, Alert, AlertTitle, Snackbar,
} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '@/api/api';
import {
  LockIcon, SignInForm, LoginButton, UniqueCheckButton, SignUpWrap, BackArrowBox, BackArrowIcon,
} from './SignUpPage.style';

export default function SignUpPage() {
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  const [validationCheck, setValidationCheck] = useState({
    userIDCheck: false,
    userPWCheck: false,
    userNicknameCheck: false,
  });

  const [duplicateCheck, setDuplicateCheck] = useState({
    userIDDupCheck: 'default',
    userNicknameDupCheck: 'default',
  });

  const { userId, password, passwordConfirm, nickname } = userInput;
  const { userIDCheck, userPWCheck, userNicknameCheck } = validationCheck;
  const { userIDDupCheck, userNicknameDupCheck } = duplicateCheck;

  const checkUserId = (e) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{5,10}$/;
    // 5~10 영어,숫자 조합

    setValidationCheck({
      ...validationCheck,
      userIDCheck: !(regExp.test(e.target.value)),
    });
  };

  const checkPassword = (e) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
    // 8~10 영어,숫자 조합

    setValidationCheck({
      ...validationCheck,
      userPWCheck: !(regExp.test(e.target.value)),
    });
  };

  const checkNickname = (e) => {
    const regExp = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
    // 닉네임은 한글, 영문, 숫자만 가능하며 2-10자리 가능

    setValidationCheck({
      ...validationCheck,
      userNicknameCheck: !(regExp.test(e.target.value)),
    });
  };

  // eslint-disable-next-line max-len
  const buttonValidateCheck = () => !(!userIDCheck && !userPWCheck && (passwordConfirm === password) && !userNicknameCheck && userId && password && passwordConfirm && nickname && userNicknameDupCheck === 'done' && userIDDupCheck === 'done');

  const onChange = (e) => {
    const { value, name } = e.target;

    setUserInput({
      ...userInput,
      [name]: value,
    });

    setValidationCheck({
      ...validationCheck,
      [name]: value,
    });
  };

  const postSignup = async () => {
    console.log(userInput);
    const res = await api.postSignup(userInput);

    if (res.data.status === 'SUCCESS') history.push('/');
  };

  const checkDuplicateUserId = async () => {
    const res = await api.checkDuplicateUserId(userId);
    console.log(res);

    setDuplicateCheck({
      ...duplicateCheck,
      userIDDupCheck: res.data.data ? 'success' : 'fail',
    });
  };

  const checkDuplicateNickname = async () => {
    const res = await api.checkDuplicateNickname(nickname);
    console.log(res);

    setDuplicateCheck({
      ...duplicateCheck,
      userNicknameDupCheck: res.data.data === true ? 'success' : 'fail',
    });
  };

  const closeUserNicknameDupCheck = () => {
    setDuplicateCheck({
      ...duplicateCheck,
      userNicknameDupCheck: userNicknameDupCheck === 'success' ? 'done' : 'default',
    });
  };

  const closeUserIDDupCheck = () => {
    setDuplicateCheck({
      ...duplicateCheck,
      userIDDupCheck: userIDDupCheck === 'success' ? 'done' : 'default',
    });
  };

  const userIdErrorMessage = () => {
    // eslint-disable-next-line no-nested-ternary
    const msg = userIDCheck ? '아이디는 영문, 숫자만 가능하며 5~10자리까지 가능합니다.' : (userIDDupCheck ? '' : '사용 불가능한 아이디입니다.');

    return msg;
  };

  const userNicknameErrorMessage = () => {
    // eslint-disable-next-line no-nested-ternary
    const msg = userNicknameCheck ? '닉네임은 한글, 영문, 숫자만 가능하며 2~10자리까지 가능합니다.' : (userNicknameDupCheck ? '' : '사용 불가능한 닉네임입니다.');

    return msg;
  };

  const clickGoBack = () => {
    history.push('/');
  };

  return (
    <SignUpWrap>
      <BackArrowBox>
        <BackArrowIcon onClick={clickGoBack} />
      </BackArrowBox>
      <SignUpWrap>
        <Box sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #eee',
          padding: '40px',
          borderRadius: '10px',
          bgcolor: 'white',
        }}
        >
          <Box sx={{
            padding: '10px',
            bgcolor: 'orange',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            marginBottom: '15px',
          }}
          >
            <LockIcon sx={{ fontSize: '28px' }} />
          </Box>
          <Typography variant="h4">회원가입</Typography>
          <Box sx={{
            marginTop: '15px',
            display: 'flex',
            minWidth: '400px',
            // maxWidth: '400px',
            flexDirection: 'column',
          }}
          >

            {userNicknameCheck || userNicknameDupCheck ? (
              <Typography variant="caption" color="error">
                {userNicknameErrorMessage()}
              </Typography>
            )
              : <></>}

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <SignInForm
                required
                fullWidth
                name="nickname"
                label="닉네임"
                onBlur={checkNickname}
                value={nickname}
                onChange={onChange}
                error={userNicknameCheck}
              />
              <UniqueCheckButton
                disabled={userNicknameCheck}
                onClick={checkDuplicateNickname}
              >
                중복체크
              </UniqueCheckButton>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userNicknameDupCheck === 'success'}
                onClose={closeUserNicknameDupCheck}
                autoHideDuration={3000}
              >
                <Alert severity="success">
                  <AlertTitle>닉네임 중복체크</AlertTitle>
                  사용가능한 닉네임입니다!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userNicknameDupCheck === 'fail'}
                onClose={closeUserNicknameDupCheck}
                autoHideDuration={3000}
              >
                <Alert severity="error">
                  <AlertTitle>닉네임 중복체크</AlertTitle>
                  사용할 수 없는 닉네임입니다!
                </Alert>
              </Snackbar>
            </Box>

            {userIDCheck || userIDDupCheck ? (
              <Typography variant="caption" color="error">
                {userIdErrorMessage()}
              </Typography>
            )
              : <></>}
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <SignInForm
                required
                fullWidth
                name="userId"
                label="사용자ID"
                onBlur={checkUserId}
                value={userId}
                onChange={onChange}
                error={userIDCheck}
              />
              <UniqueCheckButton
                disabled={userIDCheck}
                onClick={checkDuplicateUserId}
              >
                중복체크
              </UniqueCheckButton>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userIDDupCheck === 'success'}
                onClose={closeUserIDDupCheck}
                autoHideDuration={3000}
              >
                <Alert severity="success">
                  <AlertTitle>아이디 중복체크</AlertTitle>
                  사용가능한 아이디입니다!
                </Alert>
              </Snackbar>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={userIDDupCheck === 'fail'}
                onClose={closeUserIDDupCheck}
                autoHideDuration={3000}
              >
                <Alert severity="error">
                  <AlertTitle>아이디 중복체크</AlertTitle>
                  사용할 수 없는 아이디입니다!
                </Alert>
              </Snackbar>
            </Box>

            {userPWCheck ? (
              <Typography variant="caption" color="error">
                비밀번호는 영문, 숫자만 가능하며 8~15자리까지 가능합니다.
              </Typography>
            )
              : <></>}
            <SignInForm
              required
              fullWidth
              type="password"
              name="password"
              label="비밀번호"
              onBlur={checkPassword}
              value={password}
              onChange={onChange}
              error={userPWCheck}
            />

            {passwordConfirm !== password && passwordConfirm ? (
              <Typography variant="caption" color="error">
                입력하신 비밀번호가 일치하지 않습니다.
              </Typography>
            )
              : <></>}
            <SignInForm
              required
              fullWidth
              type="password"
              name="passwordConfirm"
              label="비밀번호 확인"
              onBlur={checkPassword}
              value={passwordConfirm}
              onChange={onChange}
              error={(passwordConfirm !== password && passwordConfirm !== '')}
            />

            <LoginButton
              fullWidth
              variant="contained"
              onClick={postSignup}
              disabled={buttonValidateCheck()}
            >
              회원가입
            </LoginButton>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              width: '100%',
            }}
            >
              <Link to="/signin">
                <Button sx={{ fontSize: '12px' }}>이미 계정이 있으신가요? 로그인하기</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SignUpWrap>
    </SignUpWrap>
  );
}
