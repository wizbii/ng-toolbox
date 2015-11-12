/* global angular */

import dropdown from './dropdown'
import dropdownToggle from './dropdownToggle'
import dropdownMenu from './dropdownMenu'

export default
  angular
    .module('ng-toolbox-dropdown', [])
    .directive({ dropdown, dropdownToggle, dropdownMenu })
