import React, { useCallback, useState } from "react";
import "./index.scss";
import qs from "query-string";
import { StaticQuery, graphql } from "gatsby";
import { ContentItem } from "../content-Item";
import { Pagination } from "../pagination";
import { useCategory } from "../../hooks/useCategory";
import { usePosts } from "../../hooks/usePosts";

const SiblingCount = 1;
const PageSize = 5;

const ContentList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredPosts } = usePosts({ posts });

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  let finalPosts = filteredPosts.slice(firstPageIndex, lastPageIndex);

  return (
    <div>
      <div className="listContainer">
        {finalPosts.map((post) => (
          <ContentItem post={post} />
        ))}
      </div>
      <Pagination
        handlePageChange={(newCurrent) => setCurrentPage(newCurrent)}
        totalCount={filteredPosts.length}
        siblingCount={SiblingCount}
        currentPage={currentPage}
        pageSize={PageSize}
      />
    </div>
  );
};
export default ContentList;
