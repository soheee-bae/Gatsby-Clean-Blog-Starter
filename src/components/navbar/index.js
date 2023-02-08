import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";

import { useAccordion } from "../../hooks/useAccordion";

import { NavbarHeader } from "../navbar-header";
import { NavbarMainList } from "../navbar-mainList";
import { NavbarList } from "../navbar-list";

import "./index.scss";

export const Navbar = ({
  handlePageChange,
  handleSelect,
  selectedCategory,
  currentPage,
}) => {
  const { show, handleShow } = useAccordion();
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
            <NavbarHeader
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              blogName={blogName}
            />
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
