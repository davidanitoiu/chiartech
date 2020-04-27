import {
  AppBar,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import usePageLinks from "@utils/hooks/static-queries/usePageLinks"
import { Link } from "gatsby"
import React from "react"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Logo } from "../logo/logo"
import useStyles from "./header.styles"
import MobileMenu from "./mobileMenu"
import Menu from "./menu"

const Header = ({ siteTitle = "", ...props }) => {
  const classes = useStyles()
  const pagelinks = usePageLinks()

  const greaterThanLg = useMediaQuery(theme.breakpoints.up("lg"))

  return (
    <header {...props}>
      <AppBar position="static" className={classes.appBar}>
        <Container className={classes.header}>
          <Link to="/" className={classes.titleLink}>
            <Hidden smDown>
              <Logo />
            </Hidden>
            <Typography
              variant={"h3"}
              component={"h1"}
              className={classes.title}
            >
              {siteTitle}
            </Typography>
          </Link>
          <nav className={classes.menu}>
            {greaterThanLg ? (
              <Menu links={pagelinks} />
            ) : (
              <MobileMenu links={pagelinks} />
            )}
          </nav>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
