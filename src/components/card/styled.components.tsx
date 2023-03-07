import { styled } from '@umijs/max';
import { Card } from 'antd';

export const ScrollWrap = styled(Card)`
  .ant-card-body {
    padding-left: 10px;
    height: 100%;
    padding-right: 10px;
  }
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const ScrollArea = styled.div`
  flex: 1 0 0%;
  overflow: auto;
  /* overflow-x: hidden; */
`;
