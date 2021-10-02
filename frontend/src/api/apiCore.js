import axios from 'axios';

class Core {
  async get(url, config = null) {
    try {
      const res = await axios.get(url, config);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(url, data, config) {
    try {
      const res = await axios.post(url, data, config);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async put(url, data, config) {
    try {
      const res = await axios.put(url, data, config);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(url, config) {
    try {
      const res = await axios.delete(url, config);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Core;
