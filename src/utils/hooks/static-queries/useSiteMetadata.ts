import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            author: string;
        }
    }
}

export default () => {
    const { site } = useStaticQuery<SiteMetadata>(
        graphql`
          query SITE_METADATA_QUERY {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
    );
    return site.siteMetadata;
}
