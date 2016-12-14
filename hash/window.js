// Run this function after the page has loaded
$(function () {

var crypto = require('crypto') // https://nodejs.org/api/crypto.html

$('#text-input').bind('input propertychange', function () {
  var text = this.value

  // MD5
  var md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex')
  $('#md5-output').text(md5)

  // SHA-1
  var sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex')
  $('#sha1-output').text(sha1)

  // SHA-256
  var sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
  $('#sha256-output').text(sha256)

  // SHA-512
  var sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex')
  $('#sha512-output').text(sha512)
})

// Focus input box
$('#text-input').focus()

})
