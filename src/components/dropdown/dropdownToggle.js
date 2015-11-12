function dropdownToggle () {
  return {
    require: '^dropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.dropdownToggle = element

      element.on('click', function () {
        ctrl.isOpen = !ctrl.isOpen
        scope.$apply()
      })
    }
  }
}

export default dropdownToggle
