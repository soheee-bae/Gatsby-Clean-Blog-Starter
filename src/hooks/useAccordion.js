import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";

export const useAccordion = () => {
  const { search, pathname, hash } = window.location;
  const { category } = qs.parse(search);
  const isHome = pathname === "/" && !search && !hash;

  const [show, setShow] = useState(category || CATEGORY.ALL);

  // console.log(window.location);
  // const handleShow = (link) => {
  //   console.log({ link });
  //   if (show === link.toLowerCase() || isHome) {
  //     setShow(CATEGORY.ALL);
  //   } else if (link.includes("/")) {
  //     console.log("here");
  //     setShow(link.split("/")[0]);
  //   } else {
  //     setShow(link.toLowerCase());
  //   }
  // };
  console.log({ show });
  console.log({ category });

  useEffect(() => {
    if (isHome || show === category) {
      setShow(CATEGORY.ALL);
    } else if (category.includes("/")) {
      console.log("1");
      setShow(category.split("/")[0]);
    } else {
      console.log("2");

      setShow(category.toLowerCase());
    }
  }, [search]);

  return { show };
};
