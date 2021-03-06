'use strict'

/**
 * @fileoverview Missing wait timeout message in browser.wait() (missing-wait-message)
 * @author Alexander Afanasyev
 */

module.exports = function (context) {
  return {
    'CallExpression': function (node) {
      var object = node.callee.object
      var property = node.callee.property

      if (object && property && property.name === 'wait' && object.name === 'browser' && node.arguments.length < 3) {
        context.report(node, 'No timeout message provided for browser.wait()')
      }
    }
  }
}
