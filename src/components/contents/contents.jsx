import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Contents = () => {
  return (
    <StaticQuery
      query={contentsQuery}
      render={(data) => {
        const { title } = data.site.siteMetadata;
        return <div className="h1">{title}</div>;
      }}
    />
  );
};
export default Contents;

const contentsQuery = graphql`
  query ContentsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


// 