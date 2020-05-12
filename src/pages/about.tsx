import svgBorder from "@images/border.svg"
import { Avatar, Card, CardActions, CardContent, CardHeader, Chip, Container, makeStyles, Snackbar, Theme, useTheme, SnackbarContent } from "@material-ui/core"
import Color from "color"
import { graphql } from "gatsby"
import React from "react"
import { MdMail } from "react-icons/md"

const useStyles = makeStyles<Theme>(theme => ({
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
  container: {
    marginBottom: theme.spacing(2),
  },
  card: {
    background: `${Color(theme.palette.primary.main)
      .darken(0.95)
      .alpha(0.6)}`,
    borderImage: `url(${svgBorder}) 50 50`,
    boxSizing: "border-box",
    borderStyle: "inset",
    borderWidth: 20,
    margin: theme.spacing(2)
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    borderStyle: `solid`,
    borderColor: `${theme.palette.primary.main}`,
    borderWidth: 0,
  },
  mail: {
    borderColor: theme.palette.primary.main,
  },
  snackbar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  }
}))

interface About {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string,
            frontmatter: {
              title: string
            }
          }
        }
      ]
    },
    imageSharp: {
      fluid: {
        srcWebp: string
      }
    }
  }
}

const About = ({ data }: About) => {
  const classes = useStyles()
  const avatar = data.imageSharp.fluid.srcWebp
  const {palette: { primary }} = useTheme()
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const mail = "contact@chiartech.com"

  const handleMail = () => window.open(`mailto:${mail}`)
  const handleChip = () => {
    navigator.clipboard.writeText(mail)
    setSnackbarOpen(true);
  }
  const snackbarClose = () => setSnackbarOpen(false)

  return (
    <>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                alt="David Anitoiu"
                src={avatar}
              />
            }
            title={"David Anitoiu"}
            subheader={"Great Overlord of Chiartech"}
          />
          <CardContent
            
          />
          <CardActions>
            <Chip
              avatar={<MdMail color={primary.main} onClick={handleMail} />}
              label={mail}
              onClick={handleChip}
              variant="outlined"
              className={classes.mail}
            />
          </CardActions>
        </Card>
      </Container>
      <Snackbar
        open={snackbarOpen}
        onClose={snackbarClose}
        autoHideDuration={1000}
        role={"alert"}
      >
        <SnackbarContent message={"Copied to clipboard"} className={classes.snackbar}/>
      </Snackbar>
    </>
  )
}

export const pageQuery = graphql`
  query ABOUT {
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/About/" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    imageSharp(fluid: { src: { regex: "/profile/" } }) {
      fluid {
        srcWebp
      }
    }
  }
`

export default About
