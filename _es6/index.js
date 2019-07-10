"use strict";

//import { pick } from 'lodash';

var $ = require('jquery');

var classToggler = function classToggler($el, classes) {
  return $.fn.toggleClass.bind($el, classes);
};

var __main__ = function __main__() {
  var handler = classToggler($('.drawer-trigger'), 'opened closed');

  $('.drawer-trigger').
    on('click', handler);
};

exports.classToggler = classToggler;
exports.__main__ = __main__;
