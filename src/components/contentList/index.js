import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./index.scss";

const ContentList = () => {
  return (
    <StaticQuery
      query={contentListQuery}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <div className="listContainer">
            {posts.map((post) => (
              <div key={post.node.id} className="listContent">
                <h4 className="h4 listTitle">{post.node.frontmatter.title}</h4>
                <p className="body-1 listText">{post.node.internal.content}</p>
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};
export default ContentList;

const contentListQuery = graphql`
  query ContentListQuery {
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
