import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Contents = () => {
  return (
    <StaticQuery
      query={contentsQuery}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <div>
            {posts.map((post) => (
              <div key={post.node.id}>
                <h4 className="h4 ">{post.node.frontmatter.title}</h4>
                <p className="body-1 ">{post.node.internal.content}</p>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};
export default Contents;

const contentsQuery = graphql`
  query ContentsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { ne: "null" } } }
      sort: { frontmatter: { date: ASC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            category
          }
          internal {
            content
          }
        }
      }
    }
  }
`;
