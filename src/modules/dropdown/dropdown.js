function dropdown ($document) {
  return {
    controller: [
      '$scope',
      '$attrs',
      function ($scope, $attrs) {
        const vm = $scope.dropdown = this

        vm.isOpen = false
        vm.dropdownAutoClose = $attrs.dropdownAutoClose
        vm.addMenu = addMenu

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

        function contains (container, target) {
          return (
            container && container[0].contains(target)
          )
        }

        $document.on('click', function (event) {
          if (vm.dropdownAutoClose !== 'true' && contains(vm.dropdownMenu, event.target)) {
            return
          }

          if (contains(vm.dropdownToggle, event.target)) {
            return
          }

          vm.isOpen = false
          $scope.$apply()
        })

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
  '$document'
]

export default dropdown
