function lightboxImageOpen ($rootScope) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $rootScope.$emit('lightbox:open', attrs.lightboxImageOpen)
      })
    }
  }
}

lightboxImageOpen.$inject = ['$rootScope']

export default lightboxImageOpen
