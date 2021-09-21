import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { stringAvatar } from '../../utils/index';

export const UserProfile = styled((props) => <Avatar {...stringAvatar(props.nickname)} />)({});

export const UserInfo = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px',
  justifyContent: 'center',
  alignItems: 'center',
});

export const UserNickname = styled((props) => <Typography {...props} />)({
  fontSize: 18,
});

export const LoginButton = styled((props) => <Button {...props} />)({
  fontSize: '1rem',
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
  fontSize: '1.2rem',
  width: '38px',
  height: '38px',
});

export const IconWrap = styled((props) => <Fab {...props} />)({
  margin: '3.5px',
});

export const UserIcons = styled((props) => <Box {...props} />)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '10px',
  alignItems: 'center',
  justifyContent: 'center',
});
