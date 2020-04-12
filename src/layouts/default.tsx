/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import CssBaseline from "@material-ui/core/CssBaseline"
import React, { ReactNode } from "react"
import Header from "@components/header"
import useSiteMetadata from "@utils/hooks/useSiteMetadata"
import Background from "@images/flight-through-deep-space-nebula-footage-077483924_prevstill.webp"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${Background})`,
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  },
}))

interface Children {
  children: ReactNode
}

const Default = ({ children }: Children) => {
  const { title } = useSiteMetadata()
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Header siteTitle={title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Default
