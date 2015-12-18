"use strict";

//import { pick } from 'lodash';

var $ = require('jquery');

var classToggler = function classToggler($el, classes) {
  return $.fn.toggleClass.bind($el, classes);
};

$('.drawer-trigger').on('click', classToggler($('.drawer-trigger'), 'opened closed'));
