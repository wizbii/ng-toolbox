/* global angular */

import './modules/dropdown'
import './modules/tabs'
import './modules/lightboxImage'
import './modules/autocompleteTpl'
import truncate from './filters/truncate'
import Loader from './factories/Loader'
import KeyboardManager from './factories/KeyboardManager'
import popup from './directives/popup'
import focusMe from './directives/focusMe'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown', 'ng-toolbox-tabs', 'ng-toolbox-lightbox-image', 'ng-toolbox-autocomplete'])
    .filter({ truncate })
    .factory({ Loader, KeyboardManager })
    .directive({ popup, focusMe })
