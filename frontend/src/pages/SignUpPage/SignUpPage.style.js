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

export const UniqueCheckButton = styled((props) => <Button variant="contained" size="small" {...props} />)({
  margin: '15px',
  maxWidth: '80px',
  minWidth: '80px',
});

// export const DupCheckAlert = styled((props) => (
//   <Snackbar open="false" autoHideDuration={3000}>
//     <Alert severity="success">
//       <AlertTitle>{props.type} 중복체크</AlertTitle>
//       사용가능한 {props.type}입니다!
//     </Alert>
//   </Snackbar>
// ))({});
