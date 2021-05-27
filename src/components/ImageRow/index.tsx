import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-plugin-image';

import * as S from './styles';

interface ImageRowProps {
  id: string;
}

const ImageRow: React.FC<ImageRowProps> = ({ id }) => {
   return (
    <S.Container id={id}>
      <h1>ImageRow</h1>
    </S.Container>
  );
};

export default ImageRow;
