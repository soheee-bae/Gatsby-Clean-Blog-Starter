export const navigation = [
  {
    title: "First",
    link: "category1",
    children: [
      {
        title: "Code",
        link: "category1/code",
        children: [],
      },
      {
        title: "Project",
        link: "category1/project",
        children: [
          {
            title: "Projectsub",
            link: "category1/project/projectsub",
            children: [],
          },
          {
            title: "Projectsub2",
            link: "CAtegory1/project/projectsub2",
            children: [
              {
                title: "Subsub1",
                link: "category1/project/projectsub2/subsub1",
                children: [],
              },
              {
                title: "subsub2",
                link: "category1/project/projectsub2/subsub2",
                children: [],
              },
              {
                title: "subsub3",
                link: "category1/project/projectsub2/subsub3",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "category2",
    link: "/category2",
    children: [
      {
        title: "blog",
        link: "/category2/blog",
        children: [],
      },
      {
        title: "project",
        link: "/category2/project",
        children: [
          {
            title: "projectsub",
            link: "/category2/project/projectsub",
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "category3",
    link: "/category3",
    children: [],
  },
  {
    title: "category4",
    link: "/category4",
    children: [
      {
        title: "fdf",
        link: "/category4/fdf",
        children: [],
      },
    ],
  },
];
