/*!
 * ng-toolbox - v0.1.0
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

	var _filtersTruncate = __webpack_require__(5);

	var _filtersTruncate2 = _interopRequireDefault(_filtersTruncate);

	var _factoriesLoader = __webpack_require__(6);

	var _factoriesLoader2 = _interopRequireDefault(_factoriesLoader);

	var _directivesPopup = __webpack_require__(7);

	var _directivesPopup2 = _interopRequireDefault(_directivesPopup);

	var _directivesFocusMe = __webpack_require__(8);

	var _directivesFocusMe2 = _interopRequireDefault(_directivesFocusMe);

	exports['default'] = angular.module('ng-toolbox', ['ng-toolbox-dropdown']).filter({ truncate: _filtersTruncate2['default'] }).factory({ Loader: _factoriesLoader2['default'] }).directive({ popup: _directivesPopup2['default'], focusMe: _directivesFocusMe2['default'] });
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
	    controller: ['$scope', function ($scope) {
	      var self = this;
	      self.isOpen = false;

	      // close the drop down when clicking outside of it or the toggle button
	      $document.on('click', function (event) {
	        if (contains(self.dropdownMenu, event.target)) return;
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
	    }]
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
/***/ function(module, exports) {

	/* global angular */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function truncate() {
	  return function (str, maxLength) {
	    var ellipsis = arguments.length <= 2 || arguments[2] === undefined ? '...' : arguments[2];

	    if (!angular.isString(str) || str.length <= maxLength || str.indexOf(' ') === -1) {
	      return str;
	    }

	    var partials = str.split(' ');
	    str = '';

	    while (partials.length && (str + ' ' + partials[0] + ellipsis).length <= maxLength) {
	      str = (str + ' ' + partials.shift()).trim();
	    }

	    return str + ellipsis;
	  };
	}

	exports['default'] = truncate;
	module.exports = exports['default'];

/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function focusMe() {
	  return {
	    restrict: 'A',
	    scope: { focusMe: '=' },
	    link: function link(scope, element) {
	      scope.$watch('focusMe', function (focusMe) {
	        if (!focusMe) return;

	        scope.focusMe = false;
	        element[0].focus();
	      });
	    }
	  };
	}

	exports['default'] = focusMe;
	module.exports = exports['default'];

/***/ }
/******/ ]);