import SEO from "@components/seo"
import { Card, CardContent, CardHeader, Container, IconButton, Typography } from "@material-ui/core"
import { has } from "lodash"
import React from "react"
import { FaPlayCircle } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import { useStyles } from "./playground.styles"
import projects from "@utils/projects.json"

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
