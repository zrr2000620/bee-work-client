import { CSSProperties, ReactNode } from 'react';
import { ScrollContainer, ScrollWrap } from './styled.components';

export interface ScrollCardProps {
  height?: number;
  children?: ReactNode;
  style?: CSSProperties;
  justifyContent?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  ghost?: boolean;
}

const ScrollCard = (props: ScrollCardProps) => {
  const { height, children, style, justifyContent, align, ghost } = props;

  const child = (
    <ScrollContainer style={{ justifyContent, alignItems: align }}>
      {children}
    </ScrollContainer>
  );

  return ghost ? (
    <div style={{ height, ...style }}>{child}</div>
  ) : (
    <ScrollWrap
      style={{
        height,
        ...style,
      }}
    >
      {child}
    </ScrollWrap>
  );
};

export default ScrollCard;
