module.exports = {
  siteMetadata: {
    title: `Gatsby project structure`,
    description: `Initial project structure using gatsby.`,
    author: `@cestemms`,
    company: {
      name: 'HealthBit',
      website: 'https://healthbit.com.br/',
      instagram: 'https://www.instagram.com/healthbitoficial/',
      facebook: 'https://facebook.com/healthbitoficial',
      linkedin: 'https://linkedin.com/company/healthbit/',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `instaImages`,
        path: `${__dirname}/src/assets/img/insta`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
