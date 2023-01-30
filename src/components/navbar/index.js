import React from "react";
import "./index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import { navigation } from "../../constants";

export const Navbar = ({ handleSelect }) => {
  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelect(link.toLowerCase());
  };

  const RecursiveNav = ({ data }) => {
    return (
      <ul>
        {data.map((parent) => (
          <li onClick={(e) => handleClick(e, parent.link)}>
            {parent.title}
            {parent.children && <RecursiveNav data={parent.children} />}
          </li>
        ))}
      </ul>
    );
  };

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
            <RecursiveNav data={navigation} />
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
