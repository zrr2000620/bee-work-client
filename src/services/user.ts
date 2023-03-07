import { UserStatus } from '@/constants';
import { request } from '@umijs/max';
import { ApiResult } from './types';

export interface LoginParams {
  username: string;
  password: string;
}

export interface UserInfo {
  userId: number;
  name: string;
  headPortraitUrl: string;
  memberLevelStatus: UserStatus;
  expirationTime: string;
  balanceAmount: string;
}

export function login(data: LoginParams) {
  const usp = new URLSearchParams();
  usp.append('username', data.username);
  usp.append('password', data.password);
  return request<ApiResult<{ token: string }>>('/pwd/login', {
    data: usp,
    headers: {
      contentType: 'x-www-form-urlencoded',
    },
    method: 'POST',
  });
}

export function logout() {
  return request<ApiResult>('/logout', { method: 'POST' });
}

export function getUserInfo() {
  return request<ApiResult<UserInfo>>('/home/user/info');
}

export function getCaptcha(mobile: string) {
  return request<ApiResult>('/index/send/forget/verify/code', {
    method: 'post',
    data: {
      mobile,
    },
  });
}
