import React from 'react';

import * as S from './styles';

interface SocialButtonProps {
  id: string;
  url: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ id, url, children }) => {
  return (
    <S.Container id={id} href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </S.Container>
  );
};

export default SocialButton;
