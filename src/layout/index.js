import React from "react";
import { Footer } from "../components/footer";
import { Menu } from "../components/menu";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";

import "./index.scss";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <div className="content">
          <div className="header">
            <Theme />
            <Menu />
          </div>

          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
