import svgBorder from '@images/border.svg';
import { makeStyles } from "@material-ui/core";
import Color from "color";

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  markdown: {
    overflowY: "scroll",
    color: `${Color(theme.palette.primary.main).desaturate(0.35)}`,
    [theme.breakpoints.up('sm')]: {
      borderImage: `url(${svgBorder}) 50 50`,
      boxSizing: 'border-box',
      borderStyle: 'inset',
      borderWidth: 20,
      background: `${Color(theme.palette.primary.main).darken(0.95).alpha(0.85)}`,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      background: `${Color(theme.palette.primary.main).darken(0.95).alpha(0.65)}`,
      borderRadius: theme.shape.borderRadius
    },
    "& > h1, h2,h3, h4, h5, h6, a": {
      color: theme.palette.primary.main,
    },
    "& a": {
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: ".8s",
      "&:hover": {
        color: theme.palette.common.white
      }
    },
    "& pre": {
      backgroundColor: `${Color(theme.palette.primary.dark).desaturate(0.7)}`,
      width: 'fit-content',
      padding: theme.spacing(1, 2),
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius
    },
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.action.disabledBackground}`,
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-track": {
      background: theme.palette.action.disabledBackground,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      border: `3px solid ${theme.palette.action.disabledBackground}`
    },

  }
}))