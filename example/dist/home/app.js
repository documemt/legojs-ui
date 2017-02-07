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
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _home = __webpack_require__(11);

	var _home2 = _interopRequireDefault(_home);

	var _list = __webpack_require__(12);

	var _list2 = _interopRequireDefault(_list);

	var _list3 = __webpack_require__(13);

	var _list4 = _interopRequireDefault(_list3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	HBY.components('home', _home2.default);

	HBY.router({
	    '/home': function home() {
	        HBY.create(_list2.default, {
	            el: HBY.config.pageEl,
	            dataSource: {
	                api: ['test', 'ok'],
	                server: _list4.default
	            },
	            onAfter: function onAfter(self) {
	                var i = 0;
	                HBY.setTimer('theTime', setInterval(function () {
	                    self.options.data[0].last = i;
	                    self.refresh();
	                    i++;
	                }, 3000));
	            },

	            components: [{
	                el: '#test',
	                dataSource: {
	                    api: ['ok'],
	                    server: _list4.default
	                }
	            }]
	        });
	    },
	    '/home/list': function homeList() {
	        HBY.create(_list2.default, {
	            el: HBY.config.pageEl,
	            data: {
	                list: [{ first: 'home', last: 'Bond' }, { first: 'test', last: 'bbbb' }]
	            },
	            components: [{
	                el: '#home',
	                data: [{ first: 'home2', last: 'Bond2' }, { first: 'test2', last: 'bbbb2' }]
	            }, {
	                el: '#test',
	                data: [{ first: 'home3', last: 'Bond3' }, { first: 'test3', last: 'bbbb3' }]
	            }]
	        });
	    },
	    '/home/detail/:id': function homeDetailId(id) {
	        console.warn('pppppppppp');
	    }
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<div>\n          ', '\n        </div>'], ['<div>\n          ', '\n        </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['<a href="#/home" style="display:block;">', '</a>\n'], ['<a href="#/home" style="display:block;">', '</a>\\n']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HomeView = function (_Lego$UI$Baseview) {
	    _inherits(HomeView, _Lego$UI$Baseview);

	    function HomeView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, HomeView);

	        var options = {
	            // el: 'div#uuu88',
	            events: {
	                'click #400': 'theClick'
	            }
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
	    }

	    _createClass(HomeView, [{
	        key: 'render',
	        value: function render() {
	            var options = this.options.data || [];
	            var vDom = hx(_templateObject, options.map(function (model, i) {
	                return hx(_templateObject2, model.first);
	            }));
	            return vDom;
	        }
	    }, {
	        key: 'theClick',
	        value: function theClick(event) {
	            event.stopPropagation();
	            HBY.trigger('data_update', { aa: 1 });
	        }
	    }]);

	    return HomeView;
	}(Lego.UI.Baseview);

	exports.default = HomeView;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['<div>\n          <h1>hello world!</h1>\n          ', '\n          <home id="test"></home>\n        </div>'], ['<div>\n          <h1>hello world!</h1>\n          ', '\n          <home id="test"></home>\n        </div>']),
	    _templateObject2 = _taggedTemplateLiteral(['<a href="#/home/list" style="display:block;">', '</a>\n'], ['<a href="#/home/list" style="display:block;">', '</a>\\n']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListView = function (_Lego$UI$Baseview) {
	    _inherits(ListView, _Lego$UI$Baseview);

	    function ListView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ListView);

	        var options = {
	            events: {
	                'click #test': 'theClick'
	            },
	            listen: {
	                'data_update': function data_update(data) {
	                    debug.warn('ttttttttttt', data);
	                }
	            }
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, options));
	    }

	    _createClass(ListView, [{
	        key: 'render',
	        value: function render() {
	            var options = this.options.data || [];
	            debug.warn('更新了视图', options);
	            var vDom = hx(_templateObject, options.map(function (model, i) {
	                return hx(_templateObject2, model.last);
	            }));
	            return vDom;
	        }
	    }, {
	        key: 'theClick',
	        value: function theClick(event) {
	            event.stopPropagation();
	            debug.warn('66666666666');
	        }
	    }]);

	    return ListView;
	}(Lego.UI.Baseview);

	exports.default = ListView;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListData = function (_HBY$Data) {
	    _inherits(ListData, _HBY$Data);

	    function ListData() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, ListData);

	        var options = {
	            'test': {
	                url: './content.json',
	                listTarget: 'data',
	                model: {
	                    first: '',
	                    last: '',
	                    id: 0
	                }
	            },
	            'ok': {
	                url: './content.json'
	            }
	        };
	        $.extend(true, options, opts);
	        return _possibleConstructorReturn(this, (ListData.__proto__ || Object.getPrototypeOf(ListData)).call(this, options));
	    }

	    _createClass(ListData, [{
	        key: 'parse',
	        value: function parse(datas) {
	            // console.warn(datas);
	            return datas[0].data;
	        }
	    }]);

	    return ListData;
	}(HBY.Data);

	exports.default = new ListData();

/***/ }
/******/ ]);