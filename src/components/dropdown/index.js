/* global angular */

import ngtbDropdown from './dropdown'
import ngtbDropdownToggle from './dropdownToggle'
import ngtbDropdownMenu from './dropdownMenu'

export default
  angular
    .module('ng-toolbox-dropdown', [])
    .directive({ ngtbDropdown, ngtbDropdownToggle, ngtbDropdownMenu })
