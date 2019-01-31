// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const Git = require('simple-git')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
//   mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  const template = [
    {
      label: 'App',
      submenu: [
        { label : 'Preferences' },
        { label : 'Donate' },
        { label : 'Quit' }
      ]
    },
    {
      label: 'File',
      submenu: [
        { label : 'New Project' },
        { label : 'Open Project' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { label : 'Not sure what to put here' },
        { label : 'Or there' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        { label : 'Docs' },
        { label : 'I\'m beyond help' }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)


}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
