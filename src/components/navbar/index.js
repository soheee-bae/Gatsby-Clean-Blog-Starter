import React from "react";
import "./index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import { navigation } from "../../constants";
import { ArrowDown } from "../../../assets/icons/arrowDown";

export const Navbar = ({ handleSelect }) => {
  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelect(link.toLowerCase());
  };

  const RecursiveNav = ({ data }) => {
    return (
      <div className="navList">
        {data.map((parent) => (
          <div
            className="navDetail"
            onClick={(e) => handleClick(e, parent.link)}
          >
            <div className="navTitle">
              {parent.title}
              {parent.children.length > 0 && (
                <div className="navArrow">
                  <ArrowDown />
                </div>
              )}
            </div>
            {parent.children.length > 0 && (
              <RecursiveNav data={parent.children} />
            )}
          </div>
        ))}
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
