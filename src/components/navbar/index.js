import React from "react";
import "./index.scss";

import { StaticQuery, graphql } from "gatsby";

export const Navbar = ({ handleSelect }) => {
  const rootDirectories = [];
  const subDirectories = [];

  const checktheLsit = (parent, child) => {
    return parent.relativePath === child.relativeDirectory;
  };

  const getList = (root) => {
    const innerSub = subDirectories.filter(
      (sub) => sub.relativeDirectory.split("/")[0] === root
    );

    const check2 = innerSub.filter(
      (sub) => sub.relativePath.split("/").length === 2
    );
    const check3 = innerSub.filter(
      (sub) => sub.relativePath.split("/").length === 3
    );
    const check4 = innerSub.filter(
      (sub) => sub.relativePath.split("/").length === 4
    );
    console.log(check2);
    console.log(check3);
    console.log(check4);
    return (
      <ul>
        {check2.map((ck) => (
          <li>
            {ck.name}
            {check3 && (
              <ul>
                {check3.map(
                  (c) =>
                    checktheLsit(ck, c) && (
                      <li>
                        {c.name}
                        {check4 && (
                          <ul>
                            {check4.map(
                              (j) => checktheLsit(c, j) && <li>{j.name}</li>
                            )}
                          </ul>
                        )}
                      </li>
                    )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const edges = data.allDirectory.edges;

        edges.forEach((dir) => {
          const { relativeDirectory, relativePath, name } = dir.node;
          if (relativeDirectory === "" && relativePath !== "") {
            rootDirectories.push(name);
          } else {
            subDirectories.push(dir.node);
          }
        });

        return (
          <div className="navbar">
            <ul className="navContainer">
              {rootDirectories.map((root) => (
                <li
                  onClick={() => handleSelect(root, subDirectories)}
                  className="navList"
                >
                  {root}
                  {getList(root)}
                </li>
              ))}
            </ul>
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
      sort: { relativePath: ASC }
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
