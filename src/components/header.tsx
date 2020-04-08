import { Link } from "gatsby"
import React from "react"
import { AppBar, Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Color from "color"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: `${Color("#000000").alpha(0.65)}`,
    boxShadow: "none",
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flex: 3,
    color: theme.palette.primary.main,
    textShadow: `0 0 4px ${Color(theme.palette.primary.main).alpha(0.65)}`,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  menu: {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
  menuLink: {
    flex: 1,
    textDecoration: "none",
    color: theme.palette.primary.main,
    justifyContent: "space-evenly",
    textShadow: `0 0 4px ${Color(theme.palette.primary.main).alpha(0.65)}`,
    transition: "all 0.3s ease-out",
    "&:hover": {
      color: theme.palette.text.primary,
      textShadow: `0 0 4px ${Color(theme.palette.text.primary).alpha(0.65)}`,
    },
  },
}))

const Header = ({ siteTitle = "" }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container className={classes.header}>
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
            Impressum
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
