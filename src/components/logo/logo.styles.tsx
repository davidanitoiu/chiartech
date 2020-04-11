import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"
import Color from "color"

const DEFAULT = {
  SIZE: 64,
}

type StyleProps = {
  size?: number
}

export default makeStyles<Theme>(theme => ({
  "@keyframes ldsDualRing": {
    "0%": {
      transform: `rotate(0deg)`,
    },
    "25%": {
      transform: `rotate(90deg)`,
    },
    "50%": {
      transform: `rotate(180deg)`,
    },
    "75%": {
      transform: `rotate(270deg)`,
    },
    "100%": {
      transform: `rotate(360deg)`,
    },
  },
  logo: {
    display: "inline-block",
    width: ({ size = DEFAULT.SIZE }: StyleProps) => size + size / 4,
    height: ({ size = DEFAULT.SIZE }: StyleProps) => size + size / 4,
    "&:before": {
      position: "absolute",
      width: ({ size = DEFAULT.SIZE }: StyleProps) => size,
      content: `""`,
      color: "#009688",
      fontSize: ({ size = DEFAULT.SIZE }: StyleProps) => `${size / 2}px`,
      fontFamily: "icomoon",
      lineHeight: ({ size = DEFAULT.SIZE }: StyleProps) => `${size}px`,
      margin: 8,
      textAlign: "center",
      textShadow: `0 0 4px ${Color(theme.palette.primary.main).alpha(0.65)}`,
    },
    "&:after": {
      position: "absolute",
      content: `" "`,
      display: "inline-block",
      width: ({ size = DEFAULT.SIZE }: StyleProps) => size,
      height: ({ size = DEFAULT.SIZE }: StyleProps) => size,
      lineHeight: 48,
      margin: 8,
      borderRadius: "50%",
      border: "5px solid",
      borderColor: `${theme.palette.primary.main} transparent ${theme.palette.primary.main} transparent`,
      animation: `$ldsDualRing 7s linear infinite`,
    },
  },
}))
