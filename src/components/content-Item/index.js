import React from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import "./index.scss";
import { useCategory } from "../../hooks/useCategory";

export const ContentItem = ({ post }) => {
  const { frontmatter, fields, internal } = post.node;
  const { selectedCategory } = useCategory();

  const handleClick = (slug) => {
    const category = selectedCategory;
    navigate(`${slug}?${qs.stringify({ category })}#blog`);
  };

  return (
    <div className="contentItem" onClick={() => handleClick(fields.slug)}>
      <h4 className="h4 itemTitle">{frontmatter.title}</h4>
      <p className="body-1 itemText">{internal.content}</p>
    </div>
  );
};
