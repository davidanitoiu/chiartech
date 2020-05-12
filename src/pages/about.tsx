import Markdown from "@components/markdown/markdown"
import { MarkdownDoc } from "@utils/types/markdown"
import { graphql } from "gatsby"
import React from "react"

const About = ({ data }: MarkdownDoc) => (
  <Markdown data={data} />
)

export const pageQuery = graphql`
  query ABOUT {
    markdownRemark(frontmatter: {title: {eq: "About"}}) {
        html
        frontmatter {
          title
        }
      }
  }
`

export default About
