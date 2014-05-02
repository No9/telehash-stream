
var self = new require('telehash-js').switch();
require('../').install(self);

var test = require('tap').test

test('Sucessful init', function (t) {
   t.plan(2);
   t.ok(self, 'Self is an object');
   var stm = self.stream('test');
   t.ok(stm, 'stream is an object');
   stm.end();
});
