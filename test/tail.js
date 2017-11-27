define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("tail", function () {
  jsc.property("nil.tail() === nil", function () {
    return lazyseq.nil.tail() === lazyseq.nil;
  });

  jsc.property("cons(n, nil).tail() === nil", "nat", function (n) {
    return lazyseq.cons(n, lazyseq.nil).tail() === lazyseq.nil;
  });
});

return module.exports;});
