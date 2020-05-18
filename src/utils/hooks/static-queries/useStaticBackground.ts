import { useStaticQuery, graphql } from "gatsby";

interface Background {
    file: {
        childImageSharp: {
            fluid: any;
        }
    }
}

export default () => {
    const { file } = useStaticQuery<Background>(
        graphql`
        query BACKGROUND_QUERY {
            file(relativePath: {eq: "flight-through-deep-space-nebula-footage-077483924_prevstill.webp"}) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `
    );
    return file.childImageSharp.fluid;
}
