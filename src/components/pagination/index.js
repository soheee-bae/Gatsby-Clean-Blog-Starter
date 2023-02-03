import React from "react";
import { ArrowLeft } from "../../../assets/icons/arrowLeft";
import { ArrowRight } from "../../../assets/icons/arrowRight";
import { DOTS } from "../../constants/page";
import "./index.scss";

export const Pagination = (props) => {
  const { paginationRange, currentPage, handlePageChange } = props;

  let lastPage =
    paginationRange && paginationRange[paginationRange?.length - 1];

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };
  const handlePrev = () => {
    handlePageChange(currentPage - 1);
  };
  return (
    <div className="pagination">
      <ul className="paginationButtons">
        <li
          className="paginationArrow"
          data-disabled={currentPage === 1}
          onClick={handlePrev}
        >
          <ArrowLeft />
        </li>
        <ul className="paginationPages">
          {paginationRange?.map((page) => {
            if (page === DOTS) {
              return <li className="paginationDots">&#8230;</li>;
            }
            return (
              <li
                className="paginationPage"
                data-current={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </li>
            );
          })}
        </ul>
        <li
          className="paginationArrow"
          data-disabled={currentPage === lastPage}
          onClick={handleNext}
        >
          <ArrowRight />
        </li>
      </ul>
    </div>
  );
};
