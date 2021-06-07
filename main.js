// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    const startUrl = isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, './build/index.html')}`
    mainWindow.loadURL(startUrl)
    // mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
