var length = require('./length.js')
var encode = require('./encode.js')

module.exports = function from (buffers) {
  var len = length(buffers)
  var C = buffers.length > 0 ? buffers[0].constructor : Uint8Array
  var out = C.alloc ? C.alloc(len) : new C(len)
  return encode(out, buffers)
}
