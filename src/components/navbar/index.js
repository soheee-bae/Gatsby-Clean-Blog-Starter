import React, { useState } from "react";
import "./index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import { CATEGORY } from "../../constants";

export const Navbar = ({ handlePageChange, handleSelect, currentPage }) => {
  const [show, setShow] = useState(CATEGORY.ALL);

  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    setShow(link);
    currentPage !== 1 && handlePageChange(1);
    handleSelect(link?.toLowerCase());
  };

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { blogName, githubUrl } = data.site.siteMetadata;
        const navLists = data.allDirectory.edges;
        const rootDirectories = navLists.filter(
          (nav) => nav.node.relativeDirectory === ""
        );
        const subDirectories = navLists.filter(
          (nav) => nav.node.relativeDirectory !== ""
        );

        return (
          <div className="navbar">
            <div>{blogName}</div>
            <div>
              <Link to="/" className="navItem">
                Home
              </Link>
              <Link to={githubUrl} className="navItem">
                Github
              </Link>
            </div>
            <hr />
            <div className="navbar">
              {rootDirectories.map((root) => (
                <div className="navContainer">
                  <div
                    onClick={(e) => handleClick(e, root.node.relativePath)}
                    className="navList"
                  >
                    {root.node.name}
                  </div>

                  {subDirectories.map((sub) => (
                    <div>
                      {root.node.name === sub.node.relativeDirectory && (
                        <div
                          onClick={(e) => handleClick(e, sub.node.relativePath)}
                        >
                          {sub.node.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
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
        githubUrl
      }
    }
    allDirectory(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativePath: { ne: "" }
      }
      sort: { relativePath: ASC }
    ) {
      edges {
        node {
          sourceInstanceName
          relativeDirectory
          relativePath
          name
        }
      }
    }
  }
`;
