/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CssBaseline from "@material-ui/core/CssBaseline"
import React, { ReactNode } from "react"
import Header from "@components/header"
import useSiteMetadata from "@utils/hooks/static-queries/useSiteMetadata"
import useStaticBackground from "@hooks/static-queries/useStaticBackground"
import { makeStyles } from "@material-ui/styles"
import Footer from "@components/footer"

interface StyleProps {
  fileName: string
}

const useStyles = makeStyles(theme => ({
  root: {
    background: `no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundImage: ({ fileName }: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fileName})`,
    margin: `0 auto`,
    minHeight: `100vh`,
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
      <div className={classes.root}>
        <CssBaseline />
        <Header className={classes.header} siteTitle={title} />
        <main className={classes.main}>{children}</main>
        <Footer />
      </div>
  )
}

export default Default
