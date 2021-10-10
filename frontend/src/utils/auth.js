import { getItem } from './utils';

export const isLogin = !!getItem('token');

export const authUserId = getItem('id');

export const token = getItem('token');

export const refreshToken = getItem('refreshToken');
