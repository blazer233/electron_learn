const { otherConfig } = require("./BrowserConfig");
const {
  Menu: { buildFromTemplate, setApplicationMenu },
  BrowserWindow,
} = require("electron");

var template = [
  {
    label: "流量",
    submenu: [
      {
        label: "充值10G",
        accelerator: `ctrl+n`, //快捷键
        click: () => {
          win = new BrowserWindow(otherConfig);
          win.loadFile("about.html");
          win.on("closed", () => (win = null));
        },
      },
      { label: "充值50G" },
    ],
  },
  {
    label: "话费",
    submenu: [{ label: "充值100" }, { label: "充值200" }],
  },
];
setApplicationMenu(buildFromTemplate(template));
