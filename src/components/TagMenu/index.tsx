import React from 'react';

import * as S from './styles';

interface TagMenuProps {
  id: string;
}

const TagMenu: React.FC<TagMenuProps> = ({ id }) => {
  return (
    <S.Container id={id}>
      <li> Tag 1</li>
      <li> Tag 2</li>
      <li> Tag 3</li>
      <li> Tag 4</li>
      <li> Tag 5</li>
    </S.Container>
  );
};

export default TagMenu;
