const path = require("path")
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']

        }]
    }
}