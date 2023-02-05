import React from "react";
import "./index.scss";
import { Menu } from "../menu";
import useBreakpoint from "../../hooks/useBreakpoint";

export const NavbarHeader = ({ showMenu, setShowMenu, blogName }) => {
  const brkPnt = useBreakpoint();
  const smallScreen = brkPnt === "md" || brkPnt === "sm";

  return (
    <div className="navbarHeader">
      {smallScreen ? (
        <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      ) : (
        <p>{blogName}</p>
      )}
    </div>
  );
};
