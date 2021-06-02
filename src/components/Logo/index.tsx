import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as S from './styles';

interface LogoProps {
  id: string;
}

const Logo: React.FC<LogoProps> = ({ id }) => {
  return (
    <S.Container id={id} to="/">
      <StaticImage
      src="../../assets/img/brand/logo.png"
      height={30}
      placeholder="blurred"
      alt="Logo"
    />
    </S.Container>
  );
};

export default Logo;
