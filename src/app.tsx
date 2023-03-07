// 运行时配置
import 'antd/dist/reset.css';
import {
  RuntimeAntdConfig,
  RunTimeLayoutConfig,
  ThemeProvider as _ThemeProvider,
  createGlobalStyle,
  history,
} from '@umijs/max';
import { theme } from './theme';
import { theme as antdTheme } from 'antd';
import { errorConfig } from './requestErrorConfig';
import { getUserInfo, UserInfo } from './services/user';
import RightContent from '@/components/RightContent';

const loginPath = '/user/login';

const ThemeProvider = (props: { children?: React.ReactNode }) => {
  const { token } = antdTheme.useToken();
  return <_ThemeProvider theme={token}>{props.children}</_ThemeProvider>;
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  currentUser?: UserInfo;
  loading?: boolean;
  fetchUserInfo?: () => Promise<UserInfo | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await getUserInfo();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
    };
  }
  return {
    fetchUserInfo,
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    menuRender: false,
    layout: 'mix',
    title: 'Bee work',
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    rightContentRender: () => <RightContent />,
    // breadcrumbRender: false,
  };
};

export const antd: RuntimeAntdConfig = (memo) => {
  memo.theme = { ...memo.theme, ...theme };
  return memo;
};

export function rootContainer(container: any) {
  return <ThemeProvider>{container}</ThemeProvider>;
}

export const styledComponents = {
  GlobalStyle: createGlobalStyle`
  .ant-pro-page-container-children-content {
    padding-inline: 0;
    margin-inline: 16px;
  }
  `,
};

export const request = {
  ...errorConfig,
};
