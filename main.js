"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var MyFrame = /** @class */ (function () {
    function MyFrame(title) {
        var _this = this;
        electron_1.app.on("ready", function () {
            _this.window = new electron_1.BrowserWindow({
                width: 300,
                height: 300,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                },
            });
            _this.window.loadURL("data:text/html, <body onload=\"document.body.innerText='I rule!!'\"></body>");
            _this.window.on("closed", function () {
                _this.window = null;
            });
        });
        electron_1.app.on("window-all-closed", function () {
            if (process.platform !== "darwin") {
                electron_1.app.quit();
            }
        });
        electron_1.app.on("activate", function () {
            if (_this.window === null) {
                _this.createWindow();
            }
        });
    }
    MyFrame.prototype.createWindow = function () {
        var _this = this;
        this.window = new electron_1.BrowserWindow({
            width: 300,
            height: 300,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
        });
        this.window.loadURL("data:text/html, <body onload=\"document.body.innerText='I rule!!'\"></body>");
        this.window.on("closed", function () {
            _this.window = null;
        });
    };
    return MyFrame;
}());
new MyFrame("Head First Design Patterns");
