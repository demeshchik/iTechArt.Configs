/**
 * Created by a.dziameshchyk on 10/13/2017.
 */
var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname +  "/scripts",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['es2015', 'react', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            sourceMap: true
                        }
                    }, {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ])
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    }
};