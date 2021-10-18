import { Link } from 'gatsby'
import React from 'react'

export default function Header() {
  return (
    <>
      <h1>
        <Link to="/">Today I Learned</Link>
      </h1>
      <small className="subtitle">
        Inspired by{' '}
        <a href="https://til.hashrocket.com/" target="_blank" rel="noopener noreferrer">
          til.hashrocket.com
        </a>
      </small>
    </>
  )
}
