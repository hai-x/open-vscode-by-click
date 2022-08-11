const codeLineTrack = require('./codeLineTrack')

module.exports = function sourceCodeChange(code,id) {
   return codeLineTrack(code,id)
}