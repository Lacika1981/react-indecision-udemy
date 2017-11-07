const path = require('path');

//console.log(path.join(__dirname, 'public')); //node webpack.config.js, getting absolute path to output file

module.exports = {
   entry: "./src/app.js",
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
      },
      {
          test: /\.s?css$/, //RegExp to find css and scss files
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      }
    ]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
       contentBase: path.join(__dirname, 'public')
   }
};