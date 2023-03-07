import { styled, Link } from '@umijs/max';

export const MessageLink = styled(Link)`
  color: ${(props) => props.theme.colorText};
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  overflow: hidden;

  &.unread::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colorPrimary};
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
`;
