import { useEffect, useState, useMemo } from "react";
import { CATEGORY } from "../constants/category";
import qs from "query-string";
import { useCategory } from "./useCategory";

export const usePosts = ({ posts }) => {
  const { selectedCategory } = useCategory();
  const { category } = qs.parse(window.location.search);
  const splitedSearch = category?.split("/");

  const isRootDirectory = splitedSearch.length <= 1;

  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let slug = node.fields.slug;
        let splitedSlug = slug?.split("/").filter(Boolean);
        return (
          category === CATEGORY.ALL ||
          (isRootDirectory && splitedSearch[0] === splitedSlug[0]) ||
          (!isRootDirectory &&
            splitedSearch[0] === splitedSlug[0] &&
            slug.includes(category))
        );
      }),
    [selectedCategory]
  );

  return { filteredPosts };
};
