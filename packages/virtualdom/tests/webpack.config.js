var path = require('path');

module.exports = {
  entry: './build/index.spec.js',
  output: {
    filename: './build/bundle.test.js'
  },
  resolve: {
    alias: {
      "@phosphor/virtualdom": path.resolve(__dirname, '../lib/index')
    }
  }
}
