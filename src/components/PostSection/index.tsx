import React from 'react';

import * as S from './styles';

interface PostSectionProps {
  id: string;
}

const PostSection: React.FC<PostSectionProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <S.ImageContainer>
        Post Image
      </S.ImageContainer>
      <S.PostContainer>
        Post Container
      </S.PostContainer>
    </S.Container>
  );
};

export default PostSection;
