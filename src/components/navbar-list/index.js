import React from "react";
import { ArrowRight } from "../../../assets/icons/arrowRight";
import { ChevronDown } from "../../../assets/icons/chevronDown";

import "./index.scss";

export const NavbarList = ({
  show,
  navLists,
  handleClick,
  selectedCategory,
}) => {
  const rootDirectories = navLists.filter(
    (nav) => nav.node.relativeDirectory === ""
  );
  return (
    <div className="navbarListContainer">
      {rootDirectories.map((root) => {
        const { name, relativePath } = root.node;
        const subDirectories = navLists.filter(
          (nav) => nav.node.relativeDirectory === name
        );
        const isShow =
          show === relativePath.toLowerCase() && subDirectories.length !== 0;

        return (
          <div className="navbarList">
            <div
              onClick={(e) => handleClick(e, relativePath)}
              className="navbarParentList"
              data-show={isShow}
              data-selected={selectedCategory === relativePath.toLowerCase()}
            >
              {name}
              {subDirectories.length !== 0 && <ChevronDown />}
            </div>
            <div className="navbarChildrenList" data-show={isShow}>
              {subDirectories.map((sub) => {
                {
                  const {
                    relativeDirectory: subRelativeDirectory,
                    relativePath: subRelativePath,
                    name: subName,
                  } = sub.node;
                  if (name === subRelativeDirectory)
                    return (
                      <div
                        className="navbarChildList"
                        onClick={(e) => handleClick(e, subRelativePath)}
                        data-selected={
                          selectedCategory === subRelativePath.toLowerCase()
                        }
                      >
                        <ArrowRight />
                        {subName}
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
