import * as React from "react";
import { Layout } from "../layout";

import Bio from "../components/bio";
import ContentList from "../components/content-list";
import Title from "../components/title";

import "../styles/_typography.scss";
import "./index.scss";

export default function Home() {
  return (
    <Layout>
      <div className="homeContainer">
        <Title />
        <Bio />
        <hr />
        <ContentList />
      </div>
    </Layout>
  );
}
