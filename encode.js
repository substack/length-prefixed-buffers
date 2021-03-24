var varint = require('varint')

module.exports = encode
encode.bytes = 0

function encode (out, buffers, offset) {
  if (offset === undefined) offset = 0
  var start = offset
  varint.encode(buffers.length, out, 0)
  offset += varint.encode.bytes
  for (var i = 0; i < buffers.length; i++) {
    var buf = buffers[i]
    varint.encode(buf.length, out, offset)
    offset += varint.encode.bytes
    out.set(buf, offset)
    offset += buf.length
  }
  encode.bytes = offset - start
  return out
}
