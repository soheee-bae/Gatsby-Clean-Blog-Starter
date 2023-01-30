import React from "react";
import "./index.scss";
import { Hamburger } from "../../../assets/icons/hamburger";

export const Menu = () => (
  <div className="menu">
    <button className="menuButton">
      <Hamburger />
    </button>
  </div>
);
