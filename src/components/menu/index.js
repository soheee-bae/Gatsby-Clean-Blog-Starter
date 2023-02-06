import React from "react";
import "./index.scss";

import { Menubar } from "../../../assets/icons/menubar";

export const Menu = ({ setShowMenu, showMenu }) => {
  return (
    <div className="menu" onClick={() => setShowMenu(!showMenu)}>
      <Menubar />
    </div>
  );
};
