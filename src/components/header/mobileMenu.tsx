import {
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Color from "color"
import { navigate } from "gatsby"
import React from "react"
import {MdMenu as MenuIcon} from 'react-icons/md';
import { Pagelink } from "@utils/types/pagelink"

const useStyles = makeStyles<Theme>(theme => ({
  mobileMenu: {
    "& .MuiPaper-root": {
      backgroundColor: `${Color(theme.palette.primary.main)
        .darken(0.95)
        .alpha(0.95)}`,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  mobileMenuLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  mobileMenuIcon: {
      color: theme.palette.primary.main
  }
}))

interface IMobileMenu {
    links: Array<Pagelink>
}

const MobileMenu = ({ links }:IMobileMenu) => {
  const classes = useStyles()
  const mobileMenuId = "menu-mobile"
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color={"primary"}
      >
        <MenuIcon/>
      </IconButton>
      <Menu
        elevation={0}
        className={classes.mobileMenu}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {links.map((link, i) => (
          <MenuItem key={i}>
            <Typography
              key={i}
              variant={"h6"}
              className={classes.mobileMenuLink}
              onClick={() => {
                navigate(link.path)
                setMobileMoreAnchorEl(null)
              }}
            >
              {link.title}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default MobileMenu
