import React from "react";
import "./index.scss";

export const ContentItem = ({ post }) => (
  <div key={post.node.id} className="contentItem">
    <h4 className="h4 itemTitle">{post.node.frontmatter.title}</h4>
    <p className="body-1 itemText">{post.node.internal.content}</p>
  </div>
);
