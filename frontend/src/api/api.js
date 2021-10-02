import Core from './apiCore';
import { authHeader } from './auth-header';

const BASE_URL = '';
const USER_BASE_URL = 'http://3.38.23.41';

const END_POINT = Object.freeze({
  INTEREST: `${BASE_URL}/interest`,
  COIN: `${BASE_URL}/quote_init`,
  SIGNUP: `${USER_BASE_URL}/auth/signup`,
  SIGNIN: `${USER_BASE_URL}/auth/login`,
  CHECK_DUPLICATE_USERID: `${USER_BASE_URL}/auth/check-duplicate-user-id`,
  CHECK_DUPLICATE_NICKNAME: `${USER_BASE_URL}/auth/check-duplicate-nickname`,
});

class Api {
  constructor() {
    this.api = new Core();
  }

  async getInterest(userId) {
    const res = await this.api.get(`${END_POINT.INTEREST}/${userId}`);
    return res;
  }

  async getCoinList() {
    const res = await this.api.get(`${END_POINT.COIN}`);
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

  async putChangeNickname(data) {
    let res = {
      data: {},
    };

    try {
      res = await this.api.put(`${END_POINT.SIGNIN}`, data, ...authHeader);
    } catch (error) {
      res.data.status = 'FAIL';
      console.log(error);
    }

    console.log(res);
    return res;
  }
}

const api = new Api();

export default api;
