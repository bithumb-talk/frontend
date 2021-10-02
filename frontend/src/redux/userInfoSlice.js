import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 0,
  userId: '',
  nickname: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { setToken, setUserId, setNickname } = userInfoSlice.actions;

export default userInfoSlice.reducer;
