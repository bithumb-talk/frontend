import { styled } from '@mui/material/styles';
import { Lock, ArrowBack } from '@mui/icons-material';
import { TextField, Button, Box } from '@mui/material';

export const SignInWrap = styled((props) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      bgcolor: '#fff',
    }}
    {...props}
  />
))({});

export const BackArrowBox = styled((props) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      bgcolor: '#fff',
      padding: '8px 50px',
      borderBottom: '1px solid #ddd',
      position: 'fixed',
      top: 0,
    }}
    {...props}
  />
))({});

export const BackArrowIcon = styled((props) => (
  <ArrowBack
    sx={{
      width: '40px',
      height: '40px',
      color: '#aaa',
    }}
    {...props}
  />
))({});

export const LockIcon = styled((props) => <Lock {...props} />)({
  color: 'white',
});

export const SignInForm = styled((props) => <TextField {...props} />)({
  margin: '15px 0px 15px 0px',
});

export const LoginButton = styled((props) => <Button {...props} />)({
  fontSize: '1.2rem',
  padding: '10px 0px 10px 0px',
  margin: '20px 0px 15px 0px',
  color: 'white',
  fontWeight: 800,
});
