const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'public'), 
    filename: 'bundle.js' 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.ts?$/, loader: 'ts-loader' },
    ],
  },
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  }
}