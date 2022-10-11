'use strict';

const test = require('tape');
const rewire = require('rewire');
const index = rewire('../../../_es6/index.js');

index.__set__({
  $: {
    fn: {
      toggleClass: function() {},
    },
  },
});

test('main function', function(t) {
  t.equal(typeof index.__main__, 'function');
  t.end();
});

test('class toggler returns handler', function(assert) {
  const result = index.classToggler({}, 'open closed');

  assert.equal(typeof result, 'function');
  assert.end();
});
