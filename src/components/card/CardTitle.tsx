import { styled } from '@umijs/max';
import { Space } from 'antd';
import { CSSProperties } from 'react';
import IconFont from '../IconFont';

export const TitleWrap = styled(Space)`
  color: ${(props) => props.theme.colorPrimary};
`;

interface CardTitleProps {
  icon: string;
  title: string;
  style?: CSSProperties;
}

const CardTitle = (props: CardTitleProps) => {
  const { icon, title, style } = props;
  return (
    <TitleWrap style={style}>
      <IconFont type={icon} />
      <span>{title}</span>
    </TitleWrap>
  );
};

export default CardTitle;
