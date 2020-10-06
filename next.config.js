const withPWA = require('next-pwa');
const blogsList = require('./utilities/blogs-list');

module.exports = withPWA({
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };

        console.log(blogsList.BlogsList);

        blogsList.BlogsList.forEach((slug) => {
            paths[`/blog/${slug}`] = {
              page: '/blog/[slug]',
              query: { path: slug },
            };
          });

        return paths;
    },
    trailingSlash: true,
    pwa: {
        dest: 'public'
    }
});