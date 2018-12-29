const path = require('path');
const slsw = require('serverless-webpack');

console.log(path.join(__dirname, 'lib'));
module.exports = {
    mode: 'development',
    entry: slsw.lib.entries,
    devtool: 'source-map',
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx'
        ],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }]
    },
};