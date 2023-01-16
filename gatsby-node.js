const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: `${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {},
      });
    });
  });
};
