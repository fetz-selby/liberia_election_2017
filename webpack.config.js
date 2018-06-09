const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname+'/build',
        filename: "app.bundle.js"
    },
    devServer: {
        inline: false,
        contentBase: "./build",
    },
    target : 'node',
    externals : [nodeExternals()],
    module: {
        loaders: [{ 
            test: /\.js?$/, 
            loader: "babel-loader",
            query: {
                presets : ['es2015']
            }
        },{ test: /\.json$/, loader: 'json-loader' }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
         new CopyWebpackPlugin([{from : './loaders/candidates.json', to:'./loaders/candidates.json'},
         {from : './loaders/centers.json', to : './loaders/centers.json'},
         {from : './loaders/countys.json', to : './loaders/countys.json'},
         {from : './loaders/allcandidates.json', to : './loaders/allcandidates.json'},
         {from : './loaders/allcenters.json', to : './loaders/allcenters.json'},
         {from : './loaders/allcountys.json', to : './loaders/allcountys.json'},
         {from : './resources/liberia_election_data.json', to : './resources/liberia_election_data.json'}])
    ]
};