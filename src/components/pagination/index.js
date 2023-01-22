import React from "react";
import { ArrowLeft } from "../../../assets/icons/arrowLeft";
import { ArrowRight } from "../../../assets/icons/arrowRight";
import { DOTS, usePagination } from "../../hooks/usePagination";
import "./index.scss";

export const Pagination = (props) => {
  const { totalCount, siblingCount = 1, currentPage, pageSize } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="pagination">
      <ul className="paginationButtons">
        <li className="paginationArrow" data-disabled={currentPage === 1}>
          <ArrowLeft />
        </li>
        <ul className="paginationPages">
          {paginationRange.map((page) => {
            if (page === DOTS) {
              return <li className="paginationDots">&#8230;</li>;
            }
            return (
              <li
                className="paginationPage"
                data-current={page === currentPage}
              >
                {page}
              </li>
            );
          })}
        </ul>
        <li
          className="paginationArrow"
          data-disabled={currentPage === lastPage}
        >
          <ArrowRight />
        </li>
      </ul>
    </div>
  );
};
