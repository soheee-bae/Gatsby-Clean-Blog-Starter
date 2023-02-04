import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";
import { navigate } from "gatsby";

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL);
  const search = window.location.search;
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const isBlogPost = window.location.hash.includes("#blog");

  const handleSelect = (category) => {
    if (category.charAt(0) === "/") category = category.substring(1);
    setSelectedCategory(category);
    if (isBlogPost) {
      console.log("1");
      navigate(`/?${qs.stringify({ category })}`);
    } else {
      console.log("2");

      navigate(`${pathname}?${qs.stringify({ category })}`);
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
