/* global angular */

import './components/dropdown'
import ngtbTruncate from './filters/truncate'
import ngtbLoader from './factories/Loader'
import ngtbPopup from './directives/popup'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown'])
    .filter({ ngtbTruncate })
    .factory({ ngtbLoader })
    .directive({ ngtbPopup })
