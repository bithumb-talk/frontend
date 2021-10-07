import axios from 'axios';
import { authHeader } from './authHeader';

export default async function getNewToken() {
  const token = await axios.post(
    'http://3.38.23.41:6030/auth/reissue',
    {
      accessToken: window.localStorage.getItem('token'),
      refreshToken: window.localStorage.getItem('refreshToken'),
    },
    {
      headers: {
        ...authHeader(),
      },
    },
  );

  return {
    token,
    message: 'newToken',
  };
}
