import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Header = () => {
  return (
    <StaticQuery
      query={headerQuery}
      render={(data) => {
        const { title } = data.site.siteMetadata;
        return <div className="h1">{title}</div>;
      }}
    />
  );
};
export default Header;

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
