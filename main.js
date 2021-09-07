const { app, BrowserWindow } = require('electron');
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        icon: path.join(__dirname, './assets/icons/png/cursor_icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.menuBarVisible = false;
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }

    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
