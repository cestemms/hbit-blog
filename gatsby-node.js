const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`).then(result => {

    const posts = result.data.allMarkdownRemark.edges;
    
      posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Post/index.tsx`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      })
    })

    const postsPerPage = 8
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve(`./src/templates/List/index.tsx`),
        context: {
          limit: index === 0 ? postsPerPage - 1 : postsPerPage,
          skip: index === 0 ? 1 : index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}