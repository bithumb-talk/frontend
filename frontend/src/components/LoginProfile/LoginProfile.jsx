import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actLogOut } from '@/redux/userInfoSlice';
import { theme } from '../../constants/newColor';
import {
  UserProfile,
  UserInfo,
  UserNickname,
  LoginButton,
  Notifications,
  NotificationsNone,
  IconWrap,
  UserIcons,
  ArrowDropDown,
} from './LoginProfile.style';

export default function LoginProfile() {
  const localStorageData = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch();

  const { userId, nickname, profileUrl } = localStorageData || {
    userId: '',
    nickname: '',
    profileUrl: '',
  };

  const userInfo = {
    id: 8,
    userId,
    profileUrl,
    nickname: '빗썸 관리자',
    authority: 'ROLE_USER',
    notifications: 3,
  };

  const loginOutBtnClick = () => {
    dispatch(actLogOut());
  };

  return (
    <Box sx={{ display: 'flex', margin: '0px 20px 0px 30px' }}>
      <UserProfile nickname={nickname} />

      <UserInfo>
        <UserNickname>
          {nickname}
        </UserNickname>
        <ThemeProvider theme={theme}>
          <LoginButton
            color="orange_500"
            size="small"
            variant="contained"
            onClick={loginOutBtnClick}
          >
            LOGOUT
          </LoginButton>
        </ThemeProvider>
      </UserInfo>

      <UserIcons>
        <Tooltip title={`${nickname}님에게 온 알림`}>
          <IconWrap size="small" color="action">
            <Badge badgeContent={userInfo.notifications} color="success">
              { userInfo.notifications > 0 ? <Notifications color="action" /> : <NotificationsNone color="action" />}
            </Badge>
            {/* <UserAlertModal /> */}
          </IconWrap>
        </Tooltip>
        <Link to="/mypage">
          <IconWrap size="small">
            <ArrowDropDown color="action" />
          </IconWrap>
        </Link>
      </UserIcons>
    </Box>
  );
}
