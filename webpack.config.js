const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Process .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel to process JS/JSX
      },
      {
        test: /\.css$/i, // This rule handles .css files
        use: ['style-loader', 'css-loader'], // Add CSS to DOM via style tag
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './public',
    port: 3006, // Change to a different port
  },
  mode: 'development',
};

