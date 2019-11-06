var path = require('path');

module.exports = {
  entry: './build/index.spec.js',
  output: {
    filename: './build/bundle.test.js'
  },
  resolve: {
    alias: {
      "@phosphor/keyboard": path.resolve(__dirname, '../lib/index')
    }
  }
}
