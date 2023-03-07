import { styled } from '@umijs/max';
import { BasicForm, PayTypeRadio } from '@/components/forms';
import { Container } from '@/layouts/CommonLayout';
import {
  ProFormDependency,
  ProFormMoney,
  ProTable,
} from '@ant-design/pro-components';
import { Form, Typography } from 'antd';

const AmountText = styled.div`
  margin-bottom: ${(props) => props.theme.marginLG}px;

  span {
    color: #ff4d4f;
  }
`;

const WithdrawPage = () => {
  return (
    <Container>
      <Container.Left height={648}>
        <ProTable
          columns={[
            {
              title: '申请时间',
            },
            {
              title: '提现金额',
            },
            {
              title: '手续费率',
            },
            {
              title: '实到金额',
            },
            {
              title: '收款方式',
            },
            {
              title: '收款账号',
            },
            {
              title: '状态',
            },
            {
              title: '反馈',
            },
            {
              title: '操作',
              valueType: 'option',
            },
          ]}
          search={false}
          scroll={{ y: 400 }}
        />
      </Container.Left>
      <Container.Right height={648}>
        <Typography.Title level={5} style={{ textAlign: 'center' }}>
          可提余额: <span style={{ color: '#FF4D4F' }}>0000.000</span>元
        </Typography.Title>
        <BasicForm submitText="提现申请">
          <ProFormMoney
            label="提现金额"
            locale="zh-CN"
            extra="(当前手续费率: 0.6%)"
          />
          <ProFormDependency name={['year']}>
            {({ year }) => (
              <AmountText>
                实到金额:
                <span style={{ color: '#FF4D4F' }}> {(year ?? 0) * 2888}</span>
                元
              </AmountText>
            )}
          </ProFormDependency>

          <Form.Item label="选择支付方式" name="payType">
            <PayTypeRadio />
          </Form.Item>
        </BasicForm>
      </Container.Right>
    </Container>
  );
};

export default WithdrawPage;
