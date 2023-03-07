import { Container } from '@/layouts/CommonLayout';
import { Tabs } from 'antd';
import { ProTable } from '@ant-design/pro-components';

const QuestioList = () => {
  return (
    <Container>
      <Container.Left>
        <Tabs
          items={[
            {
              label: '必给题',
              key: 'must',
            },
            {
              label: '抽奖题',
              key: 'lott',
            },
            {
              label: '邮寄题',
              key: 'mail',
            },
          ]}
        />

        <ProTable
          columns={[
            {
              title: '发布时间',
            },
            {
              title: '问卷描述',
            },
            {
              title: '问卷来源',
            },
            {
              title: '金额',
              valueType: () => ({ type: 'money', locale: 'en-US' }),
            },
            {
              title: '备注',
            },
            {
              title: '操作',
              valueType: 'option',
            },
          ]}
          search={false}
        />
      </Container.Left>
    </Container>
  );
};

export default QuestioList;
