import "@assets/fonts/fonts.css"
import React from "react"
import SEO from "@components/seo"
import {
  Typography,
  makeStyles,
  Container,
  ButtonGroup,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import { Logo } from "@components/logo/logo"
import useSiteMetadata from "@utils/hooks/static-queries/useSiteMetadata"
import Color from "color"
import useStaticBackground from "@utils/hooks/static-queries/useStaticBackground"
import usePageLinks from "@utils/hooks/static-queries/usePageLinks"

interface StyleProps {
  fileName: string
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: ({ fileName }: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fileName})`,
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
  pagelink: {
    textTransform: "capitalize",
  },
}))

const IndexPage = () => {
  const backgroundSrc = useStaticBackground()
  const classes = useStyles({ fileName: backgroundSrc })
  const siteMetadata = useSiteMetadata()
  const pagelinks = usePageLinks()

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
        <ButtonGroup
          color="secondary"
          fullWidth={true}
          aria-label="navigation button group"
        >
          {pagelinks.map(pagelink => (
            <Button className={classes.pagelink} to={pagelink.path}>
              {pagelink.title}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </div>
  )
}

export default IndexPage
