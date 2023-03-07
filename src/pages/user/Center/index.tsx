import { Container } from '@/layouts/CommonLayout';
import { StatisticCard } from '@ant-design/pro-components';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  QRCode,
  Row,
  Space,
  Statistic,
  theme,
  Typography,
  DatePicker,
} from 'antd';
import vipAvatar from '@/assets/t-vip-avatar.png';
import vip from '@/assets/t-vip.png';
import { CardTitle } from '@/components/card';
import { Link, styled } from '@umijs/max';
import IconFont from '@/components/IconFont';
import { Column } from '@ant-design/charts';

const ActionItem = styled(Link)`
  color: ${(props) => props.theme.colorText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > .anticon {
    font-size: 32px;
    margin-bottom: 12px;
  }
`;

const VipAvatar = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Avatar size={88} />
      <img
        style={{ position: 'absolute', left: -22, top: -22 }}
        src={vipAvatar}
        alt="vip"
      />
    </div>
  );
};

const CenterPage = () => {
  const { token } = theme.useToken();
  return (
    <Container>
      <Container.Left ghost>
        <Card style={{ marginBottom: 24 }}>
          <Row>
            <Col span={16}>
              <Space size={16}>
                <VipAvatar />
                <Space size={16} direction="vertical">
                  <div>
                    <span
                      style={{
                        marginRight: 10,
                        fontWeight: 'bold',
                        fontSize: token.fontSizeLG,
                      }}
                    >
                      周小平
                    </span>
                    <img src={vip} alt="vip" />
                  </div>
                  <Space size={24} wrap>
                    <StatisticCard.Statistic
                      layout="horizontal"
                      title="工作收入: "
                      value={1000}
                      prefix="￥"
                      precision={2}
                      valueStyle={{ marginLeft: 16 }}
                    />
                    <StatisticCard.Statistic
                      layout="horizontal"
                      title="获得返利: "
                      value={1000}
                      prefix="￥"
                      precision={2}
                      valueStyle={{ marginLeft: 16 }}
                    />
                  </Space>
                </Space>
              </Space>
            </Col>
            <Col
              span={8}
              style={{ borderLeft: '1px dashed #CBCBCB', paddingLeft: 24 }}
            >
              <Statistic
                title="余额"
                value={112893}
                precision={2}
                valueStyle={{ color: '#FF4D4F' }}
              />
              <Button style={{ marginTop: 16 }} type="primary">
                提现
              </Button>
            </Col>
          </Row>
        </Card>
        <Card>
          <div style={{ marginBottom: 16 }}>
            <CardTitle
              icon="icon-exe-account-management-primary"
              title="账号管理"
            />
          </div>
          <Space wrap size={68}>
            <ActionItem to="/">
              <IconFont type="icon-gerenziliao" style={{ color: '#5B9FFF' }} />
              <span>个人资料</span>
            </ActionItem>
            <ActionItem to="/">
              <IconFont
                type="icon-zhanghuanquan"
                style={{ color: '#85D55D' }}
              />
              <span>账户安全</span>
            </ActionItem>
            <ActionItem to="/">
              <IconFont
                type="icon-salecashTransfertransferDetail"
                style={{ color: '#FF8183' }}
              />
              <span>返利明细</span>
            </ActionItem>
            <ActionItem to="/">
              <IconFont
                type="icon-mingxi2-xianxing"
                style={{ color: '#FBC559' }}
              />
              <span>资金明细</span>
            </ActionItem>
          </Space>
          <Divider />
          <Row
            justify="space-between"
            align="middle"
            style={{ marginBottom: 16 }}
          >
            <Col>
              <CardTitle icon="icon-shujutongji" title="数据统计" />
            </Col>
            <Col>
              <DatePicker.MonthPicker />
            </Col>
          </Row>
          <Column
            data={[
              { year: '1991', value: 3, name: 'a' },
              { year: '1991', value: 4, name: 'a' },
              { year: '1993', value: 3.5, name: 'a' },
              { year: '1993', value: 5, name: 'a' },
              { year: '1995', value: 4.9, name: 'a' },
              { year: '1995', value: 6, name: 'v' },
              { year: '1997', value: 7, name: 'v' },
              { year: '1997', value: 9, name: 'v' },
              { year: '1999', value: 13, name: 'k' },
            ]}
            xField="year"
            yField="value"
            isGroup
            seriesField="name"
            legend={{}}
          />
        </Card>
      </Container.Left>
      <Container.Right height={648} align="center">
        <Typography.Title level={5}>个人推广二维码</Typography.Title>
        <QRCode value="123" style={{ marginBottom: 20 }} />
        <Button type="primary">复制链接分享好友返利</Button>
        <Divider />
        <Typography.Title level={5} style={{ width: '100%' }}>
          分享返利说明
        </Typography.Title>
        <div style={{ width: '100%' }}>123</div>
      </Container.Right>
    </Container>
  );
};
export default CenterPage;
