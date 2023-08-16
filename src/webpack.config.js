// module.exports = {
//     entry: [
//       './src/index.js'
//     ],
// module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//       {
//         test: /\.(?!(css|html|js|ts|jsx|tsx)$)[^.]+$/,
//         type: 'asset/resource'
//       },
//       {
//         test: /\.css$/,
//         use: [ 'style-loader', 'css-loader' ]
//       }
//     ]
// },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
// output: {
//   path: __dirname + '/dist',
//   publicPath: '/',
//   filename: 'bundle.js'
// },
// devServer: {
//   contentBase: './dist'
// }
// }
// module.exports = {
//   module: {
//     loaders: [
//       { test: /\.css$/, loader: "style-loader!css-loader" },
//       // ...
//     ]
//   }
// };