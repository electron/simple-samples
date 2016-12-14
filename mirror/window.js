var screen = require('electron').screen // http://electron.atom.io/docs/api/screen

var display = screen.getPrimaryDisplay() // http://electron.atom.io/docs/api/structures/display

var constraints = {
  video: {
    width: {
      ideal: display.size.width // Ideal video width is size of screen
    },
    height: {
      ideal: display.size.height // Ideal video height is size of screen
    }
  }
}

navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
  var video = document.querySelector('video')
  // Play stream in <video> element
  video.srcObject = stream
}).catch(function (error) {
  console.error(error)
})
