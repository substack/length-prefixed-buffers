# length-prefixed-buffers

encode and decode an array of buffers as a single [varint][] length-prefixed binary blob

* for encoding, turns an array of buffers into a single buffer
* for decoding, turns a single buffer into an array of buffers

Works in nodejs and the browser and does not pull in a `Buffer` implementation when compiled for the
browser:

```
$ browserify example/u8.js | wc -c
4815
$ browserify -p tinyify example/u8.js | gzip | wc -c
756
```

[varint]: https://github.com/chrisdickinson/varint

# example

use nodejs buffers:

``` js
var lpb = require('length-prefixed-buffers')

var buffers = [
  Buffer.from('abc'),
  Buffer.from('defgh'),
  Buffer.from('ijk')
]
var encoded = Buffer.alloc(lpb.length(buffers))
lpb.encode(encoded, buffers)

console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
```

or Uint8arrays:

``` js
var lpb = require('length-prefixed-buffers')

var buffers = [
  Uint8Array.from([97,98,99]),
  Uint8Array.from([100,101,102,103,104]),
  Uint8Array.from([105,106,107])
]
var encoded = new Uint8Array(lpb.length(buffers))
lpb.encode(encoded, buffers)

console.log('encoded:', encoded)
console.log('decoded:', lpb.decode(encoded))
```

or use `from()` which takes an array and constructs a collection of the appropriate type based on
the first buffer in the array:

``` js
var lpb = require('length-prefixed-buffers')

var encoded = lpb.from([
  Uint8Array.from([97,98,99]),
  Uint8Array.from([100,101,102,103,104]),
  Uint8Array.from([105,106,107])
])
console.log('encoded:', encoded) // encoded is a Uint8Array
console.log('decoded:', lpb.decode(encoded))
```

In this example `encoded` is a `Uint8Array` but if `from()` were passed an array of `Buffer`s then
`encoded` would be a `Buffer`.

# api

``` js
var { encode, decode, length, from } = require('length-prefixed-buffers')
var encode = require('length-prefixed-buffers/encode')
var decode = require('length-prefixed-buffers/decode')
var length = require('length-prefixed-buffers/length')
var from = require('length-prefixed-buffers/from')
```

## encode(out, buffers, offset=0)

Write the data from `buffers`, an array of `Buffer`s or `Uint8Array`s into `out` starting at
the index `offset`. Returns `out`.

The number of bytes written is stored in `encode.bytes` (similar to the [varint][] api).

## var buffers = decode(src, offset=0)

Reconstruct an array of `buffers` from `src`, a `Buffer` or `Uint8Array` starting at `offset`.

The `buffers` are constructed using `subarray()` so if you mutate them you will mutate `src`.

The types of `buffers` are the same as the type of `src`.

The number of bytes read is stored in `decode.bytes` (similar to the [varint][] api).

## var nbytes = length(buffers)

Return the number of bytes `nbytes` that are required to store the array `buffers`.

## var encoded = from(buffers)

Allocate a buffer `encoded` for an array of `buffers`.

This is a convenience method that uses `length` and `encode()` to construct an encoded buffer.

# install

```
npm install length-prefixed-buffers
```

# license

bsd
