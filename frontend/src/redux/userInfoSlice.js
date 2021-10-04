import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  id: '',
  userId: '',
  nickname: '',
  profileUrl: '',
  deviceToken: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setDeviceToken: (state, action) => {
      state.deviceToken = action.payload;
    },
    setUserInfo: (state, action) => {
      state.token = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
      state.profileUrl = action.payload.profileUrl;
    },
  },
});

export const { setUserInfo, setDeviceToken } = userInfoSlice.actions;

export default userInfoSlice.reducer;
