/**
 * Created by nadir on 13/08/15.
 */

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path');

var ROOT_PATH = path.resolve(__dirname),
    TARGET = process.env.TARGET;

var common = {

    entry: path.resolve(ROOT_PATH, 'app/main'),
    resolve : {
      extensions: ['', '.js', '.jsx']
    },

    output:{
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              test: /\.sass?$/,
              loader:'style!css!sass'
            },
           /* {
                test: /\.css$/,
                loaders: ['style', 'css']
            }*/
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'index.html')
            //inject: 'body'
        })
    ]

}

if (TARGET==='dev'){

    module.exports = merge(common,{

        devtool: 'eval',

        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    loaders: ['react-hot', 'babel?stage=1'],
                    include: path.resolve(ROOT_PATH, 'app'),
                    exclude: /(node_modules|vendor)/
                }
            ]
        },

        devServer: {
            colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]

    });

}