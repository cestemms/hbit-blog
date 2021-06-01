import React from 'react';

import * as S from './styles';

interface LinkElementProps {
  id: string;
  url: string;
  label: string;
  size?: number;
  color?: string;
  bold?: boolean;
  isTitle?: boolean;
  activeClassName?: string;
}

const LinkElement: React.FC<LinkElementProps> = ({ id, url, label, size, color, bold, isTitle, activeClassName }) => {
  return (
    <S.Container id={id} to={url} size={size} color={color} bold={bold} isTitle={isTitle} activeClassName={activeClassName}>
      {label}
    </S.Container>
  );
};

export default LinkElement;
