import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { theme } from '../../constants/newColor';
// import UserAlertModal from './UserAlertModal';
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
  const [isLogined, setisLogined] = useState(true);

  const userInfo = {
    id: 8,
    userId: 'bithumb',
    nickname: '빗썸 관리자',
    authority: 'ROLE_USER',
    notifications: 3,
  };

  const loginBtnClick = () => {
    setisLogined(!isLogined);
  };

  return (
    <Box sx={{ display: 'flex', margin: '0px 20px 0px 30px' }}>
      <UserProfile nickname={userInfo.nickname} />

      <UserInfo>
        <UserNickname>
          {userInfo.nickname}
        </UserNickname>
        <ThemeProvider theme={theme}>
          <LoginButton
            color="orange_500"
            size="small"
            variant="contained"
            onClick={loginBtnClick}
          >
            {isLogined ? 'logout' : 'login'}
          </LoginButton>
        </ThemeProvider>
      </UserInfo>

      <UserIcons>
        <Tooltip title={`${userInfo.nickname}님에게 온 알림`}>
          <IconWrap size="small">
            <Badge badgeContent={userInfo.notifications} color="secondary">
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
