import React from "react";
import "./index.scss";

const PostContent = ({ content }) => {
  return (
    <div
      className="body-1 postContent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default PostContent;
