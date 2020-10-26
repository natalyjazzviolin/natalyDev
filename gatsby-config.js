/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Nataly.dev',
    description: 'web developer and violinist based out of Baltimore, MD',
    author: 'Nataly Merezhuk',
    menuLinks: [
      {
        name: 'nataly.dev',
        link: '/#home'
      },
      {
        name: 'portfolio',
        link: '/#portfolio'
      },
      {
        name: 'blog',
        link: '/blog'
      },
      {
        name: 'contact',
        link: '/#contact'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
