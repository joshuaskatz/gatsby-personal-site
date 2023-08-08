import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function MainNav() {
  return (
    <div className="p-2 flex flex-col md:flex-row md:p-5 md:sticky top-0 z-50 bg-white">
      <div className="flex flex-col md:flex-row md:items-center">
        <Link to="/">about</Link>
        <Link to="/photography" className="md:m-5">
          photography
        </Link>
        <Link to="/software-development">software development</Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center xl:hidden">
        <a href={withPrefix('Joshua_Katz_Resume.pdf')} download className="md:m-5">
          résumé
        </a>
        <a href="https://github.com/joshuaskatz" target="_blank" rel="noopenner noreferrer">
          github
        </a>
      </div>
    </div>
  )
}
