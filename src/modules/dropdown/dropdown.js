function dropdown ($document) {
  return {
    controller: [
      '$scope',
      '$attrs',
      function ($scope, $attrs) {
        var self = this
        self.isOpen = false

        self.dropdownAutoClose = $attrs.dropdownAutoClose

        // close the drop down when clicking outside of it or the toggle button
        $document.on('click', function (event) {
          if (self.dropdownAutoClose !== 'true' && contains(self.dropdownMenu, event.target)) return
          if (contains(self.dropdownToggle, event.target)) return

          self.isOpen = false
          $scope.$apply()
        })

        $scope.$watch(function () {
          return self.isOpen
        }, function (isOpen, wasOpen) {
          if (!self.dropdownMenu) return

          if (isOpen) self.dropdownMenu.removeClass('ng-hide')
          else self.dropdownMenu.addClass('ng-hide')
        })

        function contains (container, target) {
          if (container == null) return false
          return container[0].contains(target)
        }

        $scope.dropdown = self
      }
    ],
    controllerAs: 'dropdown',
    scope: true,
    link: function (scope, element, attrs, ctrl, transclude) {
      transclude(scope, function (clone) { element.append(clone) })
    },
    transclude: true
  }
}

dropdown.$inject = ['$document']

export default dropdown
