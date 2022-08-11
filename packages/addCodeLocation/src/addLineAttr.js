module.exports = function addLineAttr(lineStr, line, resourcePath) {
  if(resourcePath.includes('/node_modules/') || !resourcePath.lastIndexOf('.vue')) return lineStr
  let reg = /<[\w-]+/g;
  let leftTagList = lineStr.match(reg);
  if (leftTagList) {
    leftTagList = Array.from(new Set(leftTagList));
    leftTagList.forEach((item) => {
      if (item && item.indexOf("template") == -1) {
        let regx = new RegExp(`${item}`, "g");
        let location = `${item} code-location="${resourcePath}:${line}"`;
        lineStr = lineStr.replace(regx, location);
      }
    });
  }
  return lineStr;
};
