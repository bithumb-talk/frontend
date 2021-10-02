import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LockIcon, SignInForm, LoginButton } from './SignUpPage.style';

export default function SignUpPage() {
  const [userInput, setUserInput] = useState({
    userID: '',
    userPW: '',
    userNickname: '',
  });

  const [validationCheck, setValidationCheck] = useState({
    userIDCheck: false,
    userPWCheck: false,
    userNicknameCheck: false,
  });

  const { userID, userPW, userNickname } = userInput;
  const { userIDCheck, userPWCheck, userNicknameCheck } = validationCheck;

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
  const buttonValidateCheck = () => !(!userIDCheck && !userPWCheck && !userNicknameCheck && userID && userPW && userNickname);

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
        {userIDCheck ? (
          <Typography variant="body2" color="error">
            아이디는 영문, 숫자만 가능하며 5~10자리까지 가능합니다.
          </Typography>
        )
          : <></>}
        <SignInForm
          required
          fullWidth
          name="userID"
          label="사용자ID"
          onBlur={checkUserId}
          value={userID}
          onChange={onChange}
          error={userIDCheck}
        />
        {userPWCheck ? (
          <Typography variant="body2" color="error">
            비밀번호는 영문, 숫자만 가능하며 8~15자리까지 가능합니다.
          </Typography>
        )
          : <></>}
        <SignInForm
          required
          fullWidth
          name="userPW"
          label="비밀번호"
          onBlur={checkPassword}
          value={userPW}
          onChange={onChange}
          error={userPWCheck}
        />
        {userNicknameCheck ? (
          <Typography variant="body2" color="error">
            닉네임은 한글, 영문, 숫자만 가능하며 2~10자리까지 가능합니다.
          </Typography>
        )
          : <></>}
        <SignInForm
          required
          fullWidth
          name="userNickname"
          label="닉네임"
          onBlur={checkNickname}
          value={userNickname}
          onChange={onChange}
          error={userNicknameCheck}
        />
        <LoginButton
          fullWidth
          variant="contained"
          onClick={() => console.log(userInput)}
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
