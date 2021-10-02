import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  UserProfileBox,
  ProfileImage,
  UserNickname,
  ChangeButton,
  NicknameBox,
  PWChangeButton,
  UserContentBox,
  ContentTitle,
  ContentWrap,
  DivideLine,
  QuitButton,
} from './MyPage.style';

export default function MyPage() {
  const userInfo = {
    nickname: '솔솔',
  };

  const nickname = useSelector((state) => state.userInfo.token);

  const [changeToggle, setchangeToggle] = useState(true);
  const [errorStatus, seterrorStatus] = useState(false);
  const [newNickname, setnewNickname] = useState(userInfo.nickname);

  const handleInput = async (e) => {
    const newValue = e.target.value;
    const checkStatus = newValue.length > 10;

    seterrorStatus(checkStatus);

    if (checkStatus) {
      return;
    }

    setnewNickname(e.target.value);
  };

  const clickChangeButton = () => {
    if (userInfo.nickname !== newNickname) {
      // userInfo.nickname 업데이트!
    }
    setchangeToggle(!changeToggle);
  };

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%' }}>

        <UserProfileBox>
          <ProfileImage sx={{ width: '200px', height: '200px' }} />
          <NicknameBox>
            <UserNickname
              error={errorStatus}
              disabled={changeToggle}
              value={newNickname}
              onChange={handleInput}
            />
            <ChangeButton onClick={clickChangeButton}>
              {nickname} 변경
            </ChangeButton>
          </NicknameBox>
          <PWChangeButton onClick={clickChangeButton}>
            비밀번호 변경
          </PWChangeButton>
        </UserProfileBox>

        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '390px', marginRight: '30px',
        }}
        >
          <UserContentBox>
            <ContentWrap>
              <ContentTitle>내가 구독한 사람</ContentTitle>
            </ContentWrap>

            <ContentWrap>
              <ContentTitle>좋아요 한 사람</ContentTitle>
            </ContentWrap>

            <ContentWrap>
              <ContentTitle>관심종목</ContentTitle>
            </ContentWrap>
          </UserContentBox>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <DivideLine />
            <Box sx={{ display: 'flex', width: '100%' }}>
              <Typography variant="h6"><b>회원 탈퇴</b></Typography>
              <QuitButton>회원 탈퇴</QuitButton>
            </Box>
            <Typography color="gray" variant="body2" sx={{ paddingTop: '20px' }}>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
