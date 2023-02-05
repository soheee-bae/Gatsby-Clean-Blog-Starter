import React from "react";
import "./index.scss";
import { Link } from "gatsby";

export const NavbarMainList = ({ githubUrl }) => (
  <div className="navbarItems">
    <Link to="/" className="navbarItem">
      Home
    </Link>
    <Link to={githubUrl} target="_blank" className="navbarItem">
      Github
    </Link>
  </div>
);
