/* global angular */

import './modules/dropdown'
import tbTruncate from './filters/truncate'
import tbLoader from './factories/Loader'
import tbPopup from './directives/popup'
import tbFocusMe from './directives/focusMe'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown'])
    .filter({ tbTruncate })
    .factory({ tbLoader })
    .directive({ tbPopup, tbFocusMe })
