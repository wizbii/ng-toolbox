function autocompleteTplInput ($timeout) {
  return {
    require: '^autocompleteTpl',
    link (scope, element, attrs, ctrl) {
      ctrl.input = element[0]

      element.on('focus', function () {
        $timeout(() => {
          ctrl.isOpen = true
        })
      })
    }
  }
}

autocompleteTplInput.$inject = ['$timeout']

export default autocompleteTplInput
