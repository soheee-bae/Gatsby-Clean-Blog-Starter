import React from "react";
import "./index.scss";

export const BlogPost = () => {
  return (
    <Layout>
      <div className="templateContainer">
        <Header />
        <Bio />
        <hr />
        <ContentList />
      </div>
    </Layout>
  );
};
