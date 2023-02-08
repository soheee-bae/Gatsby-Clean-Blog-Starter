---
title: "More About Blog"
date: 2023-02-06 9:51:13
subtitle: "Do you want to know more about Gatsby Clean Blog Starter?"
category: "Blog"
draft: false
---

Welcome to Gatsby Clean Blog Starter!

### 1. Support markdown with Five frontmatter

```
---
title: "More About Blog"
date: 2023-02-05 10:51:13
subtitle: "Do you want to know more about Gatsby Clean Blog Starter?"
category: "Blog"
draft: false // when it is true, this post won't be visible
---
```

1. title
2. date
3. subtitle
4. category
5. draft

### 2. Support emoji

You can check [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) for lists of emoji!

### 3. Support light/dark mode

### 4. Support pagination

You can set sibling count (of the current page) and page size (number of posts per page) in `src/constants/page.js`!

```
export const PAGE = {
  SIBLINGCOUNT: 1,
  PAGESIZE: 5,
};
```

### 5. Support nested navbar

The navigation list is based on the directory structure in `/src/content`.
As you add a new directory, it will be listed as another category in the navbar!

### 6. Resize layout

You can resize layout (e.g. `height of footer`) in `src/styles/_size.scss`!

```
$footer-height: 60px;
$navbar-width-bigScreen: 240px;
$navbar-height-smallScreen: 60px;
$innerContainer-width: 150px;
...
```

### 7. Change color

All colors that have been used in this blog are in `src/styles/_color.scss`.
You can simply change hex code color from `src/styles/_color.scss`!

```
--lg-black: #000000;
--lg-light-black: #212529;
--lg-darkest-gray: #343a40;
--lg-darker-gray: #495057;
...
```

Note! - If you decide to change the name (e.g. `--lg-black`), you need to edit the `src/utils/theme.js` for theme switch.

### 8. Custom post thumbnail

You can display or hide (`title, subtitle, date, content`) by setting the option from `src/constants/contentItem.js`!

```
export const CONTENTITEM = {
  TITLE: true,
  SUBTITLE: true,
  DATE: true,
  CONTENT: true,
};
```
