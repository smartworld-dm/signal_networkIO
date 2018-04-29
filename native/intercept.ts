import { app, BrowserWindow, screen, ipcMain, nativeImage } from 'electron';
import * as path from 'path';
import * as url from 'url';

import * as Store from 'electron-store';


const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 1280,
      height: 720,
    },
    account: 'levels',
    node: 0
  }
});


// require('electron-reload')(__dirname);

let win;

let serve;

const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

try {
  require('dotenv').config();
} catch {
  console.log('asar');
}


function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // store.set({'unicorn': '🦄','node': 1 });
  // console.log(store.get('unicorn'));
  console.log(store.get('node'));

  const index = store.get('node')

  store.set('windownBounds.height', 720)

  ipcMain.emit('send-node', index);

  ipcMain.on('save-index', (event, arg) => {
    console.log(arg)
  });


  ipcMain.emit('new-channel', 'from the main yawn' )


  // In main process.
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    const index = store.get('node')
    event.sender.send('asynchronous-reply', index)
  })
  
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)  // prints "ping"
    event.returnValue = 'pong'
  })
  


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
  win = new BrowserWindow({
    // x: 0,
    // y: 0,
    // width: size.width,
    // height: size.height,
    useContentSize: true,
    minWidth: 640,
    minHeight:480,
    width: 1280,
    height: 720,
    center:true,
    icon: path.join(__dirname, 'rcvr.png'),    // fullscreen: true,
    titleBarStyle: 'hidden-inset',
    backgroundColor: '#242424',
    frame: false,
    show: false
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}../node_modules/electron`)});
    win.loadURL('http://localhost:5000');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../dist/apps/intercept/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }


  win.on('resize', () => {
    // The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
    // the height, width, and x and y coordinates.
    let { width, height } = win.getBounds();
    // Now that we have them, save them using the `set` method.
    store.set('windowBounds', { width, height });
  });

  win.webContents.openDevTools({detached: true});

  win.once('ready-to-show', () => {
    win.show()
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

ipcMain.on('set-node', (event, node) => {
  // console.log('what the fuck is this ---->', node, event);

  store.set('node', node );
  console.log('this--------->', store.get('node'));
});

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
