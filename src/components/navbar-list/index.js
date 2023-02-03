import React from "react";
import "./index.scss";

export const NavbarList = ({ navLists, handleClick }) => {
  const rootDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory === ""
  );
  const subDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory !== ""
  );
  return (
    <div className="navbarListContainer">
      {rootDirectories.map((root) => (
        <div className="navbarList">
          <div
            onClick={(e) => handleClick(e, root.node.relativePath)}
            className="navbarParentList"
          >
            {root.node.name}
          </div>

          {subDirectories.map((sub) => (
            <div className="navbarChildrenList">
              {root.node.name === sub.node.relativeDirectory && (
                <div
                  className="navbarChildList"
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
  );
};
