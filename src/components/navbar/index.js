import React from "react";
import "./index.scss";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

export const Navbar = () => {
  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { blogName } = data.site.siteMetadata;
        return (
          <div className="navbar">
            <Link to="/" className="blogName">
              {blogName}
            </Link>
          </div>
        );
      }}
    />
  );
};
const navQuery = graphql`
  query NavQuery {
    site {
      siteMetadata {
        blogName
      }
    }
  }
`;
