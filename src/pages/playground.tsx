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

const Playground = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Playground" />
      <Container className={classes.root}>
        <h1>Welcome to the playground</h1>
      </Container>
    </>
  )
}

export default Playground
