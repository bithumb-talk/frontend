import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LockIcon, SignInForm, LoginButton } from './SignInPage.style';

export default function SignInPage() {
  const [userInput, setUserInput] = useState({
    userID: '',
    userPW: '',
  });

  const [errorStatus, setErrorStatus] = useState(false);

  const { userID, userPW } = userInput;

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
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
          name="userID"
          label="사용자ID"
          value={userID}
          onChange={onChange}
          error={errorStatus}
        />
        <SignInForm
          required
          fullWidth
          name="userPW"
          label="비밀번호"
          type="password"
          value={userPW}
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

        <LoginButton fullWidth variant="contained" onClick={() => setErrorStatus(!errorStatus)}>로그인</LoginButton>
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
