import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { INITIAL_STATUS } from '@/constants/reduxConstants';
import api from '@/api/api';

const initialState = {
  userInfo: {
    ...INITIAL_STATUS,
  },
  myBoardList: {
    data: [],
    ...INITIAL_STATUS,
  },
  token: '',
  id: '',
  userId: '',
  nickname: '',
  profileUrl: '',
  deviceToken: '0',
};

// export const changeNicknameThunk = createAsyncThunk('CHANGE_NICKNAME', async (id, nickname) => {
//   const response = await api.putChangeNickname(id, nickname);
//   return response.data;
// });
export const getUserInfo = createAsyncThunk('userInfo/getUserInfo', async () => {
  const id = window.localStorage.getItem('id');
  const res = await api.getUserInfo(id);
  const resData = res.data;

  console.log(resData);

  return { ...resData };
});

export const getMyBoardList = createAsyncThunk('userInfo/getMyBoardList', async () => {
  const id = window.localStorage.getItem('id');
  const res = await api.getMyBoardList(id);
  const resData = res.data;

  return { ...resData };
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

      state.userInfo = action.payload;
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
      window.localStorage.removeItem('userId');
      window.localStorage.removeItem('nickname');
      window.localStorage.removeItem('id');
      window.localStorage.removeItem('profileUrl');
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('refreshToken');

      state.token = null;
      state.userId = null;
      state.nickname = null;
      state.id = null;
      state.profileUrl = null;

      window.location.replace('/');
    },
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => {
      state.userInfo = {
        ...state.userInfo,
        isLoading: true,
        isError: false,
        status: 'loading',
      };
    },
    [getUserInfo.fulfilled]: (state, action) => {
      if (!action.payload.data) { // 토큰 재발급 이슈 해결될 때 까지 일단 이렇게라도 ㅠ
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('nickname');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('profileUrl');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('refreshToken');

        state.userInfo = null;
        state.token = null;
        state.userId = null;
        state.nickname = null;
        state.id = null;
        state.profileUrl = null;

        return;
      }

      state.userInfo = {
        ...state.userInfo,
        ...action.payload.data,
        isLoading: false,
        isError: false,
        status: 'success',
      };

      state.nickname = action.payload.data.nickname || '';
      state.profileUrl = action.payload.data.profileUrl || '';

      window.localStorage.setItem('nickname', action.payload.data.nickname);
      window.localStorage.setItem('id', action.payload.data.id);
      window.localStorage.setItem('profileUrl', action.payload.data.profileUrl);

      state.userInfo.data = action.payload.data;
    },
    [getUserInfo.rejected]: (state) => {
      state.userInfo = {
        ...state.userInfo,
        isLoading: false,
        isError: true,
        status: 'fail',
      };
    },
    [getMyBoardList.fulfilled]: (state, action) => {
      state.myBoardList.data = action.payload.data.content;
    },
  },
});

export const { actLogIn, actLogOut, setDeviceToken } = userInfoSlice.actions;

export default userInfoSlice.reducer;
