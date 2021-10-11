import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { orange, grey } from '@mui/material/colors';
import { LoginButton } from './LoginSignupLink.style';

export default function LoginSignupLink() {
  return (
    <Box sx={{ display: 'flex', borderRadius: '10px', padding: '10px', margin: '0px 20px 0px 30px' }}>
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
            color: 'white',
            bgcolor: grey[800],
          }}
        >
          회원가입
        </LoginButton>
      </Link>
    </Box>
  );
}
