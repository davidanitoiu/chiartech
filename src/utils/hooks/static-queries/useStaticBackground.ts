import { useStaticQuery, graphql } from "gatsby";

interface Background {
    file: {
        childImageSharp: {
            fluid: {
              srcWebp: string;
            }
        }
    }
}

export default () => {
    const { file } = useStaticQuery<Background>(
        graphql`
        query BACKGROUND_QUERY {
            file(relativePath: {eq: "flight-through-deep-space-nebula-footage-077483924_prevstill.webp"}) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  srcWebp
                }
              }
            }
          }
        `
    );
    return file.childImageSharp.fluid.srcWebp;
}
