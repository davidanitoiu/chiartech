/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import Footer from "@components/footer"
import Header from "@components/header"
import useStaticBackground from "@hooks/static-queries/useStaticBackground"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/styles"
import useSiteMetadata from "@utils/hooks/static-queries/useSiteMetadata"
import BackgroundImage from 'gatsby-background-image'
import React, { ReactNode } from "react"

interface StyleProps {
  fileName: string
}

const useStyles = makeStyles(theme => ({
  root: {
    background: `no-repeat center center fixed`,
    backgroundSize: "cover",
    margin: `0 auto`,
    minHeight: `100vh`,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flex: 1,
  },
  main: {
    padding: 10,
    flex: 10,
    overflow: "hidden",
  },
  footer: {},
}))

interface Children {
  children: ReactNode
}

const Default = ({ children }: Children) => {
  const backgroundSrc = useStaticBackground()
  const { title } = useSiteMetadata()
  const classes = useStyles({ fileName: backgroundSrc })



  return (
      <BackgroundImage
        backgroundColor={`#000`}
        Tag={"section"}
        fluid={backgroundSrc}
        className={classes.root}
      >
        <CssBaseline />
        <Header className={classes.header} siteTitle={title} />
        <main className={classes.main}>{children}</main>
        <Footer />
      </BackgroundImage>
  )
}

export default Default
