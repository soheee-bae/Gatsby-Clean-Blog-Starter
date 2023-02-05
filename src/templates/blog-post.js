import { graphql } from "gatsby";
import React from "react";
import PostContent from "../components/post-content";
import PostHeader from "../components/post-header";
import Bio from "../components/bio";
import { useCategory } from "../hooks/useCategory";
import { Layout } from "../layout";
import "./blog-post.scss";
import PostNavigation from "../components/post-navigation";
import { PAGE } from "../constants";
import { usePagination } from "../hooks/usePagination";

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
