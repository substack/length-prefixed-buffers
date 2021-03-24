var varint = require('varint')

module.exports = decode
decode.bytes = 0

function decode (src, offset) {
  if (offset === undefined) offset = 0
  var start = offset
  var buffers = []
  var n = varint.decode(src, offset)
  offset += varint.decode.bytes
  for (var i = 0; i < n; i++) {
    var len = varint.decode(src, offset)
    offset += varint.decode.bytes
    buffers.push(src.subarray(offset,offset+len))
    offset += len
  }
  decode.bytes = offset - start
  return buffers
}
