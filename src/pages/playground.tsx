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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: theme.spacing(5),
    rowGap: `${theme.spacing(5)}px`,
  },
  cardTitle: {
      color: theme.palette.secondary.main,
  },
  cardSubheader: {
    color: `${Color(theme.palette.secondary.main).desaturate(0.35)}`,
  },
  description: {
    color: `${Color(theme.palette.secondary.dark).desaturate(0.35)}`,
    transition: ".3s ease-out",
  },
  card: {
    background: `${Color(theme.palette.secondary.main)
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
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}))

const projects = [
  {
    title: "Interactive Flowchart",
    description: "An implementation of an interactive flow chart with Redux",
  },
  {
    title: "Date formatter",
    description: "A tool that returns a dateformat based on the entered date",
  },
  {
    title: "Project Euler",
    description: "Various project euler problems including their test cases",
  },
  {
    title: "Misc",
    description: "Tiny pet programs, inspired by various coders around the web",
  },
]

const Playground = () => {
  const classes = useStyles()
  const handleClick = () => navigate('/404/');

  return (
    <>
      <SEO title="Playground" />
      <Container className={classes.root}>
        <div className={classes.projects}>
          {projects.map(project => (
            <Card 
            variant={"outlined"}
             className={classes.card}
             onClick={handleClick}
             >
              <CardHeader
                title={project.title}
                titleTypographyProps={{className:classes.cardTitle}}
                subheader={project.description}
                subheaderTypographyProps={{className:classes.cardSubheader}}
              />
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Playground
