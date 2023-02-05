import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Title from "../components/title";
import ContentList from "../components/content-list";
import { PAGE } from "../constants/page";

import { usePagination } from "../hooks/usePagination";
import { useCategory } from "../hooks/useCategory";
import { usePosts } from "../hooks/usePosts";

import { Layout } from "../layout";
import "../styles/_typography.scss";
import "./index.scss";

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
      filter: { frontmatter: { title: { ne: "null" }, draft: { ne: true } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300, truncate: true)
          frontmatter {
            title
            subtitle
            draft
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
