import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'til',
        'today i learned',
        'front-end',
        'javascript',
        'gatsby',
        'application',
        'react',
      ]}
    />

    <main className='list'>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <article className='post' key={node.id}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <small>
              <a
                href={`https://twitter.com/${node.frontmatter.author}`}
                target="_blanks"
              >
                {node.frontmatter.author}
              </a>
              {node.frontmatter.date}
            </small>
          </article>
        );
      })}
    </main>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const indexPageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
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
`;

export default IndexPage;
