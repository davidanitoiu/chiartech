import SEO from "@components/seo"
import { Card, CardContent, CardHeader, Container, IconButton, Typography } from "@material-ui/core"
import { has } from "lodash"
import React from "react"
import { FaPlayCircle } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import projects from "@utils/projects.json"
import Color from "color"
import svgBorder from '@images/border.svg';
import { makeStyles, Theme } from "@material-ui/core"


interface GithubProject {
  title: string
  description: string
  language: string
  github: string
  demo: string
}

const getGithubUrl = (projectId: string) =>
  `https://github.com/davidanitoiu/${projectId}`
const getCodeSandboxUrl = (projectId: string) =>
  `https://codesandbox.io/embed/github/davidanitoiu/${projectId}?hidenavigation=1&theme=dark&view=preview`

const openLink = (url: string) => window.open(url)

const githubProjects: Array<GithubProject> = projects.map(project => ({
  title: project.title,
  description: project.description,
  language: project.language,
  github: getGithubUrl(project.projectId),
  demo: getCodeSandboxUrl(project.projectId)
}))

const useStyles = makeStyles<Theme>(theme => ({
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

const Playground = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Playground" />
      <Container className={classes.root}>
        <div className={classes.projects}>
          {githubProjects.map((project, i) => (
            <Card
              key={i}
              variant={"outlined"}
              className={classes.card}
            >
              <CardHeader
                title={project.title}
                titleTypographyProps={{ className: classes.cardTitle }}
                subheader={project.description}
                subheaderTypographyProps={{ className: classes.cardSubheader }}
                action={
                  <>
                    {has(project, "github") && (
                      <IconButton
                        aria-label="github"
                        color={"primary"}
                        onClick={() => openLink(project.github)}
                      >
                        <GoMarkGithub />
                      </IconButton>
                    )}
                    {has(project, "demo") && (
                      <IconButton
                        aria-label="demo"
                        color={"primary"}
                        onClick={() => openLink(project.demo)}
                      >
                        <FaPlayCircle />
                      </IconButton>
                    )}
                  </>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography variant={"body1"}>{project.language}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Playground
