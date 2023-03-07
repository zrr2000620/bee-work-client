import CardTitle from '@/components/card/CardTitle';
import { Link } from '@umijs/max';
import { Row, Col, Space } from 'antd';
import { ActionImgWrap, ActionItem, ActionText } from './styled.components';

interface Action {
  title: string;
  icon: string;
  actions: {
    image?: string;
    text: string;
    to: string;
    isLink?: boolean;
  }[];
}

interface ActionsProps {
  actions: Action[];
}

const CLink = (props: {
  isLink?: boolean;
  to: string;
  children?: React.ReactNode;
}) => {
  const { children, isLink, to } = props;
  return isLink ? <a href={to}>{children}</a> : <Link to={to}>{children}</Link>;
};

const Actions = (props: ActionsProps) => {
  return (
    <Row>
      {props.actions.map((item) => (
        <Col span={12} key={item.title}>
          <CardTitle icon={item.icon} title={item.title} />
          <Space wrap style={{ width: '100%' }}>
            {item.actions.map((action) => {
              return (
                <ActionItem key={action.text}>
                  <CLink to={action.to} isLink={action.isLink}>
                    <ActionImgWrap>
                      <img src={action.image} alt="action" />
                    </ActionImgWrap>
                    <ActionText>{action.text}</ActionText>
                  </CLink>
                </ActionItem>
              );
            })}
          </Space>
        </Col>
      ))}
    </Row>
  );
};

export default Actions;
