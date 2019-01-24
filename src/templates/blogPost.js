import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

class BlogPost extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        <article className='post'>
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </article>
      </Layout>
    );
  }
}


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

export default BlogPost;
