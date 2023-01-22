import React, { useState } from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";
import { ContentItem } from "../content-Item";
import { Pagination } from "../pagination";

const SiblingCount = 1;
const PageSize = 5;

const ContentList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StaticQuery
      query={contentListQuery}
      render={(data) => {
        const allPosts = data.allMarkdownRemark.edges;
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        let posts = allPosts.slice(firstPageIndex, lastPageIndex);

        return (
          <div>
            <div className="listContainer">
              {posts.map((post) => (
                <ContentItem post={post} />
              ))}
            </div>
            <Pagination
              handlePageChange={(newCurrent) => setCurrentPage(newCurrent)}
              totalCount={allPosts.length}
              siblingCount={SiblingCount}
              currentPage={currentPage}
              pageSize={PageSize}
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
