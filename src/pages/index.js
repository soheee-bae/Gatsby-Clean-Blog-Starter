import * as React from "react";
import { Layout } from "../layout";

import Bio from "../components/bio";
import ContentList from "../components/content-list";
import Title from "../components/title";
import { graphql } from "gatsby";

import "../styles/_typography.scss";
import "./index.scss";
import { useCategory } from "../hooks/useCategory";
import { usePosts } from "../hooks/usePosts";
import { PAGE } from "../constants/page";
import { usePagination } from "../hooks/usePagination";

export default function Page({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const { handleSelect, selectedCategory } = useCategory();
  const { filteredPosts } = usePosts({ posts, selectedCategory });
  const { paginationRange, currentPage, handlePageChange } = usePagination({
    totalCount: filteredPosts.length,
    siblingCount: PAGE.SIBLINGCOUNT,
    pageSize: PAGE.PAGESIZE,
  });

  return (
    <Layout
      handlePageChange={handlePageChange}
      handleSelect={handleSelect}
      selectedCategory={selectedCategory}
      currentPage={currentPage}
    >
      <div className="homeContainer">
        <Title />
        <Bio />
        <hr />
        <ContentList
          filteredPosts={filteredPosts}
          paginationRange={paginationRange}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageQuery {
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
