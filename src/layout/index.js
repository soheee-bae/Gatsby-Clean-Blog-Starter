import React from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Theme from "../components/theme";

import "./index.scss";

export class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
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
  }
}
