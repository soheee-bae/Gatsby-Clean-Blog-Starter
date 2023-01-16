import * as React from "react";
import { Layout } from "../layout";

import Bio from "../components/bio";
import Contents from "../components/contents/contents";
import Header from "../components/header/header";

import "../styles/_typography.scss";
import "./index.scss";

export default function Home() {
  return (
    <Layout>
      <div className="mainContainer">
        <Header />
        <Bio />
        <Contents />
      </div>
    </Layout>
  );
}
