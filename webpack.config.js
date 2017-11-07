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
   }
};