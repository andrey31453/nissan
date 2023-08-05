const html_webpack_plugin = require('html-webpack-plugin')
const { VueLoaderPlugin: vue_loader_plugin } = require('vue-loader')

const dist_dir = __dirname + '/public/js'
const src = __dirname + '/src/'

//
// entry
//

const get_entry = () => {
  return {
    main: src + 'main.js',
  }
}

//
// rules
//

const get_rules = (dev) => {
  return [
    // vue
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },

    // js
    {
      test: /\.(mjs|js)$/i,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },

    // scss
    {
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('postcss-preset-env')],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: dev ? true : false,
          },
        },
      ],
    },

    // files
    {
      test: /\.(png|jpg|webp)$/i,
      type: 'asset/resource',
    },

    // json
    {
      test: /\.json$/i,
      type: 'asset/resource',
    },
  ]
}

//
// plugins
//

const get_plugins = () => {
  return [
    new vue_loader_plugin(),
    new html_webpack_plugin({
      template: src + 'index.html',
    }),
  ]
}

//
// alias
//

const get_alias = () => {
  return {
    '@consts': src + 'assets/consts/__bunddle.js',
    '@helpers': src + 'assets/helpers/__bunddle.js',
    '@styles': src + 'assets/styles',

    '@ui': src + 'ui/__bunddle.js',
    '@components': src + 'components/__bunddle.js',
    '@views': src + 'views/__bunddle.js',
    '@composables': src + 'composables/__bunddle.js',
    '@store': src + 'store/__bunddle.js',
  }
}

//
// serve
//

const get_serve = (dev) => {
  return dev
    ? {
        open: {
          app: {
            name: 'firefox developer edition',
            arguments: ['--new-tab'],
          },
        },
        hot: true,
        port: 8080,
      }
    : undefined
}

//
// exports
//

module.exports = ({ dev }) => {
  return {
    // mode
    mode: dev ? 'development' : 'production',

    // target
    target: ['browserslist'],

    // devtool
    devtool: dev ? 'eval-source-map' : undefined,

    // devServer
    devServer: get_serve(dev),

    // entry
    entry: get_entry(),

    // output
    output: {
      filename: '[name].js',
      clean: true,
      path: dist_dir,
      assetModuleFilename: '[name][ext]',
    },

    // resolve
    resolve: {
      extensions: ['.vue', '.js'],
      alias: get_alias(),
    },

    // module
    module: {
      rules: get_rules(dev),
    },

    //plugins
    plugins: get_plugins(),
  }
}
