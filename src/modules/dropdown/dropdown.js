function dropdown () {
  return {
    controller: [
      '$scope',
      '$element',
      '$attrs',
      '$document',
      '$parse',
      function ($scope, $element, $attrs, $document, $parse) {
        const vm = $scope.dropdown = this

        vm.isOpen = false
        vm.dropdownAutoClose = $attrs.dropdownAutoClose
        vm.addMenu = addMenu
        vm.toggleOpen = toggleOpen

        function addMenu (element) {
          vm.dropdownMenu = element
          updateMenuVisiblity()
        }

        function updateMenuVisiblity () {
          if (vm.isOpen) {
            vm.dropdownMenu.removeClass('ng-hide')
          } else {
            vm.dropdownMenu.addClass('ng-hide')
          }
        }

        function toggleOpen () {
          vm.isOpen = !vm.isOpen

          const callback =
            $attrs.onDropdownToggleOpen
              ? $parse($attrs.onDropdownToggleOpen)
              : () => {}

          callback($scope, {
            $isOpen: vm.isOpen
          })
        }

        function contains (container, target) {
          return (
            container && container[0].contains(target)
          )
        }

        function onClick (event) {
          // this handler sets isOpen to false when clicking
          // outside the drop down but there's no point going any further
          // if it's already false
          if (vm.isOpen === false) {
            return
          }

          // by default the dropdown shouldn't auto close
          // so the only way to enable it is to explicitly pass "true"
          // any other value is considered false
          if (vm.dropdownAutoClose !== 'true' && contains(vm.dropdownMenu, event.target)) {
            return
          }

          if (contains(vm.dropdownToggle, event.target)) {
            return
          }

          vm.isOpen = false
          $scope.$apply()
        }

        $document.on('click', onClick)
        $scope.$on('$destroy', () => $document.off('click', onClick))

        $scope.$watch(
          () => vm.isOpen,
          () => {
            if (!vm.dropdownMenu) {
              return
            }

            updateMenuVisiblity()
          }
        )
      }
    ],
    controllerAs: 'dropdown',
    scope: true,
    link (scope, element, attrs, ctrl, transclude) {
      transclude(scope, (clone) => {
        element.append(clone)
      })
    },
    transclude: true
  }
}

dropdown.$inject = [
]

export default dropdown
