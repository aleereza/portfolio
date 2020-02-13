import React from "react"
import SEO from "../components/seo"
import Project from "../components/Projects/project"
import { graphql } from "gatsby"

const ProjectsPage = props => {
  const projectsData = props.data.allProjects.edges

  //create image hash table
  let images_quantity = props.data.allProjectImage.edges.length
  let allProjectImageData = {}
  let key = ""
  for (let i = 0; i < images_quantity; i++) {
    key = props.data.allProjectImage.edges[
      i
    ].node.childImageSharp.fluid.originalName.split(".")[0]
    allProjectImageData[key] =
      props.data.allProjectImage.edges[i].node.childImageSharp.fluid
  }

  return (
    <>
      <SEO title="Projects" />
      <div>
        {projectsData.map((project, index) => (
          <Project
            index={project.node.frontmatter.index}
            title={project.node.frontmatter.title}
            path={project.node.frontmatter.path}
            source={project.node.frontmatter.source}
            website={project.node.frontmatter.website}
            html={project.node.html}
            image={allProjectImageData[project.node.frontmatter.index]}
          />
        ))}
      </div>
    </>
  )
}
export default ProjectsPage

export const query = graphql`
  query ProjectsPageQuery {
    allProjects: allMarkdownRemark(filter: {}) {
      edges {
        node {
          frontmatter {
            index
            path
            title
            source
            website
          }
          html
        }
      }
    }

    allProjectImage: allFile(
      filter: { sourceInstanceName: { eq: "project_images" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`
