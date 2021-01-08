let {
  remote: { BrowserWindow },
} = require("electron");
window.onload = function () {
  let btn = this.document.querySelector("#btns");
  btn.onclick = function () {
    browserwindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        contextIsolation: false, //是否禁止node
      },
    });
    browserwindow.loadFile("child.html");
    browserwindow.on("close", () => {
      browserwindow = null;
    });
  };
};
