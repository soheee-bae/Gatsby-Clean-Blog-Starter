import { useEffect, useState, useCallback } from "react";
import { CATEGORY } from "../constants/category";
import qs from "query-string";

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL);
  const search = window.location.search;
  const pathname = window.location.pathname;

  const handleSelect = useCallback((category) => {
    setSelectedCategory(category);
    window.history.pushState(
      { category },
      "",
      `${window.location.pathname}?${qs.stringify({ category })}`
    );
  }, []);

  useEffect(() => {
    const { category } = qs.parse(search);
    if (!search && pathname === "/") {
      setSelectedCategory(CATEGORY.ALL);
    } else {
      setSelectedCategory(category);
    }
  }, [search]);

  return { selectedCategory, handleSelect };
};
