/* global angular */

import lightboxImage from './lightboxImage'
import lightboxImageOpen from './lightboxImageOpen'

export default
  angular
    .module('ng-toolbox-lightbox-image', [])
    .directive({ lightboxImage, lightboxImageOpen })
    .run([
      '$rootElement',
      function ($rootElement) {
        $rootElement.append('<lightbox-image></lightbox-image>')
      }
    ])
