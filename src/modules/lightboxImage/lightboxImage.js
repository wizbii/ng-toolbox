function lightboxImage ($rootScope, $document, $timeout) {
  return {
    restrict: 'E',
    scope: true,
    link (scope) {
      scope.toasts = []
      scope.active = false
      scope.close = close

      $rootScope.$on('lightbox:open', function (event, src) {
        $timeout(function () {
          scope.src = src
          scope.active = true

          $document
            .find('body')
            .css('overflow', 'hidden')
        })
      })

      $document.on('keyup', function (event) {
        if (event.which === 27) scope.$apply(close)
      })

      function close () {
        $document
          .find('body')
          .css('overflow', 'auto')

        scope.active = false
      }
    },
    template:
    `
      <div ng-if="active" ng-click="close()" class="lightbox lightbox-image">
        <span class="lightbox__close-btn" ng-click="close()">
          <span class="icon-cross"></span>
        </span>

        <div class="lightbox__inner" ng-click="$event.stopPropagation()">
          <img ng-src="{{ src }}" alt="">
        </div>
      </div>
    `
  }
}

lightboxImage.$inject = ['$rootScope', '$document', '$timeout']

export default lightboxImage
