import React from "react"
import SEO from "../components/seo"
import SocialLinks from "../components/Social/social_links"
import { css } from "@emotion/core"

const IndexPage = props => {
  const projectsData = props.data.allProjects.edges
  const introStyle = css`
    font-size: 3rem;
    line-height: 1;
    /* font-family: "Montserrat"; */
  `
  return (
    <>
      <SEO title="Home" />
      <p css={introStyle}>
        I am a front-end developer, mostly enjoying React and Gatsby.
      </p>
      <p css={introStyle}>
        and I am an AWS certified developer and interested in DevOps.
      </p>
      <SocialLinks />
      <div>
        <h1>My Projects:</h1>
        {projectsData.map((project, index) => (
          <p key={index}>{project.node.frontmatter.title}</p>
        ))}
      </div>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allProjects: allMarkdownRemark(filter: {}) {
      edges {
        node {
          frontmatter {
            date
            path
            title
          }
          html
        }
      }
    }
  }
`
