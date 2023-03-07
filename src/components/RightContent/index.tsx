import { styled, useModel } from '@umijs/max';
import React from 'react';
import Avatar from './AvatarDropdown';
export type SiderTheme = 'light' | 'dark';

const Wrap = styled.div`
  display: flex;
  height: 48px;
  margin-left: auto;
  overflow: hidden;
  gap: 8px;
`;
const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  if (!initialState) {
    return null;
  }
  return (
    <Wrap>
      <Avatar menu />
    </Wrap>
  );
};
export default GlobalHeaderRight;
