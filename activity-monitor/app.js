const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window = null

function createWindow(){
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 500px
    width: 500,
    // Set the initial height to 400px
    height: 400,
    // set the title bar style
    titleBarStyle: 'hiddenInset',
    // set the background color to black
    backgroundColor: "#111",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,
    //disable resize
    resizable:false
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.on('closed',()=>{
    window = null;
  })

  window.once('ready-to-show', () => {
    window.show()
  })
}

// Wait until the app is ready
app.once('ready',createWindow)

//for mac os
app.on('window-all-closed',()=>{
  if(process.platform != 'darwin'){
    app.quit();
  }
})
app.on('activate',()=>{
  if(window === null){
    createWindow();
  }
})
