import { useStaticQuery, graphql } from "gatsby";

type PageNode = {
    node: {
        path: string;
    }
}

interface PageLink {
    title: string;
    path: string;
}

interface SitePages {
    allSitePage: {
        edges: Array<PageNode>
    }
};

export default () => {
    const { allSitePage } = useStaticQuery<SitePages>(
        graphql`
          query SITE_PAGES {
            allSitePage {
                edges {
                    node {
                      path
                    }
                  }
            }
          }
        `
    );

    const systemSites = [
        "/dev-404-page/",
        "/404/",
        "/",
        "/404.html"
    ];
    const pagelinks: Array<PageLink> = allSitePage.edges
        .map((edge: PageNode) => {
            let title = edge.node.path
                .substr(1)
                .replace("/", "")
                .replace("-", " ");
            return {
                title,
                path: edge.node.path
            }
        })
        .filter((pageLink: PageLink) => !systemSites.includes(pageLink.path))

    return pagelinks;
}