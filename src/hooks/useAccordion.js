import { useEffect, useState } from "react";
import { CATEGORY } from "../constants";
import qs from "query-string";

export const useAccordion = () => {
  const [show, setShow] = useState();

  return { show };
};
