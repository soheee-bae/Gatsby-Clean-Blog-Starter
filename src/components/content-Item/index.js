import React from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import { CATEGORY, CONTENTITEM } from "../../constants";
import "./index.scss";

export const ContentItem = ({ post }) => {
  const { frontmatter, fields, excerpt } = post.node;
  const { TITLE, SUBTITLE, DATE, CONTENT } = CONTENTITEM;
  const handleClick = () => {
    const category = CATEGORY.ALL;
    navigate(`${fields.slug}?${qs.stringify({ category })}#blog`);
  };

  return (
    <div
      className="contentItem"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="presentation"
    >
      {TITLE && <h4 className="h4 itemTitle">{frontmatter.title}</h4>}
      {SUBTITLE && <p className="h5 itemSubTitle">{frontmatter.subtitle}</p>}
      {CONTENT && (
        <div
          className="body-1 itemText"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      )}
      {DATE && <p className="body-2 itemDate">{frontmatter.date}</p>}
    </div>
  );
};
