/* global angular */

import tabs from './tabs'
import pane from './pane'

export default
  angular
    .module('ng-toolbox-tabs', [])
    .directive({ tabs, pane })
