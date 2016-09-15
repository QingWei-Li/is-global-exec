'use strict'

var pathIsInside = require('path-is-inside')
var globalBinPath = require('global-bin-path')

var isGlobal = null

module.exports = function () {
  if (isGlobal !== null) return isGlobal

  isGlobal = pathIsInside(
    process.platform === 'win32' ? process.mainModule.filename : process.env._,
    globalBinPath())

  return isGlobal
}
