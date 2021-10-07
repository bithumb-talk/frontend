import axios from 'axios';
import auth from '@/utils/auth';
// import getNewToken from './getNewToken';
import { authHeader } from './authHeader';

class Core {
  async get(url, config, isToken = false) {
    try {
      const res = await axios.get(url, config);
      const { data } = res;

      if (isToken && typeof data === 'string' && data.includes('EXPIRED TOKEN IN GATEWAY')) {
        console.log(1);
        const tokenRes = await this.getNewToken();
        console.log(tokenRes);
        return tokenRes;
      }

      return res;
      // token x
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(url, data, config, isToken = false) {
    try {
      const res = await axios.post(url, data, config);
      console.log(isToken);
      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      //   return getNewToken();
      // }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async put(url, data, config, isToken = false) {
    try {
      const res = await axios.put(url, data, config);
      console.log(isToken);
      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      //   return getNewToken();
      // }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(url, config, isToken = false) {
    try {
      console.log(url, config, isToken);
      const res = await axios.delete(url, config);

      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      //   return getNewToken();
      // }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNewToken() {
    try {
      const res = await axios.post(
        'http://3.38.23.41:6030/auth/reissue',
        {
          accessToken: auth.getToken(),
          refreshToken: auth.getRefreshToken(),
        },
        {
          headers: {
            ...authHeader(),
          },
        },
      );
      console.log(res);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Core;
