import { styled } from '@mui/material/styles';
import { Lock } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';

export const LockIcon = styled((props) => <Lock {...props} />)({
  color: 'white',
});

export const SignInForm = styled((props) => <TextField {...props} />)({
  margin: '15px 0px 15px 0px',
});

export const LoginButton = styled((props) => <Button {...props} />)({
  fontSize: '1.3rem',
  padding: '15px 0px 15px 0px',
  margin: '15px 0px 15px 0px',
});
