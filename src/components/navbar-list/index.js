import React from "react";
import { NavbarChildrenList } from "../navbar-childrenList";
import { NavbarParentList } from "../navbar-parentList";

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
      {rootDirectories.map((root, index) => {
        const { name, relativePath } = root.node;
        const subDirectories = navLists.filter(
          (nav) => nav.node.relativeDirectory === name
        );
        const isShow =
          show === relativePath.toLowerCase() && subDirectories.length !== 0;

        return (
          <div className="navbarList" key={index}>
            <NavbarParentList
              selectedCategory={selectedCategory}
              subDirectories={subDirectories}
              handleClick={handleClick}
              rootNode={root.node}
              isShow={isShow}
            />
            <NavbarChildrenList
              selectedCategory={selectedCategory}
              subDirectories={subDirectories}
              handleClick={handleClick}
              isShow={isShow}
              name={name}
            />
          </div>
        );
      })}
    </div>
  );
};
