/* global angular */

import truncate from './filters/truncate'
import Loader from './factories/Loader'

export default
  angular
    .module('ng-toolbox', [])
    .filter({ truncate })
    .factory({ Loader })
