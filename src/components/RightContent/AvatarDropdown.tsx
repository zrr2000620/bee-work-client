import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { history, styled, useModel } from '@umijs/max';
import { Avatar, Spin } from 'antd';
import { setAlpha } from '@ant-design/pro-components';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
import { logout } from '@/services/user';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const NameText = styled.span`
  width: 70px;
  height: 48px;
  overflow: hidden;
  line-height: 48px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (max-width: ${(props) => props.theme.screenMD}px) {
    display: none;
  }
`;

const Name = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  return <NameText className={`anticon`}>{currentUser?.name}</NameText>;
};

const AvatarLogoWrap = styled(Avatar)`
  margin-right: 8px;
  color: ${(props) => props.theme.colorPrimary};
  vertical-align: top;
  background: ${(props) => setAlpha(props.theme.colorBgContainer, 0.85)};

  @media only screen and (max-width: ${(props) => props.theme.screenMD}px) {
    margin: 0;
  }
`;

const AvatarLogo = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  return (
    <AvatarLogoWrap
      size="small"
      src={currentUser?.headPortraitUrl}
      alt="avatar"
    />
  );
};

const Action = styled.span`
  display: flex;
  height: 48px;
  margin-left: auto;
  overflow: hidden;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius}px;
  &:hover {
    background: ${(props) => props.theme.colorBgTextHover};
  }
`;

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await logout();
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };

  const { initialState, setInitialState } = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          setInitialState((s) => ({ ...s, currentUser: undefined }));
        });
        loginOut();
        return;
      }
      history.push(`/user/center`);
    },
    [setInitialState],
  );

  const loading = (
    <Action>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </Action>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuItems = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: '个人中心',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  return (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      <Action>
        <AvatarLogo />
        <Name />
      </Action>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
