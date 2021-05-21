import React from 'react';

import * as S from './styles';

interface HeaderProps {
  id: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <h1>Header</h1>
    </S.Container>
  );
};

export default Header;
