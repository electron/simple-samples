var electron = require('electron')

var display = electron.screen.getPrimaryDisplay()  // http://electron.atom.io/docs/api/screen

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

$(function () {
  // Listen for the Rainbow Filter checkbox being clicked
  $("#rainbow-toggle").change(function() {
    if (this.checked) {
      $('.rainbow-filter').show()
    } else {
      $('.rainbow-filter').hide()
    }
  })
})
