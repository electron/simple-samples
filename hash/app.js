const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window = null

function createWindow(){
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 800,
    // Set the initial height to 600px
    height: 600,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: "#D6D8DC",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,
    //disable resize
    resizable: false
  })

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed',()=>{
    window = null;
  })

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
}

// Wait until the app is ready
app.once('ready',createWindow);

//for mac os
app.on('window-all-closed',()=>{
  if(process.platform != 'darwin'){
    app.quit();
  }
})
app.on('activate',()=>{
  if(window == null){
    createWindow();
  }
})