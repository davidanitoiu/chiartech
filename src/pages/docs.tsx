import Markdown from "@components/markdown/markdown"
import { MarkdownDoc } from "@utils/types/markdown"
import { graphql } from "gatsby"
import React from "react"

const Docs = ({ data }: MarkdownDoc) => (
  <Markdown data={data} />
)

export const pageQuery = graphql`
  query HOW_TO {
    markdownRemark(frontmatter: {title: {eq: "Docs"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Docs
