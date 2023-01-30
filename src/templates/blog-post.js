import { graphql } from "gatsby";
import React from "react";
import PostContent from "../components/post-content";
import PostHeader from "../components/post-header";
import Bio from "../components/bio";
import { useCategory } from "../hooks/useCategory";
import { Layout } from "../layout";
import "./blog-post.scss";
import PostNavigation from "../components/post-navigation";

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { handleSelect, selectedCategory } = useCategory();

  return (
    <Layout handleSelect={handleSelect} selectedCategory={selectedCategory}>
      <div className="templateContainer">
        <PostHeader data={frontmatter} />
        <PostContent content={html} />
        <PostNavigation data={pageContext} />
        <hr />
        <Bio />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const blogQuery = graphql`
  query BlogQuery($slug: String!) {
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
