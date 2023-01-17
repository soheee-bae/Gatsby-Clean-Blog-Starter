import React from "react";
import "./index.scss";

const PostContent = ({ content }) => {
  return (
    <div className="postContent">
      <div
        className="body-1 content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default PostContent;
