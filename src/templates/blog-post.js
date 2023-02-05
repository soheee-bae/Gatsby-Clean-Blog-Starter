import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import PostContent from "../components/post-content";
import PostHeader from "../components/post-header";
import PostNavigation from "../components/post-navigation";

import { useCategory } from "../hooks/useCategory";
import { usePagination } from "../hooks/usePagination";

import { PAGE } from "../constants";
import { Layout } from "../layout";
import "./blog-post.scss";

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { handleSelect, selectedCategory } = useCategory();
  const { currentPage, handlePageChange } = usePagination({
    totalCount: allMarkdownRemark.totalCount,
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
      <div className="templateContainer">
        <PostHeader data={frontmatter} />
        <PostContent content={html} />
        <PostNavigation
          data={pageContext}
          selectedCategory={selectedCategory}
        />
        <hr />
        <Bio />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const blogQuery = graphql`
  query BlogQuery($slug: String!) {
    allMarkdownRemark {
      totalCount
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
