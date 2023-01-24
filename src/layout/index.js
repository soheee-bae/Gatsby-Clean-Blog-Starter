import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";
import { useCategory } from "../hooks/useCategory";

import "./index.scss";

export const Layout = ({ children, handleSelect }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar handleSelect={handleSelect} />
        <div className="innerContainer">
          <div className="content">
            <Theme />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
