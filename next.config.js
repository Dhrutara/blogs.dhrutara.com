const withPWA = require('next-pwa');

module.exports = withPWA({
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' }
        };
        return paths;
    },
    trailingSlash: true,
    pwa: {
        dest: 'public'
    }
});