const path = require('path')

module.exports = options => {
  const { contentPath, iconPath, basePath } = options

  return {
    siteMetadata: {
      title: 'Gatsby Theme Amsterdam',
      description: '',
      image: '',
      url: '',
      author: '',
      intro: '',
      menuLinks: [
        {
          name: 'Gatsby Theme Amsterdam',
          slug: '/',
        },
      ],
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath || `content`,
          name: 'posts',
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            `gatsby-remark-prismjs`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1000,
                linkImagesToOriginal: false,
                withWebp: true,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Gatsby Theme Amsterdam`,
          short_name: `Amsterdam`,
          background_color: `#f5f0eb`,
          theme_color: `#292929`,
          start_url: basePath || `/`,
          display: `standalone`,
          icon: iconPath
            ? path.resolve(iconPath)
            : require.resolve('./src/images/favicon.png'),
        },
      },
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
    ].filter(Boolean),
  }
}
