import { Link, styled } from '@umijs/max';
import { Typography } from 'antd';

// export const TitleWrap = styled(Space)`
//   color: ${(props) => props.theme.colorPrimary};
// `;

export const ActionItem = styled.div`
  padding-block: 24px;
  text-align: center;
  padding-inline: 44.5px;

  a {
    color: ${(props) => props.theme.colorText};
    display: block;
  }
`;

export const ActionImgWrap = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
  }
  /* background-color: #f2f2f2; */
`;

export const ActionText = styled.div`
  font-size: ${(props) => props.theme.fontSizeSM}px;
`;

export const StudyItem = styled(Link)`
  height: 150px;
  display: block;
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
