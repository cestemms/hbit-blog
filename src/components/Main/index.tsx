import React from 'react';

import * as S from './styles';

interface MainProps {
  id: string;
}

const Main: React.FC<MainProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <h1>Main</h1>
    </S.Container>
  );
};

export default Main;
