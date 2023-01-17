import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Title = () => {
  return (
    <StaticQuery
      query={titleQuery}
      render={(data) => {
        const { title } = data.site.siteMetadata;
        return <div className="h1">{title}</div>;
      }}
    />
  );
};
export default Title;

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
