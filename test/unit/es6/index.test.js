var test = require('tape');
var index = require('../../../site/_es6/index.js');
test('starts', function (t) {
  t.ok(index.start);
  t.end();
});