/*!
 * filter-functions <https://github.com/jonschlinkert/filter-functions>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function functions(value) {
  if (typeof value === 'undefined') {
    throw new TypeError('filter-functions expects an object or array.');
  }

  var isArray = Array.isArray(value);
  var res = isArray ? [] : {};

  if (isArray) {
    for (var i = 0; i < value.length; i++) {
      if (typeof value[i] === 'function') {
        res.push(value[i]);
      }
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (typeof value[key] === 'function') {
          res[key] = value[key];
        }
      }
    }
  }
  return res;
};
