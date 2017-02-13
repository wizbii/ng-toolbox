function dropdownToggle () {
  return {
    require: '^dropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.dropdownToggle = element

      element.on('click', function () {
        ctrl.toggleOpen()
        scope.$apply()
      })
    }
  }
}

export default dropdownToggle
