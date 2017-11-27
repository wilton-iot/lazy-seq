define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
/* global describe:true, it:true */
"use strict";
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("lazy-seq", function () {
  it("loads", function () {
    require("lazy-seq/index.js");
  });
});

return module.exports;});
