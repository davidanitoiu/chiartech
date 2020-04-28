import { makeStyles, Theme } from "@material-ui/core";
import Color from "color"

export default makeStyles<Theme>(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: `${Color(theme.palette.primary.main).darken(0.95).alpha(0.65)}`,
    boxShadow: "none",
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  titleLink: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    alignItems: 'center',
    outline: 'none!important'
  },
  title: {
    fontFamily: "Electrolize",
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
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    justifyContent: "space-evenly",
    textShadow: `0 0 4px ${Color(theme.palette.primary.main).alpha(0.65)}`,
    transition: "all 0.3s ease-out",
    outline: 'none!important',
    "&:hover": {
      color: theme.palette.text.primary,
      textShadow: `0 0 4px ${Color(theme.palette.text.primary).alpha(0.65)}`,
    },
  },
  menuLinkActive: {
    color: theme.palette.text.primary,
    textShadow: `0 0 4px ${Color(theme.palette.text.primary).alpha(0.65)}`,
  }
}))