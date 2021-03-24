var lpb = require('../')

var encoded = lpb.from([
  Uint8Array.from([97,98,99]),
  Uint8Array.from([100,101,102,103,104]),
  Uint8Array.from([105,106,107])
])
console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
