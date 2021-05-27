import React from 'react';

import * as S from './styles';

interface ButtonProps {
  id: string;
  url: string;
  transparent?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, url, transparent, children }) => {
  return (
    <S.Container id={id} to={url} transparent={transparent}>
      {children}
    </S.Container>
  );
};

export default Button;
