module.exports = {
  siteMetadata: {
    title: `Gatsby project structure`,
    description: `Initial project structure using gatsby.`,
    author: {
      name: `@cestemms`,
      url: `https://github.com/cestemms`
    },
    company: {
      name: 'HealthBit',
      blog: 'http://blog.healthbit.com.br',
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
    //uploads needs to be the first filesystem to work with gatsby-remark-images
    //Uncomment to use cms
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `uploads`,
    //     path: `${__dirname}/src/static/assets/img`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`
        ],
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
