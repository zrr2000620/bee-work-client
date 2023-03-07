import { styled } from '@umijs/max';
import { Breadcrumb } from 'antd';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: ${(props) => props.theme.margin}px;
  margin-top: 20px;
`;

export const CurrentBox = styled.div`
  height: 32px;
  line-height: 32px;
  background-color: ${(props) => props.theme.colorPrimary};
  padding: 0 14px;
  color: #fff;
  border-radius: ${(props) =>
    `${props.theme.borderRadius}px 0 0 ${props.theme.borderRadius}px`};
`;

export const BreadcrumbItem = styled(Breadcrumb.Item)`
  height: 32px;
  display: inline-block;
  line-height: 32px;
  padding-inline: 14px;
  transition: all 0.2s;

  &:hover {
    background-color: #fff;

    a {
      color: ${(props) => props.theme.colorPrimary};
    }
  }

  a {
    height: 32px;
    margin-inline: 0;

    &:hover {
      background-color: transparent;
    }
  }

  &.active {
    background-color: #fff;
    color: ${(props) => props.theme.colorPrimary};
    padding-inline: 14px;
    border-radius: 0 ${(props) => props.theme.borderRadius}px
      ${(props) => props.theme.borderRadius}px 0;
  }
`;
