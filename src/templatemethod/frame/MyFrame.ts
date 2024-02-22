import { app, BrowserWindow } from "electron";

class MyFrame {
  private window: BrowserWindow | null;

  constructor(title: string) {
    app.on("ready", () => {
      this.window = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
        },
      });

      this.window.loadURL(
        `data:text/html, <body onload="document.body.innerText='I rule!!'"></body>`
      );
      this.window.on("closed", () => {
        this.window = null;
      });
    });

    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });

    app.on("activate", () => {
      if (this.window === null) {
        this.createWindow();
      }
    });
  }

  createWindow() {
    this.window = new BrowserWindow({
      width: 300,
      height: 300,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    this.window.loadURL(
      `data:text/html, <body onload="document.body.innerText='I rule!!'"></body>`
    );
    this.window.on("closed", () => {
      this.window = null;
    });
  }
}

new MyFrame("Head First Design Patterns");
