import { FormCard, Wapper } from '@/pages/user/Login/styled.components';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormDependency,
  ProFormText,
} from '@ant-design/pro-components';
import { getCaptcha } from '@/services/user';
import { Typography } from 'antd';

const ForgetPassword = () => {
  return (
    <Wapper>
      <FormCard>
        <Typography.Title
          level={3}
          style={{ marginTop: 20, textAlign: 'center' }}
        >
          忘记密码
        </Typography.Title>
        <LoginForm>
          <ProFormText
            name="mobile"
            rules={[{ required: true, message: '手机号不能为空' }]}
          />
          <ProFormCaptcha
            name="verifyCode"
            phoneName="mobile"
            onGetCaptcha={async (mobile) => {
              await getCaptcha(mobile);
            }}
            placeholder={'请输入验证码'}
            rules={[{ required: true, message: '验证码不能为空' }]}
          />
          <ProFormText.Password
            name={'password'}
            rules={[{ required: true, message: '密码不能为空' }]}
          />
          <ProFormDependency name={['password']}>
            {({ password }) => {
              return (
                <ProFormText.Password
                  name={'confirmPassword'}
                  rules={[
                    {
                      validator: async (_, v) => {
                        if (!v) throw new Error('密码不能为空');
                        if (password !== v) throw new Error('密码输入不一致');
                      },
                    },
                  ]}
                />
              );
            }}
          </ProFormDependency>
        </LoginForm>
      </FormCard>
    </Wapper>
  );
};
export default ForgetPassword;
