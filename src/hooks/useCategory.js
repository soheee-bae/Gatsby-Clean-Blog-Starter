import { useEffect, useState, useCallback } from "react";
import { CATEGORY } from "../constants/category";
import qs from "query-string";

export const useCategory = () => {
  const [category, setCategory] = useState(CATEGORY.ALL);

  const handleSelect = useCallback((category) => {
    setCategory(category);
    window.history.pushState(
      { category },
      "",
      `${window.location.pathname}?${qs.stringify({ category })}`
    );
  }, []);

  useEffect(() => {
    const { category } = qs.parse(window.location.search);
    setCategory(category);
  }, [window.location.search]);

  return { category, handleSelect };
};
