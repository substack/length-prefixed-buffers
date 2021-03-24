var lpb = require('../')

var buffers = [
  Uint8Array.from([97,98,99]),
  Uint8Array.from([100,101,102,103,104]),
  Uint8Array.from([105,106,107])
]
var encoded = new Uint8Array(lpb.length(buffers))
lpb.encode(encoded, buffers)

console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
