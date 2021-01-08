var { app, BrowserWindow } = require("electron"); //引用app、窗口引用
app.allowRendererProcessReuse = true;
var mainWindow = null; // 声明要打开的主窗口

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 800,
    webPreferences: {
      nodeIntegration: true, //是否使用node
      enableRemoteModule: true, //是否有子页面
      contextIsolation: false, //是否禁止node
    },
  });
  require("./menu.js");

  mainWindow.loadFile("index.html"); // 加载html页面
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
