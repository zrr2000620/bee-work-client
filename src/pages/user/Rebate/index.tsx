import { Container } from '@/layouts/CommonLayout';
import { ProTable } from '@ant-design/pro-components';

const RebatePate = () => {
  return (
    <Container>
      <Container.Left>
        <ProTable
          columns={[
            {
              title: '注册时间',
            },
            {
              title: '下级用户',
            },
            {
              title: '手机号码',
            },
            {
              title: '购买时间',
            },
            {
              title: '支付VIP费用',
            },
            {
              title: '返利比例',
            },
            {
              title: '返利金额',
            },
            {
              title: '状态',
            },
          ]}
          search={false}
        />
      </Container.Left>
    </Container>
  );
};

export default RebatePate;
