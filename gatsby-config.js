/**
 * @type {import('gatsby').GatsbyConfig}
 */

const metaConfig = require("./gatsby-metaconfig");

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `templates`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/styles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `layout`,
        path: `${__dirname}/src/layout`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-emoji",
            options: {
              emojiConversion: "shortnameToUnicode",
              ascii: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
  ],
};
