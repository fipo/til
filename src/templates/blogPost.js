import React from 'react';
import { graphql } from 'gatsby';

import Link from 'gatsby-link';

import Layout from '../components/layout';

class BlogPost extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <Link to="/">Back</Link>
      </Layout>
    );
  }
}

export default BlogPost;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;
