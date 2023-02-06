import React from "react";
import "./index.scss";
import { StaticQuery, graphql } from "gatsby";

const Title = () => {
  return (
    <StaticQuery
      query={titleQuery}
      render={(data) => {
        const { title } = data.site.siteMetadata;
        return <div className="title">{title}</div>;
      }}
    />
  );
};
export default Title;

const titleQuery = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
