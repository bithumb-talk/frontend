import Core from './apiCore';

const BASE_URL = '';

const END_POINT = Object.freeze({
  INTEREST: `${BASE_URL}/interest`,
});

class Api {
  constructor() {
    this.api = new Core();
  }

  async getInterest(userId) {
    const res = await this.api.get(`${END_POINT.INTEREST}/${userId}`);
    return res;
  }
}

const api = new Api();

export default api;
