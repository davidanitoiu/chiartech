import { useStaticQuery, graphql } from "gatsby";

type PageLink = {
    title: string;
    path: string;
}

interface SitePages {
    site: {
        siteMetadata: {
            pageLinks: Array<PageLink>
        }
    }
};

export default () => {
    const { site } = useStaticQuery<SitePages>(
        graphql`
          query SITE_PAGES {
            site {
                siteMetadata {
                    pageLinks {
                        title
                        path
                    }
                  }
              }
          }
        `
    );

    return site.siteMetadata.pageLinks;
}