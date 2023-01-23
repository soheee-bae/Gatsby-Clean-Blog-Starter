import React from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";
import { useCategory } from "../../hooks/useCategory";

export const Navbar = () => {
  const { handleSelect } = useCategory();

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const edges = data.allDirectory.edges;
        const rootDirectories = [];
        const subDirectories = [];

        edges.forEach((dir) => {
          const { relativeDirectory, relativePath, name } = dir.node;
          if (relativeDirectory === "" && relativePath !== "") {
            rootDirectories.push(name);
          } else if (relativeDirectory !== "" && relativePath.includes("/")) {
            subDirectories.push(dir.node);
          }
        });

        return (
          <div className="navbar">
            {rootDirectories.map((root) => (
              <div className="navContainer">
                <ul onClick={() => handleSelect(root)} className="navList">
                  {root}
                </ul>

                {subDirectories.map((sub) => (
                  <div>
                    {root === sub.relativeDirectory && (
                      <li onClick={() => handleSelect(sub.relativePath)}>
                        {sub.name}
                      </li>
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
