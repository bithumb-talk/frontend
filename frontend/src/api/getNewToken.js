import axios from 'axios';

export default async function getNewToken(config) {
  const token = await axios.post('/auth/reissue', {
    accessToken: window.localStorage.getItem('token'),
    refreshToken: window.localStorage.getItem('refreshToken'),
  }, config);

  return {
    token,
    message: 'newToken',
  };
}
