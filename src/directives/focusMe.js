function focusMe () {
  return {
    restrict: 'A',
    scope: { focusMe: '=' },
    link: function (scope, element) {
      element.on('blur', function () {
        if (typeof scope.focusMe === 'boolean') scope.focusMe = false
      })

      scope.$watch('focusMe', function (focusMe) {
        if (focusMe) element[0].focus()
      })
    }
  }
}

export default focusMe
