import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";

export const useAccordion = () => {
  const { search, pathname, hash } = window.location;
  const { category } = qs.parse(search.toLowerCase());
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
      setShow(category.split("/")[0].toLowerCase());
    } else {
      setShow(category.toLowerCase());
    }
  }, [search]);

  return { show, handleShow };
};
