/* global _ */

function popup () {
  const DEFAULT_WIDTH = 600
  const DEFAULT_HEIGHT = 300

  function configToString (config) {
    return _.reduce(config, function (configList, value, name) {
      configList.push(`${name}=${value}`)
      return configList
    }, []).join(', ')
  }

  return {
    restrict: 'A',
    link (scope, element, attrs) {
      element.on('click', function (event) {
        const width = Number(attrs.popupWidth) || DEFAULT_WIDTH
        const height = Number(attrs.popupHeight) || DEFAULT_HEIGHT

        const position = {
          left: (window.screen.width / 2) - (width / 2),
          top: (window.screen.height / 2) - (height / 2)
        }

        const config = {
          toolbar: 'no',
          location: 'no',
          directories: 'no',
          status: 'no',
          menubar: 'no',
          scrollbars: 'yes',
          resizable: 'no',
          copyhistory: 'no',
          width: width,
          height: height,
          top: position.top,
          left: position.left
        }

        window.open(attrs.href, attrs.title || '', configToString(config))
        event.preventDefault()
      })
    }
  }
}

export default popup
