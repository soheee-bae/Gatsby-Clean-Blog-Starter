import * as React from "react";
import { Layout } from "../layout";

import Bio from "../components/bio";
import ContentList from "../components/contentList";
import Header from "../components/header";

import "../styles/_typography.scss";
import "./index.scss";

export default function Home() {
  return (
    <Layout>
      <div className="homeContainer">
        <Header />
        <Bio />
        <hr />
        <ContentList />
      </div>
    </Layout>
  );
}
