import { Link } from "gatsby"
import React from "react"
import { AppBar, Typography, Container } from "@material-ui/core"
import useStyles from "./header.styles"
import { Logo } from "./logo/logo"
import usePageLinks from "@utils/hooks/static-queries/usePageLinks"

const Header = ({ siteTitle = "", ...props }) => {
  const classes = useStyles()
  const pagelinks = usePageLinks()

  return (
    <header {...props}>
      <AppBar position="static" className={classes.appBar}>
        <Container className={classes.header}>
          <Link to="/" className={classes.titleLink}>
            <Logo />
            <Typography
              variant={"h3"}
              component={"h1"}
              className={classes.title}
            >
              {siteTitle}
            </Typography>
          </Link>
          <nav className={classes.menu}>
            {pagelinks.map(pagelink => (
              <Typography
                variant={"h6"}
                component={Link}
                className={classes.menuLink}
                to={pagelink.path}
              >{pagelink.title}</Typography>
            ))}
          </nav>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
