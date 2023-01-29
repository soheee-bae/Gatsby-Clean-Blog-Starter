import React from "react";
import "./index.scss";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { navigation } from "../../constants";
import { useCategory } from "../../hooks/useCategory";

export const Navbar = () => {
  const { handleSelect } = useCategory();

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

  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelect(link);
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
