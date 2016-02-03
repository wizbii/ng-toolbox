function lightboxImageOpen ($rootScope) {
  return {
    restrict: 'A',
    scope: {
      src: '@lightboxImageSrc'
    },
    link: function (scope, element) {
      element.on('click', function () {
        $rootScope.$emit('lightbox:open', scope.src)
      })
    }
  }
}

lightboxImageOpen.$inject = ['$rootScope']

export default lightboxImageOpen
