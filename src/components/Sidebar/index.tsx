import React from 'react';

import * as S from './styles';

interface SidebarProps {
  id: string;
}

const Sidebar: React.FC<SidebarProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <h1>Sidebar</h1>
    </S.Container>
  );
};

export default Sidebar;
