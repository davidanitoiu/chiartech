import { makeStyles, Theme } from "@material-ui/core";
import Color from "color"

export default makeStyles<Theme>(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: `rgba(0,0,0,.65)`,
    boxShadow: "none",
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  titleLink: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Electrolize',
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
  ldsDualRing: {
    display: "inline-block",
    width: 80,
    height: 80,
    "&:before": {
      position: "absolute",
      content: `""`,
      color: "#009688",
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: "xx-large",
      fontFamily: 'icomoon',
      lineHeight: `64px`,
      margin: 8,
      textAlign: "center",
      transform: `scale(1.7)`,
      textShadow: `0 0 4px ${Color(theme.palette.primary.main).alpha(0.65)}`,
    },
    "&:after": {
      position: "absolute",
      content: `" "`,
      display: "inline-block",
      width: 64,
      height: 64,
      lineHeight: 48,
      margin: 8,
      borderRadius: "50%",
      border: "5px solid",
      borderColor: `${theme.palette.primary.main} transparent ${theme.palette.primary.main} transparent`,
      animation: `$ldsDualRing 7s linear infinite`,

    },
  },
  '@keyframes ldsDualRing': {
    '0%': {
      transform: `rotate(0deg)`,
    },
    '25%': {
      transform: `rotate(90deg)`,
    },
    '50%': {
      transform: `rotate(180deg)`,
    },
    '75%': {
      transform: `rotate(270deg)`,
    },
    '100%': {
      transform: `rotate(360deg)`,
    },
  },
}))