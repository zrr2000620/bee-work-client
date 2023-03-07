import { styled } from '@umijs/max';
import { Card } from 'antd';
export const Wapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colorPrimary};
`;

export const FormCard = styled(Card)`
  width: 408px;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);
  margin-inline: auto;
  position: relative;
  top: 150px;

  .ant-card-body {
    padding: 0;
  }
`;

export const LogoWrap = styled.div`
  text-align: center;
  margin-bottom: 24px;

  img {
    width: 60px;
    height: 60px;
  }
`;
