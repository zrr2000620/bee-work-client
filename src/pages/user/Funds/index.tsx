import { Container } from '@/layouts/CommonLayout';
import { ProTable } from '@ant-design/pro-components';

const FundsPage = () => {
  return (
    <Container>
      <Container.Left>
        <ProTable
          columns={[
            {
              title: '时间',
            },
            {
              title: '名目',
            },
            {
              title: '资金变动',
            },
            {
              title: '当前余额',
            },
          ]}
          search={false}
        />
      </Container.Left>
    </Container>
  );
};

export default FundsPage;
