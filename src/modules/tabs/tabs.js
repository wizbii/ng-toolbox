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
        pane.selected = vm.panes.length === 1 || hash === pane.alias
        vm.panes.push(pane)
      }

      function select (pane) {
        angular.forEach(vm.panes, function (p) {
          p.selected = p === pane
          if (p.selected && p.alias) window.location.hash = p.alias
        })
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
