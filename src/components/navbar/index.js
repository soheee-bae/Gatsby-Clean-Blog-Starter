import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";

import { NavbarList } from "../navbar-list";

import "./index.scss";
import { useAccordion } from "../../hooks/useAccordion";
import useBreakpoint from "../../hooks/useBreakpoints";
import { NavbarMainList } from "../navbar-mainlist";
import { Menubar } from "../../../assets/icons/menubar";
import { Menu } from "../menu";

export const Navbar = ({
  handlePageChange,
  handleSelect,
  selectedCategory,
  currentPage,
}) => {
  const { show, handleShow } = useAccordion();

  const brkPnt = useBreakpoint();
  const smallScreen = brkPnt === "md" || brkPnt === "sm";

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    handleShow(link.toLowerCase());
    currentPage !== 1 && handlePageChange(1);
    handleSelect(link?.toLowerCase());
  };

  return (
    <StaticQuery
      query={navQuery}
      render={(data) => {
        const { blogName, githubUrl } = data.site.siteMetadata;
        const navLists = data.allDirectory.edges;

        return (
          <div className="navbarContainer">
            <div className="navbarHeader">
              {smallScreen ? (
                <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
              ) : (
                blogName
              )}
            </div>
            <div className="navbarContent" data-showMenu={showMenu}>
              <NavbarMainList githubUrl={githubUrl} />
              <hr />
              <NavbarList
                show={show}
                navLists={navLists}
                handleClick={handleClick}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

const navQuery = graphql`
  query NavQuery {
    site {
      siteMetadata {
        blogName
        githubUrl
      }
    }
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
          relativeDirectory
          relativePath
          name
        }
      }
    }
  }
`;
