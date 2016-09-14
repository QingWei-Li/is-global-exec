var pathIsInside = require('path-is-inside')
var globalBinPath = require('global-bin-path')
var isGlobal = null

module.exports = function() {
  if (isGlobal !== null) return isGlobal

  var pathname

  if (process.platform === 'win32') {
    pathname = process.mainModule.filename
  } else {
    pathname = process.env._
  }
  isGlobal = pathIsInside(pathname, globalBinPath())

  return isGlobal
}
