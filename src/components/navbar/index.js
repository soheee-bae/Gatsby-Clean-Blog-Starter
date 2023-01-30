import React, { useState } from "react";
import "./index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import { CATEGORY, navigation } from "../../constants";

export const Navbar = ({ handleSelect, selectedCategory }) => {
  const [show, setShow] = useState(CATEGORY.ALL);

  const handleClick = (e, link) => {
    setShow(link);
    e.preventDefault();
    e.stopPropagation();
    handleSelect(link.toLowerCase());
  };

  const RecursiveNav = ({ data }) => {
    return (
      <div className="navList">
        {data.map((parent) => {
          const isShow = parent.link === show;
          return (
            <div
              className="navDetail"
              onClick={(e) => handleClick(e, parent.link)}
            >
              <div className="navTitle">
                <p data-show={isShow}>{parent.title}</p>
              </div>
              {parent.children.length > 0 && (
                <RecursiveNav data={parent.children} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { blogName } = data.site.siteMetadata;
        return (
          <div className="navbar">
            <Link to="/" className="navName">
              {blogName}
            </Link>
            <div className="navLists">
              <RecursiveNav data={navigation} />
            </div>
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
