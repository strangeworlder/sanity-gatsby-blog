// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  siteMetadata: {
    siteUrl: `https://sanity-gatsby-blog-web-xsrb3ocv.netlify.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `{
        allSanitySiteSettings {
          nodes {
            title
            description
          }
        }
        site {
          siteMetadata {
            siteUrl
            site_url:siteUrl
            
          }
        }
      }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityPost } }) => {
              return allSanityPost.edges.map(edge => {
                return Object.assign({}, edge.node.id, {
                  description: edge.node.excerpt,
                  date: edge.node.publishedAt,
                  title: edge.node.title,
                  url:
                    site.siteMetadata.siteUrl +
                    '/blog/' +
                    edge.node.dateString +
                    '/' +
                    edge.node.slug.current,
                  guid:
                    site.siteMetadata.siteUrl +
                    '/blog/' +
                    edge.node.dateString +
                    '/' +
                    edge.node.slug.current,
                  custom_elements: [{ 'content:encoded': edge.node._rawbody }]
                });
              });
            },
            query: `
              {
                allSanityPost(
                  sort: { order: DESC, fields: publishedAt },
                ) {
                  edges {
                    node {
                      slug {
                        current
                      }
                      title
                      publishedAt
                      dateString:publishedAt(formatString: "YYYY/MM")
                      id
                      _rawBody
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed"
          }
        ]
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    }
  ]
};
