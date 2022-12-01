const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@store': 'src/store',
        '@styles': 'src/styles',
    })(config);

    return config;
}
