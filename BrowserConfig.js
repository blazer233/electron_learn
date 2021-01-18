const mainConfig = {
  width: 1200,
  height: 900,
  webPreferences: {
    nodeIntegration: true, //是否使用node
    enableRemoteModule: true, //是否有子页面
    contextIsolation: false, //是否禁止node
    nodeIntegrationInSubFrames: true, //否允许在子页面(iframe)或子窗口(child window)中集成Node.js
  },
};
const childConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    contextIsolation: true, //是否禁止node
  },
};
const otherConfig = {
  width: 600,
  height: 900,
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true,
    contextIsolation: false,
  }, //是否有子页面
};
const url = "https://www.bookstack.cn/read/electronjs-9.0/README.md";
module.exports = { mainConfig, childConfig, otherConfig, url };
