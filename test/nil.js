define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true */
"use strict";

var lazySeq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("nil", function () {
  jsc.property(".isNil === true", function () {
    return lazySeq.nil.isNil;
  });

  jsc.property(".toString() === 'nil'", function () {
    return "" + lazySeq.nil === "nil";
  });
});

return module.exports;});
