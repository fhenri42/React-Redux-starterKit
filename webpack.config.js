const path = require('path')
const webpack = require('webpack')
const src = path.resolve(__dirname, './src')

module.exports = {
  mode: 'development',

  entry: ['babel-polyfill','./src/index.js'],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader',
      options:{
        presets: ["es2015", "react", "stage-0"],
        plugins: [
         ['import', { libraryName: "antd", style: true }]
       ]
      }
    }]

    },
     {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: src,

    },
    {
        test: /\.less$/,
        use: ["style-loader", {loader: 'css-loader', options: {sourceMap: 1}}, {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }}]
    }
  ]
  }
}
