import React from "react"

import SEO from "../components/seo"
import SocialLinks from "../components/Social/social_links"
import { css } from "@emotion/core"

const IndexPage = props => {
  const introStyle = css`
    font-size: 2rem;
    line-height: 1.3;
    margin: 1rem 0;
    p {
      margin: 0;
      text-align: center;
    }
    @media (min-width: 480px) {
      font-size: 3rem;
      width: 80%;
      margin: 2rem auto;
    }
  `

  return (
    <>
      <SEO title="Home" />

      <article css={introStyle}>
        <p>I am a front-end developer, mostly enjoying React and Gatsby.</p>
        <p>and I am an AWS certified developer.</p>
      </article>
      <SocialLinks />
    </>
  )
}

export default IndexPage
