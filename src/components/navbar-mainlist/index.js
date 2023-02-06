import React from "react";
import { Link } from "gatsby";
import "./index.scss";

export const NavbarMainList = ({ githubUrl }) => {
  const { pathname, hash, search } = window.location;
  const isHome = pathname === "/" && !search && !hash;

  return (
    <div className="navbarItems">
      <Link to="/" className="navbarItem" data-isHome={isHome}>
        Home
      </Link>
      <Link to={githubUrl} target="_blank" className="navbarItem">
        Github
      </Link>
    </div>
  );
};
