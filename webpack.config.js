const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        },
        port: 3000,
        open: {
            app: {
                name: 'Google Chrome',
            },
        },
        hot: true,
        compress: true,
        // rewrite rules
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
                { from: /./, to: '/404.html' },
            ],
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|webp|ico|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]',
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash:8][ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: 'src/pages/home/index.html',
                404: 'src/pages/404.html',
            },
            js: {
                filename: 'assets/js/[name].[contenthash:8].js',
            },
            css: {
                filename: 'assets/css/[name].[contenthash:8].css',
            },
            
        }),
            new CopyWebpackPlugin({
              patterns: [
                  {
                      from: path.resolve(__dirname, 'src', 'assets'),
                      to: path.resolve(__dirname, 'dist', 'assets'),
                  },
              ],
          }),
    ],
};
