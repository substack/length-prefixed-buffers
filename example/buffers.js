var lpb = require('../')

var buffers = [
  Buffer.from('abc'),
  Buffer.from('defgh'),
  Buffer.from('ijk')
]
var encoded = Buffer.alloc(lpb.length(buffers))
lpb.encode(encoded, buffers)

console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
