import React from "react";
import "./index.scss";

const PostHeader = ({ data }) => {
  return (
    <div className="postHeader">
      <div className="h2 postTitle">{data.title}</div>
      <div className="body-2 postDate">{data.date}</div>
    </div>
  );
};
export default PostHeader;
