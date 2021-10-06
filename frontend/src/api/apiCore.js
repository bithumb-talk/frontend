import axios from 'axios';
import getNewToken from './getNewToken';

class Core {
  async get(url, config, isToken = false) {
    try {
      const res = await axios.get(url, config);

      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      if (isToken && res.data.status === 'FAIL' && res.data.message === 'EXPIRED TOKEN IN GATEWAY') {
        const newResult = getNewToken(config);
        return newResult;
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

      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      if (isToken && res.data.status === 'FAIL' && res.data.message === 'EXPIRED TOKEN IN GATEWAY') {
        const newResult = getNewToken(config);
        console.log(newResult);
        return newResult;
      }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async put(url, data, config, isToken = false) {
    try {
      const res = await axios.put(url, data, config);

      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      if (isToken && res.data.status === 'FAIL' && res.data.message === 'EXPIRED TOKEN IN GATEWAY') {
        const newResult = getNewToken(config);
        return newResult;
      }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(url, config, isToken = false) {
    try {
      const res = await axios.delete(url, config);

      // if (isToken && res.data.status === '903' && res.data.message === 'expired token') {
      if (isToken && res.data.status === 'FAIL' && res.data.message === 'EXPIRED TOKEN IN GATEWAY') {
        const newResult = getNewToken(config);
        return newResult;
      }

      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Core;
