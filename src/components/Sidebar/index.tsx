import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LinkElement from '../LinkElement';

import replaceSpecialChars from '../../utils/helpers';

import * as S from './styles';

interface SidebarProps {
  id: string;
}

const Sidebar: React.FC<SidebarProps> = ({ id }) => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query LastFive {
      allMarkdownRemark(limit: 5) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
              date(formatString: "MMMM DD, YYYY", locale: "PT-BR")
            }
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <S.Container id={id}>
      {postList.map(({
      node: {
        frontmatter: { category, title, date },
        fields: { slug }
        }
      }) => (
        <S.Wrapper>
          <LinkElement 
            id={`link-to-${replaceSpecialChars(category)}`}
            url={replaceSpecialChars(category)}
            label={category}
          />
          <LinkElement 
            id={`link-to-${slug}`}
            url={slug}
            label={title}
          />
          <LinkElement 
            id={`link-to-${replaceSpecialChars(date)}`}
            url={replaceSpecialChars(date)}
            label={date}
          />
        </S.Wrapper>
      ))}
    </S.Container>
    
  );
};

export default Sidebar;
