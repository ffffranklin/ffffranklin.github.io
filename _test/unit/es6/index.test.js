'use strict';

var test = require('tape');
var index = require('../../../_es6/index.js');

test('main function', function (t) {
  t.equal(typeof index.__main__, 'function');
  t.end();
});

test('class toggler returns handler', function (assert) {
  var result = index.classToggler({}, 'open closed');
  assert.equal(typeof result, 'function')
  assert.end();
});
