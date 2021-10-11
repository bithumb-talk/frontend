import React, { useEffect, useState } from 'react';
import { Box, Button, Popover } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { actLogOut, getUserInfo } from '@/redux/userInfoSlice';
import {
  UserProfile,
  UserNickname,
  UserIcons,
  ArrowDropDown,
  DivideLine,
} from './LoginProfile.style';

export default function LoginProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [userPopup, setuserPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const popId = userPopup ? 'simple-popover' : undefined;
  const history = useHistory();

  useEffect(() => {
    const id = window.localStorage.getItem('id');
    if (id) dispatch(getUserInfo());
  }, []);

  const loginOutBtnClick = () => {
    dispatch(actLogOut());
  };

  const closePopup = () => {
    setuserPopup(false);
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setuserPopup(true);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', margin: '0px 20px 0px 30px', alignItems: 'center' }}>
      <UserProfile src={userInfo ? userInfo.profileUrl : ''} />

      <UserNickname sx={{ width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
        {userInfo.nickname}
      </UserNickname>

      <UserIcons aria-describedby={popId} onClick={handleClick}>
        <ArrowDropDown color="action" />
      </UserIcons>

      <Popover
        id={popId}
        open={userPopup}
        anchorEl={anchorEl}
        onClose={closePopup}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box sx={{ display: 'flex', padding: '20px', flexDirection: 'column', justifyContent: 'flex-start', minWidth: '200px', maxWidth: '200px' }}>
          <UserProfile onClick={() => history.push('/mypage')} src={userInfo ? userInfo.profileUrl : ''} />
          <UserNickname onClick={() => history.push('/mypage')} sx={{ marginTop: '10px' }}>
            {userInfo.nickname}
          </UserNickname>
          <DivideLine />
          <Button
            size="large"
            sx={{ justifyContent: 'flex-start', padding: '8px 0px' }}
            onClick={() => history.push('/mypage')}
          >
            <PersonIcon sx={{ marginRight: '10px' }} />내 정보
          </Button>
          <Button
            size="large"
            sx={{ justifyContent: 'flex-start', padding: '8px 0px' }}
            onClick={loginOutBtnClick}
          >
            <LogoutIcon sx={{ marginRight: '10px' }} />로그아웃
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}
