function dropdownToggle () {
  return {
    require: '^tbDropdown',
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
