const path = require('path');
const env = process.env.NODE_ENV;
const isDevelopment = env === 'development';

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Visualizer = require('webpack-visualizer-plugin');

export default {
  mode: 'production',
  entry: {
    app: ['./public/index.html', './public/styles.css', './src/main.js'],
  },
  resolve: {
    mainFields: ['module', 'main', 'browser'],
    alias: {
      vue$: "vue/dist/vue.js",
      vuex$: "vuex/dist/vuex.esm.js"
    }
  },
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
  devServer: {
    contentBase: './dist',
    // host: process.env.WEBPACK_DEV_HOST,
    host: 'localhost',
    // port: process.env.WEBPACK_DEV_PORT
    port: 8084
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.html/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],
  // stats: {
  //     colors: true
  // },
  devtool: 'source-map',
  // mode: env,
  optimization: {
    usedExports: true,
    sideEffects: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
          priority: 5,
        },
      },
    },
  },
};
