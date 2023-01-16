import { StaticQuery, graphql } from "gatsby";
import React from "react";

import { Layout } from "../layout";
import "./blog-post.scss";

export default ({ data, pageContext, location }) => {
  console.log(data);
  return (
    <Layout>
      <div className="templateContainer"></div>
    </Layout>
  );
};

const blogQuery = graphql`
  query BlogQuery($slug: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
          }
        }
      }
    }
  }
`;
