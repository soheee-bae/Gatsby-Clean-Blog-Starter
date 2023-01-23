import { useEffect, useState, useMemo } from "react";
import { CATEGORY } from "../constants/category";
import qs from "query-string";

export const usePosts = ({ posts }) => {
  const { category } = qs.parse(window.location.search);
  const splitedSearch = category?.split("/");

  const isRootDirectory = splitedSearch.length <= 1;

  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let slug = node.fields.slug;
        let splitedSlug = slug?.split("/").filter(Boolean);

        console.log(slug);
        console.log(slug.includes(category));
        return (
          category === CATEGORY.ALL ||
          (isRootDirectory && splitedSearch[0] === splitedSlug[0]) ||
          (!isRootDirectory &&
            splitedSearch[0] === splitedSlug[0] &&
            slug.includes(category))
        );
      }),
    [category]
  );

  return { filteredPosts };
};

// ({ node }) =>
// category === CATEGORY.ALL || (isRootDirectory && splitedSearch[0] === )
// )
// .slice(0, count * countOfInitialPost)
