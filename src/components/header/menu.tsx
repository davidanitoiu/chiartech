import { Typography } from "@material-ui/core"
import clsx from "clsx"
import { Link } from "gatsby"
import React from "react"
import useStyles from "./header.styles"
import { Pagelink } from "@utils/types/pagelink"

interface IMenu {
  links: Array<Pagelink>
}

const Menu = ({ links }:IMenu) => {
  const classes = useStyles()
  const isCurrentPath = (pagelinkPath: string) =>
    location.pathname.includes(pagelinkPath)

  return (
    <>
      {links.map((link, i) => (
        <Typography
          key={i}
          variant={"h6"}
          component={Link}
          className={
            isCurrentPath(link.path)
              ? clsx(classes.menuLink, classes.menuLinkActive)
              : classes.menuLink
          }
          to={link.path}
        >
          {link.title}
        </Typography>
      ))}
    </>
  )
}

export default Menu
