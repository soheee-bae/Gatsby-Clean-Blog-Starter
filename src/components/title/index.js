import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./index.scss";

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
