import React from "react"
import SEO from "../components/seo"

const IndexPage = props => {
  const projectsData = props.data.allProjects.edges
  console.log("here!", projectsData[0])
  return (
    <>
      <SEO title="Home" />
      <p>I am a front-end developer, mostly enjoying React and Gatsby.</p>
      <p>and I am an AWS certified developer and interested in DevOps.</p>
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
