module.exports = {
  siteMetadata: {
    title: "CHIARTECH",
    description: "Divert auxilliary power to IT Awesomeness",
    author: "@davidanitoiu",
    pageLinks: [{
      title: "Docs",
      path: "/docs"
    },
    {
      title: "Playground",
      path: "/playground"
    },
    {
      title: "About",
      path: "/about",
    }]
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/assets/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chiartech`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        ["@pages"]: `${__dirname}/src/pages`,
        ["@components"]: `${__dirname}/src/components`,
        ["@assets"]: `${__dirname}/src/assets`,
        ["@images"]: `${__dirname}/src/assets/images`,
        ["@utils"]: `${__dirname}/src/utils`,
        ["@hooks"]: `${__dirname}/src/utils/hooks`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/layout.tsx`),
      },
    }
  ],
}
