const sourceCodeChange = require('./src/sourceCodeChange')

module.exports = function(mode) {
    return {
      name: 'add-code-location',
      enforce: 'pre',
      transform(code, id) {
        return sourceCodeChange(code, id)
      }
    }
  }