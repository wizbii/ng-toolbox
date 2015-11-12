function dropdownMenu () {
  return {
    require: '^ngtbDropdown',
    link: function (scope, element, attrs, ctrl) {
      ctrl.dropdownMenu = element
    }
  }
}

export default dropdownMenu
