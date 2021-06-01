import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostSection from '../components/PostSection';

const HomePage = ( ) => {

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query PostList {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}
        limit: 8
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY", locale: "PT-BR")
              category
              categoryUrl
            }
            timeToRead
            excerpt(format: PLAIN)
            fields {
              slug
            }
          }
        }
      }
    }       
    `)

  const postList = allMarkdownRemark.edges;

  return (
    <Layout isIndex>
      {postList.map(({
        node: { 
          frontmatter: { 
            title, 
            date, 
            category, 
            categoryUrl 
          },
          timeToRead,
          excerpt,
          fields: {
            slug
          }
        },
      }) => (
        <PostSection 
          id="post"
          slug={slug}
          title={title} 
          date={date} 
          description={excerpt}
          category={category}
          categoryUrl={categoryUrl}
          timeToRead={timeToRead}
        />
      ))}
    </Layout>
  );
};

export default HomePage;
