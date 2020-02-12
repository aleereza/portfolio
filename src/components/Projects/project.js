import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Img from "gatsby-image"

const flexContainerStyle = css`
  margin: 1rem 0;
  /* @media (min-width: 480px) {
    display: flex;
  } */
`
const textContainerStyle = css`
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
  line-height: 1.3;
  flex: 1 1 0;
`

const imageContainerStyle = css`
  flex: 1 1 0;
  border: 2px solid black;
`

const hrStyle = css`
  width: 40%;
  height: 1px;
  background-color: black;
  margin: auto;
  /* border: 5px solid black; */
`

const Project = props => {
  return (
    <div>
      <div css={flexContainerStyle} key={props.index}>
        <article css={textContainerStyle}>
          <a href={props.website}>
            <span>{props.title}</span>
          </a>
          <span> | </span>
          <a href={props.source}>
            <small>Source</small>
          </a>
          {/* <p dangerouslySetInnerHTML={{ __html: props.html }} /> */}
        </article>
        <div css={imageContainerStyle}>
          {/* <Link to={props.path}>
            <Img fluid={props.image} />
          </Link> */}
          <a href={props.website}>
            <Img fluid={props.image} />
          </a>
        </div>
      </div>
      <hr css={hrStyle} />
    </div>
  )
}

export default Project
