import React from 'react';

import * as S from './styles';

interface MainProps {
  id: string;
  post?: boolean;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ id, children, post }) => {
  return (
    <S.Container id={id} post={post}>
      {children}
    </S.Container>
  );
};

export default Main;
