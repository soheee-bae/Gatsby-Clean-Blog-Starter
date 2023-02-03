import React from "react";
import { Link } from "gatsby";

import "./index.scss";
import { ChevronLeft } from "../../../assets/icons/chevronLeft";
import { ChevronRight } from "../../../assets/icons/chevronRight";

const PostNavigation = ({ data }) => {
  const { next, previous } = data;
  const preTitle = previous?.frontmatter.title || "";
  const nextTitle = next?.frontmatter.title || "";

  return (
    <div className="postNavigation">
      <Link to={previous?.fields.slug} className="postNavLink">
        {previous && (
          <div className="postNavButton">
            <ChevronLeft />
            {preTitle}
          </div>
        )}
      </Link>
      <Link to={next?.fields.slug} className="postNavLink">
        {next && (
          <div className="postNavButton">
            {nextTitle}
            <ChevronRight />
          </div>
        )}
      </Link>
    </div>
  );
};
export default PostNavigation;
