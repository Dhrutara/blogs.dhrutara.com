
module.exports = {
    trailingSlash: true,
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/about':{page:'/about'}
        };
        return paths;
    },
};