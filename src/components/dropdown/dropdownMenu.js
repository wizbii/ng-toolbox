function dropdownMenu () {
  return {
    require: '^dropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.dropdownMenu = element
    }
  }
}

export default dropdownMenu
