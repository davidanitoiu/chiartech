import React from "react"
import SEO from "@components/seo"
import { makeStyles, Container, Card, CardHeader } from "@material-ui/core"
import Color from "color"
import { navigate } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  projects: {
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: theme.spacing(5),
      rowGap: `${theme.spacing(5)}px`,
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      height: "100%",
      justifyContent: "space-evenly",
      flexDirection: "column"
    },
  },
  cardTitle: {
    color: theme.palette.primary.main,
  },
  cardSubheader: {
    color: `${Color(theme.palette.primary.main).desaturate(0.35)}`,
  },
  description: {
    color: `${Color(theme.palette.primary.dark).desaturate(0.35)}`,
    transition: ".3s ease-out",
  },
  card: {
    background: `${Color(theme.palette.primary.main)
      .darken(0.95)
      .alpha(0.6)}`,
    border: `2px solid ${theme.palette.primary.main}`,
    transition: ".3s ease-out",
    cursor: "pointer",
    "&:hover": {
      border: `2px solid ${theme.palette.common.white}`,
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardButton: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}))

const projects = [
  {
    title: "Interactive Flowchart",
    description: "An implementation of an interactive flow chart with Redux",
    target: "/playground/pipeline",
  },
  {
    title: "Date formatter",
    description: "A tool that returns a dateformat based on the entered date",
    target: "/playground/dateformatter",
  },
  {
    title: "Project Euler",
    description: "Various project euler problems including their test cases",
    target: "/playground/projecteuler",
  },
  {
    title: "Misc",
    description: "Tiny pet programs, inspired by various coders around the web",
    target: "/playground/misc",
  },
]

const Playground = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Playground" />
      <Container className={classes.root}>
        <div className={classes.projects}>
          {projects.map((project, i) => (
            <Card
              key={i}
              variant={"outlined"}
              className={classes.card}
              onClick={() => navigate(project.target)}
            >
              <CardHeader
                title={project.title}
                titleTypographyProps={{ className: classes.cardTitle }}
                subheader={project.description}
                subheaderTypographyProps={{ className: classes.cardSubheader }}
              />
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Playground
