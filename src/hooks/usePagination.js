import { useMemo, useState } from "react";
import { DOTS } from "../constants/page";

export const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize, siblingCount = 1 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newCurrent) => {
    setCurrentPage(newCurrent);
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    const firstPage = 1;
    const lastPage = totalPageCount;

    if (totalPageCount <= totalPageNumbers) {
      const ranges = range(1, totalPageCount);
      return ranges;
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPageCount);

    const isLeftDots = leftSibling > 2;
    const isRightDots = rightSibling < totalPageCount - 2;

    if (!isLeftDots && isRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (isLeftDots && !isRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPage, DOTS, ...rightRange];
    }

    if (isLeftDots && isRightDots) {
      let middleRange = range(leftSibling, rightSibling);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return { paginationRange, currentPage, handlePageChange };
};
