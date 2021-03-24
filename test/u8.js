var test = require('tape')
var lpb = require('../')

test('uint8arrays', function (t) {
  var buffers = [
    Uint8Array.from([97,98,99]),
    Uint8Array.from([100,101,102,103,104]),
    Uint8Array.from([105,106,107])
  ]
  var encoded = new Uint8Array(lpb.length(buffers))
  lpb.encode(encoded, buffers)

  t.deepEqual(encoded, Uint8Array.from([
    3,3,97,98,99,5,100,101,102,103,104,3,105,106,107
  ]))
  t.deepEqual(lpb.decode(encoded),buffers)
  t.end()
})
