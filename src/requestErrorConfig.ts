import type { RequestOptions } from '@@/plugin-request/request';
import { history, RequestConfig } from '@umijs/max';
import { message } from 'antd';
import { STORAGE_TOKEN_KEY } from './constants';
import { ApiResult } from './services/types';

// 错误处理方案： 错误类型
enum ErrorShowType {
  ERROR_MESSAGE = 1,
  NO_LOGIN = 2,
  NO_ACCESS = 3,
}

/**
 * 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;

      // 我们 抛出的错误。
      if (error.name === 'BizError') {
        const errorInfo: ApiResult | undefined = error.info;
        if (errorInfo) {
          const { msgs, code } = errorInfo;
          const msg = msgs?.[0] ?? '系统错误';
          switch (code) {
            case ErrorShowType.ERROR_MESSAGE:
              message.error(msg);
              break;
            case ErrorShowType.NO_LOGIN:
              message.error(msg);
              history.push('/user/login');
              break;
            default:
              message.error(msg);
          }
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error('None response! Please retry.');
      } else {
        // 发送请求时出了点问题
        message.error('Request error, please retry.');
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = localStorage.getItem(STORAGE_TOKEN_KEY);
      // 拦截请求配置，进行个性化处理。
      if (token) {
        config.headers = {
          ...config.headers,
          'X-CSRF-Token': token,
        };
      }
      return config;
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (res) => {
      const data = res.data as any;
      if (data instanceof Blob) return res;

      if (data.code !== 0) {
        const error: any = new Error(data.msgs?.[0]);
        error.name = 'BizError';
        error.info = data;
        throw error; // 抛出自制的错误
      }
      return res;
    },
  ],
  baseURL: BASE_API,
};
