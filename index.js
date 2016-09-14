var pathIsInside = require('path-is-inside')
var globalBinPath = require('global-bin-path')
var pathname

module.exports = function() {
  if (pathname) return pathname

  if (process.platform === 'win32') {
    pathname = process.mainModule.filename
  } else {
    pathname = process.env._
  }

  return pathIsInside(pathname, globalBinPath())
}
