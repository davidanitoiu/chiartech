import "./header.css"
import { Link } from "gatsby"
import React from "react"
import { AppBar, Typography, Container } from "@material-ui/core"
import useStyles from './header.styles';

const Header = ({ siteTitle = "" }) => {
  const classes = useStyles()

  return (  
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.header}>
        <div className={classes.ldsDualRing}/>
        <Typography variant={"h3"} component={"h1"} className={classes.title}>
          {siteTitle}
        </Typography>
        <nav className={classes.menu}>
          <Typography
            variant={"subtitle1"}
            component={Link}
            className={classes.menuLink}
            to="/page-2/"
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
  )
}

export default Header
