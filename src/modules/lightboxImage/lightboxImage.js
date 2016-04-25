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
        if (event.which === 27) $timeout(close)
      })

      function close () {
        if (scope.active === false) {
          return
        }

        $document
          .find('body')
          .css('overflow', 'auto')

        scope.active = false
      }
    },
    template:
    `
      <div ng-if="active" ng-click="close()" class="lightbox lightbox--image">
        <div class="lightbox__inner">
          <div class="position-relative margin-bottom-gutter">
              <span class="link link--muted right-center">
                  <span class="icon-cross"></span>
              </span>
          </div>
          <img ng-src="{{ src }}" ng-click="$event.stopPropagation()" alt="">
        </div>
      </div>
    `
  }
}

lightboxImage.$inject = ['$rootScope', '$document', '$timeout']

export default lightboxImage
