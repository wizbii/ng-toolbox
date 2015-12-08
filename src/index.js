/* global angular */

import './modules/dropdown'
import truncate from './filters/truncate'
import Loader from './factories/Loader'
import popup from './directives/popup'
import focusMe from './directives/focusMe'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown'])
    .filter({ truncate })
    .factory({ Loader })
    .directive({ popup, focusMe })
