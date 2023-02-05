import { useMemo } from "react";
import { CATEGORY } from "../constants/category";

export const usePosts = ({ posts, selectedCategory }) => {
  const splitedSearch = selectedCategory?.split("/");
  const isRootDirectory = splitedSearch?.length <= 1;

  const filteredPosts = useMemo(
    () =>
      posts.filter(({ node }) => {
        let slug = node.fields.slug.toLowerCase();
        let splitedSlug = slug?.split("/").filter(Boolean);

        return (
          selectedCategory === CATEGORY.ALL ||
          (isRootDirectory && splitedSearch?.[0] === splitedSlug[0]) ||
          (!isRootDirectory &&
            splitedSearch?.[0] === splitedSlug[0] &&
            slug.includes(selectedCategory))
        );
      }),
    [selectedCategory]
  );

  return { filteredPosts };
};
