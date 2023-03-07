import { styled } from '@umijs/max';
import { Typography } from 'antd';

export const StudyItem = styled.div`
  height: 150px;
  width: 140px;
  img {
    width: 100%;
    height: 105px;
    margin-bottom: 5px;
  }
`;

export const StydyItemText = styled(Typography.Paragraph)`
  font-size: ${(props) => props.theme.fontSizeSM}px;
  margin-bottom: 0 !important;

  a {
    color: ${(props) => props.theme.colorText};
  }
`;
