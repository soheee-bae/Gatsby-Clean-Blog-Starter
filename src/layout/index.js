import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";

import "./index.scss";

export const Layout = ({
  children,
  handlePageChange,
  handleSelect,
  currentPage,
}) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar
          handlePageChange={handlePageChange}
          handleSelect={handleSelect}
          currentPage={currentPage}
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
