import React from "react"
import { css } from "@emotion/core"
import { navbarLinks } from "../../../data/info"
import { Link } from "gatsby"

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  a {
    color: #6d6d6d;
    text-decoration: none;
    margin: 2rem auto 0 auto;
    &:last-child {
      margin-bottom: unset;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
    a {
      margin: 0 0 0 1rem;
      &:last-child {
        margin-right: unset;
      }
    }
  }
`
const linkActiveStyle = {
  color: "black",
}

const NavbarLinks = ({ toggle }) => {
  return (
    <div css={wrapperStyle}>
      {navbarLinks.map((item, index) => (
        <Link
          key={index}
          to={`${item.path}`}
          onClick={toggle}
          activeStyle={linkActiveStyle}
        >
          {item.text}
        </Link>
      ))}
    </div>
  )
}

export default NavbarLinks
