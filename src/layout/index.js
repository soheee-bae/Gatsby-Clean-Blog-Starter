import React, { useEffect } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";

import "./index.scss";

export const Layout = ({ children, selectedCategory, handleSelect }) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar
          handleSelect={handleSelect}
          selectedCategory={selectedCategory}
        />
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
