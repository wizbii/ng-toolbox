/* global angular */

import truncate from './filters/truncate'

export default
  angular
    .module('ng-toolbox', [])
    .filter('truncate', truncate)
