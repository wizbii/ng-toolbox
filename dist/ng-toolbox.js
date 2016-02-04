/*!
 * ng-toolbox - v1.0.0
 * Set of Angular utilities used at Wizbii.
 * https://github.com/wizbii/ng-toolbox#readme
 *
 * @author Wizbii <dev@wizbii.com> (http://www.wizbii.com/)
 * @license MIT
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(8);

	var _filtersTruncate = __webpack_require__(11);

	var _filtersTruncate2 = _interopRequireDefault(_filtersTruncate);

	var _factoriesLoader = __webpack_require__(12);

	var _factoriesLoader2 = _interopRequireDefault(_factoriesLoader);

	var _directivesPopup = __webpack_require__(13);

	var _directivesPopup2 = _interopRequireDefault(_directivesPopup);

	var _directivesFocusMe = __webpack_require__(14);

	var _directivesFocusMe2 = _interopRequireDefault(_directivesFocusMe);

	exports['default'] = angular.module('ng-toolbox', ['ng-toolbox-dropdown', 'ng-toolbox-tabs', 'ng-toolbox-lightbox-image']).filter({ truncate: _filtersTruncate2['default'] }).factory({ Loader: _factoriesLoader2['default'] }).directive({ popup: _directivesPopup2['default'], focusMe: _directivesFocusMe2['default'] });
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _dropdown = __webpack_require__(2);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _dropdownToggle = __webpack_require__(3);

	var _dropdownToggle2 = _interopRequireDefault(_dropdownToggle);

	var _dropdownMenu = __webpack_require__(4);

	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

	exports['default'] = angular.module('ng-toolbox-dropdown', []).directive({ dropdown: _dropdown2['default'], dropdownToggle: _dropdownToggle2['default'], dropdownMenu: _dropdownMenu2['default'] });
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function dropdown($document) {
	  return {
	    scope: {
	      dropdownAutoClose: '@'
	    },
	    controller: ['$scope', function ($scope) {
	      var self = this;
	      self.isOpen = false;

	      // close the drop down when clicking outside of it or the toggle button
	      $document.on('click', function (event) {
	        if (self.dropdownAutoClose !== 'true' && contains(self.dropdownMenu, event.target)) return;
	        if (contains(self.dropdownToggle, event.target)) return;

	        self.isOpen = false;
	        $scope.$apply();
	      });

	      $scope.$watch(function () {
	        return self.isOpen;
	      }, function (isOpen, wasOpen) {
	        if (!self.dropdownMenu) return;

	        if (isOpen) self.dropdownMenu.removeClass('ng-hide');else self.dropdownMenu.addClass('ng-hide');
	      });

	      function contains(container, target) {
	        if (container == null) return false;
	        return container[0].contains(target);
	      }
	    }],
	    controllerAs: 'dropdown',
	    bindToController: true
	  };
	}

	dropdown.$inject = ['$document'];

	exports['default'] = dropdown;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function dropdownToggle() {
	  return {
	    require: '^dropdown',
	    link: function link(scope, element, attrs, ctrl) {
	      ctrl.dropdownToggle = element;

	      element.on('click', function () {
	        ctrl.isOpen = !ctrl.isOpen;
	        scope.$apply();
	      });
	    }
	  };
	}

	exports['default'] = dropdownToggle;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function dropdownMenu() {
	  return {
	    require: '^dropdown',
	    link: function link(scope, element, attrs, ctrl) {
	      ctrl.dropdownMenu = element;
	    }
	  };
	}

	exports['default'] = dropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _tabs = __webpack_require__(6);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _pane = __webpack_require__(7);

	var _pane2 = _interopRequireDefault(_pane);

	exports['default'] = angular.module('ng-toolbox-tabs', []).directive({ tabs: _tabs2['default'], pane: _pane2['default'] });
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function tabs() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    controllerAs: 'tabsCtrl',
	    controller: ['$rootScope', function ($rootScope) {
	      var vm = this;

	      vm.panes = [];
	      vm.addPane = addPane;
	      vm.select = select;

	      $rootScope.$on('tabs.select', function (event, alias) {
	        vm.panes.some(function (pane) {
	          if (getAlias(pane) === alias) {
	            select(pane);
	            return false;
	          }
	        });
	      });

	      function addPane(pane) {
	        var hash = (window.location.hash || '').substr(1);
	        var alias = getAlias(pane);
	        var selected = vm.panes.length === 0 || hash === alias;

	        if (selected) angular.forEach(vm.panes, function (p) {
	          return p.selected = false;
	        });
	        pane.selected = selected;

	        vm.panes.push(pane);
	      }

	      function select(pane) {
	        angular.forEach(vm.panes, function (p) {
	          p.selected = p === pane;

	          var alias = getAlias(p);
	          if (p.selected) window.location.hash = alias;
	        });
	      }

	      function getAlias(pane) {
	        return angular.isString(pane.alias) ? pane.alias : pane.title.replace(/<[^>]+>/g, '').replace(/\s/g, '-').toLowerCase();
	      }
	    }],
	    template: '\n        <ul class="tabs">\n          <li class="tabs__item"\n              ng-class="{ \'tabs__item--active\': pane.selected }"\n              ng-repeat="pane in tabsCtrl.panes"\n              ng-click="tabsCtrl.select(pane)"\n              ng-bind-html="pane.title">\n          </li>\n        </ul>\n\n        <ng-transclude></ng-transclude>\n      '
	  };
	}

	exports['default'] = tabs;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function pane() {
	  return {
	    require: '^tabs',
	    restrict: 'EA',
	    transclude: true,
	    scope: { title: '@', alias: '@' },
	    link: function link(scope, element, attrs, tabsCtrl) {
	      tabsCtrl.addPane(scope);
	    },
	    template: '\n        <div class="pane" ng-show="selected" ng-transclude></div>\n      '
	  };
	}

	exports['default'] = pane;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lightboxImage = __webpack_require__(9);

	var _lightboxImage2 = _interopRequireDefault(_lightboxImage);

	var _lightboxImageOpen = __webpack_require__(10);

	var _lightboxImageOpen2 = _interopRequireDefault(_lightboxImageOpen);

	exports['default'] = angular.module('ng-toolbox-lightbox', []).directive({ lightboxImage: _lightboxImage2['default'], lightboxImageOpen: _lightboxImageOpen2['default'] }).run(['$document', '$compile', '$rootScope', function ($document, $compile, $rootScope) {
	  var lightboxImage = $compile('<lightbox-image></lightbox-image>')($rootScope.$new());
	  $document.find('body').append(lightboxImage);
	}]);
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function lightboxImage($rootScope, $document) {
	  return {
	    restrict: 'E',
	    scope: true,
	    link: function link(scope) {
	      scope.toasts = [];
	      scope.active = false;

	      $rootScope.$on('lightbox:open', function (event, src) {
	        scope.src = src;
	        scope.active = true;
	        $document.find('body').css('overflow', 'hidden');
	      });

	      $document.on('keyup', function (event) {
	        if (event.which === 27) {
	          scope.$apply(function () {
	            scope.close();
	          });
	        }
	      });

	      scope.close = function () {
	        $document.find('body').css('overflow', 'auto');
	        scope.active = false;
	      };
	    },
	    template: '<div ng-if="active" ng-class="{\'lightbox-image--active\': active}" class="lightbox">' + '   <span class="lightbox-image-cross" ng-click="close()"><span class="icon-cross"></span></span>' + '   <img style="margin:auto;" ng-src="{{ src }}">' + '</div>'
	  };
	}

	lightboxImage.$inject = ['$rootScope', '$document'];

	exports['default'] = lightboxImage;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function lightboxImageOpen($rootScope) {
	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      element.on('click', function () {
	        $rootScope.$emit('lightbox:open', attrs.lightboxOpen);
	      });
	    }
	  };
	}

	lightboxImageOpen.$inject = ['$rootScope'];

	exports['default'] = lightboxImageOpen;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function truncate() {
	  return function (str, maxLength) {
	    var ellipsis = arguments.length <= 2 || arguments[2] === undefined ? '...' : arguments[2];

	    if (!angular.isString(str)) return str;

	    str = str.replace(/<[^>]+>/g, '').trim();

	    if (str.length <= maxLength || !/ /g.test(str)) return str;

	    var partials = str.split(' ');
	    str = '';

	    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
	      str = (str + ' ' + partials.shift()).trim(); // trim in case str was empty
	    }

	    return str + ellipsis;
	  };
	}

	exports['default'] = truncate;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function Loader() {
	  return function () {
	    var loading = {};

	    function setLoading(prop) {
	      var isLoading = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      loading[prop] = isLoading;
	    }

	    function isLoading(prop) {
	      if (prop == null) {
	        for (var key in loading) {
	          if (!loading.hasOwnProperty(key)) continue;
	          if (loading[key] === true) return true;
	        }

	        return false;
	      }

	      return loading[prop] === true;
	    }

	    function isntLoading(prop) {
	      return !isLoading(prop);
	    }

	    return { setLoading: setLoading, isLoading: isLoading, isntLoading: isntLoading };
	  };
	}

	exports["default"] = Loader;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	/* global _ */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function popup() {
	  var DEFAULT_WIDTH = 600;
	  var DEFAULT_HEIGHT = 300;

	  function configToString(config) {
	    return _.reduce(config, function (configList, value, name) {
	      configList.push(name + '=' + value);
	      return configList;
	    }, []).join(', ');
	  }

	  return {
	    restrict: 'A',
	    link: function link(scope, element, attrs) {
	      element.on('click', function (event) {
	        var width = Number(attrs.popupWidth) || DEFAULT_WIDTH;
	        var height = Number(attrs.popupHeight) || DEFAULT_HEIGHT;

	        var position = {
	          left: window.screen.width / 2 - width / 2,
	          top: window.screen.height / 2 - height / 2
	        };

	        var config = {
	          toolbar: 'no',
	          location: 'no',
	          directories: 'no',
	          status: 'no',
	          menubar: 'no',
	          scrollbars: 'yes',
	          resizable: 'no',
	          copyhistory: 'no',
	          width: width,
	          height: height,
	          top: position.top,
	          left: position.left
	        };

	        window.open(attrs.href, attrs.title || '', configToString(config));
	        event.preventDefault();
	      });
	    }
	  };
	}

	exports['default'] = popup;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function focusMe($parse) {
	  return {
	    restrict: 'A',
	    scope: { focusMe: '=' },
	    link: function link(scope, element, attrs) {
	      scope.$watch('focusMe', function (focusMe) {
	        if (focusMe) element[0].focus();
	      });

	      var isAssignable = Boolean($parse(attrs.focusMe).assign);

	      if (isAssignable) {
	        element.on('blur', function () {
	          scope.focusMe = false;
	        });
	      }
	    }
	  };
	}

	focusMe.$inject = ['$parse'];

	exports['default'] = focusMe;
	module.exports = exports['default'];

/***/ }
/******/ ]);