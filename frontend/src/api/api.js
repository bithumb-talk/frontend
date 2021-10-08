import Core from './apiCore';
import { authHeader } from './authHeader';

const BASE_URL = 'http://3.38.23.41:6030';
const BOARD_BASE_URL = 'http://15.164.149.136:7000';

const END_POINT = Object.freeze({
  INTERESTS: `${BASE_URL}/interests`,
  INTEREST: `${BASE_URL}/interest`,
  COIN: `${BASE_URL}/quote_init`,
  CANDLE_STICK: `${BASE_URL}/candlestick`,
  POPULAR_COIN: `${BASE_URL}/changerate`,
  BOARD_ALL: `${BOARD_BASE_URL}/all-boards`,
  BOARD_CATEGORY: `${BOARD_BASE_URL}/all-boards/category`,
  BOARD_DETAIL: `${BOARD_BASE_URL}/boards`,
  BOARD_RANK: `${BOARD_BASE_URL}/all-boards/ranking`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  SIGNIN: `${BASE_URL}/auth/login`,
  GET_USERINFO: `${BASE_URL}/users/1/info`,
  CHECK_DUPLICATE_USERID: `${BASE_URL}/auth/check-duplicate-user-id`,
  CHECK_DUPLICATE_NICKNAME: `${BASE_URL}/auth/check-duplicate-nickname`,
  CHANGE_NICKNAME: `${BASE_URL}/users/nickname`,
  CHANGE_PASSWORD: `${BASE_URL}/users/password`,
  USER_WITHDRAWAL: `${BASE_URL}/users`,
  SET_DEVICE_TOKEN: `${BASE_URL}/users/device`,
  IMAGE_UPLOAD: `${BASE_URL}/users/profile`,
  // SIGNUP: '/auth/signup',
  // SIGNIN: '/auth/login',
  // GET_USERINFO: '/users/1/info',
  // CHECK_DUPLICATE_USERID: '/auth/check-duplicate-user-id',
  // CHECK_DUPLICATE_NICKNAME: '/auth/check-duplicate-nickname',
  // CHANGE_NICKNAME: '/users/nickname',
  // CHANGE_PASSWORD: '/users/password',
  // USER_WITHDRAWAL: '/users',
  // SET_DEVICE_TOKEN: '/users/device/',
  // IMAGE_UPLOAD: '/users/profile/',
});

class Api {
  constructor() {
    this.api = new Core();
    this.config = {
      headers: {
        ...authHeader(),
      },
    };
  }

  async getInterest(userId, config) {
    const res = await this.api.get(`${END_POINT.INTERESTS}/${userId}`, config, true);
    return res;
  }

  async getCoinList() {
    const res = await this.api.get(`${END_POINT.COIN}`);
    return res;
  }

  async getUserInfo(id) {
    const res = await this.api.get(
      `${BASE_URL}/users/${id}/info`,
      {
        headers: {
          ...authHeader(),
        },
      },
      true,
    );
    return res;
  }

  async checkDuplicateUserId(userId) {
    const res = await this.api.get(`${END_POINT.CHECK_DUPLICATE_USERID}/${userId}`);
    return res;
  }

  async checkDuplicateNickname(nickname) {
    const res = await this.api.get(`${END_POINT.CHECK_DUPLICATE_NICKNAME}/${nickname}`);
    return res;
  }

  async postSignup(data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.SIGNUP}`, data, null);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }

  async postImageUpload(id, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(
        `${END_POINT.IMAGE_UPLOAD}/${id}`,
        data,
        {
          headers: {
            ...authHeader(),
          },
        },
        true,
      );
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }

  async postSetDeviceToken(id, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.SET_DEVICE_TOKEN}/${id}`, data, null);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }

  async deleteUser(id, password) {
    const res = await this.api.delete(`${END_POINT.USER_WITHDRAWAL}/${id}/info`, password, this.config, true);

    return res;
  }

  async postSignin(data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.SIGNIN}`, data, null);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    return res;
  }

  async putChangePassword(id, password) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.put(
        `${END_POINT.CHANGE_PASSWORD}/${id}`,
        password,
        {
          headers: {
            ...authHeader(),
          },
        },
        true,
      );
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }

  async putChangeNickname(id, nickname) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.put(
        `${END_POINT.CHANGE_NICKNAME}/${id}`,
        nickname,
        {
          headers: {
            ...authHeader(),
          },
        },
        true,
      );
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }

  async getCandleStick({ symbol, gap }) {
    const res = await this.api.get(`${END_POINT.CANDLE_STICK}/${symbol}/${gap}`);
    return res;
  }

  async getPopularCoin() {
    const res = await this.api.get(`${END_POINT.POPULAR_COIN}`);
    return res;
  }

  async getBoardAll() {
    const res = await this.api.get(`${END_POINT.BOARD_ALL}`);
    return res;
  }

  async getBoardCategory(category) {
    const res = await this.api.get(`${END_POINT.BOARD_CATEGORY}/${category}`);
    return res;
  }

  async getBoardDetail(boardNo) {
    const res = await this.api.get(`${END_POINT.BOARD_DETAIL}/${boardNo}`);
    return res;
  }

  async getComment(commentNo) {
    const res = await this.api.get(`${END_POINT.BOARD_DETAIL}/${commentNo}/comments`);
    return res;
  }

  async postBoard(userId, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${userId}`, data);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async postInterestCoin({ symbol, userId }) {
    const res = await this.api.post(`${END_POINT.INTEREST}/${userId}`, { symbol }, this.config);
    return res;
  }

  async deleteInterestCoin({ symbol, userId }) {
    const res = await this.api.delete(`${END_POINT.INTEREST}/${userId}`, { data: { symbol }, ...this.config });
    return res;
  }

  async postComment(boardNo, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${boardNo}/comments`, data);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async postCommentRecommend(boardNo, commentNo, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${boardNo}/comments/${commentNo}/recommend`, data);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async getRanking() {
    const res = await this.api.get(`${END_POINT.BOARD_RANK}`);
    return res;
  }
}

const api = new Api();

export default api;
