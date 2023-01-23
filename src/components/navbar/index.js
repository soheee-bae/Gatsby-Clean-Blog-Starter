import React from "react";
import "./index.scss";
import qs from "query-string";

import { StaticQuery, graphql } from "gatsby";

export const Navbar = () => {
  const handleSelect = (link) => {
    const { name } = link;
    window.history.pushState(
      { name },
      "",
      `${window.location.pathname}?${qs.stringify({ name })}`
    );
  };

  const handleSubSelect = (link) => {
    const { relativePath } = link;
    window.history.pushState(
      { relativePath },
      "",
      `${window.location.pathname}?${qs.stringify({ relativePath })}`
    );
  };

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
                <ul onClick={() => handleSelect(root.node)} className="navList">
                  {root.node.name}
                </ul>

                {subDirectories.map((sub) => (
                  <div>
                    {root.node.name === sub.node.relativeDirectory && (
                      <li onClick={() => handleSubSelect(sub.node)}>
                        {sub.node.name}
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
