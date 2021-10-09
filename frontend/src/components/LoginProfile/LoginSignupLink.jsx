import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { orange, grey } from '@mui/material/colors';
import { LoginButton } from './LoginSignupLink.style';

export default function LoginSignupLink() {
  return (
    <Box sx={{ display: 'flex', borderRadius: '10px', padding: '15px', margin: '0px 20px 0px 30px', bgcolor: grey[50] }}>
      <Link to="/signin">
        <LoginButton
          sx={{
            color: 'white',
            bgcolor: orange[500],
          }}
        >
          로그인
        </LoginButton>
      </Link>
      <Link to="/signup">
        <LoginButton
          sx={{
            color: grey[800],
            bgcolor: grey[300],
          }}
        >
          회원가입
        </LoginButton>
      </Link>
    </Box>
  );
}
