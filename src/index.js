/* global angular */

import './modules/dropdown'
import './modules/tabs'
import './modules/lightboxImage'
import './modules/autocompleteTpl'
import './modules/factories'
import truncate from './filters/truncate'
import Loader from './factories/Loader'
import popup from './directives/popup'
import focusMe from './directives/focusMe'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown', 'ng-toolbox-tabs', 'ng-toolbox-lightbox-image', 'ng-toolbox-autocomplete', 'ng-toolbox-factories'])
    .filter({ truncate })
    .factory({ Loader })
    .directive({ popup, focusMe })
