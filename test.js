/*!
 * filter-functions <https://github.com/jonschlinkert/filter-functions>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var functions = require('./');

var a = function(){};
var c = function(){};
var e = function(){};

var obj = {a: a, b: 'b', c: c, d: 'd', e: e};
var arr = [a, 'b', c, 'd', e];

describe('functions', function () {
  it('should filter an object to have only properties with function values:', function () {
    functions(obj).should.eql({a: a, c: c, e: e});
  });

  it('should filter an array to have only function values:', function () {
    functions(arr).should.eql([a, c, e]);
  });

  it('should throw an error when invalid args are passed:', function () {
    (function () {
      functions();
    }).should.throw('filter-functions expects an object or array.');
  });
});
