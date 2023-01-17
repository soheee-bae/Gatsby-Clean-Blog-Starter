import React from "react";
import { Link } from "gatsby";
import { ArrowLeft } from "../../../assets/icons/arrowLeft";
import { ArrowRight } from "../../../assets/icons/arrowRight";

import "./index.scss";

const PostNavigation = ({ data }) => {
  const { next, previous } = data;
  const preTitle = previous?.frontmatter.title || "";
  const nextTitle = next?.frontmatter.title || "";

  return (
    <div className="postNavigation">
      <Link to={previous?.fields.slug} className="postNavLink">
        {previous && (
          <div className="postNavButton">
            <ArrowLeft />
            {preTitle}
          </div>
        )}
      </Link>
      <Link to={next?.fields.slug} className="postNavLink">
        {next && (
          <div className="postNavButton">
            {nextTitle}
            <ArrowRight />
          </div>
        )}
      </Link>
    </div>
  );
};
export default PostNavigation;
