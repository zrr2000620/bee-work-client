import { styled } from '@umijs/max';
import { BasicForm, PayTypeRadio, ProtocolCheckBox } from '@/components/forms';
import { Container } from '@/layouts/CommonLayout';
import {
  ProTable,
  ProFormDigit,
  ProFormDependency,
  ProFormSelect,
} from '@ant-design/pro-components';
import { Typography, Form, Divider } from 'antd';

const AmountText = styled.div`
  margin-bottom: ${(props) => props.theme.marginLG}px;

  span {
    color: #ff4d4f;
  }
`;

const EmailPage = () => {
  return (
    <Container>
      <Container.Left height={628}>
        <ProTable
          columns={[
            {
              title: '购买时间',
            },
            {
              title: '购买数量',
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
            {
              title: '操作',
              valueType: 'option',
            },
          ]}
          search={false}
          scroll={{ y: 400 }}
          pagination={false}
        />
      </Container.Left>
      <Container.Right height={628} align="center">
        <Typography.Title level={4}>邮箱购买</Typography.Title>
        <BasicForm>
          <ProFormSelect label="邮箱选择" />
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
        </BasicForm>
        <Divider />
        <Typography.Title level={5} style={{ width: '100%' }}>
          邮箱产品说明
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

export default EmailPage;
