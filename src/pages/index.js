import * as React from "react";
import { Layout } from "../layout";

import Bio from "../components/bio";
import ContentList from "../components/content-list";
import Title from "../components/title";
import { graphql } from "gatsby";

import "../styles/_typography.scss";
import "./index.scss";
import { useCategory } from "../hooks/useCategory";

export default function Page({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const { handleSelect, selectedCategory } = useCategory();
  return (
    <Layout handleSelect={handleSelect} selectedCategory={selectedCategory}>
      <div className="homeContainer">
        <Title />
        <Bio />
        <hr />
        <ContentList posts={posts} />
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
