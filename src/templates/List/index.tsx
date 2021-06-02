import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from "gatsby-plugin-image"


import Layout from '../../components/Layout';
import PostSection from '../../components/PostSection';

const PostList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const image = getImage(postList)


  const { currentPage, numPages } = props.pageContext;
  const isFirst = Boolean(currentPage === 1)
  const isLast = Boolean(currentPage === numPages)
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage-1}`
  const nextPage = `page/${currentPage+1}` 

  return (
    <Layout 
      isIndex={isFirst}
      isFirst={isFirst}
      isLast={isLast}
      currentPage={currentPage}
      numPages={numPages}
      prevPage={prevPage}
      nextPage={nextPage}
    >
      {postList.map(
        ({
          node: {
            frontmatter: { 
              title, 
              cover: {
                childImageSharp: {
                  fluid: {
                    src
                  }
                }
              },
              category, 
              date, 
            },
            timeToRead,
            excerpt,
            fields: { slug },
          },
        }) => (
          <PostSection
            id="post"
            title={title}
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            description={excerpt}
            image={image}
          />
        )
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            category
            date(locale: "pt-br", formatString: "MMMM DD, YYYY")
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default PostList;
