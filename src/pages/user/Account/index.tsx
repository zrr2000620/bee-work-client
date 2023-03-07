import { Container } from '@/layouts/CommonLayout';
import { Tabs } from 'antd';

const AccountPage = () => {
  return (
    <Container>
      <Container.Left>
        <Tabs
          items={[
            {
              label: '修改密码',
              key: 'password',
            },
            {
              label: '手机绑定',
              key: 'phone',
            },
          ]}
        />
      </Container.Left>
    </Container>
  );
};

export default AccountPage;
