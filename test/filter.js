define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var _ = require("lodash");
var describe = require("tape-compat").describe;

describe(".filter", function () {
  jsc.property("works with array", "array nat", "nat -> bool", function (arr, p) {
    var lhs = arr.filter(p);
    var rhs = lazyseq.fromArray(arr).filter(p).toArray();
    return _.isEqual(lhs, rhs);
  });
});

return module.exports;});
