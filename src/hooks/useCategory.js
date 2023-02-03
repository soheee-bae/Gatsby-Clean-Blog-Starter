import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";
import { navigate } from "gatsby";

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL);
  const search = window.location.search;
  const pathname = window.location.pathname;
  const isHome = pathname === "/";

  const handleSelect = (category) => {
    if (category.charAt(0) === "/") category = category.substring(1);
    setSelectedCategory(category);

    if (!search && !isHome) {
      navigate(`/?${qs.stringify({ category })}`);
    } else {
      window.history.pushState(
        { category },
        "",
        `${window.location.pathname}?${qs.stringify({ category })}`
      );
    }
  };

  useEffect(() => {
    const { category } = qs.parse(search);
    if (!search && isHome) {
      setSelectedCategory(CATEGORY.ALL);
    } else {
      setSelectedCategory(category);
    }
  }, [search]);

  return { selectedCategory, handleSelect };
};
