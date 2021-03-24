var varint = require('varint')

module.exports = function (buffers) {
  var size = varint.encodingLength(buffers.length)
  for (var i = 0; i < buffers.length; i++) {
    var buf = buffers[i]
    size += varint.encodingLength(buf.length) + buf.length
  }
  return size
}
