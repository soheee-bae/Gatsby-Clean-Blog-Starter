import React from "react";
import "./index.scss";
import { graphql, useStaticQuery } from "gatsby";

const Title = () => {
  const titleQuery = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = titleQuery.site.siteMetadata;

  return <div className="title">{title}</div>;
};
export default Title;
