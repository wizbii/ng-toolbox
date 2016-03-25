/* global _ */
function KeyboardManager () {
  return function (element, handlers) {
    const mapping = { down: 40, up: 38, enter: 13, tab: 9, esc: 27 }
    handlers = _.mapKeys(handlers, (handler, keyName) => mapping[keyName])

    element[0].addEventListener('keydown', function (...args) {
      const handler = handlers[args[0].keyCode]
      if (handler == null) return

      handler(...args)
    }, true)
  }
}

export default KeyboardManager
