var path = require('path');

module.exports = {
  entry: './build/index.spec.js',
  output: {
    filename: './build/bundle.test.js'
  },
  resolve: {
    alias: {
      "@phosphor/dragdrop/style": path.resolve(__dirname, '../style'),
      "@phosphor/dragdrop": path.resolve(__dirname, '../lib/index')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
