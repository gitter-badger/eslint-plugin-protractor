'use strict'

/**
 * @fileoverview Warn if browser.sleep() is used (no-browser-sleep)
 * @author Alexander Afanasyev
 */

module.exports = function (context) {
  return {
    'CallExpression': function (node) {
      var object = node.callee.object
      var property = node.callee.property

      if (object && property && object.name === 'browser' && property.name === 'sleep') {
        context.report(node, 'Unexpected browser.sleep()')
      }
    }
  }
}
