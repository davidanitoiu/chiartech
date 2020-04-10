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
    title: {
      flex: 3,
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
        animation: "logo 15s linear infinite",
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
        animation: "ldsDualRing 15s linear infinite",
      },
    },
  }))