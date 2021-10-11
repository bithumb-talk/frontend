import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { stringAvatar } from '../../utils/index';

// export const UserProfile = styled((props) => <Avatar {...stringAvatar(props.nickname)} />)({});
export const UserProfile = styled((props) => (
  <Avatar
    sx={{
      width: '50px',
      height: '50px',
      border: '1px solid #eee',
    }}
    {...props}
  />
))({});

export const UserInfo = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '10px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const UserNickname = styled((props) => <Typography {...props} />)({
  fontSize: 18,
  color: 'black',
});

export const LoginButton = styled((props) => <Button {...props} />)({
  fontSize: '1rem',
  fontWeight: '600',
  minWidth: '120px',
});

export const Notifications = styled((props) => <NotificationsIcon {...props} />)({
  fontSize: '1.2rem',
  width: '25px',
  height: '25px',
});

export const NotificationsNone = styled((props) => <NotificationsNoneIcon {...props} />)({
  fontSize: '1.2rem',
  width: '25px',
  height: '25px',
});

export const ArrowDropDown = styled((props) => <ArrowDropDownIcon {...props} />)({
  fontSize: '2.3rem',
});

export const IconWrap = styled((props) => <Fab sx={{ bgcolor: '#fff' }} {...props} />)({
  margin: '3.5px',
  border: '1px solid #eee',
  boxShadow: 'noen',
});

export const UserIcons = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  // borderRadius: '4px',
  // border: '1px solid #ddd',
});

export const UserPopup = styled((props) => <Box {...props} />)({
  position: 'absolute',
  top: '40px',
  right: 0,
  width: '220px',
  height: 'auto',
  animation: 'fadeInUp___2KM1w .2s ease-out',
  padding: '12px',
  borderRadius: '6px',
  boxShadow: '0 2px 12px rgb(53 60 73 / 10%), 0 2px 5px rgb(53 60 73 / 5%)',
  backgroundColor: '#fff',
  textAlign: 'left',
  zIndex: 100,
});

export const DivideLine = styled((props) => <hr {...props} />)({
  borderColor: 'rgb(152 152 152 / 7%)',
  margin: '20px 0px',
  width: '100%',
});
