import {
  Avatar, Box, Typography, TextField, Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserProfileBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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

export const PWChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="medium"
    color="success"
    width="100%"
    {...props}
  />
))({});

export const UserContentBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  width: '100%',
});

export const ContentWrap = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  width: '100%',
});

export const ContentTitle = styled((props) => <Typography {...props} />)({ fontSize: '1.2rem' });

export const DivideLine = styled((props) => <hr {...props} />)({
  color: 'black',
  marginTop: '30px',
  marginBottom: '30px',
  width: '100%',
});
