import React from "react"
import SEO from "@components/seo"
import { Container, Typography, makeStyles } from "@material-ui/core"
import { random } from "lodash"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
}))

const fourOhFours = [
  `You just hit a route that doesn't exist... the sadness.`,
  `This is not the place you're looking for!`,
  `4, 8, 15, 16, 23, 42`,
  `The answers are within`,
  `Nooooooooooooooooooooooooooooooo`,
  `There is no place like home!`,
  `The Matrix has you!`,
  `A continuing mission to explore strange new worlds`,
  `Rule of Acquisition #25`,
  `Ignorance is bliss`,
  `Follow the white rabbit`,
  `Power overwhelming`,
  `All your navigation are belong to us`,
  `Mediiiiiiiiic`,
  `Now go away or I will taunt you a second time`,
  `All right, we'll call it a draw`,
  `Ni`,
  `\\s\\parrot\\page`,
  `Come back and get what's coming to you!`,
  `Blue!... No! Yellooooooooo...`,
  `Get to the choppah!`,
  `You gotta get outta here`,
  `You'll be back!`,
  `Why are you wearing a red shirt?`,
  `Oh, so you bent the knee, huh?`,
  `THIS IS SPARTA!`,
  `Who said anything about cake?`,
  `It seems you're all out of bubblegum`,
  `FINISH IT!`,
  `Would you kindly…`,
  `Nothing is true, everything is permitted`,
  `Praise the sun!`,
  `I never asked for this`,
  `You’ve met with a terrible fate, haven’t you?`,
  `Did I ever tell you the definition of insanity?`,
  `no u`,
  `The cake is a lie`,
  `Think off-center`,
]

const NotFoundPage = () => {
  const classes = useStyles()
  const getRandomFourOhFour = () => fourOhFours[random(0, fourOhFours.length-1)]

  return (
    <>
      <SEO title="404: Not found" />
      <Container className={classes.container}>
        <Typography variant={"h1"}>404</Typography>
        <Typography variant={"body1"}>{getRandomFourOhFour()}</Typography>
      </Container>
    </>
  )
}

export default NotFoundPage
