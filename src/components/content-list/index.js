import React from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";
import { ContentItem } from "../content-Item";
import { Pagination } from "../pagination";

const ContentList = () => {
  let currentPage = 1;
  const handlePageChange = (current) => {
    currentPage = current;
  };

  return (
    <StaticQuery
      query={contentListQuery}
      render={(data) => {
        const posts = data.allMarkdownRemark.edges;

        return (
          <div>
            <div className="listContainer">
              {posts.map((post) => (
                <ContentItem post={post} />
              ))}
            </div>
            <Pagination
              handlePageChange={handlePageChange}
              totalCount={posts.length}
              siblingCount={1}
              currentPage={currentPage}
              pageSize={5}
            />
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
