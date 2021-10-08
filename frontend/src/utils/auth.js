import { getItem } from './utils';

export const isLogin = !!getItem('token');

export const userId = getItem('id');

export const token = getItem('token');

export const refreshToken = getItem('refreshToken');
