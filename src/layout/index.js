import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";

import "./index.scss";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <div className="content">
          <Theme />
          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
