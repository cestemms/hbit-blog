import React from 'react';

import * as S from './styles';

interface ButtonProps {
  id: string;
  url: string;
  transparent?: boolean;
  fitContent?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, url, transparent, fitContent, children }) => {
  return (
    <S.Container 
      id={id} 
      to={url} 
      transparent={transparent}
      fitContent={fitContent}
    >
      {children}
    </S.Container>
  );
};

export default Button;
