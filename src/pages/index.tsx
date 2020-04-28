import "@assets/fonts/fonts.css"
import React from "react"
import SEO from "@components/seo"
import {
  Typography,
  makeStyles,
  Container,
  ButtonGroup,
  useMediaQuery,
} from "@material-ui/core"
import { Button } from "gatsby-theme-material-ui"
import { Logo } from "@components/logo/logo"
import useSiteMetadata from "@utils/hooks/static-queries/useSiteMetadata"
import Color from "color"
import useStaticBackground from "@utils/hooks/static-queries/useStaticBackground"
import usePageLinks from "@utils/hooks/static-queries/usePageLinks"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

interface StyleProps {
  fileName: string
  greaterThanSm: boolean;
}

const useStyles = makeStyles(theme => ({
  root: {
    background: `no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundImage: ({ fileName }: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fileName})`,
  },
  container: {
    display: "flex",
    justifyContent: ({greaterThanSm}:StyleProps) => greaterThanSm ? "center": "space-evenly",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: `0 0 7px ${Color(theme.palette.primary.main).alpha(0.65)}`,
  },
  description: {
    color: theme.palette.primary.dark,
    marginBottom: 16,
  },
  pagelink: {
    textTransform: "capitalize",
  },
}))

const IndexPage = () => {
  const backgroundSrc = useStaticBackground()
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"))
  const classes = useStyles({ fileName: backgroundSrc, greaterThanSm })
  const siteMetadata = useSiteMetadata()
  const pagelinks = usePageLinks()
  

  return (
    <div className={classes.root}>
      <SEO title="Home" />
      <Container className={classes.container}>
        <Typography className={classes.title} variant={"h1"}>
          {siteMetadata.title}
        </Typography>
        <Typography
          className={classes.description}
          variant={"h3"}
          component={"h2"}
          align={"center"}
        >
          {siteMetadata.description}
        </Typography>
        <ButtonGroup
          color="primary"
          fullWidth={true}
          aria-label="navigation button group"
          orientation={greaterThanSm ? "horizontal" : "vertical"}
        >
          {pagelinks.map(pagelink => (
            <Button
              key={pagelink.title}
              className={classes.pagelink}
              to={pagelink.path}
            >
              {pagelink.title}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </div>
  )
}

export default IndexPage
