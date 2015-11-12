function focusMe () {
  return {
    restrict: 'A',
    scope: { focusMe: '=ngtbFocusMe' },
    link: function (scope, element) {
      scope.$watch('focusMe', function (focusMe) {
        if (!focusMe) return

        scope.focusMe = false
        element[0].focus()
      })
    }
  }
}

export default focusMe
