import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actLogOut, getUserInfo } from '@/redux/userInfoSlice';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const loginOutBtnClick = () => {
    dispatch(actLogOut());
  };

  return (
    <Box sx={{ display: 'flex', margin: '0px 20px 0px 30px' }}>
      <UserProfile src={userInfo.profileUrl} />

      <UserInfo>
        <UserNickname>
          {userInfo.nickname}
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
        <Tooltip title={`${userInfo.nickname}님에게 온 알림`}>
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
