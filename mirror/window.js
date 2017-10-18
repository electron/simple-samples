// Run this function after the page has loaded
$(function() {
  const electron = require('electron')

  const display = electron.screen.getPrimaryDisplay() // http://electron.atom.io/docs/api/screen

  const constraints = {
    video: {
      width: {
        ideal: display.size.width // Ideal video width is size of screen
      },
      height: {
        ideal: display.size.height // Ideal video height is size of screen
      }
    }
  }

  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    const video = document.querySelector('video')
    video.srcObject = stream  // Play stream in <video> element
  }).catch(function(error) {
    console.error(error)
  })

  // Listen for the Rainbow Filter checkbox being clicked
  $("#rainbow-toggle").change(() => {
    (this.checked) ? $('.rainbow-filter').show() : $('.rainbow-filter').hide()
  })

})