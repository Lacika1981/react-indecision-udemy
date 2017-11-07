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
      }]
   },
   devtool: 'cheap-module-eval-source-map',
   devServer: {
       contentBase: path.join(__dirname, 'public')
   }
};

//install webpack-dev-server sudo yarn add webpack-dev-server@2.5.1