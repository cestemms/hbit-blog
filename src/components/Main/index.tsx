import React from 'react';
import PostSection from '../PostSection';

import * as S from './styles';

interface MainProps {
  id: string;
}

const Main: React.FC<MainProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <PostSection id="post-section"/>
    </S.Container>
  );
};

export default Main;
