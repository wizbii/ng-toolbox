function pane () {
  return {
    require: '^tabs',
    restrict: 'EA',
    transclude: true,
    scope: { title: '@', alias: '@' },
    link (scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope)
    },
    template:
      `
        <div class="pane" ng-show="selected" ng-transclude></div>
      `
  }
}

export default pane
