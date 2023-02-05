import React from "react";
import "./index.scss";
import { ChevronDown } from "../../../assets/icons/chevronDown";

export const NavbarParentList = ({
  selectedCategory,
  subDirectories,
  handleClick,
  rootNode,
  isShow,
}) => {
  const { name, relativePath } = rootNode;
  return (
    <div
      onClick={(e) => handleClick(e, relativePath)}
      className="navbarParentList"
      data-show={isShow}
      data-selected={selectedCategory === relativePath.toLowerCase()}
    >
      {name}
      <div onClick={(e) => handleClick(e, relativePath)}>
        {subDirectories.length !== 0 && <ChevronDown />}
      </div>
    </div>
  );
};
