# Welcome to CHIARTECH

Just a regular gatsby landing page for now :)

## Gatsby

Set up the basic gatsby framework by following [this guide](https://www.gatsbyjs.org/docs/quick-start/)

## Typescript

Implemented Typescript according to this [guide](https://medium.com/@whoisryosuke/adding-typescript-to-gatsby-c4a8cdcb0e7e)

## Gatsby and TypeScript path support

Provided with gatsby-plugin-root-import & tsconfig.json

### Gatsby path support

1. Install the package

   ```bash
   npm install gatsby-plugin-root-import
   ```

1. Add the following lines to your gatsby-config.js, under your plugins:

   ```javascript
   {
     resolve: `gatsby-plugin-root-import`,
     options: {
       ["@src"]: `${__dirname}/src`,
       ["@pages"]: `${__dirname}/src/pages`,
       ["@components"]: `${__dirname}/src/components`,
       ["@assets"]: `${__dirname}/src/assets`
     }
   }
   ```

## Material UI Theme support

Implemented according to this [guide](https://www.gatsbyjs.org/packages/gatsby-theme-material-ui/?=material)

## Custom font with icomoon for logo SVG usage in header

Head over to [icomoon.io](https://icomoon.io/app/#/select).

1. Create new empty set
1. Upload your svg or select icons you intend to use
1. (optional) Position and resize your SVG
1. Press **'Generate Font'** & Download the ZIP
1. Unzip it locally
1. Copy the files in the _fonts_ folder to your project
1. add a _fonts.css_ file in the same folder with the following content

   ```css
   @font-face {
     font-family: "icomoon";
     src: url("./icomoon.eot?u9xe6o");
     src: url("./icomoon.eot?u9xe6o#iefix") format("embedded-opentype"), url("./icomoon.ttf?u9xe6o")
         format("truetype"), url("./icomoon.woff?u9xe6o") format("woff"), url("./icomoon.svg?u9xe6o#icomoon")
         format("svg");
     font-weight: normal;
     font-style: normal;
     font-display: block;
   }
   ```

1. (optional) bind the path in your gatsby paths & restart gatsby
1. Bind it in your project by importing the related css file on top of your page or component like so

   ```javascript
   import "../assets/fonts/fonts.css"
   ```

## Set up favicon

Under **gatsby-config.js** find **gatsby-plugin-manifest** and change the **icon** option to match the path to the SVG or PNG containing your logo

## Custom sciFi styling for the header and logo

Inspired by the [Arwes Project](https://arwes.dev/docs). Using the fonts, text-shadow and coloring.
Base components are based on material-ui due to their extensive and feature rich support.

The circle animation is implemented based on the pure CSS loader at [loading.io](https://loading.io/css/)

## Set up fluid background image with webp

Install [gatsby-background-image](https://www.gatsbyjs.org/packages/gatsby-background-image/)

```bash
npm i gatsby-background-image -S
```

1. Set up a [static query](https://www.gatsbyjs.org/docs/use-static-query/) to retrieve the contents from graphql
1. Check your graphql to generate your query. Should be under localhost:8000/\_\_graphql
   - you can browse allFile -> edges -> node -> relativePath to see which images you have available
1. Point towards the location of your background image

```javascript
useStaticQuery <
  Background >
  graphql`
    query BACKGROUND_QUERY {
      file(
        relativePath: {
          eq: "flight-through-deep-space-nebula-footage-077483924_prevstill.webp"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            srcWebp
          }
        }
      }
    }
  `
```

1. Pass it as an argument to [useStyles()](https://material-ui.com/styles/basics/#adapting-based-on-props).
1. Point towards the path in your background url like so:

```javascript
background: ({ fileName }: StyleProps) => `url(${fileName})`
```

## Dynamic pagelinks

This step is optional, and mainly intended to keep your links up to date with the pages you have created
You may use this with page links, but the same technique will work for blog posts as well

1. Set up a [query](src/utils/hooks/static-queries/usePageLinks.ts) for the site pages
1. Filter out the system pages, such as '404' and '/'
1. Return an object of title & path, to separate the lable from the href.
   - Remove special characters such as '-' and '/' from the title property
1. Capitalize the title in it's [usage](src/components/header.styles.ts)

```javascript
textTransform: 'capitalize'
```

Enjoy the ride!
