/* global angular */

import './components/dropdown'
import truncate from './filters/truncate'
import Loader from './factories/Loader'

export default
  angular
    .module('ng-toolbox', ['ng-toolbox-dropdown'])
    .filter({ truncate })
    .factory({ Loader })
