import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/api/api';

const initialState = {
  token: '',
  id: '',
  userId: '',
  nickname: '',
  profileUrl: '',
  deviceToken: '',
};

export const changeNicknameThunk = createAsyncThunk('CHANGE_NICKNAME', async (id, nickname) => {
  const response = await api.putChangeNickname(id, nickname);
  return response.data;
});

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setDeviceToken: (state, action) => {
      state.deviceToken = action.payload;
    },
    actLogIn: (state, action) => {
      console.log(action.payload);

      state.token = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.nickname = action.payload.nickname;
      state.id = action.payload.id;
      state.profileUrl = action.payload.profileUrl;

      window.localStorage.setItem('user', JSON.stringify(action.payload));
      window.localStorage.setItem('userId', action.payload.userId);
      window.localStorage.setItem('nickname', action.payload.nickname);
      window.localStorage.setItem('id', action.payload.id);
      window.localStorage.setItem('profileUrl', action.payload.profileUrl);
      window.localStorage.setItem('token', action.payload.accessToken);
      window.localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    actLogOut: (state) => {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');

      state.token = null;
      state.userId = null;
      state.nickname = null;
      state.id = null;
      state.profileUrl = null;

      window.location.replace('/');
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(changeNicknameThunk.fulfilled, (state, action) => {
  //     state.entities.push(action.payload);
  //   });
  // },
});

export const { actLogIn, actLogOut, setDeviceToken } = userInfoSlice.actions;

export default userInfoSlice.reducer;
