import { styled } from '@mui/material/styles';
import Lock from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';

export const LockIcon = styled((props) => <Lock {...props} />)({
  color: 'white',
});

export const SignInForm = styled((props) => <TextField {...props} />)({
  margin: '15px',
});
