import React from "react"
import SEO from "@components/seo"
import { makeStyles, Container } from "@material-ui/core"
import svgBorder from '@images/border.svg'
import Color from "color"
import { graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
  },
  docs: {
    background: `${Color(theme.palette.secondary.main).darken(0.95).alpha(0.65)}`,
    borderImage: `url(${svgBorder}) 50 50`,
    boxSizing: 'border-box',
    borderStyle: 'inset',
    borderWidth: 20,
    color: theme.palette.primary.main,
    "& > h1, h2,h3, h4, h5, h6": {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
      textShadow: `0 0 4px ${Color(theme.palette.secondary.main).alpha(0.65)}`,
    }
  }
}))

interface MarkdownDoc {
  data: {
    markdownRemark: {
      html: string
    }
  }
}

const Docs = ({data}: MarkdownDoc) => {
  const classes = useStyles()
  const { markdownRemark: {html} } = data 

  return (
    <>
      <SEO title="Docs" />
      <Container className={classes.root}>
        <div
         className={classes.docs}
         dangerouslySetInnerHTML={{ __html: html }}
         />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query FIRST_DOC {
    markdownRemark(frontmatter: {path: {eq: "/docs/first"}}) {
      html
    }
  }
`

export default Docs
