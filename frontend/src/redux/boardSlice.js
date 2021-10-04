import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardCategory: '',
  boardContent: '',
  boardCreatedDate: '',
  boardImg: '',
  boardNo: '',
  boardRecommend: 0,
  boardViews: 0,
  links: [],
};

export const boardInfoSlice = createSlice({
  name: 'boardInfo',
  initialState,
  reducers: {
    setBoardInfo: (state, action) => {
      state.boardCategory = action.payload.boardCategory;
      state.boardContent = action.payload.boardContent;
      state.boardCreatedDate = action.payload.boardCreatedDate;
      state.boardImg = action.payload.boardImg;
      state.boardTitle = action.payload.boardTitle;
      state.boardNo = action.payload.boardNo;
      state.boardRecommend = action.payload.boardRecommend;
      state.boardViews = action.payload.boardViews;
    },
  },
});

export const { setBoardInfo } = boardInfoSlice.actions;

export default boardInfoSlice.reducer;
