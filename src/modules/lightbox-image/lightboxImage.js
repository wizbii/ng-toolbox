function lightboxImage ($rootScope, $document) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope) {
      scope.toasts = []
      scope.active = false

      $rootScope.$on('lightbox:open', function (event, src) {
        scope.src = src
        scope.active = true
        $document.find('body')
          .css('overflow', 'hidden')
      })

      $document.on('keyup', function (event) {
        if (event.which === 27) {
          scope.$apply(function () {
            scope.close()
          })
        }
      })

      scope.close = function () {
        $document.find('body')
          .css('overflow', 'auto')
        scope.active = false
      }
    },
    template: '<div ng-if="active" ng-class="{\'lightbox-image--active\': active}" class="lightbox-image">' +
    '   <span class="lightbox-image-cross" ng-click="close()"><span class="icon-cross"></span></span>' +
    '   <img style="margin:auto;" ng-src="{{ src }}">' +
    '</div>'
  }
}

lightboxImage.$inject = ['$rootScope', '$document']

export default lightboxImage
