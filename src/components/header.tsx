import { Link } from "gatsby"
import React from "react"
import { AppBar, Typography, Container } from "@material-ui/core"
import useStyles from "./header.styles"
import { Logo } from "./logo/logo"

const Header = ({ siteTitle = "" }) => {
  const classes = useStyles()

  return (
    <header>
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.header}>
        <Link to="/" className={classes.titleLink}>
          <Logo/>
          <Typography variant={"h3"} component={"h1"} className={classes.title}>
            {siteTitle}
          </Typography>
        </Link>
        <nav className={classes.menu}>
          <Typography
            variant={"subtitle1"}
            component={Link}
            className={classes.menuLink}
            to="/404/"
          >
            About
          </Typography>
          <Typography
            variant={"subtitle1"}
            component={Link}
            className={classes.menuLink}
            to="/page-2/"
          >
            Contact
          </Typography>
        </nav>
      </Container>
    </AppBar>
    </header>
  )
}

export default Header
