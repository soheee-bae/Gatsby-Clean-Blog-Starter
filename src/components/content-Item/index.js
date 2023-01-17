import React from "react";
import { Link } from "gatsby";

import "./index.scss";

export const ContentItem = ({ post }) => {
  const { frontmatter, fields, internal } = post.node;

  return (
    <Link to={fields.slug} className="contentLink">
      <div className="contentItem">
        <h4 className="h4 itemTitle">{frontmatter.title}</h4>
        <p className="body-1 itemText">{internal.content}</p>
      </div>
    </Link>
  );
};
