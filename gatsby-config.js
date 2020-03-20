module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-service-relief`,
      options: {
        authorName: `@duffn`,
        authorLink: `https://twitter.com/duffn`,
        city: `Denver`,
        state: `Colorado`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/gatsby-theme-service-relief/images`,
      },
    },
  ],
}
