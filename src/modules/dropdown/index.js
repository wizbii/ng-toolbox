/* global angular */

import tbDropdown from './dropdown'
import tbDropdownToggle from './dropdownToggle'
import tbDropdownMenu from './dropdownMenu'

export default
  angular
    .module('ng-toolbox-dropdown', [])
    .directive({ tbDropdown, tbDropdownToggle, tbDropdownMenu })
