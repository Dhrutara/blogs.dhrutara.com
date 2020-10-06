const withPWA = require('next-pwa');

module.exports = withPWA({
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            'about': { page: '/about' }
        };
        return paths;
    },
    trailingSlash: true,
    pwa: {
        dest: 'public'
    }
});