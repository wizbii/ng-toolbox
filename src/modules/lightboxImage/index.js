/* global angular */

import lightboxImage from './lightboxImage'
import lightboxImageOpen from './lightboxImageOpen'

export default
  angular
    .module('ng-toolbox-lightbox-image', [])
    .directive({ lightboxImage, lightboxImageOpen })
    .run([
      '$document',
      '$compile',
      '$rootScope',
      function ($document, $compile, $rootScope) {
        const $scope = $rootScope.$new()
        const lightboxImage = $compile('<lightbox-image></lightbox-image>')($scope)

        $document
          .find('body')
          .append(lightboxImage)
      }
    ])
