import { BasicForm } from '@/components/forms';
import { Container } from '@/layouts/CommonLayout';
import {
  ProTable,
  ProFormText,
  ProFormSelect,
  ProFormMoney,
  ProFormDateTimePicker,
} from '@ant-design/pro-components';
import { Divider, Typography } from 'antd';

const CouponPage = () => {
  return (
    <Container>
      <Container.Left height={628}>
        <ProTable
          columns={[
            {
              title: '上传时间',
            },
            {
              title: '卡券类别',
            },
            {
              title: '面值金额',
            },
            {
              title: '兑换码',
            },
            {
              title: '有效期',
            },
            {
              title: '卡券图片',
            },
            {
              title: '状态',
            },
            {
              title: '汇率',
            },
            {
              title: '兑换金额',
            },
          ]}
          scroll={{ x: '100%', y: 400 }}
          search={false}
        />
      </Container.Left>
      <Container.Right height={628}>
        <Typography.Title level={5} style={{ textAlign: 'center' }}>
          卡券回收
        </Typography.Title>
        <BasicForm
          submitText="上传"
          layout="horizontal"
          labelCol={{ span: 5 }}
          labelAlign="left"
        >
          <ProFormSelect label="卡券类别" />
          <ProFormMoney label="面值金额" locale="en-US" />
          <ProFormText label="兑换码" />
          <ProFormDateTimePicker label="有效期" />
        </BasicForm>
        <Divider />
        <Typography.Title level={5}>卡券回收说明</Typography.Title>
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

export default CouponPage;
