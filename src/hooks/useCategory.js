import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL);
  const search = window.location.search;
  const pathname = window.location.pathname;
  const isHome = pathname === "/";

  const handleSelect = (category) => {
    if (category.charAt(0) === "/") category = category.substring(1);
    setSelectedCategory(category);
    
    const pathname = !search && !isHome ? `/` : `${window.location.pathname}`;
    window.history.pushState(
      { category },
      "",
      `${pathname}?${qs.stringify({ category })}`
    );
  };

  useEffect(() => {
    const { category } = qs.parse(search);
    if (!search && isHome) {
      setSelectedCategory(CATEGORY.ALL);
    } else {
      setSelectedCategory(category);
    }
  }, []);

  return { selectedCategory, handleSelect };
};
