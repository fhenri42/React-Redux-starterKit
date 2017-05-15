var path = require('path');

const src = path.resolve(__dirname, './src')

module.exports = {
  entry: ['babel-polyfill','./src/client/index.js'],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query:{
        presets: ["es2015", "react", "stage-0"]
      }
    }, {
      test: /\.scss$/,
loaders: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader'],
include: src,

    }]
  }

};
