import { Container } from '@/layouts/CommonLayout';
import { ProTable } from '@ant-design/pro-components';

const EmailListPage = () => {
  return (
    <Container>
      <Container.Left>
        <ProTable
          columns={[
            {
              title: '类型',
            },
            {
              title: '邮箱账号',
              copyable: true,
            },
            {
              title: '密码',
              copyable: true,
              valueType: 'password',
            },
            {
              title: '名称',
              copyable: true,
            },
          ]}
          search={false}
        />
      </Container.Left>
    </Container>
  );
};

export default EmailListPage;
