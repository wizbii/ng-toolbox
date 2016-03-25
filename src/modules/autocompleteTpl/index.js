/* global angular */

import autocompleteTpl from './autocompleteTpl'
import autocompleteTplInput from './autocompleteTplInput'
import autocompleteTplMenu from './autocompleteTplMenu'
import autocompleteTplMenuItem from './autocompleteTplMenuItem'

export default
  angular
    .module('ng-toolbox-autocomplete', [])
    .directive({ autocompleteTpl, autocompleteTplInput, autocompleteTplMenu, autocompleteTplMenuItem })
