import { useEffect, useState } from "react";
import { navigate } from "gatsby";
import qs from "query-string";

import { CATEGORY } from "../constants";

export const useCategory = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search, pathname, hash } = location;
  const { category } = qs.parse(search);

  const isHome = pathname === "/" && !search && !hash;
  const isBlogPost = hash?.includes("#blog");

  const [selectedCategory, setSelectedCategory] = useState(
    category || CATEGORY.ALL
  );

  const handleSelect = (category) => {
    if (category.charAt(0) === "/") category = category.substring(1);

    setSelectedCategory(category);
    if (isBlogPost) {
      navigate(`/?${qs.stringify({ category })}`);
    } else {
      navigate(`${pathname}?${qs.stringify({ category })}`);
    }
  };

  useEffect(() => {
    if (!search && isHome) {
      setSelectedCategory(CATEGORY.ALL);
    } else {
      setSelectedCategory(category);
    }
  }, [search]);

  return { selectedCategory, handleSelect };
};
