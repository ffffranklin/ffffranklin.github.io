'use strict';

var test = require('tape');
var rewire = require('rewire');
var index = rewire('../../../_es6/index.js');

index.__set__({
  $: {
    fn: {
      toggleClass: function () {}
    }
  }
});

test('main function', function (t) {
  t.equal(typeof index.__main__, 'function');
  t.end();
});

test('class toggler returns handler', function (assert) {
  var result = index.classToggler({}, 'open closed');
  assert.equal(typeof result, 'function')
  assert.end();
});
