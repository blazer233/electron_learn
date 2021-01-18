var {
  app,
  ipcMain,
  BrowserWindow,
  BrowserView,
  globalShortcut,
  dialog: { showMessageBox },
} = require("electron"); //引用app、窗口引用、嵌套窗口引用、全局设置快捷键
const { mainConfig, url } = require("./BrowserConfig");
const path = require("path");
app.allowRendererProcessReuse = true;
var mainWindow = null; // 声明要打开的主窗口

app.on("ready", () => {
  mainWindow = new BrowserWindow(mainConfig);
  require("./menu.js");
  !globalShortcut.isRegistered("ctrl+1") &&
    globalShortcut.register("ctrl+1", () => {
      showMessageBox({
        type: "info",
        title: "info",
        message: "您触发了 'ctrl+e' 快捷键",
      });
    });
  mainWindow.loadFile("index.html"); // 加载html页面
  /**
   * 其他进程：ipcRenderer
   * 主进程：ipcMain
   * .on('监听事件名',(event,拿到的参数)=>{})
   * .send('监听事件名','传递的参数')
   *
   * .sendSync('sync', '同步')
   * .on('监听事件名',(event,拿到的参数)=>{ event.returnValue=''})
   *      主进程直接将信息以【同步】的形式传递给渲染进程
   */
  ipcMain.on("change-frame", (event, arg) => {
    if (arg === true) {
      mainWindow.maximize();
    } else {
      mainWindow.minimize();
    }
  });

  /**
 * 程序内部打开网页
  var view = new BrowserView(); //new出对象
  mainWindow.setBrowserView(view); // 在主窗口中设置view可用
  view.setBounds({ x: 0, y: 100, width: 1200, height: 600 }); //定义view的具体样式和位置
  view.webContents.loadURL(url); //wiew载入的页面

 */
  mainWindow.webContents.openDevTools({ mode: "bottom" });

  mainWindow.on("closed", () => {
    mainWindow = null;
    app.quit();
  });
});
app.on("will-quit", function () {
  //注销全局快捷键的监听
  globalShortcut.unregisterAll();
});
