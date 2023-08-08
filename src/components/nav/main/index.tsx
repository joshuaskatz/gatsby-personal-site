import React from 'react'
import { Link, withPrefix } from 'gatsby'

export default function MainNav() {
  return (
    <div className="p-2 md:p-5 sticky top-0 z-50 bg-white">
      <Link to="/">about</Link>
      <Link to="/photography" className="m-5">
        photography
      </Link>
      <Link to="/software-development">software development</Link>
    </div>
  )
}
