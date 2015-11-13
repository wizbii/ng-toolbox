function dropdown ($document) {
  return {
    controller: [
      '$scope',
      function ($scope) {
        var self = this
        self.isOpen = false

        // close the drop down when clicking outside of it or the toggle button
        $document.on('click', function (event) {
          if (contains(self.dropdownMenu, event.target)) return
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
      }
    ]
  }
}

dropdown.$inject = ['$document']

export default dropdown
