import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";
import { navigate } from "gatsby";

export const useCategory = () => {
  const { search, pathname, hash } = window.location;
  const { category } = qs.parse(search);

  const isHome = pathname === "/" && !search && !hash;
  const isBlogPost = hash.includes("#blog");

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
