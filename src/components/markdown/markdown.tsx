import SEO from "@components/seo"
import { Container } from "@material-ui/core"
import React from "react"
import { MarkdownDoc } from "@utils/types/markdown"
import useStyles from "./markdown.styles"

const Markdown = ({data}: MarkdownDoc) => {
  const classes = useStyles()
  const {html, frontmatter: {title}} = data.markdownRemark

  return (
    <>
      <SEO title={title} />
      <Container className={classes.root}>
        <div
         className={classes.markdown}
         dangerouslySetInnerHTML={{ __html: html }}
         />
      </Container>
    </>
  )
}

export default Markdown
