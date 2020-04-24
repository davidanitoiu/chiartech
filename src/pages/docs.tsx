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
    background: `${Color(theme.palette.secondary.main).darken(0.95).alpha(0.85)}`,
    borderImage: `url(${svgBorder}) 50 50`,
    boxSizing: 'border-box',
    borderStyle: 'inset',
    borderWidth: 20,
    overflowY: "scroll",
    color: `${Color(theme.palette.secondary.main).desaturate(0.35)}`,
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.action.disabledBackground}`,
    "& > h1, h2,h3, h4, h5, h6, a": {
      color: theme.palette.secondary.main,
    },
    "& a": {
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: ".8s",
      "&:hover":{
        color: theme.palette.common.white
      }
    },
    "& pre": {
      backgroundColor: `${Color(theme.palette.secondary.dark).desaturate(0.7)}`,
      width: 'fit-content',
      padding: theme.spacing(1,2),
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius
    },
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.action.disabledBackground,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      border: `3px solid ${theme.palette.action.disabledBackground}`
    },
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
