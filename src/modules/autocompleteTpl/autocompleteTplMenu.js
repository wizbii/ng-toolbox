import throttle from 'lodash/throttle'

/* global angular */
function autocompleteTplMenu ($window, $document) {
  return {
    require: '^autocompleteTpl',
    link (scope, element, attrs, ctrl) {
      /* ---------------------------------------- *\
       props
      \* ---------------------------------------- */

      const isFixed = attrs.autocompleteTplMenu === 'fixed'

      ctrl.menu = element
      ctrl.showMenu = showMenu
      ctrl.hideMenu = hideMenu

      /* ---------------------------------------- *\
       functions
      \* ---------------------------------------- */

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

        const targetPosition = ctrl.input[0].getBoundingClientRect()
        const viewportHeight = $document[0].documentElement.clientHeight
        const topMargin = 5
        const bottomMargin = 20

        element.css({
          top: targetPosition.bottom + topMargin,
          left: targetPosition.left,
          maxHeight: viewportHeight - targetPosition.bottom - bottomMargin,
          width: targetPosition.right - targetPosition.left
        })
      }

      function isVisible (e) {
        const style = $window.getComputedStyle(e)
        const display = style.getPropertyValue('display')

        if (display === 'none') return false

        const parent = e.parentElement
        return parent && parent.nodeType === 1 ? isVisible(parent) : true
      }

      /* ---------------------------------------- *\
       init
      \* ---------------------------------------- */

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

autocompleteTplMenu.$inject = ['$window', '$document']

export default autocompleteTplMenu
