import "@assets/fonts/fonts.css"
import React from "react"
import { Link } from "gatsby"
import SEO from "@components/seo"
import {
  Typography,
  makeStyles,
  Container,
  ButtonGroup,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import { Logo } from "@components/logo/logo"
import useSiteMetadata from "@utils/hooks/useSiteMetadata"
import Color from "color"
import Background from "@images/flight-through-deep-space-nebula-footage-077483924_prevstill.webp"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Background})`,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
  title: {
    color: theme.palette.secondary.main,
    textShadow: `0 0 7px ${Color(theme.palette.secondary.main).alpha(0.65)}`,
  },
  description: {
    color: theme.palette.primary.main,
    marginBottom: 16,
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const siteMetadata = useSiteMetadata()

  return (
    <div className={classes.root}>
      <SEO title="Home" />
      <Container className={classes.container}>
        <Logo size={128} borderWidth={9} />
        <Typography className={classes.title} variant={"h1"}>
          {siteMetadata.title}
        </Typography>
        <Typography
          className={classes.description}
          variant={"h3"}
          component={"h2"}
        >
          {siteMetadata.description}
        </Typography>
        <ButtonGroup color="secondary" fullWidth={true} aria-label="navigation button group">
          <Button to="/page-2">About</Button>
          <Button to="/page-2">Awesome Stuff</Button>
          <Button to="/404">Contact</Button>
        </ButtonGroup>
      </Container>
    </div>
  )
}

export default IndexPage
