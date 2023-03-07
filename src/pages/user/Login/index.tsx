import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { FormCard, LogoWrap, Wapper } from './styled.components';
import { login, LoginParams } from '@/services/user';
import { STORAGE_TOKEN_KEY } from '@/constants';
import { useModel, history, Link } from '@umijs/max';
import { flushSync } from 'react-dom';
import { message } from 'antd';

const LoginPage = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };
  return (
    <Wapper>
      <FormCard>
        <LoginForm
          onFinish={async (values: LoginParams) => {
            const {
              data: { token },
            } = await login(values);
            localStorage.setItem(STORAGE_TOKEN_KEY, token);
            message.success('登录成功！');
            await fetchUserInfo();
            history.push('/');
          }}
        >
          <LogoWrap>
            <img src="/logo.png" alt="logo" />
            <h1>Bee work</h1>
          </LogoWrap>
          <ProFormText
            placeholder="请入账号"
            name="username"
            rules={[{ required: true, message: '账号不能为空' }]}
          />
          <ProFormText.Password
            placeholder="请入密码"
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
            extra={
              <div style={{ textAlign: 'right' }}>
                <Link to="/user/forget/password">忘记密码</Link>
              </div>
            }
          />
        </LoginForm>
      </FormCard>
    </Wapper>
  );
};

export default LoginPage;
