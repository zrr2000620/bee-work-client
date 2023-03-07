import { styled } from '@umijs/max';

export const RadioWrap = styled.div`
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 48px;
  cursor: pointer;
  transition: all ${(props) => props.theme.motionDurationSlow};

  &:hover,
  &.active {
    box-shadow: ${(props) => props.theme.boxShadowSecondary};
  }
`;
