var lpb = require('../')

var encoded = lpb.from([
  Buffer.from('abc'),
  Buffer.from('defgh'),
  Buffer.from('ijk')
])
console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
