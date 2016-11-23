/* global angular */

import throttle from 'lodash/throttle'

function autocompleteTplMenu ($window, $document) {
  return {
    require: '^autocompleteTpl',
    link (scope, element, attrs, ctrl) {
      const isFixed = attrs.autocompleteTplMenu === 'fixed'

      ctrl.menu = element
      ctrl.showMenu = showMenu
      ctrl.hideMenu = hideMenu

      function showMenu () {
        element.removeClass('ng-hide')
        if (isFixed) updateFixedPosition()
      }

      function hideMenu () {
        element.addClass('ng-hide')
      }

      function updateFixedPosition () {
        if (ctrl.input == null) return
        if (!isVisible(element[0])) return

        const targetPosition = ctrl.input.getBoundingClientRect()
        const viewportHeight = $document[0].documentElement.clientHeight
        const margin = 10
        const smallMargin = margin / 2

        const width = targetPosition.right - targetPosition.left
        const css = {
          top: targetPosition.bottom + smallMargin,
          maxHeight: viewportHeight - targetPosition.bottom - margin
        }

        if (isFixed && width < 300) {
          // on small screen, make the autocomplete span to full width
          // note: only apply this rule to fixed autocompletes
          //       as it would actually reduce the size of absolute element
          //       since they are positioned according to their relative parent
          css.left = margin
          css.width = `calc(100% - ${margin * 2}px)`
        } else {
          css.left = targetPosition.left
          css.width = width
        }

        element.css(css)
      }

      function isVisible (e) {
        const style = $window.getComputedStyle(e)
        const display = style.getPropertyValue('display')

        if (display === 'none') return false

        const parent = e.parentElement
        return parent && parent.nodeType === 1 ? isVisible(parent) : true
      }

      if (isFixed) {
        element.addClass('autocomplete__menu--fixed')
        updateFixedPosition()

        const softUpdate = throttle(updateFixedPosition, 250)

        angular
          .element($window)
          .on('resize', softUpdate)
          .on('scroll', softUpdate)
      } else {
        element.addClass('autocomplete__menu--absolute')
      }
    }
  }
}

autocompleteTplMenu.$inject = [
  '$window',
  '$document'
]

export default autocompleteTplMenu
