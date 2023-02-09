import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";

export const useAccordion = () => {
  const location = typeof window !== "undefined" && window.location;
  const { search, pathname, hash } = location;
  const { category } = qs.parse(search);
  const isHome = pathname === "/" && !search && !hash;

  const [show, setShow] = useState(category || CATEGORY.ALL);

  const handleShow = (link) => {
    if (show === link) {
      setShow(CATEGORY.ALL);
    } else if (category === link) {
      setShow(category.toLowerCase());
    }
  };

  useEffect(() => {
    if (isHome) {
      setShow(CATEGORY.ALL);
    } else if (category.includes("/")) {
      setShow(category.split("/")[0]);
    } else {
      setShow(category.toLowerCase());
    }
  }, [search]);

  return { show, handleShow };
};
