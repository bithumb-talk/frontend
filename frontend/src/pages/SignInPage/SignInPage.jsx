import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '@/api/api';
import { setUserInfo } from '@/redux/userInfoSlice';
import { LockIcon, SignInForm, LoginButton } from './SignInPage.style';

export default function SignInPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const deviceToken = useSelector((state) => state.userInfo.deviceToken);

  const [userInput, setUserInput] = useState({
    userId: '',
    password: '',
    deviceToken,
  });

  const [errorStatus, setErrorStatus] = useState(false);

  const { userId, password } = userInput;

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const getSignin = async () => {
    const res = await api.postSignin(userInput);
    const userInfo = res.data;

    if (userInfo.status === 'SUCCESS') {
      history.push('/');

      dispatch(setUserInfo(userInfo.data));

      window.localStorage.setItem('user', JSON.stringify(userInfo.data));
      window.localStorage.setItem('token', userInfo.data.accessToken);
    } else {
      setErrorStatus(true);
    }
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
      <Typography variant="h4">로그인</Typography>
      <Box sx={{
        marginTop: '15px',
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
      }}
      >
        <SignInForm
          required
          fullWidth
          name="userId"
          label="사용자ID"
          value={userId}
          onChange={onChange}
          error={errorStatus}
        />
        <SignInForm
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          value={password}
          onChange={onChange}
          error={errorStatus}
        />

        {errorStatus ? (
          <Typography variant="body2" color="error">
            아이디 또는 비밀번호가 잘못 입력 되었습니다.<br />
            <b>아이디</b>와 <b>비밀번호</b>를 정확히 입력해 주세요.
          </Typography>
        )
          : <></>}

        <LoginButton
          fullWidth
          variant="contained"
          onClick={getSignin}
        >
          로그인
        </LoginButton>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
        >
          <Button>비밀번호를 잊어버리셨나요?</Button>
          <Link to="/signup">
            <Button>계정이 없으신가요? 회원가입하기</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
