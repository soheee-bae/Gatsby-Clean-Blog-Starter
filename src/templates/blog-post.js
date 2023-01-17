import { graphql } from "gatsby";
import React from "react";
import PostContent from "../components/post-content";
import PostHeader from "../components/post-header";
import Bio from "../components/bio";

import { Layout } from "../layout";
import "./blog-post.scss";

const BlogPost = ({ data, pageContext, location }) => {
  const { site, markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className="templateContainer">
        <PostHeader data={frontmatter} />
        <PostContent content={html} />
        <hr />
        <Bio />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const blogQuery = graphql`
  query BlogQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
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
