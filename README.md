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

## Set up favicon

Enjoy the ride!
