'use strict';

// import { pick } from 'lodash';

const $ = require('jquery');

const classToggler = function classToggler($el, classes) {
  return $.fn.toggleClass.bind($el, classes);
};

const __main__ = function __main__() {
  const handler = classToggler($('.drawer-trigger'), 'opened closed');

  $('.drawer-trigger').
      on('click', handler);
};

exports.classToggler = classToggler;
exports.__main__ = __main__;
