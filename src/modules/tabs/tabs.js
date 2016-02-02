/* global angular */

function tabs () {
  return {
    restrict: 'EA',
    transclude: true,
    controllerAs: 'tabsCtrl',
    controller () {
      const vm = this

      vm.panes = []
      vm.addPane = addPane
      vm.select = select

      function addPane (pane) {
        const hash = (window.location.hash || '').substr(1)
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
    },
    template:
      `
        <ul class="tabs">
          <li class="tabs__item"
              ng-class="{ 'tabs__item--active': pane.selected }"
              ng-repeat="pane in tabsCtrl.panes"
              ng-click="tabsCtrl.select(pane)">
            {{ pane.title }}
          </li>
        </ul>

        <ng-transclude></ng-transclude>
      `
  }
}

export default tabs
