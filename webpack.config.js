const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.jsx')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My portfolio',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html' // название выходного файла
    }),

    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist') // Каталог для статики
    },
    historyApiFallback: true,
    hot: false,
    open: true // Автоматически открывать браузер
  },

  mode: 'development' // Режим сборки
};
