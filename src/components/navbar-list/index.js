import React from "react";
import { ArrowRight } from "../../../assets/icons/arrowRight";
import { ChevronDown } from "../../../assets/icons/chevronDown";

import "./index.scss";

export const NavbarList = ({ show, navLists, handleClick }) => {
  const rootDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory === ""
  );
  const subDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory !== ""
  );
  console.log(show);

  return (
    <div className="navbarListContainer">
      {rootDirectories.map((root) => (
        <div className="navbarList">
          <div
            onClick={(e) => handleClick(e, root.node.relativePath)}
            className="navbarParentList"
          >
            {root.node.name}
            <ChevronDown />
          </div>
          <div
            className="navbarChildrenList"
            data-show={show === root.node.relativePath}
          >
            {subDirectories.map((sub) => {
              console.log(root.node.relativePath);
              {
                if (root.node.name === sub.node.relativeDirectory)
                  return (
                    <div
                      className="navbarChildList"
                      onClick={(e) => handleClick(e, sub.node.relativePath)}
                    >
                      <ArrowRight />
                      {sub.node.name}
                    </div>
                  );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
