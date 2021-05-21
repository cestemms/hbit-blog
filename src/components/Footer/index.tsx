import React from 'react';

import * as S from './styles';

interface FooterProps {
  id: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <h1>Footer</h1>
    </S.Container>
  );
};

export default Footer;
