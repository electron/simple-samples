var electron = require('electron') // http://electron.atom.io/docs/api
var path = require('path')         // https://nodejs.org/api/path.html
var url = require('url')           // https://nodejs.org/api/url.html

var window = null

// Wait until the app is ready
electron.app.on('ready', function () {
  // Create a new window
  window = new electron.BrowserWindow({
    width: 500,
    height: 400,
    titleBarStyle: 'hidden-inset',
    backgroundColor: "#111",
    show: false
  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.on('ready-to-show', function () {
    window.show()
  })
})
