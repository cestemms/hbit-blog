import React from 'react';
import LinkElement from '../LinkElement';

import { tags } from '../../utils/tags';
import * as S from './styles';

interface TagMenuProps {
  id: string;
  open: boolean;
}

const TagMenu: React.FC<TagMenuProps> = ({ id, open }) => {
  return (
    <S.Container id={id} open={open}>
      <ul>
        {tags.map((tag, i) => (
          (i<6) &&
          <S.TagLink key={i}>
            <LinkElement 
              id={`link-to-${tag.url}`} 
              url={tag.url} 
              label={tag.label}
              color="(var--white)"
              activeClassName="active"
            />
          </S.TagLink>
        ))}
      </ul>
    </S.Container>
  );
};

export default TagMenu;
