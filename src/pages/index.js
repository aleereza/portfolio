import React from "react"

import SEO from "../components/seo"
import SocialLinks from "../components/Social/social_links"
import { css } from "@emotion/core"

const IndexPage = props => {
  const introStyle = css`
    font-size: 3rem;
    line-height: 1.3;
    margin: 1rem 0;
    p {
      margin: 0;
      text-align: center;
    }
  `

  // const introContainerStyle = css`

  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // `

  return (
    <>
      <SEO title="Home" />

      <article css={introStyle}>
        <p>I am a front-end developer, mostly enjoying React and Gatsby.</p>
        <p>and I am an AWS certified developer and interested in DevOps.</p>
      </article>
      <SocialLinks />
    </>
  )
}

export default IndexPage
