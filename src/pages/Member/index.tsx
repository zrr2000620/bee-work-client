import { Container } from '@/layouts/CommonLayout';
import {
  ProForm,
  ProFormDigit,
  ProFormDependency,
  ProTable,
} from '@ant-design/pro-components';
import { Divider, Form, Typography } from 'antd';
import { styled } from '@umijs/max';
import { PayTypeRadio, ProtocolCheckBox } from '@/components/forms';

const AmountText = styled.div`
  margin-bottom: ${(props) => props.theme.marginLG}px;

  span {
    color: #ff4d4f;
  }
`;

const MemberPage = () => {
  return (
    <Container>
      <Container.Left height={628}>
        <ProTable
          columns={[
            {
              title: '购买时间',
              dataIndex: 'name',
            },
            {
              title: '购买年份',
            },
            {
              title: '支付方式',
            },
            {
              title: '支付金额',
            },
            {
              title: 'VIP到期日',
            },
            {
              title: '状态',
            },
          ]}
          search={false}
          scroll={{ y: 400 }}
          pagination={false}
        />
      </Container.Left>
      <Container.Right height={628} align="center">
        <Typography.Title level={4}>
          Bee会员VIP服务费：2888元/年
        </Typography.Title>
        <ProForm
          submitter={{
            resetButtonProps: { style: { display: 'none' } },
            submitButtonProps: {
              block: true,
              style: {
                width: 280,
              },
            },
          }}
        >
          <ProFormDigit
            placeholder="请输入购买年份"
            extra="(优惠:买2年9.0折,买3年8.5折,买5年6折)"
            fieldProps={{
              precision: 0,
            }}
            label="购买年份"
            name="year"
          />

          <ProFormDependency name={['year']}>
            {({ year }) => (
              <AmountText>
                支付金额: <span>{(year ?? 0) * 2888}</span> 元/年
              </AmountText>
            )}
          </ProFormDependency>

          <Form.Item label="选择支付方式" name="payType">
            <PayTypeRadio />
          </Form.Item>

          <Form.Item>
            <ProtocolCheckBox>
              我同意
              <a>《Bee work 平台VIP服务购买协议》</a>
            </ProtocolCheckBox>
          </Form.Item>
        </ProForm>
        <Divider />
        <Typography.Title level={5} style={{ width: '100%' }}>
          VIP服务介绍
        </Typography.Title>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
        <div style={{ width: '100%' }}>123</div>
      </Container.Right>
    </Container>
  );
};

export default MemberPage;
