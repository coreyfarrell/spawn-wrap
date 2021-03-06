'use strict';

const isWindows = require("is-windows")
const path = require("path")

function isCmd(file) {
  const comspec = path.basename(process.env.comspec || '').replace(/\.exe$/i, '')
  return isWindows() && (file === comspec || /^cmd(?:\.exe)?$/i.test(file))
}

function isNode(file) {
  const cmdname = path.basename(process.execPath).replace(/\.exe$/i, '')
  return file === 'node' || cmdname === file
}

function isNpm(file) {
  // XXX is this even possible/necessary?
  // wouldn't npm just be detected as a node shebang?
  return file === 'npm' && !isWindows()
}

function isSh(file) {
  return ['dash', 'sh', 'bash', 'zsh'].includes(file)
}

module.exports = {
  isCmd,
  isNode,
  isNpm,
  isSh,
}
