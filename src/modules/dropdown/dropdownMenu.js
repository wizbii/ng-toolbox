function dropdownMenu () {
  return {
    require: '^dropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.addMenu(element)
    }
  }
}

export default dropdownMenu
