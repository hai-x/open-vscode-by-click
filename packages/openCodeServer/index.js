const openCodeFile = require("./src/openCodeFile");
const codeServer = () => ({
  name: "open-code-vite-server",
  configureServer(server) {
    // 返回一个在内部中间件安装后
    // 被调用的后置钩子
    server.middlewares.use((req, res, next) => {
      const [url, filePath] = req.url.split("?");
      if (url == "/code") {
        const [_, value] = filePath.split("=");
        if (value !== 'null') {
          const path = decodeURIComponent(value);
          openCodeFile(path); // 执行vscode定位代码行命令
        }
        res.end();
      } else next();
    });
  },
});
module.exports = codeServer;
