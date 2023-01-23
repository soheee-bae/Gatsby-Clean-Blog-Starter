import React from "react";
import "./index.scss";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export const Navbar = () => {
  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const edges = data.allDirectory.edges;
        const rootDirectories = [];
        const subDirectories = [];

        edges.forEach((dir) => {
          const { relativeDirectory, relativePath } = dir.node;
          if (relativeDirectory === "" && relativePath !== "") {
            rootDirectories.push(dir);
          } else if (relativeDirectory !== "" && relativePath.includes("/")) {
            subDirectories.push(dir);
          }
        });

        return (
          <div className="navbar">
            {rootDirectories.map((root) => (
              <div className="navContainer">
                <Link to={`/${root.node.relativePath}`} className="navList">
                  {root.node.name}
                </Link>

                {subDirectories.map((sub) => (
                  <div>
                    {root.node.name === sub.node.relativeDirectory && (
                      <Link to={`/${sub.node.relativePath}`}>
                        {sub.node.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      }}
    />
  );
};

const navQuery = graphql`
  query NavQuery {
    allDirectory(
      filter: {
        sourceInstanceName: { eq: "content" }
        relativePath: { ne: "" }
      }
    ) {
      edges {
        node {
          sourceInstanceName
          relativePath
          relativeDirectory
          name
        }
      }
    }
  }
`;
