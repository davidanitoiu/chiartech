import { Link, makeStyles, Theme, Typography } from "@material-ui/core"
import Color from "color"
import React from "react"

const useStyles = makeStyles<Theme>(theme => ({
  footer: {
    color: `${Color(theme.palette.primary.main).desaturate(0.35)}`,
    textAlign: "center",
    marginBottom: theme.spacing(1),
    "& a": {
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: ".8s",
        "&:hover": {
          color: theme.palette.common.white,
          textDecoration: 'none',
        }
      }
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant={"subtitle2"}>
        © {new Date().getFullYear()}, Built with{" "}
        <Link
          variant={"subtitle2"}
          color={"primary"}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </Link>
      </Typography>
    </footer>
  )
}

export default Footer
