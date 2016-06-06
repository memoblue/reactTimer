var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({ // make jquery available in all components
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname, // current dir in node
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        Timer: 'app/components/Timer.jsx',
        Countdown: 'app/components/Countdown.jsx',
        CountdownForm: 'app/components/CountdownForm.jsx',
        Controls: 'app/components/Controls.jsx',
        Clock: 'app/components/Clock.jsx',
        applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader', // convert jsx to es5 code
        query: {
          presets: ['react', 'es2015', 'stage-0'] // what to load
        },
        test: /\.jsx?$/, // which files to get
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
