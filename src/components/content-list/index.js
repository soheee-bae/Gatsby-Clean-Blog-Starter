import React from "react";
import "./index.scss";
import { ContentItem } from "../content-Item";
import { Pagination } from "../pagination";
import { PAGE } from "../../constants";

const ContentList = ({
  filteredPosts,
  paginationRange,
  currentPage,
  handlePageChange,
}) => {
  const firstPageIndex = (currentPage - 1) * PAGE.PAGESIZE;
  const lastPageIndex = firstPageIndex + PAGE.PAGESIZE;
  let finalPosts = filteredPosts.slice(firstPageIndex, lastPageIndex);

  return (
    <div>
      <div className="listContainer">
        {finalPosts.map((post, index) => (
          <ContentItem key={index} post={post} />
        ))}
      </div>
      <Pagination
        paginationRange={paginationRange}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default ContentList;
