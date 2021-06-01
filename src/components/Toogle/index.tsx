import React, { useState, useCallback } from 'react';

import * as S from './styles';

interface ToogleProps {
  id: string;
}

const Toogle: React.FC<ToogleProps> = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const handleMouseEnter = useCallback (() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback (() => {
    setIsHovered(false);
  }, []);

  const handleClick = useCallback (() => {
    setIsLight(!isLight);
  }, [isLight]);

  return (
    <S.Container id={id}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <S.Tooltip isHovered={isHovered}>
        {isLight ? 'Dark' : 'Light'}
      </S.Tooltip>
      <S.Wrapper isLight={isLight}>
        <div/>
      </S.Wrapper>
    </S.Container>
  );
};

export default Toogle;
