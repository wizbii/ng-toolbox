/* global angular */

import truncate from './filters/truncate'
import Loader from './classes/Loader'

export default
  angular
    .module('ng-toolbox', [])
    .filter('truncate', truncate)
    .factory('Loader', Loader)
