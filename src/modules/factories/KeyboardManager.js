import mapKeys from 'lodash/mapKeys'

function KeyboardManager () {
  return function ($element, handlers) {
    const mapping = {
      down: 40,
      up: 38,
      enter: 13,
      tab: 9,
      esc: 27
    }

    handlers = mapKeys(handlers, (handler, keyName) => mapping[keyName])

    const listener = (...args) => {
      const [event] = args
      const handler = handlers[event.keyCode]

      if (handler == null) {
        return
      }

      handler(...args)
    }

    $element.on('keydown', listener)
    return () => $element.off('keydown', listener)
  }
}

export default KeyboardManager
