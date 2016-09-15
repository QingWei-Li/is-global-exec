'use strict'

var pathIsInside = require('path-is-inside')
var globalBinPath = require('global-bin-path')

module.exports = function () {
  return pathIsInside(process.argv[1], globalBinPath())
}
