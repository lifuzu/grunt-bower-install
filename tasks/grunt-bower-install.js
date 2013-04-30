/*
 * grunt-bower-install.js
 * https://github.com/stephenplusplus/bower-install
 *
 * Copyright (c) 2013 Stephen Sawchuk
 * Licensed under the MIT license.
 */

var grunt = require('grunt');
var bower = require('bower').commands;

module.exports.init = function (BI) {
  bower
    .install([BI.get('component')], { save: true })
    .on('data', function () {
      grunt.log.write(arguments[0].toString());
    })
    .on('end', function () {
      require('./grunt-bower-install-all').init(BI, { silent: true });
    });

  return BI;
};
