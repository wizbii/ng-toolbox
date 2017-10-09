/* global angular */

function tabs () {
  return {
    restrict: 'EA',
    transclude: true,
    controllerAs: 'tabsCtrl',
    controller: [
      '$rootScope',
      function ($rootScope) {
        const vm = this

        vm.panes = []
        vm.addPane = addPane
        vm.select = select

        $rootScope.$on('tabs.select', function (event, alias) {
          vm.panes.some(function (pane) {
            if (getAlias(pane) === alias) {
              select(pane)
              return false
            }
          })
        })

        function addPane (pane) {
          const hash = (window.location.hash || '').substr(1).replace(/(\?|%3F).*$/, '')
          const alias = getAlias(pane)
          const selected = vm.panes.length === 0 || hash === alias

          if (selected) angular.forEach(vm.panes, (p) => p.selected = false)
          pane.selected = selected

          vm.panes.push(pane)
        }

        function select (pane) {
          angular.forEach(vm.panes, function (p) {
            p.selected = p === pane

            const alias = getAlias(p)
            if (p.selected) window.location.hash = alias
          })
        }

        function getAlias (pane) {
          return (
            angular.isString(pane.alias)
              ? pane.alias
              : pane.title.replace(/<[^>]+>/g, '').replace(/\s/g, '-').toLowerCase()
          )
        }
      }
    ],
    template:
      `
        <ul class="tabs">
          <li class="tabs__item"
              ng-class="{ 'tabs__item--active': pane.selected }"
              ng-repeat="pane in tabsCtrl.panes"
              ng-click="tabsCtrl.select(pane)"
              ng-bind-html="pane.title">
          </li>
        </ul>

        <ng-transclude></ng-transclude>
      `
  }
}

export default tabs
