const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 580,
    height: 210,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    win.setIgnoreMouseEvents(ignore, options)
  })

  win.loadFile('./src/index.html')
  // win.setIgnoreMouseEvents(true) // 启用鼠标穿透
  return win
}

app.whenReady().then(() => {
  const win = createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  // 当窗口准备好后发送消息
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('message-channel', 'Hello from Main Process');
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('message-channel', (event, arg) => {
  console.log(arg);
});