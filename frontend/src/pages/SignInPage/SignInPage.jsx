import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '@/api/api';
import { actLogIn } from '@/redux/userInfoSlice';
import { LockIcon, SignInForm, LoginButton, SignInWrap, BackArrowBox, BackArrowIcon } from './SignInPage.style';

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

      dispatch(actLogIn(userInfo.data));
    } else {
      setErrorStatus(true);
    }
  };

  const clickGoBack = () => {
    history.push('/');
  };

  return (
    <SignInWrap>
      <BackArrowBox>
        <BackArrowIcon onClick={clickGoBack} />
      </BackArrowBox>
      <SignInWrap>
        <Box
          sx={{
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
            minWidth: '50px',
            maxWidth: '50px',
          }}
          >
            <LockIcon sx={{ fontSize: '28px' }} />
          </Box>
          <Typography variant="h4">로그인</Typography>
          <Box sx={{
            marginTop: '15px',
            display: 'flex',
            // minWidth: '400px',
            maxWidth: '400px',
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
              <Button sx={{ fontSize: '12px' }}>비밀번호를 잊어버리셨나요?</Button>
              <Link to="/signup">
                <Button sx={{ fontSize: '12px' }}>계정이 없으신가요? <strong>회원가입하기</strong></Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </SignInWrap>
    </SignInWrap>
  );
}
