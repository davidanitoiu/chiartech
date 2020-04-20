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

interface StyleProps {
  fileName: string
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: ({ fileName }: StyleProps) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fileName})`,
    margin: `0 auto`,
    minHeight: `100vh`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    flex: 1
  },
  main: {
    flex: 10
  },
  footer:{
  }
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
      <footer className={classes.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Default
