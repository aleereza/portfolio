import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

// const wrapperStyle = css`
//   display: flex;
//   flex-direction: column;
//   a {
//     color: #6d6d6d;
//     text-decoration: none;
//     margin-bottom: 1rem;
//     &:last-child {
//       margin-bottom: unset;
//     }
//   }

//   @media (min-width: 480px) {
//     flex-direction: row;
//     a {
//       margin-bottom: 0;
//       margin-right: 1rem;
//       &:last-child {
//         margin-right: unset;
//       }
//     }
//   }
// `
// const linkActiveStyle = {
//   color: "black",
// }

const Project = props => {
  return (
    <div key={props.index}>
      <Link to={props.path}>
        <p>{props.title}</p>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: props.html }} />
      <Img fluid={props.image} />
    </div>
  )
}

export default Project
