import {
  Button, Typography, Alert, AlertTitle, Snackbar,
} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '@/api/api';
import {
  LockIcon, SignInForm, LoginButton, UniqueCheckButton,
} from './SignUpPage.style';

export default function SignUpPage() {
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    userId: '',
    password: '',
    nickname: '',
  });

  const [validationCheck, setValidationCheck] = useState({
    userIDCheck: false,
    userPWCheck: false,
    userNicknameCheck: false,
  });

  const [duplicateCheck, setDuplicateCheck] = useState({
    userIDDupCheck: false,
    userNicknameDupCheck: false,
  });

  const { userId, password, nickname } = userInput;
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
  const buttonValidateCheck = () => !(!userIDDupCheck && !userNicknameDupCheck && !userIDCheck && !userPWCheck && !userNicknameCheck && userId && password && nickname);

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

    if (res.data.status === 'SUCCESS') {
      setDuplicateCheck({
        ...duplicateCheck,
        userIDDupCheck: true,
      });
    }
  };

  const checkDuplicateNickname = async () => {
    const res = await api.checkDuplicateNickname(nickname);
    console.log(res);

    if (res.data.status === 'SUCCESS') {
      setDuplicateCheck({
        ...duplicateCheck,
        userNicknameDupCheck: true,
      });
    }
  };

  const closeUserNicknameDupCheck = () => {
    setDuplicateCheck({
      ...duplicateCheck,
      userNicknameDupCheck: false,
    });
  };

  const closeUserIDDupCheck = () => {
    setDuplicateCheck({
      ...duplicateCheck,
      userIDDupCheck: false,
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

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
    >
      <Box sx={{
        padding: '10px',
        bgcolor: 'pink',
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
        width: '70%',
        flexDirection: 'column',
      }}
      >

        {userNicknameCheck || userNicknameDupCheck ? (
          <Typography variant="body2" color="error">
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
            open={userNicknameDupCheck}
            onClose={closeUserNicknameDupCheck}
            autoHideDuration={3000}
          >
            <Alert severity="success">
              <AlertTitle>닉네임 중복체크</AlertTitle>
              사용가능한 닉네임입니다!
            </Alert>
          </Snackbar>
        </Box>

        {userIDCheck || userIDDupCheck ? (
          <Typography variant="body2" color="error">
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
            // disabled={userNicknameDupCheck}
          />
          <UniqueCheckButton
            disabled={userIDCheck}
            onClick={checkDuplicateUserId}
          >
            중복체크
          </UniqueCheckButton>
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={userIDDupCheck}
            onClose={closeUserIDDupCheck}
            autoHideDuration={3000}
          >
            <Alert severity="success">
              <AlertTitle>아이디 중복체크</AlertTitle>
              사용가능한 아이디입니다!
            </Alert>
          </Snackbar>
        </Box>

        {userPWCheck ? (
          <Typography variant="body2" color="error">
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
          // disabled={!(userIDDupCheck && userNicknameDupCheck)}
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
            <Button>이미 계정이 있으신가요? 로그인하기</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
