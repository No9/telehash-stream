telehash-stream
==========

Adding [stream](http://nodejs.org/api/stream.html) support to [telehash-js](https://github.com/telehash/thjs).

## Usage

```js
var self = new require("telehash-js").switch();
require("telehash-stream").install(self);

// on any channel created outgoing or received incoming 
// do the following to get a full read/write binary stream for that channel
var stream = self.stream("channelname");
```

TODO: add a high level friendly self.stream("hashname") style api
