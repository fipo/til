import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import '../styles/global.css'

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          html: string
          frontmatter: {
            path: string
            title: string
            date: string
            author: string
          }
        }
      }[]
    }
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

export const BLOG_INDEX_QUERY = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 100) {
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

export default function IndexPage({ data }: Props) {
  const {
    site: { siteMetadata },
    allMarkdownRemark
  } = data

  console.log(data)

  return (
    <>
      <Header />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={siteMetadata.title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[
          { name: 'description', content: siteMetadata.title },
          { property: 'og:title', content: siteMetadata.title },
          { property: 'og:description', content: siteMetadata.title },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: siteMetadata.author },
          { name: 'twitter:title', content: siteMetadata.title },
          { name: 'twitter:description', content: siteMetadata.title },
          { name: 'google-site-verification', content: 'IqAIRt96l_n1mzvYO-w9ph73bl_gSSlT6jJ9c_XRf5c' },
          { name: 'keywords', content: 'til, today i learned, front-end, javascript, rails, graphql, react' }
        ]}
      />

      <main className="list">
        {allMarkdownRemark.edges.map(({ node: { id, frontmatter, html } }) => (
          <article className="post" key={id}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="post-author-and-date">
              <a href={`https://twitter.com/${frontmatter.author}`} target="_blank" rel="noopener noreferrer">
                {frontmatter.author}
              </a>
              <br />
              {frontmatter.date}
            </div>
          </article>
        ))}
      </main>
    </>
  )
}
