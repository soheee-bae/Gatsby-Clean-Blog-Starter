import React from "react";
import { Link } from "gatsby";
import "./index.scss";

export const NavbarMainList = ({ githubUrl }) => {
  const location = typeof window !== "undefined" && window.location;
  const { search, pathname, hash } = location;
  const isHome = pathname === "/" && !search && !hash;

  return (
    <div className="navbarItems">
      <Link to="/" className="navbarItem" data-ishome={isHome}>
        Home
      </Link>
      <Link to={githubUrl} target="_blank" className="navbarItem">
        Github
      </Link>
    </div>
  );
};
