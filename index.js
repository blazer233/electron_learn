var fs = require("fs");
// const { Menu } = require("electron");
window.onload = function () {
  var btn = this.document.querySelector("#btn");
  var mybaby = this.document.querySelector("#mybaby");
  btn.onclick = function () {
    fs.readFile("test.txt", (err, data) => {
      mybaby.innerHTML = data;
    });
  };
};

// var template = [
//   {
//     label: "XXX",
//     submenu: [{ label: "SSS" }, { label: "sss" }],
//   },
//   {
//     label: "CCC",
//     submenu: [{ label: "AAA" }, { label: "aaa" }],
//   },
// ];

// var m = Menu.buildFromTemplate(template);

// Menu.setApplicationMenu(m);
