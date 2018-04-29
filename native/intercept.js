"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var Store = require("electron-store");
var store = new Store({
    configName: 'user-preferences',
    defaults: {
        windowBounds: {
            width: 1280,
            height: 720
        },
        account: 'levels',
        node: 0
    }
});
// require('electron-reload')(__dirname);
var win;
var serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
try {
    require('dotenv').config();
}
catch (_a) {
    console.log('asar');
}
function createWindow() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    // store.set({'unicorn': '🦄','node': 1 });
    // console.log(store.get('unicorn'));
    console.log(store.get('node'));
    var index = store.get('node');
    store.set('windownBounds.height', 720);
    electron_1.ipcMain.emit('send-node', index);
    electron_1.ipcMain.on('save-index', function (event, arg) {
        console.log(arg);
    });
    electron_1.ipcMain.emit('new-channel', 'from the main yawn');
    // In main process.
    electron_1.ipcMain.on('asynchronous-message', function (event, arg) {
        console.log(arg); // prints "ping"
        var index = store.get('node');
        event.sender.send('asynchronous-reply', index);
    });
    electron_1.ipcMain.on('synchronous-message', function (event, arg) {
        console.log(arg); // prints "ping"
        event.returnValue = 'pong';
    });
    console.log(store.get('windowBounds'));
    // Use dot-notation to access nested properties
    //   store.set('account.username', 'levels');
    //   console.log(store.get('foo'));
    //=> {bar: true}
    // store.delete('unicorn');
    // console.log(store.get('unicorn'));
    //=> undefined
    // let icon = nativeImage.createFromPath(path.join(__dirname, 'rcvr.png'))
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        // x: 0,
        // y: 0,
        // width: size.width,
        // height: size.height,
        useContentSize: true,
        minWidth: 640,
        minHeight: 480,
        width: 1280,
        height: 720,
        center: true,
        icon: path.join(__dirname, 'rcvr.png'),
        titleBarStyle: 'hidden-inset',
        backgroundColor: '#242424',
        frame: false,
        show: false
    });
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "../node_modules/electron")
        });
        win.loadURL('http://localhost:5000');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, '../dist/apps/intercept/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    win.on('resize', function () {
        // The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
        // the height, width, and x and y coordinates.
        var _a = win.getBounds(), width = _a.width, height = _a.height;
        // Now that we have them, save them using the `set` method.
        store.set('windowBounds', { width: width, height: height });
    });
    win.webContents.openDevTools({ detached: true });
    win.once('ready-to-show', function () {
        win.show();
    });
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
electron_1.ipcMain.on('set-node', function (event, node) {
    // console.log('what the fuck is this ---->', node, event);
    store.set('node', node);
    console.log('this--------->', store.get('node'));
});
try {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    electron_1.app.on('ready', createWindow);
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });
}
catch (e) {
    // Catch Error
    // throw e;
}
