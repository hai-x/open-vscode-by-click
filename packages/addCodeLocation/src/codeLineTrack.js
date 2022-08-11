const addLineAttr = require("./addLineAttr");

module.exports = function codeLineTrack(str, resourcePath) {
  let lineList = str.split("\n");
  let newList = [];
  lineList.forEach((item, index) => {
    newList.push(addLineAttr(item, index + 1, resourcePath)); // 添加位置属性，index+1为具体的代码行号
  });
  return newList.join("\n");
}
