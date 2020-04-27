import SEO from "@components/seo"
import { Container } from "@material-ui/core"
import useMarkdownStyles from "@utils/hooks/useMarkdownStyles"
import { graphql } from "gatsby"
import React from "react"
import { MarkdownDoc } from "@utils/types/markdown"
import Markdown from "@components/markdown/markdown"

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
