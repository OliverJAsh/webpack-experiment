module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/target',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'es6-loader' }
        ]
    }
};
