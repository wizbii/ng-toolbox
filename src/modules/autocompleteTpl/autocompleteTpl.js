import findIndex from 'lodash/findIndex'

function autocompleteTpl ($document, $timeout, KeyboardManager) {
  return {
    controller: [
      '$scope',
      function ($scope) {
        var vm = this
        vm.isOpen = false

        $document.on('click', (event) => {
          $timeout(() => {
            if (contains(vm.menu, event.target) ||
              contains([vm.input], event.target)) return

            vm.isOpen = false
          })
        })

        $scope.$watch(
          () => vm.isOpen,
          (isOpen) => {
            if (!vm.menu) return

            if (isOpen) {
              vm.showMenu()
            } else {
              vm.hideMenu()
              vm.input.blur()
            }
          }
        )

        function contains (container, target) {
          if (container == null) return false
          return container[0].contains(target)
        }
      }
    ],
    controllerAs: 'autocompleteTpl',
    bindToController: true,
    link (scope, element, attrs, ctrl) {
      function updateFocus (e, direction) {
        const items = element.find('[autocomplete-tpl-menu-item]')

        if (items.length <= 0) return

        const focusedIndex = findIndex(items, (item) => item === document.activeElement)
        let indexToFocus

        const lowestIndex = ctrl.input ? -1 : 0
        const greatestIndex = items.length - 1

        if (direction === 'up') {
          indexToFocus =
            focusedIndex > lowestIndex
              ? focusedIndex - 1
              : greatestIndex
        } else {
          indexToFocus =
            focusedIndex < greatestIndex
              ? focusedIndex + 1
              : lowestIndex
        }

        if (indexToFocus === -1) ctrl.input.focus()
        else items.get(indexToFocus).focus()

        e.preventDefault()
      }

      KeyboardManager(element, {
        up: (e) => updateFocus(e, 'up'),
        down: (e) => updateFocus(e, 'down'),
        esc: (e) => {
          if (ctrl.isOpen) {
            ctrl.isOpen = false
            e.preventDefault()
          }
        }
      })
    }
  }
}

autocompleteTpl.$inject = ['$document', '$timeout', 'KeyboardManager']

export default autocompleteTpl
