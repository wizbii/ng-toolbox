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

	__webpack_require__(11);

	var _filtersTruncate = __webpack_require__(16);

	var _filtersTruncate2 = _interopRequireDefault(_filtersTruncate);

	var _factoriesLoader = __webpack_require__(18);

	var _factoriesLoader2 = _interopRequireDefault(_factoriesLoader);

	var _factoriesKeyboardManager = __webpack_require__(19);

	var _factoriesKeyboardManager2 = _interopRequireDefault(_factoriesKeyboardManager);

	var _directivesPopup = __webpack_require__(20);

	var _directivesPopup2 = _interopRequireDefault(_directivesPopup);

	var _directivesFocusMe = __webpack_require__(21);

	var _directivesFocusMe2 = _interopRequireDefault(_directivesFocusMe);

	exports['default'] = angular.module('ng-toolbox', ['ng-toolbox-dropdown', 'ng-toolbox-tabs', 'ng-toolbox-lightbox-image', 'ng-toolbox-autocomplete']).filter({ truncate: _filtersTruncate2['default'] }).factory({ Loader: _factoriesLoader2['default'], KeyboardManager: _factoriesKeyboardManager2['default'] }).directive({ popup: _directivesPopup2['default'], focusMe: _directivesFocusMe2['default'] });
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
	    controller: ['$scope', '$attrs', function ($scope, $attrs) {
	      var self = this;
	      self.isOpen = false;

	      self.dropdownAutoClose = $attrs.dropdownAutoClose;

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

	      $scope.dropdown = self;
	    }],
	    controllerAs: 'dropdown',
	    scope: true,
	    link: function link(scope, element, attrs, ctrl, transclude) {
	      transclude(scope, function (clone) {
	        element.append(clone);
	      });
	    },
	    transclude: true
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

	exports['default'] = angular.module('ng-toolbox-lightbox-image', []).directive({ lightboxImage: _lightboxImage2['default'], lightboxImageOpen: _lightboxImageOpen2['default'] }).run(['$rootElement', function ($rootElement) {
	  $rootElement.append('<lightbox-image></lightbox-image>');
	}]);
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function lightboxImage($rootScope, $document, $timeout) {
	  return {
	    restrict: 'E',
	    scope: true,
	    link: function link(scope) {
	      scope.toasts = [];
	      scope.active = false;
	      scope.close = close;

	      $rootScope.$on('lightbox:open', function (event, src) {
	        $timeout(function () {
	          scope.src = src;
	          scope.active = true;

	          $document.find('body').css('overflow', 'hidden');
	        });
	      });

	      $document.on('keyup', function (event) {
	        if (event.which === 27) $timeout(close);
	      });

	      function close() {
	        if (scope.active === false) {
	          return;
	        }

	        $document.find('body').css('overflow', 'auto');

	        scope.active = false;
	      }
	    },
	    template: '\n      <div ng-if="active" ng-click="close()" class="lightbox lightbox--image">\n        <span class="lightbox__close-btn" ng-click="close()">\n          <span class="icon-cross"></span>\n        </span>\n\n        <div class="lightbox__inner">\n          <img ng-src="{{ src }}" ng-click="$event.stopPropagation()" alt="">\n        </div>\n      </div>\n    '
	  };
	}

	lightboxImage.$inject = ['$rootScope', '$document', '$timeout'];

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
	        $rootScope.$emit('lightbox:open', attrs.lightboxImageOpen);
	      });
	    }
	  };
	}

	lightboxImageOpen.$inject = ['$rootScope'];

	exports['default'] = lightboxImageOpen;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _autocompleteTpl = __webpack_require__(12);

	var _autocompleteTpl2 = _interopRequireDefault(_autocompleteTpl);

	var _autocompleteTplInput = __webpack_require__(13);

	var _autocompleteTplInput2 = _interopRequireDefault(_autocompleteTplInput);

	var _autocompleteTplMenu = __webpack_require__(14);

	var _autocompleteTplMenu2 = _interopRequireDefault(_autocompleteTplMenu);

	var _autocompleteTplMenuItem = __webpack_require__(15);

	var _autocompleteTplMenuItem2 = _interopRequireDefault(_autocompleteTplMenuItem);

	exports['default'] = angular.module('ng-toolbox-autocomplete', []).directive({ autocompleteTpl: _autocompleteTpl2['default'], autocompleteTplInput: _autocompleteTplInput2['default'], autocompleteTplMenu: _autocompleteTplMenu2['default'], autocompleteTplMenuItem: _autocompleteTplMenuItem2['default'] });
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function autocompleteTpl($document, $timeout, KeyboardManager) {
	  return {
	    controller: ['$scope', function ($scope) {
	      var vm = this;
	      vm.isOpen = false;

	      $document.on('click', function (event) {
	        $timeout(function () {
	          if (contains(vm.menu, event.target) || contains([vm.input], event.target)) return;

	          vm.isOpen = false;
	        });
	      });

	      $scope.$watch(function () {
	        return vm.isOpen;
	      }, function (isOpen) {
	        if (!vm.menu) return;

	        if (isOpen) {
	          vm.showMenu();
	        } else {
	          vm.hideMenu();
	          vm.input.blur();
	        }
	      });

	      function contains(container, target) {
	        if (container == null) return false;
	        return container[0].contains(target);
	      }
	    }],
	    controllerAs: 'autocompleteTpl',
	    bindToController: true,
	    link: function link(scope, element, attrs, ctrl) {
	      function updateFocus(e, direction) {
	        var items = element.find('[autocomplete-tpl-menu-item]');

	        if (items.length <= 0) return;

	        var focusedIndex = _.findIndex(items, function (item) {
	          return item === document.activeElement;
	        });
	        var indexToFocus = undefined;

	        var lowestIndex = ctrl.input ? -1 : 0;
	        var greatestIndex = items.length - 1;

	        if (direction === 'up') {
	          indexToFocus = focusedIndex > lowestIndex ? focusedIndex - 1 : greatestIndex;
	        } else {
	          indexToFocus = focusedIndex < greatestIndex ? focusedIndex + 1 : lowestIndex;
	        }

	        if (indexToFocus === -1) ctrl.input.focus();else items.get(indexToFocus).focus();

	        e.preventDefault();
	      }

	      KeyboardManager(element, {
	        up: function up(e) {
	          return updateFocus(e, 'up');
	        },
	        down: function down(e) {
	          return updateFocus(e, 'down');
	        },
	        esc: function esc(e) {
	          if (ctrl.isOpen) {
	            ctrl.isOpen = false;
	            e.preventDefault();
	          }
	        }
	      });
	    }
	  };
	}

	autocompleteTpl.$inject = ['$document', '$timeout', 'KeyboardManager'];

	exports['default'] = autocompleteTpl;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function autocompleteTplInput($timeout) {
	  return {
	    require: '^autocompleteTpl',
	    link: function link(scope, element, attrs, ctrl) {
	      ctrl.input = element[0];

	      element.on('focus', function () {
	        $timeout(function () {
	          ctrl.isOpen = true;
	        });
	      });
	    }
	  };
	}

	autocompleteTplInput.$inject = ['$timeout'];

	exports['default'] = autocompleteTplInput;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function autocompleteTplMenu($window, $document) {
	  return {
	    require: '^autocompleteTpl',
	    link: function link(scope, element, attrs, ctrl) {
	      /*----------------------------------------*\
	       props
	       \*----------------------------------------*/

	      var isFixed = attrs.autocompleteTplMenu === 'fixed';

	      ctrl.menu = element;
	      ctrl.showMenu = showMenu;
	      ctrl.hideMenu = hideMenu;

	      /*----------------------------------------*\
	       functions
	       \*----------------------------------------*/

	      function showMenu() {
	        element.removeClass('ng-hide');
	        if (isFixed) updateFixedPosition();
	      }

	      function hideMenu() {
	        element.addClass('ng-hide');
	      }

	      function updateFixedPosition() {
	        if (ctrl.input == null) return;
	        if (!isVisible(element[0])) return;

	        var targetPosition = ctrl.input[0].getBoundingClientRect();
	        var viewportHeight = $document[0].documentElement.clientHeight;
	        var topMargin = 5;
	        var bottomMargin = 20;

	        element.css({
	          top: targetPosition.bottom + topMargin,
	          left: targetPosition.left,
	          maxHeight: viewportHeight - targetPosition.bottom - bottomMargin,
	          width: targetPosition.right - targetPosition.left
	        });
	      }

	      function isVisible(_x) {
	        var _again = true;

	        _function: while (_again) {
	          var e = _x;
	          _again = false;

	          var style = $window.getComputedStyle(e);
	          var display = style.getPropertyValue('display');

	          if (display === 'none') return false;

	          var parent = e.parentElement;
	          if (parent && parent.nodeType === 1) {
	            _x = parent;
	            _again = true;
	            style = display = parent = undefined;
	            continue _function;
	          } else {
	            return true;
	          }
	        }
	      }

	      /*----------------------------------------*\
	       init
	       \*----------------------------------------*/

	      if (isFixed) {
	        element.addClass('autocomplete__menu--fixed');
	        updateFixedPosition();

	        var softUpdate = _.throttle(updateFixedPosition, 250);

	        angular.element($window).on('resize', softUpdate).on('scroll', softUpdate);
	      } else {
	        element.addClass('autocomplete__menu--absolute');
	      }
	    }
	  };
	}

	autocompleteTplMenu.$inject = ['$window', '$document'];

	exports['default'] = autocompleteTplMenu;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function autocompleteTplMenuItem() {
	  return {
	    require: '^autocompleteTpl',
	    link: function link(scope, element) {
	      element.on('mousemove', function () {
	        this.focus();
	      });
	    }
	  };
	}

	exports['default'] = autocompleteTplMenuItem;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersHtmlJs = __webpack_require__(17);

	var _helpersHtmlJs2 = _interopRequireDefault(_helpersHtmlJs);

	function truncate() {
	  return function (str, maxLength) {
	    var ellipsis = arguments.length <= 2 || arguments[2] === undefined ? '...' : arguments[2];

	    if (!angular.isString(str)) return str;

	    var _str = str;
	    var map = _helpersHtmlJs2['default'].map(str);
	    str = _helpersHtmlJs2['default'].strip(str).trim();

	    if (str.length <= maxLength || !/ /g.test(str)) return _str;

	    var partials = str.split(' ');
	    str = '';

	    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
	      str = (str + ' ' + partials.shift()).trim(); // trim in case str was empty
	    }

	    str = _helpersHtmlJs2['default'].inject(str, map);
	    return str + ellipsis;
	  };
	}

	exports['default'] = truncate;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  strip: function strip(str) {
	    return str.replace(/(<([^>]+)>)/gi, '');
	  },

	  map: function map(str) {
	    var regexp = /<[^>]+>/gi;
	    var tags = [];
	    var openers = [];
	    var result = undefined;
	    var tag = undefined;

	    while (result = regexp.exec(str)) {
	      tag = {
	        tagName: result[0],
	        position: result.index
	      };

	      if (tag.tagName.charAt(1) === '/') tag.opener = openers.pop();else if (tag.tagName.charAt(tag.tagName.length - 2) !== '/') openers.push(tag);

	      tags.push(tag);
	    }

	    return tags;
	  },

	  inject: function inject(str, map) {
	    for (var i = 0, tag = undefined; i < map.length; i++) {
	      tag = map[i];

	      if (str.length > 0 && tag.position <= str.length) {
	        str = str.substr(0, tag.position) + tag.tagName + str.substr(tag.position);
	      } else if (tag.opener && tag.opener.position < str.length) {
	        str += tag.tagName;
	      }
	    }

	    return str;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function KeyboardManager() {
	  return function (element, handlers) {
	    var mapping = { down: 40, up: 38, enter: 13, tab: 9, esc: 27 };
	    handlers = _.mapKeys(handlers, function (handler, keyName) {
	      return mapping[keyName];
	    });

	    element[0].addEventListener('keydown', function (e) {
	      var handler = handlers[e.keyCode];
	      if (handler == null) return;

	      handler.apply(this, arguments);
	    }, true);
	  };
	}

	exports['default'] = KeyboardManager;
	module.exports = exports['default'];

/***/ },
/* 20 */
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
/* 21 */
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