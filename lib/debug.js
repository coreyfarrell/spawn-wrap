'use strict';

const util = require('util');

/**
 * Boolean indicating if debug mode is enabled.
 *
 * @type {boolean}
 */
const IS_DEBUG = process.env.SPAWN_WRAP_DEBUG === '1'

/**
 * If debug is enabled, write message to stderr.
 *
 * If debug is disabled, no message is written.
 */
function debug(...args) {
  if (!IS_DEBUG) {
    return;
  }
  const prefix = 'SW ' + process.pid + ': '
  const data = util.format.apply(util, ...args).trim()
  const message = prefix + data.split('\n').join('\n' + prefix)
  process.stderr.write(message + '\n')
}

module.exports = {
  IS_DEBUG,
  debug,
}
