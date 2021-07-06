// Import plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Function to set mode for production or development
const mode = process.env.NODE_ENV === 'production'
? 'production'
: 'development';

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        // Set up to test for sass, scss and css files
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader', 
          'postcss-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
}