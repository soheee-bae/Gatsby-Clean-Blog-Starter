import React from "react";
import { ArrowRight } from "../../../assets/icons/arrowRight";
import { ChevronDown } from "../../../assets/icons/chevronDown";

import "./index.scss";

export const NavbarList = ({ show, navLists, handleClick }) => {
  const rootDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory === ""
  );

  return (
    <div className="navbarListContainer">
      {rootDirectories.map((root) => {
        const subDirectories = navLists.filter(
          (nav) => nav.node.relativeDirectory === root.node.name
        );
        const isShow =
          show === root.node.relativePath && subDirectories.length !== 0;
        return (
          <div className="navbarList">
            <div
              onClick={(e) => handleClick(e, root.node.relativePath)}
              className="navbarParentList"
              data-show={isShow}
            >
              {root.node.name}
              {subDirectories.length !== 0 && <ChevronDown />}
            </div>
            <div className="navbarChildrenList" data-show={isShow}>
              {subDirectories.map((sub) => {
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
        );
      })}
    </div>
  );
};
