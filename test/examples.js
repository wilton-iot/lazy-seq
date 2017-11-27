define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("nil", function () {
  jsc.property("ones === ones.tail", function () {
    var ones = lazyseq.cons(1, function () { return ones; });
    return ones === ones.tail();
  });
});

return module.exports;});
