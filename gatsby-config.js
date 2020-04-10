module.exports = {
  siteMetadata: {
    title: "CHIARTECH",
    description: "IT Witchcraft Solutions",
    author: "@davidanitoiu",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Titillium Web",
              variants: ["400", "600"],
            },
            {
              family: "Electrolize",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        ["@src"]: `${__dirname}/src`,
        ["@pages"]: `${__dirname}/src/pages`,
        ["@components"]: `${__dirname}/src/components`,
        ["@assets"]: `${__dirname}/src/assets`
      }
    }
  ],
}
