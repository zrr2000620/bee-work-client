import Actions from './Actions';
import action1 from '@/assets/action-1.png';
import action2 from '@/assets/action-2.png';
import action3 from '@/assets/action-3.png';
import action4 from '@/assets/action-4.png';
import action5 from '@/assets/action-5.png';
import action6 from '@/assets/action-6.png';
import { StudyList, MessageList } from '@/components/card';
import { Container } from '@/layouts/CommonLayout';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Container.Left height={376}>
        <Actions
          actions={[
            {
              title: 'Bee work',
              icon: 'icon-gongzuo',
              actions: [
                {
                  to: '/question',
                  text: '海外问卷（口子查）',
                  image: action2,
                },
                {
                  to: '/',
                  text: '海外问卷（站点查）',
                  image: action5,
                },
                {
                  to: '/',
                  text: 'Bee任务大厅',
                  image: action6,
                },
              ],
            },
            {
              title: 'Bee 服务',
              icon: 'icon-fuwu3-1',
              actions: [
                {
                  to: '/email',
                  text: '邮箱购买',
                  image: action3,
                },
                {
                  to: '/Funds',
                  text: '卡券回收',
                  image: action4,
                },
              ],
            },
            {
              title: '工具下载',
              icon: 'icon-xiazai',
              actions: [
                {
                  to: '/',
                  text: '某某VPN',
                },
                {
                  to: '/',
                  text: '某某浏览器',
                },
              ],
            },
            {
              title: '招商加盟',
              icon: 'icon-hezuo',
              actions: [
                {
                  to: '/',
                  text: '渠道商申请',
                  image: action1,
                },
              ],
            },
          ]}
        />
      </Container.Left>
      <Container.Right height={376}>
        <MessageList />
      </Container.Right>
      <Container.Extra>
        <StudyList />
      </Container.Extra>
    </Container>
  );
};

export default HomePage;
