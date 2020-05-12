export interface MarkdownDoc {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export interface Pagelink {
  title: string;
  path: string;
}

