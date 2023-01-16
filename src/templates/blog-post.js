import { graphql } from "gatsby";
import React from "react";

import { Layout } from "../layout";
import "./blog-post.scss";

const BlogPost = ({ data, pageContext, location }) => {
  console.log(data);
  console.log(pageContext);
  console.log(location);
  return (
    <Layout>
      <div className="templateContainer">Hello</div>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
