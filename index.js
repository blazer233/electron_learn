const { childConfig } = require("./BrowserConfig");
const json = require("./food.json");
const fs = require("fs");
const {
  shell: { openExternal },
  remote: {
    BrowserWindow,
    getCurrentWindow,
    dialog: { showOpenDialog, showSaveDialog, showMessageBox },
    Menu: { buildFromTemplate },
    clipboard: { writeText },
  },
} = require("electron");

openBtn.onclick = async function () {
  let res = await showOpenDialog({
    title: "选择照片",
    buttonLabel: "选择一张你想打开的照片",
    filters: [
      { name: "jpg", extensions: ["jpg", "png"] }, //类型
    ],
  });
  images.setAttribute("src", res.filePaths[0]);
};
saveBtn.onclick = async function () {
  let res = await showSaveDialog({
    title: "保存文件",
    defaultPath: "导出数据.json",
    buttonLabel: "选择导出数据的文件夹",
  });
  let writerStream = fs.createWriteStream(res.filePath);
  writerStream.write(JSON.stringify(json, undefined, 2), "UTF8");
  writerStream.end();
};
messageBtn.onclick = async function () {
  let res = await showMessageBox({
    type: "warning",
    title: "想不想保存",
    message: "想的话需要先进行下载",
    buttons: ["成", "算了"],
  });
  console.log(res.response);
};
window.addEventListener("message", msg => {
  mybaby.innerHTML = JSON.stringify(msg);
});
window.addEventListener("online", function () {
  alert("网络恢复了，我们继续哦！");
});

window.addEventListener("offline", function () {
  alert("网络失联了，请稍等！");
});
btn.onclick = function () {
  fs.readFile("test.txt", (err, data) => {
    if (err) console.log(err);
    mybaby.innerHTML = data;
  });
};
btns.onclick = function () {
  browserwindow = new BrowserWindow(childConfig);
  browserwindow.loadFile("./child.html");
  browserwindow.on("close", () => {
    browserwindow = null;
  });
};
aHref.onclick = function (e) {
  e.preventDefault();
  openExternal(this.getAttribute("href"));
};
aHrefopen.onclick = function () {
  window.open("https://www.bookstack.cn/read/electronjs-9.0/README.md");
};
btncopy.onclick = function () {
  writeText(code.innerHTML);
  new window.Notification("success", {
    title: "成功",
    body: "激活码复制成功",
  });
};
var rigthTemplate = [
  { label: "粘贴", accelerator: `ctrl+v` },
  { label: "复制", accelerator: `ctrl+c` },
];
window.addEventListener("contextmenu", e => {
  //阻止当前窗口默认事件
  e.preventDefault();
  //把菜单模板添加到右键菜单
  buildFromTemplate(rigthTemplate).popup({ window: getCurrentWindow() });
});

notifyBtn.onclick = function () {
  new window.Notification("小二,来订单了，出来接客了!", {
    title: "小二,来订单了，出来接客了!",
    body: "有大官人刚翻了你的牌子",
  });
};
