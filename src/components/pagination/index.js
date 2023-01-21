import React from "react";
import { usePagination } from "../../hooks/usePagination";
import "./index.scss";

export const Pagination = (props) => {
  const { totalCount, siblingCount = 1, currentPage, pageSize } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log(paginationRange);
  return <div className="pagination"></div>;
};
