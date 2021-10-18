/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blogPost.tsx`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  html
                  frontmatter {
                    path
                    title
                    date
                    author
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `${edge.node.frontmatter.path}`, // required
            component: blogPostTemplate,
            context: {
              // Add optional context data. Data can be used as
              // arguments to the page GraphQL query.
              //
              // The page "path" is always available as a GraphQL
              // argument.
            }
          })
        })

        return
      })
    )
  })
}
