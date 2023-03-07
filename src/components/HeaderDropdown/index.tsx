import { Dropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import React from 'react';
import { styled } from '@umijs/max';

export type HeaderDropdownProps = {
  overlayClassName?: string;
  placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const DropDownReset = styled(Dropdown)`
  @media screen and (max-width: ${(props) => props.theme.screenXS}) {
    width: 100%;
  }
`;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ ...restProps }) => {
  return (
    <DropDownReset
      getPopupContainer={(target) => target.parentElement || document.body}
      {...restProps}
    />
  );
};

export default HeaderDropdown;
