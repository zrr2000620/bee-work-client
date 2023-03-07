import { StudyList } from '@/components/card';
import { Container } from '@/layouts/CommonLayout';
import { Divider, Typography } from 'antd';
const StudyPage = () => {
  return (
    <Container>
      <Container.Left>
        <Typography.Title level={4}>
          关于系统升级通知关于系统升级通知关于系统升级通知关于系统升级通知关于系统升级通知关于系统升级通知关于系统升级通知关于系统升级通知
        </Typography.Title>
        <Typography.Paragraph>2022.01.05</Typography.Paragraph>
        <Divider />
        <Typography.Paragraph>
          通知关于系统升级通知关于系统升级通知
        </Typography.Paragraph>
      </Container.Left>
      <Container.Right height={648}>
        <StudyList justifyContent="center" />
      </Container.Right>
    </Container>
  );
};

export default StudyPage;
