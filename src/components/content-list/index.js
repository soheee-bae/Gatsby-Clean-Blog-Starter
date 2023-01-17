import React from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";
import { ContentItem } from "../content-Item";

const ContentList = () => {
  return (
    <StaticQuery
      query={contentListQuery}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <div className="listContainer">
            {posts.map((post) => (
              <ContentItem post={post} />
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
      sort: { frontmatter: { date: DESC } }
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
          fields {
            slug
          }
        }
      }
    }
  }
`;
