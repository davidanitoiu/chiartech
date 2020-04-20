import React from "react"
import { Link } from "gatsby"
import SEO from "@components/seo"
import { makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Docs = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Docs" />
      <Container className={classes.root}>
        <h1>Welcome to the docs</h1>
      </Container>
    </>
  )
}

export default Docs
