import {
  Avatar, Box, Typography, TextField, Button,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { orange, blueGrey } from '@mui/material/colors';

export const BackArrowBox = styled((props) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      bgcolor: '#fff',
      padding: '20px',
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

export const UserProfileBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: '1px solid #f0f0f0',
  marginRight: '20px',
  borderRadius: '20px 0px 0px 20px',
  padding: '40px 20px 20px 10px',
  // position: 'fixed',
  backgroundColor: 'white',
  // minWidth: '350px',
  // maxWidth: '350px',
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

export const ProfileImage = styled((props) => <Avatar sx={{ margin: '20px 0px 20px 0px', width: '200px', height: '200px' }} {...props} />)({
  border: '1px solid #ddd',
});

export const NicknameBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px 10px 0px',
  width: '300px',
});

export const UserNickname = styled((props) => <TextField size="small" variant="standard" {...props} />)({
  fontSize: '1.5rem',
  marginRight: '10px',
});

export const ChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="small"
    sx={{
      color: 'white',
      bgcolor: blueGrey[300],
    }}
    {...props}
  />
))({
  fontSize: '1rem',
  fontWeight: 800,
});

export const QuitButton = styled((props) => (
  <Button
    variant="contained"
    color="error"
    size="small"
    sx={{
      color: 'white',
      bgcolor: orange[600],
    }}
    {...props}
  />
))({
  margin: '0px 20px 0px 20px',
  fontWeight: 800,
});

export const PWChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="medium"
    sx={{
      color: 'white',
      bgcolor: blueGrey[600],
    }}
    // fullWidth
    {...props}
  />
))({
  fontSize: '1rem',
  fontWeight: 800,
});

export const ImgUploadButton = styled((props) => (
  <label {...props} />
))({
  padding: '10px 25px',
  backgroundColor: '#FF6600',
  borderRadius: '4px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 800,
  boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
});

export const ImgDeleteButton = styled((props) => (
  <Button
    variant="text"
    size="medium"
    sx={{
      color: blueGrey[800],
    }}
    {...props}
  />
))({
  fontSize: '1rem',
  fontWeight: 800,
});

export const UserContentBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  // padding: '20px 0px 20px 0px',
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
  borderColor: 'rgb(152 152 152 / 7%)',
  margin: '30px 0px 30px 0px',
  width: '100%',
});

export const InfoDivideLine = styled((props) => <hr {...props} />)({
  borderColor: 'rgb(152 152 152 / 0%)',
  margin: '10px 0px 10px 0px',
  width: '100%',
});
