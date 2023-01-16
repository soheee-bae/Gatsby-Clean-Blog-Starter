import React from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";
import { ContentItem } from "../contentItem";

const ContentLists = () => {
  return (
    <StaticQuery
      query={contentListsQuery}
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
export default ContentLists;

const contentListsQuery = graphql`
  query ContentListsQuery {
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
        }
      }
    }
  }
`;
