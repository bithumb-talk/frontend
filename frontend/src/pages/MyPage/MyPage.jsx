import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
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
} from './MyPage.style';

export default function MyPage() {
  const userInfo = {
    nickname: '솔솔',
  };

  const [changeToggle, setchangeToggle] = useState(true);
  const [errorStatus, seterrorStatus] = useState(false);
  const [newNickname, setnewNickname] = useState(userInfo.nickname);

  const handleInput = (e) => {
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
              변경
            </ChangeButton>
          </NicknameBox>
          <PWChangeButton onClick={clickChangeButton}>
            비밀번호 변경
          </PWChangeButton>
        </UserProfileBox>

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography>회원 탈퇴</Typography>
            </Box>
            <Typography sx={{ padding: '20px' }}>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
