const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

let plugins = process.argv.indexOf('-p') === -1 ? [] : [
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
  }),
];

plugins.push(new CleanWebpackPlugin(["build"]));

plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
  entry: `${__dirname}/src/js/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  devServer: {
    hot: true
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['env', 'react'], plugins: ["transform-object-rest-spread", "react-hot-loader/babel"] } },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },

  plugins: plugins,
};
