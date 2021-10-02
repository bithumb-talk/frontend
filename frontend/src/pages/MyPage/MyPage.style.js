import {
  Avatar, Box, Typography, TextField, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserProfileBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: '1px solid #ddd',
  marginRight: '20px',
  padding: '50px 20px 20px 20px',
  height: '100%',
  position: 'fixed',
  backgroundColor: 'white',
  minWidth: '350px',
  maxWidth: '350px',
});

export const UserInfo = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
  justifyContent: 'center',
  minWidth: '120px',
  width: '25px',
  margin: '3.5px',
});

export const UserIcons = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '10px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProfileImage = styled((props) => <Avatar {...props} />)({});

export const NicknameBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  width: '300px',
});

export const UserNickname = styled((props) => <TextField size="small" variant="standard" {...props} />)({
  fontSize: '1.5rem',
  marginRight: '10px',
});

export const ChangeButton = styled((props) => <Button variant="contained" size="small" {...props} />)({});

export const QuitButton = styled((props) => <Button variant="contained" color="error" size="small" {...props} />)({
  margin: '0px 20px 0px 20px',
});

export const PWChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="medium"
    color="success"
    fullWidth
    {...props}
  />
))({});

export const UserContentBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0px 20px 0px',
  width: '100%',
});

export const ContentWrap = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0px 20px 0px',
  width: '100%',
});

export const ContentTitle = styled((props) => <Typography variant="h5" {...props} />)({
  fontWeight: 800,
});

export const DivideLine = styled((props) => <hr {...props} />)({
  color: '#eee',
  marginTop: '30px',
  marginBottom: '30px',
  width: '100%',
});
