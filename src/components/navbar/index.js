import React, { useState } from "react";
import "./index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import { CATEGORY, navigation } from "../../constants";

export const Navbar = ({ handleSelect, selectedCategory }) => {
  const [show, setShow] = useState(CATEGORY.ALL);



  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { blogName } = data.site.siteMetadata;
        return (
          <div className="navbar">
            {blogName}
            <div>
              <Link to="/" className="navItem">
                Home
              </Link>
              <Link to="/" className="navItem">
                Github
              </Link>
            </div>
            <hr />
        
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
