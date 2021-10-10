import Core from './apiCore';
import { authHeader } from './authHeader';

const BASE_URL = 'http://3.38.23.41:6030';

const END_POINT = Object.freeze({
  INTERESTS: `${BASE_URL}/interests`,
  INTEREST: `${BASE_URL}/interest`,
  COIN: `${BASE_URL}/quote_init`,
  CANDLE_STICK: `${BASE_URL}/candlestick`,
  POPULAR_COIN: `${BASE_URL}/changerate`,
  BOARD_ALL: `${BASE_URL}/all-boards`,
  BOARD_CATEGORY: `${BASE_URL}/all-boards/category`,
  BOARD_DETAIL: `${BASE_URL}/boards`,
  BOARD_RANK: `${BASE_URL}/all-boards/ranking`,
  BOARD_USER: `${BASE_URL}/user-boards`,
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
  BOARD_MY_LIST: `${BASE_URL}/all-boards/auth`,
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

  async getInterest(userId) {
    const res = await this.api.get(`${END_POINT.INTERESTS}/${userId}`, this.config, true);
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

  async getMyBoardList(userId) {
    const res = await this.api.get(`${END_POINT.BOARD_MY_LIST}/${userId}?size=8`, this.config, true);
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

  async getBoardAll(url) {
    const res = url ? await this.api.get(`${END_POINT.BOARD_ALL}${url}`) : await this.api.get(`${END_POINT.BOARD_ALL}`);
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
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/auth/${userId}`, data, this.config);
      console.log(res);
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
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${boardNo}/comments/auth`, data);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async postBoardRecommend(boardNo, data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${boardNo}/auth/recommend`, data, this.config, true);
      console.log(res);
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
      res = await this.api.post(`${END_POINT.BOARD_DETAIL}/${boardNo}/comments/${commentNo}/recommend/auth`, data);
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

  async postUserBoardRecommend(userId, boardNo) {
    let res = {
      data: {},
    };

    const body = { data: null };

    try {
      res = await this.api.post(
        `${END_POINT.BOARD_USER}/${userId}/like-board-content/${boardNo}`,
        body,
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
    return res;
  }

  async deleteUserBoardRecommend(userId, boardNo) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.delete(`${END_POINT.BOARD_USER}/${userId}/like-board-content/${boardNo}`, {
        headers: {
          ...authHeader(),
        },
      });
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async getUserBoardRecommend(userId, boardNo) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.get(`${END_POINT.BOARD_USER}/${userId}/like-board-content/${boardNo}`, this.config);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }
    return res;
  }

  async postUserCommentRecommend(userId, commentNo) {
    const res = await this.api.post(`${END_POINT.BOARD_USER}/${userId}/like-comment-content/${commentNo}`, this.config);
    console.log(res);
    return res;
  }

  async getUserCommentRecommend(userId, commentdNo) {
    const res = await this.api.get(`${END_POINT.BOARD_USER}/${userId}/like-comment-content/${commentdNo}`, this.config);
    console.log(res);
    return res;
  }
}

const api = new Api();

export default api;
