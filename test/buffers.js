var test = require('tape')
var lpb = require('../')

test('buffers', function (t) {
  var buffers = [
    Buffer.from('abc'),
    Buffer.from('defgh'),
    Buffer.from('ijk')
  ]
  var encoded = Buffer.alloc(lpb.length(buffers))
  lpb.encode(encoded, buffers)

  t.equal(encoded.toString('hex'), '030361626305646566676803696a6b')
  t.deepEqual(lpb.decode(encoded), buffers)
  t.end()
})
