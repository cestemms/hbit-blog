import React from 'react';

import * as S from './styles';

interface MainProps {
  id: string;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ id, children }) => {
  return (
    <S.Container id={id}>
      {children}
    </S.Container>
  );
};

export default Main;
