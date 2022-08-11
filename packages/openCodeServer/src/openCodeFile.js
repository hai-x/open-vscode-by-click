const child_process  = require ('child_process')

module.exports = function openCodeFile(path) {
    let pathBefore = __dirname.substring(0, __dirname.search('plugin'))
    let filePath = pathBefore + path
    child_process.exec(`code -r -g ${filePath}`)
}