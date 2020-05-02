const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    const htmlPlugin = new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
    });
    const cleanDistFolderPlugin = new CleanWebpackPlugin();

    const plugins = [cleanDistFolderPlugin, htmlPlugin];

    return {
        context: path.resolve(__dirname, 'src'),
        entry: ['./index.tsx'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            publicPath: '/',
        },
        mode: "production",
        devtool: "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },
        watchOptions: {
            ignored: /node_modules/,
        },
        plugins,
    }
};