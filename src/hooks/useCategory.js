import { useState } from "react";
import { CATEGORY } from "../constants/category";
import qs from "query-string";

export const useCategory = () => {
  const [category, setCategory] = useState(CATEGORY.ALL);

  const handleSelect = (category) => {
    setCategory(category);
    window.history.pushState(
      { category },
      "",
      `${window.location.pathname}?${qs.stringify({ category })}`
    );
  };

  return { category, handleSelect };
};
