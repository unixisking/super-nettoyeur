module.exports = {
  siteMetadata: {
    title: `Super Nettoyage`,
    description: `Entreprise de nettoyage en Romandie, pas cher, Disponible 24/7.`,
    author: `@try2promote`,
    titleTemplate: "%s · Super Nettoyage",
    siteUrl: "https://super-nettoyage.ch",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "gShqJ8olA053u3ZEbHZAhAtt",
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5N9J3MM",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",

        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "villes",
        path: "./src/images/villes",
      },
      __key: "images",
    },
  ],
}
