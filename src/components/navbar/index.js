import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { useAccordion } from "../../hooks/useAccordion";

import { NavbarHeader } from "../navbar-header";
import { NavbarList } from "../navbar-list";
import { NavbarMainList } from "../navbar-headerList";

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

  const navQuery = useStaticQuery(graphql`
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
  `);

  const { blogName, githubUrl } = navQuery.site.siteMetadata;
  const navLists = navQuery.allDirectory.edges;
  return (
    <div className="navbarContainer">
      <NavbarHeader
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        blogName={blogName}
      />
      <div className="navbarContent" data-showmenu={showMenu}>
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
};
