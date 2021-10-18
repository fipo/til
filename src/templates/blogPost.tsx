import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Header from '../components/header'

type DataProps = {
  markdownRemark: {
    frontmatter: {
      title: string
      author: string
      date: string
    }
    html: string
  }
}

export const BLOG_POST_BY_PATH_QUERY = graphql`
  query BlogPostByPathQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`

const BlogPost: React.FC<PageProps<DataProps>> = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html }
  } = data
  return (
    <>
      <Header />
      <article className="post">
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="post-author-and-date">
          <a href={`https://twitter.com/${frontmatter.author}`} target="_blank" rel="noopener noreferrer">
            {frontmatter.author}
          </a>
          <br />
          {frontmatter.date}
        </div>
      </article>
    </>
  )
}

export default BlogPost
