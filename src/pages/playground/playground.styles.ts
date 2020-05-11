import Color from "color"
import svgBorder from '@images/border.svg';
import { makeStyles, Theme } from "@material-ui/core"

export const useStyles = makeStyles<Theme>(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    projects: {
        /* [theme.breakpoints.up("md")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: theme.spacing(5),
            rowGap: `${theme.spacing(5)}px`,
        }, */
        [theme.breakpoints.up("md")]: {
            display: "flex",
            height: "100%",
            justifyContent: "space-evenly",
            flexDirection: "column",
        },
        [theme.breakpoints.down("md")]: {
            display: "flex",
            height: "100%",
            justifyContent: "space-evenly",
            flexDirection: "column",
        },
    },
    cardTitle: {
        color: theme.palette.text.primary,
    },
    cardSubheader: {
        color: theme.palette.text.secondary
    },
    card: {
        background: `${Color(theme.palette.primary.main)
            .darken(0.95)
            .alpha(0.6)}`,
            borderImage: `url(${svgBorder}) 50 50`,
      boxSizing: 'border-box',
      borderStyle: 'inset',
      borderWidth: 20,
        
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .Mui-disabled": {
            color: theme.palette.text.primary
        }
    },
}))