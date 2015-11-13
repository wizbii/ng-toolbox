function dropdownMenu () {
  return {
    require: '^tbDropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.dropdownMenu = element
    }
  }
}

export default dropdownMenu
