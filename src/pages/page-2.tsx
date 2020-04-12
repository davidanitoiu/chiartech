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

const SecondPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Page two" />
      <Container className={classes.root}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </>
  )
}

export default SecondPage
