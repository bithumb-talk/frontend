import { getItem } from './utils';

class Auth {
  #userInfo;

  constructor() {
    this.#userInfo = getItem('user') && JSON.parse(getItem('user'));
  }

  isLogin() {
    return !!this.#userInfo;
  }

  getToken() {
    return this.#userInfo.accessToken;
  }

  getUserId() {
    return this.#userInfo.id;
  }

  getRefreshToken() {
    return this.#userInfo.refreshToken;
  }
}

const auth = new Auth();
export default auth;
