import {
  Avatar, Box, TextField, Button,
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
      padding: '8px 50px',
      borderBottom: '1px solid #EAEDF0',
      position: 'fixed',
      top: 0,
      zIndex: 100,
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
  border: '1px solid #EAEDF0',
  padding: '25px',
  backgroundColor: 'white',
  minWidth: '400px',
  maxWidth: '400px',
  borderRadius: '10px',
});

export const UserInfo = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '30px',
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

export const ProfileImage = styled((props) => <Avatar sx={{ margin: '20px 0px 20px 0px', width: '100px', height: '100px' }} {...props} />)({
  border: '1px solid #ddd',
});

export const NicknameBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px 10px 0px',
  width: '100%',
});

export const UserNickname = styled((props) => <TextField size="small" variant="standard" {...props} />)({
  fontSize: '1.5rem',
  marginRight: '10px',
});

export const UserNicknameFixed = styled((props) => (
  <TextField
    InputProps={{
      readOnly: true,
    }}
    size="small"
    variant="standard"
    {...props}
  />
))({
  fontSize: '1.5rem',
  marginRight: '10px',
});

export const ChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="small"
    {...props}
  />
))({
  fontSize: '0.9rem',
  fontWeight: 700,
});

export const QuitButton = styled((props) => (
  <Button
    variant="contained"
    color="error"
    size="small"
    sx={{
      color: 'white',
      bgcolor: orange[800],
    }}
    {...props}
  />
))({
  fontSize: '1rem',
  fontWeight: 700,
  padding: '10px',
  marginTop: '10px',
  borderRadius: '10px',
});

export const PWChangeButton = styled((props) => (
  <Button
    variant="contained"
    size="medium"
    fullWidth
    sx={{
      color: 'white',
      bgcolor: blueGrey[900],
    }}
    // fullWidth
    {...props}
  />
))({
  fontSize: '1rem',
  fontWeight: 700,
  borderRadius: '10px',
  padding: '10px',
  marginTop: '10px',
});

export const ImgUploadButton = styled((props) => (
  <label
    {...props}
  />
))({
  padding: '10px',
  borderRadius: '4px',
  color: 'rgba(0,0,0,.65)',
  cursor: 'pointer',
  textAlign: 'center',
  border: '1px solid rgb(217, 217, 217)',
  width: '130px',
  fontSize: '0.9rem',
  fontWeight: 700,
  boxShadow: '0 2px 0 rgb(0 0 0 / 2%)',
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
  fontWeight: 700,
});

export const UserContentBox = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  borderBottom: '1px solid #EAEDF0',
});

export const ContentWrap = styled((props) => (
  <Button
    color="default"
    {...props}
  />
))({
  display: 'flex',
  flexDirection: 'column',
  padding: '18px 25px',
  fontSize: '19px',
  fontWeight: 700,
});

export const DivideLine = styled((props) => <hr {...props} />)({
  borderColor: 'rgb(152 152 152 / 7%)',
  margin: '30px 0px 30px 0px',
  width: '100%',
});

export const InfoDivideLine = styled((props) => <hr {...props} />)({
  borderColor: 'rgb(152 152 152 / 8%)',
  margin: '10px 0px 10px 0px',
  width: '100%',
});

export const UpDownLine = styled((props) => <div {...props} />)({
  border: '1px solid rgb(152 152 152 / 20%)',
  width: '1px',
  height: 'calc(100% - 36px)',
});
