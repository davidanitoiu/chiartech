import "@assets/fonts/fonts.css";
import React from "react"
import { Link } from "gatsby";
import Layout from "@components/layout"
import SEO from "@components/seo"
import { Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant={"h1"}>Hi people</Typography>
    <Typography variant={"body1"}>Welcome to your new Gatsby site.</Typography>
    <Typography variant={"body1"}>Now go build something great.</Typography>
    <Typography variant={"subtitle1"} component={Link} to="/page-2/">Go to page 2</Typography>
  </Layout>
)

export default IndexPage
