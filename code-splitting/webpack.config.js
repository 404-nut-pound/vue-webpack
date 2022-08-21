var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none', // production, development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //style-loader - html head 태그 내에 css를 넣어줌, css-loader - js 결과 파일에 css 내용을 넣어 줌
      },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin()
  // ],
};
