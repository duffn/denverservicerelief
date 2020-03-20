module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-service-relief`,
      options: {
        authorName: `@amber1ey`,
        authorLink: `https://twitter.com/amber1ey`,
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
  ],
}
