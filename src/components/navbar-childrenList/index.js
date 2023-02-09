import React from "react";
import "./index.scss";

import { ArrowRight } from "../../../assets/icons/arrowRight";

export const NavbarChildrenList = ({
  selectedCategory,
  subDirectories,
  handleClick,
  isShow,
  name,
}) => {
  return (
    <div className="navbarChildrenList" data-show={isShow}>
      {subDirectories.map((sub, index) => {
        const {
          relativeDirectory: subRelativeDirectory,
          relativePath: subRelativePath,
          name: subName,
        } = sub.node;

        if (name === subRelativeDirectory) {
          return (
            <div
              key={index}
              className="navbarChildList"
              onClick={(e) => handleClick(e, subRelativePath)}
              data-selected={selectedCategory === subRelativePath.toLowerCase()}
            >
              <ArrowRight />
              {subName}
            </div>
          );
        } else return null;
      })}
    </div>
  );
};
