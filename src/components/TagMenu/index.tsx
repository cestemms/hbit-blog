import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LinkElement from '../LinkElement';

import * as S from './styles';

interface TagMenuProps {
  id: string;
  open: boolean;
}

const TagMenu: React.FC<TagMenuProps> = ({ id, open }) => {
  const {
    allMarkdownRemark: {
      distinct,
    }
  } = useStaticQuery(graphql`
    query Category {
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `);

  return (
    <S.Container id={id} open={open}>
      <ul>
        {distinct.map((tag, i) => (
          (i<6) && 
            <S.TagLink key={i}>
              <LinkElement 
                id={`link-to-${tag}`} 
                url={tag} 
                label={tag}
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
