import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
              date
            }
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <div id={id}>
      {postList.map(({
      node: {
        frontmatter: { category, title, date },
        fields: { slug }
        }
      }) => (
        <div>
          <div>{category}</div>
          <div>{title}</div>
          <div>{date}</div>
          <div>{slug}</div>
        </div>
      ))}
    </div>
    
  );
};

export default Sidebar;
