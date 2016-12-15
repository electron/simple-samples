var electron = require('electron') // http://electron.atom.io/docs/api

var window = null

// Wait until the app is ready
electron.app.once('ready', function () {
  // Create a new window
  window = new electron.BrowserWindow({
    // Set the initial width to 800px
    width: 800,
    // Set the initial height to 600px
    height: 600,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false
    }
  })

  // URL is argument to npm start
  var url = process.argv[2]
  window.loadURL(url)

  // Show window when page is ready
  window.once('ready-to-show', function () {
    window.maximize()
    window.show()
  })
})
