function focusMe ($parse) {
  return {
    restrict: 'A',
    scope: { focusMe: '=' },
    link (scope, element, attrs) {
      scope.$watch('focusMe', function (focusMe) {
        if (focusMe) element[0].focus()
      })

      const isAssignable = Boolean($parse(attrs.focusMe).assign)

      if (isAssignable) {
        element.on('blur', function () {
          scope.focusMe = false
        })
      }
    }
  }
}

focusMe.$inject = ['$parse']

export default focusMe
