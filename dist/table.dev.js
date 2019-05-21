/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_table_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/table.vue */ "./src/table.vue");
/* harmony import */ var _src_table_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/table-column */ "./src/table-column.js");
/* harmony import */ var _src_table_column__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_table_column__WEBPACK_IMPORTED_MODULE_1__);



function install (Vue) {
    // console.log(Table.name)
    Vue.component(_src_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _src_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
    Vue.component(_src_table_column__WEBPACK_IMPORTED_MODULE_1___default.a.name, _src_table_column__WEBPACK_IMPORTED_MODULE_1___default.a)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

/* harmony default export */ __webpack_exports__["default"] = ({
    Table: _src_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TableColumn: (_src_table_column__WEBPACK_IMPORTED_MODULE_1___default())
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/table.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(/*! ./store */ "./src/store.js");

var _store2 = _interopRequireDefault(_store);

var _layout = __webpack_require__(/*! ./layout */ "./src/layout.js");

var _layout2 = _interopRequireDefault(_layout);

var _tableBody = __webpack_require__(/*! ./table-body */ "./src/table-body.js");

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHeader = __webpack_require__(/*! ./table-header */ "./src/table-header.js");

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TWEEN = __webpack_require__(/*! ./tween */ "./src/tween.js"); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var tableIdSeed = 1;

exports.default = {
    name: 'TTable',

    components: {
        TableBody: _tableBody2.default,
        TableHeader: _tableHeader2.default
    },

    props: {
        border: [Boolean, String],
        data: Array,
        height: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: true
        },
        moveCb: {
            type: Function,
            default: function _default() {}
        },
        canMove: {
            type: Boolean,
            default: false
        },
        headerHeight: {
            type: Number,
            default: 30
        }
    },

    computed: {
        style: function style() {
            var r = {};
            if (this.height && typeof this.height === 'string') {
                r.height = this.height;
            }
            if (this.width && typeof this.width === 'string') {
                r.width = this.width;
            }

            return r;
        },

        bodyHeight: function bodyHeight() {
            var height = '';
            if (this.height && typeof this.height === 'string') {
                height = +this.height.match(/(\d+)/)[1] - this.headerHeight + 'px';
            }
            return height;
        },

        isLeftFixed: function isLeftFixed() {
            return this.store.leftFixedColumns.length > 0;
        },
        isRightFixed: function isRightFixed() {
            return this.store.rightFixedColumns.length > 0;
        },
        bodyWrapper: function bodyWrapper() {
            return this.$refs.tTableWrapper;
        },
        leftFixedBodyWrapper: function leftFixedBodyWrapper() {
            return this.$refs.tTableLeftFixedWrapper;
        },
        rightFixedBodyWrapper: function rightFixedBodyWrapper() {
            return this.$refs.tTableRightFixedWrapper;
        },
        tableHeaderWrapper: function tableHeaderWrapper() {
            return this.$refs.tTableHeaderWrapper;
        },
        tableBody: function tableBody() {
            return this.$refs.tTableBody;
        },
        maxScrollLeft: function maxScrollLeft() {
            var r = this.store.realColumnWidth - this.bodyWrapper.getBoundingClientRect().width;
            return r;
        }
    },

    data: function data() {
        return {
            tableId: '',
            store: new _store2.default(),
            leftFixColumnWidth: 0,
            rightFixColumnWidth: 0,
            layout: new _layout2.default()
        };
    },


    watch: {
        'store.leftFixColumnWidth': function storeLeftFixColumnWidth(newVal, oldVal) {
            this.leftFixColumnWidth = newVal;
        }
    },

    created: function created() {
        this.tableId = 't-table_' + tableIdSeed++;
    },
    mounted: function mounted() {
        this.initEvent(this.bodyWrapper);
    },
    destroyed: function destroyed() {
        (0, _utils.removeEventListener)(this.bodyWrapper, this.scrollEvent);
    },


    methods: {
        touchStart: function touchStart(event) {
            if (this.layout.isMoved) {
                return;
            }
            this.layout.startPoint = {
                x: event.touches[0].clientX, y: event.touches[0].clientY
            };
            this.layout.startTimestamp = Date.now();
            TWEEN.cancel();
        },
        touchMove: function touchMove(event) {

            // 阻止默认事件发生
            if (!this.canMove) {
                event.preventDefault();
            }
            this.layout.isMoved = true;
            this.layout.endPoint = {
                x: event.touches[0].clientX, y: event.touches[0].clientY
            };
            var startPoint = this.layout.startPoint;

            var scrollTop = this.layout.endPoint.y - startPoint.y;
            var scrollLeft = this.layout.endPoint.x - startPoint.x;
            scrollTop = this.layout.scrollTop - scrollTop;
            scrollLeft = this.layout.scrollLeft - scrollLeft;

            this.store.updateHorizontelType(this.maxScrollLeft, scrollLeft);

            // 设置scrollTop和scrollLeft
            this.setScroll(scrollLeft, scrollTop);
        },
        touchEnd: function touchEnd(event) {
            var _this = this;

            // event.preventDefault()
            if (!this.layout.isMoved) {
                return;
            }
            this.layout.isMoved = false;
            var endPoint = this.layout.endPoint;
            var startPoint = this.layout.startPoint;
            var endTime = Date.now();
            var startTime = this.layout.startTimestamp;

            var _side = endPoint.y - startPoint.y > 0 ? 'top' : 'bottom';
            var _side2 = endPoint.x - startPoint.x > 0 ? 'right' : 'left';
            this.layout.startPoint = this.endPoint;
            this.layout.endPoint = null;
            this.layout.setLayoutData(this.bodyWrapper);

            var maxScrollHeight = parseInt(getComputedStyle(this.tableBody).height.match(/(\d+)/)[1]) - this.bodyWrapper.getBoundingClientRect().height;

            this.store.updateHorizontelType(this.maxScrollLeft, this.layout.scrollLeft);

            var scrollTop = void 0;
            var scrollLeft = void 0;

            if (this.layout.scrollTop > 0) {
                scrollTop = 0;
            } else if (this.layout.scrollTop < 0 && this.layout.scrollTop >= maxScrollHeight) {
                scrollTop = maxScrollHeight;
            }

            if (this.layout.scrollLeft < 0) {
                scrollLeft = 0;
            } else if (this.layout.scrollLeft > this.maxScrollLeft) {
                scrollLeft = this.maxScrollLeft;
            }

            var initSpeed = void 0;
            var tweenSide = void 0;
            if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000);
                tweenSide = _side;
            } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000);
                tweenSide = _side2;
            } else {
                return;
            }

            initSpeed = Math.min(initSpeed, 1500);

            TWEEN.animate('easeOut', initSpeed, 0, 100, 35, function (err, v, tag) {
                if (err) {
                    console.error(err);
                } else {

                    var _scrollTop = _this.layout.scrollTop;
                    var _scrollLeft = _this.layout.scrollLeft;
                    var c = void 0;

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        c = tweenSide === 'right' ? _scrollLeft - v / 35 : _scrollLeft + v / 35;
                    } else {
                        c = tweenSide === 'top' ? _scrollTop - v / 35 : _scrollTop + v / 35;
                    }

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        _this.store.updateHorizontelType(_this.maxScrollLeft, c);
                    }

                    // console.log((c >= wrapperHeight || c <= 0), c, wrapperHeight)
                    // console.log((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > this.maxScrollLeft))
                    if ((tweenSide === 'top' || tweenSide === 'bottom') && (c >= maxScrollHeight || c <= 0)) {
                        TWEEN.cancel();
                        return;
                    } else if ((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > _this.maxScrollLeft)) {
                        TWEEN.cancel();
                        return;
                    } else if (tweenSide === 'top' || tweenSide === 'bottom') {
                        _this.layout.scrollTop = c;
                    } else {
                        _this.layout.scrollLeft = c;
                    }

                    // 设置scrollTop 和 scrollLeft  
                    _this.setScroll(_this.layout.scrollLeft, _this.layout.scrollTop);

                    if (tag === 'end') {
                        _this.moveCb();
                    }
                }
            });
        },
        initEvent: function initEvent(target) {
            (0, _utils.addEventListener)(target, 'touchstart', this.touchStart.bind(this));
            (0, _utils.addEventListener)(target, 'touchmove', this.touchMove.bind(this));
            (0, _utils.addEventListener)(target, 'touchend', this.touchEnd.bind(this));
        },
        sortData: function sortData(key, sortType) {
            this.data = this.data.sort(function (a, b) {
                if (sortType === 1) {
                    return a[key] - b[key];
                } else if (sortType === 2) {
                    return b[key] - a[key];
                } else {}
            });
        },
        setScroll: function setScroll(scrollLeft, scrollTop) {
            // 判断是否存在再进行设置
            this.rightFixedBodyWrapper && (this.rightFixedBodyWrapper.scrollTop = scrollTop);
            this.leftFixedBodyWrapper && (this.leftFixedBodyWrapper.scrollTop = scrollTop);
            this.bodyWrapper && (this.bodyWrapper.scrollTop = scrollTop, this.bodyWrapper.scrollLeft = scrollLeft);
            this.tableHeaderWrapper && (this.tableHeaderWrapper.scrollLeft = scrollLeft);
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./src/table.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".t-container {\n  position: relative;\n  overflow: hidden;\n}\n.is-hidden {\n  visibility: hidden;\n}\n.t-table-fixed-wrapper_left,\n.t-table-fixed-wrapper_right {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  color: #282a2e;\n}\n.t-table-fixed-wrapper_left {\n  left: 0;\n}\n.t-table-fixed-wrapper_left.is-scroll-middle,\n.t-table-fixed-wrapper_left.is-scroll-right {\n  box-shadow: 0 2px 5px #ddd;\n}\n.t-table-fixed-wrapper_right {\n  right: 0;\n}\n.t-table-header_body,\n.t-table_body {\n  table-layout: fixed;\n  overflow: hidden;\n  background: #fff;\n  color: #282a2e;\n}\n.t-table-header_body tr,\n.t-table_body tr {\n  background: #fff;\n}\n.t-table-header_body tr.active,\n.t-table_body tr.active {\n  background: #FFF7EE;\n}\n.t-table-header_body tr.active td.active,\n.t-table_body tr.active td.active {\n  background: #ffe6ca;\n}\n.t-table-header_body tr td.active,\n.t-table_body tr td.active {\n  background: #f0f0f0;\n}\n.t-table-header_body td,\n.t-table_body td,\n.t-table-header_body th,\n.t-table_body th {\n  border-bottom: 1px solid #DDDFE6;\n}\n.t-table-header_body th.active,\n.t-table_body th.active {\n  color: #2979FF;\n  background: #f0f0f0;\n}\n.t-table-header_body tr {\n  vertical-align: middle;\n}\n.t-table-wrapper {\n  overflow: hidden;\n}\n.t-table-header-wrapper {\n  overflow: hidden;\n}\n.cell {\n  overflow: hidden;\n}\n.t-table-fixed_body {\n  overflow: hidden;\n}\n.t-table-sort {\n  position: relative;\n  margin-left: 4px;\n}\n.t-table-sort .sort-icon {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n}\n.t-table-sort .sort-icon.asc {\n  transform: translate3d(0, -55%, 0);\n  border-bottom: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.t-table-sort .sort-icon.desc {\n  transform: translate3d(0, 55%, 0);\n  border-top: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.sortable.asc .sort-icon.asc {\n  border-bottom: 8px solid #2979FF;\n}\n.sortable.desc .sort-icon.desc {\n  border-top: 8px solid #2979FF;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=template&id=3a003e76&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/table.vue?vue&type=template&id=3a003e76& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "t-container", style: _vm.style },
    [
      _c(
        "div",
        { ref: "hiddenColumns", staticClass: "hidden-column" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "tTableHeaderWrapper",
          staticClass: "t-table-header-wrapper",
          style: { width: _vm.style.width }
        },
        [
          _c("table-header", {
            attrs: { store: _vm.store, height: _vm.headerHeight },
            on: { sortData: _vm.sortData }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.data.length > 0
        ? _c(
            "div",
            {
              ref: "tTableWrapper",
              staticClass: "t-table-wrapper",
              style: { width: _vm.style.width, height: _vm.bodyHeight }
            },
            [
              _c(
                "div",
                { ref: "tTableBody" },
                [
                  _c("table-body", {
                    attrs: { store: _vm.store, data: _vm.data }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isLeftFixed && _vm.data.length > 0
        ? _c(
            "div",
            {
              staticClass: "t-table-fixed-wrapper_left",
              class: _vm.store.horizontelScrollType,
              style: {
                maxWidth: _vm.leftFixColumnWidth + "px",
                height: _vm.style.height
              }
            },
            [
              _c(
                "div",
                [
                  _c("table-header", {
                    attrs: {
                      store: _vm.store,
                      height: _vm.headerHeight,
                      fixed: "left"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "tTableLeftFixedWrapper",
                  staticClass: "t-table-fixed_body",
                  style: { height: _vm.bodyHeight }
                },
                [
                  _c("table-body", {
                    attrs: { store: _vm.store, data: _vm.data, fixed: "left" }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isRightFixed && _vm.data.length > 0
        ? _c(
            "div",
            {
              ref: "tTableRightFixedWrapper",
              staticClass: "t-table-fixed-wrapper_right",
              style: { width: _vm.rightFixColumnWidth + "px" }
            },
            [
              _c(
                "div",
                [
                  _c("table-header", {
                    attrs: {
                      store: _vm.store,
                      height: _vm.headerHeight,
                      fixed: "right"
                    }
                  }),
                  _vm._v(" "),
                  _c("table-body", {
                    attrs: { store: _vm.store, data: _vm.data, fixed: "right" }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.data.length === 0 ? _vm._t("empty") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--4-2!./node_modules/vue-loader/lib??vue-loader-options!./src/table.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b56e2c4a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
    function Layout() {
        _classCallCheck(this, Layout);

        this.startPoint = {
            x: 0, y: 0
        };
        this.endPoint = {
            x: 0, y: 0
        };
        this.startTimestamp = -1;
        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.isMoved = false;
    }

    _createClass(Layout, [{
        key: "getTransformStyle",
        value: function getTransformStyle() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            return "translate3d(" + x + "px, " + y + "px, " + z + "px)";
        }
    }, {
        key: "setLayoutData",
        value: function setLayoutData(target) {
            // let transform = target.style.transform
            // let reg = transform.match(/(-?\d+)px,\s+(-?\d+)px,\s+(-?\d+)px/)

            // if (!reg) {
            //     return
            // }

            // this.scrollLeft = parseInt(reg[1])
            // this.scrollTop = parseInt(reg[2])
            this.scrollLeft = target.scrollLeft;
            this.scrollTop = target.scrollTop;
        }
    }, {
        key: "updateLayout",
        value: function updateLayout() {}
    }]);

    return Layout;
}();

module.exports = Layout;

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);

        this.columns = [], this.leftFixedColumns = [];
        this.rightFixedColumns = [];
        this.hiddenColumns = [];
        this.bodyWidth = 0;
        this.realColumnWidth = 0;
        this.leftFixColumnWidth = 0;
        this.rightFixColumnWidth = 0;
        this.sortKey = '';
        this.horizontelScrollType = '';
        this.verticalScrollType = '';
    }

    _createClass(Store, [{
        key: 'insertColumn',
        value: function insertColumn(column, index, parent) {
            // console.log(column, index, parent)
            this.columns.push(column);
            this.updateColumns();
            this.updateColumnWidth();
        }
    }, {
        key: 'updateColumns',
        value: function updateColumns() {
            var columns = this.columns.slice();
            this.leftFixedColumns = columns.filter(function (item) {
                return !!item.fixed && item.fixedSide === 'left';
            });
            this.rightFixedColumns = columns.filter(function (item) {
                return !!item.fixed && item.fixedSide === 'right';
            });
            this.hiddenColumns = columns.filter(function (item) {
                return !!item.hidden;
            });
        }
    }, {
        key: 'updateColumnWidth',
        value: function updateColumnWidth() {
            var realColumnWidth = 0;
            var leftFixColumnWidth = 0;
            var rightFixColumnWidth = 0;
            this.columns.map(function (item) {
                realColumnWidth += item.width;
            });
            this.leftFixedColumns.map(function (item) {
                leftFixColumnWidth += item.width;
            });
            this.rightFixedColumns.map(function (item) {
                rightFixColumnWidth += item.width;
            });
            this.realColumnWidth = realColumnWidth;
            this.leftFixColumnWidth = leftFixColumnWidth;
            this.rightFixColumnWidth = rightFixColumnWidth;
        }
    }, {
        key: 'updateHorizontelType',
        value: function updateHorizontelType(maxScrollLeft, curScrollLeft) {
            if (curScrollLeft <= 0) {
                this.horizontelScrollType = 'is-scroll-left';
            } else if (curScrollLeft < maxScrollLeft) {
                this.horizontelScrollType = 'is-scroll-middle';
            } else {
                this.horizontelScrollType = 'is-scroll-right';
            }
        }
    }]);

    return Store;
}();

module.exports = Store;

/***/ }),

/***/ "./src/table-body.js":
/*!***************************!*\
  !*** ./src/table-body.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        store: {
            required: true
        },
        fixed: [Boolean, String],
        data: Array,
        rowActiveIndex: {
            type: Number,
            default: 8
        }
    },

    data: function data() {
        return {
            // isReady: false
        };
    },
    render: function render(h) {
        var _this = this;

        return h(
            "table",
            { "class": "t-table_body", attrs: { cellpadding: "0", cellspacing: "0", border: "0", width: this.store.realColumnWidth }
            },
            [h("colgroup", [this._l(this.store.columns, function (row, index) {
                return h("col", {
                    attrs: { width: row.width }
                });
            })]), h("tbody", [this._l(this.data, function (row, index) {
                var tds = void 0;
                if (_this.fixed === true || _this.fixed === 'left') {
                    tds = _this.store.columns.map(function (col, colIndex) {
                        if (!col.fixed || col.fixedSide !== 'left') {
                            return h(
                                "td",
                                { "class": "is-hidden" },
                                [col.renderCell(index, row, col.prop)]
                            );
                        } else {
                            return h("td", [col.renderCell(index, row, col.prop)]);
                        }
                    });
                } else if (_this.fixed === 'right') {
                    tds = _this.store.columns.map(function (col, colIndex) {
                        if (!col.fixed || col.fixedSide !== 'right') {
                            return h(
                                "td",
                                { "class": "is-hidden" },
                                [col.renderCell(index, row, col.prop)]
                            );
                        } else {
                            return h("td", [col.renderCell(index, row, col.prop)]);
                        }
                    });
                } else {
                    tds = _this.store.columns.map(function (col, colIndex) {
                        if (col.fixed) {
                            return h(
                                "td",
                                { "class": "is-hidden" },
                                [col.renderCell(index, row, col.prop)]
                            );
                        } else {
                            return h(
                                "td",
                                { "class": { active: _this.store.sortKey === col.prop } },
                                [col.renderCell(index, row, col.prop)]
                            );
                        }
                    });
                }
                var tr = h(
                    "tr",
                    { "class": { 'active': _this.rowActiveIndex > index } },
                    [tds]
                );

                return tr;
            })])]
        );
    },


    computed: {
        normalColumns: function normalColumns() {},
        leftFixedCount: function leftFixedCount() {
            return this.store.leftFixedColumns.length;
        },
        rightFixedCount: function rightFixedCount() {
            return this.store.rightFixedColumns.length;
        }
    },

    methods: {}
};

/***/ }),

/***/ "./src/table-column.js":
/*!*****************************!*\
  !*** ./src/table-column.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(/*! ./store */ "./src/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableColumnIdSeed = 1;

function parseProp(target) {
    var config = {
        fixed: false,
        fixedSide: '',
        width: 50,
        minxWidth: 50,
        sortable: '',
        prop: '',
        value: undefined,
        hidden: false,
        label: '',
        textAlign: 'center'
    };

    if (target.fixed) {
        config.fixed = true;
        if (typeof target.fixed === 'string' && ['left', 'right'].indexOf(target.fixed) !== -1) {
            config.fixedSide = target.fixed.toString();
        } else {
            config.fixedSide = 'left';
        }
    }

    if (target.width) {
        config.width = parseInt(target.width);
    }

    if (target.minWidth) {
        config.minWidth = parseInt(target.minWidth);
    }

    if (target.sortable) {
        if (typeof target.fixed === 'string' && ['asc', 'desc'].indexOf(target.fixed) !== -1) {
            config.sortable = target.sortable.toString();
        } else {
            config.sortable = 'asc';
        }
    }

    if (target.textAlign) {
        config.textAlign = target.textAlign;
    }

    config.prop = target.prop;
    config.label = target.label;

    return config;
}

exports.default = {
    name: 'TTableColumn',
    props: {
        fixed: [Boolean, String],
        width: Number,
        minWidth: Number,
        sortable: [Boolean, String],
        prop: String,
        label: String,
        textAlign: String
    },
    data: function data() {
        return {
            columnId: '',
            columnConfig: {},
            isSubColumn: false
        };
    },

    computed: {
        columnOrTableParent: function columnOrTableParent() {
            // 
            var parent = this.$parent;
            while (parent && !parent.tableId && !parent.columnId) {
                parent = parent.$parent;
            }
            return parent;
        },
        owner: function owner() {
            var parent = this.$parent;
            while (parent && !parent.tableId) {
                parent = parent.$parent;
            }
            return parent;
        }
    },
    created: function created() {
        var _this = this;

        // console.log('column created')
        this.$options.render = function (h) {
            return h('div', _this.$slots.default);
        };

        this.columnId = this.$parent.tableId + '_column_' + tableColumnIdSeed++;
        this.columnConfig = parseProp(this);
    },
    mounted: function mounted() {
        var h = this.$createElement;

        // console.log('column mounted')
        this.isSubColumn = this.owner !== this.columnOrTableParent;
        var index = this.getColIndex(this.columnOrTableParent, this.$el);

        var renderCell = function renderCell(i, data, prop) {
            return h(
                'div',
                { 'class': 'cell' },
                [data[prop]]
            );
        };

        if (this.$scopedSlots.default) {
            var _self = this;
            renderCell = function renderCell(i, data, prop) {
                return h(
                    'div',
                    { 'class': 'cell' },
                    [_self.$scopedSlots.default({ row: data, index: i })]
                );
            };
        }
        this.columnConfig.renderCell = renderCell;

        this.owner.store.insertColumn(this.columnConfig, index, this.$parent);

        // console.log(this.$slots, this.$scopedSlots)
    },

    methods: {
        getColIndex: function getColIndex() {
            var index = -1;

            if (!this.isSubColumn) {
                index = [].indexOf.call(this.columnOrTableParent.$refs.hiddenColumns.children, this.$el);
            } else {
                index = [].indexOf.call(this.owner.$el.children, this.$el);
            }
            return index;
        }
    }
};

/***/ }),

/***/ "./src/table-header.js":
/*!*****************************!*\
  !*** ./src/table-header.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        store: {
            required: true
        },
        fixed: [Boolean, String],
        height: {
            type: Number,
            default: 30
        }
    },

    data: function data() {
        return {
            sortType: 0 // 0 - none, 1 - asc, 2 - desc
        };
    },


    methods: {
        sortData: function sortData(key) {
            return function (e) {
                if (this.store.sortKey !== key) {
                    this.sortType = 1;
                    this.store.sortKey = key;
                } else {
                    this.sortType += 1;
                    this.sortType %= 3;
                }

                if (this.sortType === 0) {
                    this.store.sortKey = '';
                }

                this.$emit('sortData', this.store.sortKey, this.sortType);
            };
        }
    },

    render: function render(h) {
        var _this = this;

        return h(
            'table',
            { 'class': 't-table-header_body', attrs: { cellpadding: '0', cellspacing: '0', border: '0', width: this.store.realColumnWidth }
            },
            [h('colgroup', [this._l(this.store.columns, function (row, index) {
                return h('col', {
                    attrs: { width: row.width }
                });
            })]), h('thead', [h(
                'tr',
                { style: { height: this.height + 'px' } },
                [this._l(this.store.columns, function (row, index) {
                    var th = void 0;

                    if (row.sortable) {
                        th = h(
                            'th',
                            {
                                on: {
                                    'click': _this.sortData(row.prop).bind(_this)
                                },

                                style: {
                                    'text-align': row.textAlign
                                },
                                'class': {
                                    'active': _this.store.sortKey === row.prop,
                                    'sortable': true,
                                    'asc': _this.sortType === 1 && _this.store.sortKey === row.prop,
                                    'desc': _this.sortType === 2 && _this.store.sortKey === row.prop
                                } },
                            [row.label, h(
                                'span',
                                {
                                    'class': 't-table-sort'
                                },
                                [h('i', { 'class': 'sort-icon asc' }), h('i', { 'class': 'sort-icon desc' })]
                            )]
                        );
                    } else {
                        th = h(
                            'th',
                            {
                                style: {
                                    'text-align': row.textAlign
                                }
                            },
                            [row.label]
                        );
                    }

                    return th;
                })]
            )])]
        );
    }
};

/***/ }),

/***/ "./src/table.vue":
/*!***********************!*\
  !*** ./src/table.vue ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=3a003e76& */ "./src/table.vue?vue&type=template&id=3a003e76&");
/* harmony import */ var _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js& */ "./src/table.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.vue?vue&type=style&index=0&lang=less& */ "./src/table.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/table.vue?vue&type=script&lang=js&":
/*!************************************************!*\
  !*** ./src/table.vue?vue&type=script&lang=js& ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/table.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************!*\
  !*** ./src/table.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/less-loader/dist/cjs.js??ref--4-2!../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_4_2_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/table.vue?vue&type=template&id=3a003e76&":
/*!******************************************************!*\
  !*** ./src/table.vue?vue&type=template&id=3a003e76& ***!
  \******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=3a003e76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/table.vue?vue&type=template&id=3a003e76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_3a003e76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/tween.js":
/*!**********************!*\
  !*** ./src/tween.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(window, function (root) {

    var requestAnimationFrame = root.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
        return setTimeout(fn, 17);
    };

    var cancelRequestAnimationFrame = root.cancelAnimationFrame || window.webkitCancelAnimationFrame || function (id) {
        return clearTimeout(id);
    };

    /**
     * t: 当前时间
     * b: 初始值
     * c: 变化量
     * d: 持续时间
     */
    var TWEEN = {
        private: {
            id: -1
        },

        Quad: {
            easeOut: function easeOut(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            }
        },

        animate: function animate(easing, from, to, duration, tick, callback) {
            var _this = this;

            var fn = this.Quad[easing];

            if (!fn) {
                callback(new Error('no easing function'));
            } else {
                var start = 0;

                var step = function step() {
                    start++;
                    var val = fn(start, from, to - from, duration);

                    // console.log(start, val)

                    _this.cancel(); // 删除上一次的动画
                    if (val <= to || start > tick) {
                        // cancelAnimationFrame(TWEEN.private.id);
                        callback(null, val, 'end');
                    } else {
                        callback(null, val);
                        _this.private.id = requestAnimationFrame(step);
                    }
                };

                step();
            }
        },

        cancel: function cancel() {
            cancelRequestAnimationFrame(this.private.id);
        }
    };

    return TWEEN;
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
function addEventListener(target, eventName, fn) {
    target.addEventListener(eventName, fn, false);
}

function removeEventListener(target, eventName, fn) {
    target.removeEventListener(eventName, fn, false);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9iN2FjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9hOWNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT8xYTZhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2M2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT83YWEyIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsInN0YXJ0UG9pbnQiLCJ4IiwieSIsImVuZFBvaW50Iiwic3RhcnRUaW1lc3RhbXAiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiaXNNb3ZlZCIsInoiLCJ0YXJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwiU3RvcmUiLCJjb2x1bW5zIiwibGVmdEZpeGVkQ29sdW1ucyIsInJpZ2h0Rml4ZWRDb2x1bW5zIiwiaGlkZGVuQ29sdW1ucyIsImJvZHlXaWR0aCIsInJlYWxDb2x1bW5XaWR0aCIsImxlZnRGaXhDb2x1bW5XaWR0aCIsInJpZ2h0Rml4Q29sdW1uV2lkdGgiLCJzb3J0S2V5IiwiaG9yaXpvbnRlbFNjcm9sbFR5cGUiLCJ2ZXJ0aWNhbFNjcm9sbFR5cGUiLCJjb2x1bW4iLCJpbmRleCIsInBhcmVudCIsInB1c2giLCJ1cGRhdGVDb2x1bW5zIiwidXBkYXRlQ29sdW1uV2lkdGgiLCJzbGljZSIsImZpbHRlciIsIml0ZW0iLCJmaXhlZCIsImZpeGVkU2lkZSIsImhpZGRlbiIsIm1hcCIsIndpZHRoIiwibWF4U2Nyb2xsTGVmdCIsImN1clNjcm9sbExlZnQiLCJwcm9wcyIsInN0b3JlIiwicmVxdWlyZWQiLCJCb29sZWFuIiwiU3RyaW5nIiwiZGF0YSIsIkFycmF5Iiwicm93QWN0aXZlSW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsInJlbmRlciIsImgiLCJfbCIsInJvdyIsInRkcyIsImNvbCIsImNvbEluZGV4IiwicmVuZGVyQ2VsbCIsInByb3AiLCJhY3RpdmUiLCJ0ciIsImNvbXB1dGVkIiwibm9ybWFsQ29sdW1ucyIsImxlZnRGaXhlZENvdW50IiwibGVuZ3RoIiwicmlnaHRGaXhlZENvdW50IiwibWV0aG9kcyIsInRhYmxlQ29sdW1uSWRTZWVkIiwicGFyc2VQcm9wIiwiY29uZmlnIiwibWlueFdpZHRoIiwic29ydGFibGUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImxhYmVsIiwidGV4dEFsaWduIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwicGFyc2VJbnQiLCJtaW5XaWR0aCIsIm5hbWUiLCJjb2x1bW5JZCIsImNvbHVtbkNvbmZpZyIsImlzU3ViQ29sdW1uIiwiY29sdW1uT3JUYWJsZVBhcmVudCIsIiRwYXJlbnQiLCJ0YWJsZUlkIiwib3duZXIiLCJjcmVhdGVkIiwiJG9wdGlvbnMiLCIkc2xvdHMiLCJtb3VudGVkIiwiZ2V0Q29sSW5kZXgiLCIkZWwiLCJpIiwiJHNjb3BlZFNsb3RzIiwiX3NlbGYiLCJpbnNlcnRDb2x1bW4iLCJjYWxsIiwiJHJlZnMiLCJjaGlsZHJlbiIsImhlaWdodCIsInNvcnRUeXBlIiwic29ydERhdGEiLCJrZXkiLCJlIiwiJGVtaXQiLCJ0aCIsImJpbmQiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZuIiwic2V0VGltZW91dCIsImNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsIlRXRUVOIiwicHJpdmF0ZSIsIlF1YWQiLCJlYXNlT3V0IiwidCIsImIiLCJjIiwiZCIsImFuaW1hdGUiLCJlYXNpbmciLCJmcm9tIiwidG8iLCJkdXJhdGlvbiIsInRpY2siLCJjYWxsYmFjayIsIkVycm9yIiwic3RhcnQiLCJzdGVwIiwidmFsIiwiY2FuY2VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudE5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUzs7QUFFNUM7QUFDQTtBQUNBLGtCQUFrQixzREFBSyxPQUFPLHNEQUFLO0FBQ25DLGtCQUFrQix3REFBVyxPQUFPLHdEQUFXO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLElBQUksNkRBQUs7QUFDVCxJQUFJLHVFQUFXO0FBQ2YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0VBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQSxpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7a0JBRUE7QUFDQSxrQkFEQTs7QUFHQTtBQUNBLHNDQURBO0FBRUE7QUFGQSxLQUhBOztBQVFBO0FBQ0EsaUNBREE7QUFFQSxtQkFGQTtBQUdBO0FBQ0Esd0JBREE7QUFFQTtBQUZBLFNBSEE7QUFPQTtBQUNBLHdCQURBO0FBRUE7QUFGQSxTQVBBO0FBV0E7QUFDQSwwQkFEQTtBQUVBO0FBRkEsU0FYQTtBQWVBO0FBQ0EseUJBREE7QUFFQTtBQUZBLFNBZkE7QUFtQkE7QUFDQSx3QkFEQTtBQUVBO0FBRkE7QUFuQkEsS0FSQTs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FYQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQW5CQTs7QUFxQkEsbUJBckJBLHlCQXFCQTtBQUNBO0FBQ0EsU0F2QkE7QUF5QkEsb0JBekJBLDBCQXlCQTtBQUNBO0FBQ0EsU0EzQkE7QUE2QkEsbUJBN0JBLHlCQTZCQTtBQUNBO0FBQ0EsU0EvQkE7QUFpQ0EsNEJBakNBLGtDQWlDQTtBQUNBO0FBQ0EsU0FuQ0E7QUFxQ0EsNkJBckNBLG1DQXFDQTtBQUNBO0FBQ0EsU0F2Q0E7QUF5Q0EsMEJBekNBLGdDQXlDQTtBQUNBO0FBQ0EsU0EzQ0E7QUE2Q0EsaUJBN0NBLHVCQTZDQTtBQUNBO0FBQ0EsU0EvQ0E7QUFpREEscUJBakRBLDJCQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQXBEQSxLQWpDQTs7QUF3RkEsUUF4RkEsa0JBd0ZBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLHdDQUZBO0FBR0EsaUNBSEE7QUFJQSxrQ0FKQTtBQUtBO0FBTEE7QUFPQSxLQWhHQTs7O0FBa0dBO0FBQ0Esa0NBREEsbUNBQ0EsTUFEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxLQWxHQTs7QUF3R0EsV0F4R0EscUJBd0dBO0FBQ0E7QUFDQSxLQTFHQTtBQTRHQSxXQTVHQSxxQkE0R0E7QUFDQTtBQUNBLEtBOUdBO0FBZ0hBLGFBaEhBLHVCQWdIQTtBQUNBO0FBQ0EsS0FsSEE7OztBQW9IQTtBQUNBLGtCQURBLHNCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBREEsRUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBLFNBVkE7QUFXQSxpQkFYQSxxQkFXQSxLQVhBLEVBV0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBREEsRUFDQTtBQURBO0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBaENBO0FBaUNBLGdCQWpDQSxvQkFpQ0EsS0FqQ0EsRUFpQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQ0EsS0FEQSxHQUVBLFFBRkE7QUFHQSx5REFDQSxPQURBLEdBRUEsTUFGQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUNBLG9CQURBLEdBRUEsb0JBRkE7QUFHQSxxQkFKQSxNQUlBO0FBQ0Esa0RBQ0EsbUJBREEsR0FFQSxtQkFGQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFIQSxNQUdBO0FBQ0E7QUFDQSxxQkFGQSxNQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUE3Q0E7QUE4Q0EsU0F2SUE7QUF5SUEsaUJBeklBLHFCQXlJQSxNQXpJQSxFQXlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBN0lBO0FBK0lBLGdCQS9JQSxvQkErSUEsR0EvSUEsRUErSUEsUUEvSUEsRUErSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBLENBRUE7QUFDQSxhQVJBO0FBU0EsU0F6SkE7QUEySkEsaUJBM0pBLHFCQTJKQSxVQTNKQSxFQTJKQSxTQTNKQSxFQTJKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpLQTtBQXBIQSxDOzs7Ozs7Ozs7OztBQy9GQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMsaUJBQWlCLHVCQUF1QixxQkFBcUIsR0FBRyxjQUFjLHVCQUF1QixHQUFHLDhEQUE4RCxxQkFBcUIsdUJBQXVCLFdBQVcsbUJBQW1CLEdBQUcsK0JBQStCLFlBQVksR0FBRyw4RkFBOEYsK0JBQStCLEdBQUcsZ0NBQWdDLGFBQWEsR0FBRyx3Q0FBd0Msd0JBQXdCLHFCQUFxQixxQkFBcUIsbUJBQW1CLEdBQUcsOENBQThDLHFCQUFxQixHQUFHLDREQUE0RCx3QkFBd0IsR0FBRyxnRkFBZ0Ysd0JBQXdCLEdBQUcsa0VBQWtFLHdCQUF3QixHQUFHLDJGQUEyRixxQ0FBcUMsR0FBRyw0REFBNEQsbUJBQW1CLHdCQUF3QixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLFNBQVMscUJBQXFCLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsNEJBQTRCLHVCQUF1QixZQUFZLGFBQWEsV0FBVyxjQUFjLGlCQUFpQixhQUFhLGNBQWMsR0FBRyxnQ0FBZ0MsdUNBQXVDLGtDQUFrQyx1Q0FBdUMsd0NBQXdDLEdBQUcsaUNBQWlDLHNDQUFzQywrQkFBK0IsdUNBQXVDLHdDQUF3QyxHQUFHLGdDQUFnQyxxQ0FBcUMsR0FBRyxrQ0FBa0Msa0NBQWtDLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0FDRjNtRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywrQ0FBK0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBcUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb0JBQW9CLDZDQUE2QztBQUNqRSxpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUZBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHllQUEwUTtBQUNoUyw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLHVIQUEwRDtBQUM1RSwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUEsZUFBZSw2REFBWTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFZO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFCTUEsTTtBQUNGLHNCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsVUFBTCxHQUFrQjtBQUNkQyxlQUFHLENBRFcsRUFDUkMsR0FBRztBQURLLFNBQWxCO0FBR0EsYUFBS0MsUUFBTCxHQUFnQjtBQUNaRixlQUFHLENBRFMsRUFDTkMsR0FBRztBQURHLFNBQWhCO0FBR0EsYUFBS0UsY0FBTCxHQUFzQixDQUFDLENBQXZCO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNIOzs7OzRDQUVzQztBQUFBLGdCQUFyQk4sQ0FBcUIsdUVBQWpCLENBQWlCO0FBQUEsZ0JBQWRDLENBQWMsdUVBQVYsQ0FBVTtBQUFBLGdCQUFQTSxDQUFPLHVFQUFILENBQUc7O0FBQ25DLG9DQUFzQlAsQ0FBdEIsWUFBOEJDLENBQTlCLFlBQXNDTSxDQUF0QztBQUNIOzs7c0NBRWFDLE0sRUFBUTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQUtKLFVBQUwsR0FBa0JJLE9BQU9KLFVBQXpCO0FBQ0EsaUJBQUtDLFNBQUwsR0FBaUJHLE9BQU9ILFNBQXhCO0FBQ0g7Ozt1Q0FFYyxDQUVkOzs7Ozs7QUFLTEksT0FBT0MsT0FBUCxHQUFpQlosTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkNNYSxLO0FBQ0YscUJBQWM7QUFBQTs7QUFDVixhQUFLQyxPQUFMLEdBQWUsRUFBZixFQUNBLEtBQUtDLGdCQUFMLEdBQXdCLEVBRHhCO0FBRUEsYUFBS0MsaUJBQUwsR0FBeUIsRUFBekI7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGFBQUtDLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxhQUFLQyxrQkFBTCxHQUEwQixDQUExQjtBQUNBLGFBQUtDLG1CQUFMLEdBQTJCLENBQTNCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxhQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLGFBQUtDLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0g7Ozs7cUNBRVlDLE0sRUFBUUMsSyxFQUFPQyxNLEVBQVE7QUFDaEM7QUFDQSxpQkFBS2IsT0FBTCxDQUFhYyxJQUFiLENBQWtCSCxNQUFsQjtBQUNBLGlCQUFLSSxhQUFMO0FBQ0EsaUJBQUtDLGlCQUFMO0FBQ0g7Ozt3Q0FFZTtBQUNaLGdCQUFJaEIsVUFBVSxLQUFLQSxPQUFMLENBQWFpQixLQUFiLEVBQWQ7QUFDQSxpQkFBS2hCLGdCQUFMLEdBQXdCRCxRQUFRa0IsTUFBUixDQUFlO0FBQUEsdUJBQVEsQ0FBQyxDQUFDQyxLQUFLQyxLQUFQLElBQWdCRCxLQUFLRSxTQUFMLEtBQW1CLE1BQTNDO0FBQUEsYUFBZixDQUF4QjtBQUNBLGlCQUFLbkIsaUJBQUwsR0FBeUJGLFFBQVFrQixNQUFSLENBQWU7QUFBQSx1QkFBUSxDQUFDLENBQUNDLEtBQUtDLEtBQVAsSUFBZ0JELEtBQUtFLFNBQUwsS0FBbUIsT0FBM0M7QUFBQSxhQUFmLENBQXpCO0FBQ0EsaUJBQUtsQixhQUFMLEdBQXFCSCxRQUFRa0IsTUFBUixDQUFlO0FBQUEsdUJBQVEsQ0FBQyxDQUFDQyxLQUFLRyxNQUFmO0FBQUEsYUFBZixDQUFyQjtBQUNIOzs7NENBRW1CO0FBQ2hCLGdCQUFJakIsa0JBQWtCLENBQXRCO0FBQ0EsZ0JBQUlDLHFCQUFxQixDQUF6QjtBQUNBLGdCQUFJQyxzQkFBc0IsQ0FBMUI7QUFDQSxpQkFBS1AsT0FBTCxDQUFhdUIsR0FBYixDQUFpQixnQkFBUTtBQUNyQmxCLG1DQUFtQmMsS0FBS0ssS0FBeEI7QUFDSCxhQUZEO0FBR0EsaUJBQUt2QixnQkFBTCxDQUFzQnNCLEdBQXRCLENBQTBCLGdCQUFRO0FBQzlCakIsc0NBQXNCYSxLQUFLSyxLQUEzQjtBQUNILGFBRkQ7QUFHQSxpQkFBS3RCLGlCQUFMLENBQXVCcUIsR0FBdkIsQ0FBMkIsZ0JBQVE7QUFDL0JoQix1Q0FBdUJZLEtBQUtLLEtBQTVCO0FBQ0gsYUFGRDtBQUdBLGlCQUFLbkIsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSxpQkFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUNBLGlCQUFLQyxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0g7Ozs2Q0FFb0JrQixhLEVBQWVDLGEsRUFBZTtBQUMvQyxnQkFBSUEsaUJBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHFCQUFLakIsb0JBQUwsR0FBNEIsZ0JBQTVCO0FBQ0gsYUFGRCxNQUVPLElBQUlpQixnQkFBZ0JELGFBQXBCLEVBQW1DO0FBQ3RDLHFCQUFLaEIsb0JBQUwsR0FBNEIsa0JBQTVCO0FBQ0gsYUFGTSxNQUVBO0FBQ0gscUJBQUtBLG9CQUFMLEdBQTRCLGlCQUE1QjtBQUNIO0FBQ0o7Ozs7OztBQUdMWixPQUFPQyxPQUFQLEdBQWlCQyxLQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkMxRGU7QUFDWDRCLFdBQU87QUFDSEMsZUFBTztBQUNIQyxzQkFBVTtBQURQLFNBREo7QUFJSFQsZUFBTyxDQUFDVSxPQUFELEVBQVVDLE1BQVYsQ0FKSjtBQUtIQyxjQUFNQyxLQUxIO0FBTUhDLHdCQUFnQjtBQUNaQyxrQkFBTUMsTUFETTtBQUVaQyxxQkFBUztBQUZHO0FBTmIsS0FESTs7QUFhWEwsUUFiVyxrQkFhSjtBQUNILGVBQU87QUFDSDtBQURHLFNBQVA7QUFHSCxLQWpCVTtBQW1CWE0sVUFuQlcsa0JBbUJKQyxDQW5CSSxFQW1CRDtBQUFBOztBQUNOLGVBQ0k7QUFBQTtBQUFBLGNBQU8sU0FBTSxjQUFiLFdBQTRCLGFBQVksR0FBeEMsRUFBNEMsYUFBWSxHQUF4RCxFQUE0RCxRQUFPLEdBQW5FLEVBQXVFLE9BQU8sS0FBS1gsS0FBTCxDQUFXdkIsZUFBekY7QUFBQTtBQUFBLGFBQ0ksZUFDSyxLQUFLbUMsRUFBTCxDQUFRLEtBQUtaLEtBQUwsQ0FBVzVCLE9BQW5CLEVBQTRCLFVBQUN5QyxHQUFELEVBQU03QixLQUFOO0FBQUEsdUJBQWdCO0FBQUEsNkJBQUssT0FBTzZCLElBQUlqQixLQUFoQjtBQUFBLGtCQUFoQjtBQUFBLGFBQTVCLENBREwsRUFESixFQUlJLFlBRVEsS0FBS2dCLEVBQUwsQ0FBUSxLQUFLUixJQUFiLEVBQW1CLFVBQUNTLEdBQUQsRUFBTTdCLEtBQU4sRUFBZ0I7QUFDL0Isb0JBQUk4QixZQUFKO0FBQ0Esb0JBQUksTUFBS3RCLEtBQUwsS0FBZSxJQUFmLElBQXVCLE1BQUtBLEtBQUwsS0FBZSxNQUExQyxFQUFrRDtBQUM5Q3NCLDBCQUFNLE1BQUtkLEtBQUwsQ0FBVzVCLE9BQVgsQ0FBbUJ1QixHQUFuQixDQUF1QixVQUFDb0IsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzVDLDRCQUFJLENBQUNELElBQUl2QixLQUFMLElBQWN1QixJQUFJdEIsU0FBSixLQUFrQixNQUFwQyxFQUE0QztBQUN4QyxtQ0FBTztBQUFBO0FBQUEsa0NBQUksU0FBTSxXQUFWO0FBQUEsaUNBQXVCc0IsSUFBSUUsVUFBSixDQUFlakMsS0FBZixFQUFzQjZCLEdBQXRCLEVBQTJCRSxJQUFJRyxJQUEvQixDQUF2QjtBQUFBLDZCQUFQO0FBQ0gseUJBRkQsTUFFTztBQUNILG1DQUFPLFNBQUtILElBQUlFLFVBQUosQ0FBZWpDLEtBQWYsRUFBc0I2QixHQUF0QixFQUEyQkUsSUFBSUcsSUFBL0IsQ0FBTCxFQUFQO0FBQ0g7QUFDSixxQkFOSyxDQUFOO0FBT0gsaUJBUkQsTUFRTyxJQUFJLE1BQUsxQixLQUFMLEtBQWUsT0FBbkIsRUFBNEI7QUFDL0JzQiwwQkFBTSxNQUFLZCxLQUFMLENBQVc1QixPQUFYLENBQW1CdUIsR0FBbkIsQ0FBdUIsVUFBQ29CLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtBQUM1Qyw0QkFBSSxDQUFDRCxJQUFJdkIsS0FBTCxJQUFjdUIsSUFBSXRCLFNBQUosS0FBa0IsT0FBcEMsRUFBNkM7QUFDekMsbUNBQU87QUFBQTtBQUFBLGtDQUFJLFNBQU0sV0FBVjtBQUFBLGlDQUF1QnNCLElBQUlFLFVBQUosQ0FBZWpDLEtBQWYsRUFBc0I2QixHQUF0QixFQUEyQkUsSUFBSUcsSUFBL0IsQ0FBdkI7QUFBQSw2QkFBUDtBQUNILHlCQUZELE1BRU87QUFDSCxtQ0FBTyxTQUFLSCxJQUFJRSxVQUFKLENBQWVqQyxLQUFmLEVBQXNCNkIsR0FBdEIsRUFBMkJFLElBQUlHLElBQS9CLENBQUwsRUFBUDtBQUNIO0FBQ0oscUJBTkssQ0FBTjtBQU9ILGlCQVJNLE1BUUE7QUFDSEosMEJBQU0sTUFBS2QsS0FBTCxDQUFXNUIsT0FBWCxDQUFtQnVCLEdBQW5CLENBQXVCLFVBQUNvQixHQUFELEVBQU1DLFFBQU4sRUFBbUI7QUFDNUMsNEJBQUlELElBQUl2QixLQUFSLEVBQWU7QUFDWCxtQ0FBTztBQUFBO0FBQUEsa0NBQUksU0FBTSxXQUFWO0FBQUEsaUNBQXVCdUIsSUFBSUUsVUFBSixDQUFlakMsS0FBZixFQUFzQjZCLEdBQXRCLEVBQTJCRSxJQUFJRyxJQUEvQixDQUF2QjtBQUFBLDZCQUFQO0FBQ0gseUJBRkQsTUFFTztBQUNILG1DQUFPO0FBQUE7QUFBQSxrQ0FBSSxTQUFPLEVBQUVDLFFBQVEsTUFBS25CLEtBQUwsQ0FBV3BCLE9BQVgsS0FBdUJtQyxJQUFJRyxJQUFyQyxFQUFYO0FBQUEsaUNBQXlESCxJQUFJRSxVQUFKLENBQWVqQyxLQUFmLEVBQXNCNkIsR0FBdEIsRUFBMkJFLElBQUlHLElBQS9CLENBQXpEO0FBQUEsNkJBQVA7QUFDSDtBQUNKLHFCQU5LLENBQU47QUFPSDtBQUNELG9CQUFJRSxLQUNBO0FBQUE7QUFBQSxzQkFBSSxTQUFPLEVBQUUsVUFBVSxNQUFLZCxjQUFMLEdBQXNCdEIsS0FBbEMsRUFBWDtBQUFBLHFCQUNLOEIsR0FETDtBQUFBLGlCQURKOztBQU1BLHVCQUFPTSxFQUFQO0FBQ0gsYUFsQ0QsQ0FGUixFQUpKO0FBQUEsU0FESjtBQThDSCxLQWxFVTs7O0FBb0VYQyxjQUFVO0FBQ05DLHVCQUFlLHlCQUFZLENBRTFCLENBSEs7QUFJTkMsd0JBQWdCLDBCQUFXO0FBQ3ZCLG1CQUFPLEtBQUt2QixLQUFMLENBQVczQixnQkFBWCxDQUE0Qm1ELE1BQW5DO0FBQ0gsU0FOSztBQU9OQyx5QkFBaUIsMkJBQVc7QUFDeEIsbUJBQU8sS0FBS3pCLEtBQUwsQ0FBVzFCLGlCQUFYLENBQTZCa0QsTUFBcEM7QUFDSDtBQVRLLEtBcEVDOztBQWdGWEUsYUFBUztBQWhGRSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjs7Ozs7O0FBRUEsSUFBSUMsb0JBQW9CLENBQXhCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUI1RCxNQUFuQixFQUEyQjtBQUN2QixRQUFJNkQsU0FBUztBQUNUckMsZUFBTyxLQURFO0FBRVRDLG1CQUFXLEVBRkY7QUFHVEcsZUFBTyxFQUhFO0FBSVRrQyxtQkFBVyxFQUpGO0FBS1RDLGtCQUFVLEVBTEQ7QUFNVGIsY0FBTSxFQU5HO0FBT1RjLGVBQU9DLFNBUEU7QUFRVHZDLGdCQUFRLEtBUkM7QUFTVHdDLGVBQU8sRUFURTtBQVVUQyxtQkFBVztBQVZGLEtBQWI7O0FBYUEsUUFBSW5FLE9BQU93QixLQUFYLEVBQWtCO0FBQ2RxQyxlQUFPckMsS0FBUCxHQUFlLElBQWY7QUFDQSxZQUFJLE9BQU94QixPQUFPd0IsS0FBZCxLQUF3QixRQUF4QixJQUFvQyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCNEMsT0FBbEIsQ0FBMEJwRSxPQUFPd0IsS0FBakMsTUFBNEMsQ0FBQyxDQUFyRixFQUF3RjtBQUNwRnFDLG1CQUFPcEMsU0FBUCxHQUFtQnpCLE9BQU93QixLQUFQLENBQWE2QyxRQUFiLEVBQW5CO0FBQ0gsU0FGRCxNQUVPO0FBQ0hSLG1CQUFPcEMsU0FBUCxHQUFtQixNQUFuQjtBQUNIO0FBQ0o7O0FBRUQsUUFBSXpCLE9BQU80QixLQUFYLEVBQWtCO0FBQ2RpQyxlQUFPakMsS0FBUCxHQUFlMEMsU0FBU3RFLE9BQU80QixLQUFoQixDQUFmO0FBQ0g7O0FBRUQsUUFBSTVCLE9BQU91RSxRQUFYLEVBQXFCO0FBQ2pCVixlQUFPVSxRQUFQLEdBQWtCRCxTQUFTdEUsT0FBT3VFLFFBQWhCLENBQWxCO0FBQ0g7O0FBRUQsUUFBSXZFLE9BQU8rRCxRQUFYLEVBQXFCO0FBQ2pCLFlBQUksT0FBTy9ELE9BQU93QixLQUFkLEtBQXdCLFFBQXhCLElBQW9DLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0I0QyxPQUFoQixDQUF3QnBFLE9BQU93QixLQUEvQixNQUEwQyxDQUFDLENBQW5GLEVBQXNGO0FBQ2xGcUMsbUJBQU9FLFFBQVAsR0FBa0IvRCxPQUFPK0QsUUFBUCxDQUFnQk0sUUFBaEIsRUFBbEI7QUFDSCxTQUZELE1BRU87QUFDSFIsbUJBQU9FLFFBQVAsR0FBa0IsS0FBbEI7QUFDSDtBQUNKOztBQUVELFFBQUkvRCxPQUFPbUUsU0FBWCxFQUFzQjtBQUNsQk4sZUFBT00sU0FBUCxHQUFtQm5FLE9BQU9tRSxTQUExQjtBQUNIOztBQUVETixXQUFPWCxJQUFQLEdBQWNsRCxPQUFPa0QsSUFBckI7QUFDQVcsV0FBT0ssS0FBUCxHQUFlbEUsT0FBT2tFLEtBQXRCOztBQUVBLFdBQU9MLE1BQVA7QUFFSDs7a0JBRWM7QUFDWFcsVUFBTSxjQURLO0FBRVh6QyxXQUFPO0FBQ0hQLGVBQU8sQ0FBQ1UsT0FBRCxFQUFVQyxNQUFWLENBREo7QUFFSFAsZUFBT1ksTUFGSjtBQUdIK0Isa0JBQVUvQixNQUhQO0FBSUh1QixrQkFBVSxDQUFDN0IsT0FBRCxFQUFVQyxNQUFWLENBSlA7QUFLSGUsY0FBTWYsTUFMSDtBQU1IK0IsZUFBTy9CLE1BTko7QUFPSGdDLG1CQUFXaEM7QUFQUixLQUZJO0FBV1hDLFFBWFcsa0JBV0o7QUFDSCxlQUFPO0FBQ0hxQyxzQkFBVSxFQURQO0FBRUhDLDBCQUFjLEVBRlg7QUFHSEMseUJBQWE7QUFIVixTQUFQO0FBS0gsS0FqQlU7O0FBa0JYdEIsY0FBVTtBQUNOdUIsMkJBRE0saUNBQ2dCO0FBQ2xCO0FBQ0EsZ0JBQUkzRCxTQUFTLEtBQUs0RCxPQUFsQjtBQUNBLG1CQUFPNUQsVUFBVSxDQUFDQSxPQUFPNkQsT0FBbEIsSUFBNkIsQ0FBQzdELE9BQU93RCxRQUE1QyxFQUFzRDtBQUNsRHhELHlCQUFTQSxPQUFPNEQsT0FBaEI7QUFDSDtBQUNELG1CQUFPNUQsTUFBUDtBQUNILFNBUks7QUFTTjhELGFBVE0sbUJBU0U7QUFDSixnQkFBSTlELFNBQVMsS0FBSzRELE9BQWxCO0FBQ0EsbUJBQU81RCxVQUFVLENBQUNBLE9BQU82RCxPQUF6QixFQUFrQztBQUM5QjdELHlCQUFTQSxPQUFPNEQsT0FBaEI7QUFDSDtBQUNELG1CQUFPNUQsTUFBUDtBQUNIO0FBZkssS0FsQkM7QUFtQ1grRCxXQW5DVyxxQkFtQ0Q7QUFBQTs7QUFDTjtBQUNBLGFBQUtDLFFBQUwsQ0FBY3ZDLE1BQWQsR0FBdUI7QUFBQSxtQkFBS0MsRUFBRSxLQUFGLEVBQVMsTUFBS3VDLE1BQUwsQ0FBWXpDLE9BQXJCLENBQUw7QUFBQSxTQUF2Qjs7QUFFQSxhQUFLZ0MsUUFBTCxHQUFnQixLQUFLSSxPQUFMLENBQWFDLE9BQWIsR0FBdUIsVUFBdkIsR0FBb0NuQixtQkFBcEQ7QUFDQSxhQUFLZSxZQUFMLEdBQW9CZCxVQUFVLElBQVYsQ0FBcEI7QUFFSCxLQTFDVTtBQTJDWHVCLFdBM0NXLHFCQTJDRDtBQUFBOztBQUNOO0FBQ0EsYUFBS1IsV0FBTCxHQUFtQixLQUFLSSxLQUFMLEtBQWUsS0FBS0gsbUJBQXZDO0FBQ0EsWUFBSTVELFFBQVEsS0FBS29FLFdBQUwsQ0FBaUIsS0FBS1IsbUJBQXRCLEVBQTJDLEtBQUtTLEdBQWhELENBQVo7O0FBRUEsWUFBSXBDLGFBQWEsb0JBQVVxQyxDQUFWLEVBQWFsRCxJQUFiLEVBQW1CYyxJQUFuQixFQUF5QjtBQUN0QyxtQkFBTztBQUFBO0FBQUEsa0JBQUssU0FBTSxNQUFYO0FBQUEsaUJBQW1CZCxLQUFLYyxJQUFMLENBQW5CO0FBQUEsYUFBUDtBQUNILFNBRkQ7O0FBSUEsWUFBSSxLQUFLcUMsWUFBTCxDQUFrQjlDLE9BQXRCLEVBQStCO0FBQzNCLGdCQUFJK0MsUUFBUSxJQUFaO0FBQ0F2Qyx5QkFBYSxvQkFBVXFDLENBQVYsRUFBYWxELElBQWIsRUFBbUJjLElBQW5CLEVBQXlCO0FBQ2xDLHVCQUFPO0FBQUE7QUFBQSxzQkFBSyxTQUFNLE1BQVg7QUFBQSxxQkFBbUJzQyxNQUFNRCxZQUFOLENBQW1COUMsT0FBbkIsQ0FBMkIsRUFBQ0ksS0FBS1QsSUFBTixFQUFZcEIsT0FBT3NFLENBQW5CLEVBQTNCLENBQW5CO0FBQUEsaUJBQVA7QUFDSCxhQUZEO0FBR0g7QUFDRCxhQUFLWixZQUFMLENBQWtCekIsVUFBbEIsR0FBK0JBLFVBQS9COztBQUVBLGFBQUs4QixLQUFMLENBQVcvQyxLQUFYLENBQWlCeUQsWUFBakIsQ0FBOEIsS0FBS2YsWUFBbkMsRUFBaUQxRCxLQUFqRCxFQUF3RCxLQUFLNkQsT0FBN0Q7O0FBRUE7QUFDSCxLQS9EVTs7QUFnRVhuQixhQUFTO0FBQ0wwQixtQkFESyx5QkFDUztBQUNWLGdCQUFJcEUsUUFBUSxDQUFDLENBQWI7O0FBRUEsZ0JBQUksQ0FBQyxLQUFLMkQsV0FBVixFQUF1QjtBQUNuQjNELHdCQUFRLEdBQUdvRCxPQUFILENBQVdzQixJQUFYLENBQWdCLEtBQUtkLG1CQUFMLENBQXlCZSxLQUF6QixDQUErQnBGLGFBQS9CLENBQTZDcUYsUUFBN0QsRUFBdUUsS0FBS1AsR0FBNUUsQ0FBUjtBQUNILGFBRkQsTUFFTztBQUNIckUsd0JBQVEsR0FBR29ELE9BQUgsQ0FBV3NCLElBQVgsQ0FBZ0IsS0FBS1gsS0FBTCxDQUFXTSxHQUFYLENBQWVPLFFBQS9CLEVBQXlDLEtBQUtQLEdBQTlDLENBQVI7QUFDSDtBQUNELG1CQUFPckUsS0FBUDtBQUNIO0FBVkk7QUFoRUUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDdERBO0FBQ1hlLFdBQU87QUFDSEMsZUFBTztBQUNIQyxzQkFBVTtBQURQLFNBREo7QUFJSFQsZUFBTyxDQUFDVSxPQUFELEVBQVVDLE1BQVYsQ0FKSjtBQUtIMEQsZ0JBQVE7QUFDSnRELGtCQUFNQyxNQURGO0FBRUpDLHFCQUFTO0FBRkw7QUFMTCxLQURJOztBQVlYTCxRQVpXLGtCQVlKO0FBQ0gsZUFBTztBQUNIMEQsc0JBQVUsQ0FEUCxDQUNVO0FBRFYsU0FBUDtBQUdILEtBaEJVOzs7QUFrQlhwQyxhQUFTO0FBQ0xxQyxrQkFBVSxrQkFBU0MsR0FBVCxFQUFjO0FBQ3BCLG1CQUFPLFVBQVVDLENBQVYsRUFBYTtBQUNoQixvQkFBSSxLQUFLakUsS0FBTCxDQUFXcEIsT0FBWCxLQUF1Qm9GLEdBQTNCLEVBQWdDO0FBQzVCLHlCQUFLRixRQUFMLEdBQWdCLENBQWhCO0FBQ0EseUJBQUs5RCxLQUFMLENBQVdwQixPQUFYLEdBQXFCb0YsR0FBckI7QUFDSCxpQkFIRCxNQUdPO0FBQ0gseUJBQUtGLFFBQUwsSUFBaUIsQ0FBakI7QUFDQSx5QkFBS0EsUUFBTCxJQUFpQixDQUFqQjtBQUNIOztBQUVELG9CQUFJLEtBQUtBLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIseUJBQUs5RCxLQUFMLENBQVdwQixPQUFYLEdBQXFCLEVBQXJCO0FBQ0g7O0FBRUQscUJBQUtzRixLQUFMLENBQVcsVUFBWCxFQUF1QixLQUFLbEUsS0FBTCxDQUFXcEIsT0FBbEMsRUFBMkMsS0FBS2tGLFFBQWhEO0FBQ0gsYUFkRDtBQWVIO0FBakJJLEtBbEJFOztBQXNDWHBELFVBdENXLGtCQXNDSkMsQ0F0Q0ksRUFzQ0Q7QUFBQTs7QUFDTixlQUNJO0FBQUE7QUFBQSxjQUFPLFNBQU0scUJBQWIsV0FBbUMsYUFBWSxHQUEvQyxFQUFtRCxhQUFZLEdBQS9ELEVBQW1FLFFBQU8sR0FBMUUsRUFBOEUsT0FBTyxLQUFLWCxLQUFMLENBQVd2QixlQUFoRztBQUFBO0FBQUEsYUFDSSxlQUNLLEtBQUttQyxFQUFMLENBQVEsS0FBS1osS0FBTCxDQUFXNUIsT0FBbkIsRUFBNEIsVUFBQ3lDLEdBQUQsRUFBTTdCLEtBQU47QUFBQSx1QkFBZ0I7QUFBQSw2QkFBSyxPQUFPNkIsSUFBSWpCLEtBQWhCO0FBQUEsa0JBQWhCO0FBQUEsYUFBNUIsQ0FETCxFQURKLEVBSUksWUFDSTtBQUFBO0FBQUEsa0JBQUksT0FBTyxFQUFFaUUsUUFBUSxLQUFLQSxNQUFMLEdBQWMsSUFBeEIsRUFBWDtBQUFBLGlCQUVJLEtBQUtqRCxFQUFMLENBQVEsS0FBS1osS0FBTCxDQUFXNUIsT0FBbkIsRUFBNEIsVUFBQ3lDLEdBQUQsRUFBTTdCLEtBQU4sRUFBZ0I7QUFDeEMsd0JBQUltRixXQUFKOztBQUVBLHdCQUFJdEQsSUFBSWtCLFFBQVIsRUFBa0I7QUFDZG9DLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ2EsTUFBS0osUUFBTCxDQUFjbEQsSUFBSUssSUFBbEIsRUFBd0JrRCxJQUF4QixDQUE2QixLQUE3QjtBQURiOztBQUVJLHVDQUFPO0FBQ0gsa0RBQWN2RCxJQUFJc0I7QUFEZixpQ0FGWDtBQUtJLHlDQUFPO0FBQ0gsOENBQVUsTUFBS25DLEtBQUwsQ0FBV3BCLE9BQVgsS0FBdUJpQyxJQUFJSyxJQURsQztBQUVILGdEQUFZLElBRlQ7QUFHSCwyQ0FBTyxNQUFLNEMsUUFBTCxLQUFrQixDQUFsQixJQUF1QixNQUFLOUQsS0FBTCxDQUFXcEIsT0FBWCxLQUF1QmlDLElBQUlLLElBSHREO0FBSUgsNENBQVEsTUFBSzRDLFFBQUwsS0FBa0IsQ0FBbEIsSUFBdUIsTUFBSzlELEtBQUwsQ0FBV3BCLE9BQVgsS0FBdUJpQyxJQUFJSztBQUp2RCxpQ0FMWDtBQUFBLDZCQVdNTCxJQUFJcUIsS0FYVixFQVlJO0FBQUE7QUFBQTtBQUNJLDZDQUFNO0FBRFY7QUFBQSxpQ0FHSSxTQUFHLFNBQU0sZUFBVCxHQUhKLEVBSUksU0FBRyxTQUFNLGdCQUFULEdBSko7QUFBQSw2QkFaSjtBQUFBLHlCQURKO0FBcUJILHFCQXRCRCxNQXNCTztBQUNIaUMsNkJBQUs7QUFBQTtBQUFBO0FBQ0wsdUNBQU87QUFDSCxrREFBY3RELElBQUlzQjtBQURmO0FBREY7QUFBQSw2QkFJRnRCLElBQUlxQixLQUpGO0FBQUEseUJBQUw7QUFLSDs7QUFFRCwyQkFBT2lDLEVBQVA7QUFDSCxpQkFsQ0QsQ0FGSjtBQUFBLGFBREosRUFKSjtBQUFBLFNBREo7QUFnREg7QUF2RlUsQzs7Ozs7Ozs7Ozs7O0FDQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7QUFDYzs7O0FBR2xFO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUErSixDQUFnQix3T0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTDtBQUFBO0FBQUE7QUFBQTtBQUFxVSxDQUFnQixpWUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6VjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxDQUFDLFVBQVVFLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3ZCLFFBQUksSUFBSixFQUFnRDtBQUM1Q0MsMkNBQU8sWUFBWTtBQUNmLG1CQUFPRCxRQUFRRCxJQUFSLENBQVA7QUFDSCxTQUZEO0FBQUE7QUFHSCxLQUpELE1BSU8sRUFJTjtBQUNKLENBVkEsRUFVRUcsTUFWRixFQVVVLFVBQVVILElBQVYsRUFBZ0I7O0FBRXZCLFFBQUlJLHdCQUF3QkosS0FBS0kscUJBQUwsSUFDckJELE9BQU9FLDJCQURjLElBRXJCLFVBQVVDLEVBQVYsRUFBYztBQUNiLGVBQU9DLFdBQVdELEVBQVgsRUFBZSxFQUFmLENBQVA7QUFDSCxLQUpMOztBQU1BLFFBQUlFLDhCQUE4QlIsS0FBS1Msb0JBQUwsSUFDM0JOLE9BQU9PLDBCQURvQixJQUUzQixVQUFVQyxFQUFWLEVBQWM7QUFDYixlQUFPQyxhQUFhRCxFQUFiLENBQVA7QUFDSCxLQUpMOztBQU1BOzs7Ozs7QUFNQSxRQUFJRSxRQUFRO0FBQ1JDLGlCQUFTO0FBQ0xILGdCQUFJLENBQUM7QUFEQSxTQUREOztBQUtSSSxjQUFNO0FBQ0ZDLHFCQUFTLGlCQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUMzQix1QkFBTyxDQUFDRCxDQUFELElBQU1GLEtBQUtHLENBQVgsS0FBaUJILElBQUksQ0FBckIsSUFBMEJDLENBQWpDO0FBQ0g7QUFIQyxTQUxFOztBQVdSRyxpQkFBUyxpQkFBVUMsTUFBVixFQUFrQkMsSUFBbEIsRUFBd0JDLEVBQXhCLEVBQTRCQyxRQUE1QixFQUFzQ0MsSUFBdEMsRUFBNENDLFFBQTVDLEVBQXNEO0FBQUE7O0FBQzNELGdCQUFJckIsS0FBSyxLQUFLUyxJQUFMLENBQVVPLE1BQVYsQ0FBVDs7QUFFQSxnQkFBSSxDQUFDaEIsRUFBTCxFQUFTO0FBQ0xxQix5QkFBUyxJQUFJQyxLQUFKLENBQVUsb0JBQVYsQ0FBVDtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJQyxRQUFRLENBQVo7O0FBRUEsb0JBQUlDLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2JEO0FBQ0Esd0JBQUlFLE1BQU16QixHQUFHdUIsS0FBSCxFQUFVTixJQUFWLEVBQWdCQyxLQUFLRCxJQUFyQixFQUEyQkUsUUFBM0IsQ0FBVjs7QUFFQTs7QUFFQSwwQkFBS08sTUFBTCxHQU5hLENBTUU7QUFDZix3QkFBSUQsT0FBT1AsRUFBUCxJQUFhSyxRQUFRSCxJQUF6QixFQUErQjtBQUMzQjtBQUNBQyxpQ0FBUyxJQUFULEVBQWVJLEdBQWYsRUFBb0IsS0FBcEI7QUFDSCxxQkFIRCxNQUdPO0FBQ0hKLGlDQUFTLElBQVQsRUFBZUksR0FBZjtBQUNBLDhCQUFLakIsT0FBTCxDQUFhSCxFQUFiLEdBQWtCUCxzQkFBc0IwQixJQUF0QixDQUFsQjtBQUNIO0FBQ0osaUJBZEQ7O0FBZ0JBQTtBQUNIO0FBQ0osU0FyQ087O0FBdUNSRSxnQkFBUSxrQkFBWTtBQUNoQnhCLHdDQUE0QixLQUFLTSxPQUFMLENBQWFILEVBQXpDO0FBQ0g7QUF6Q08sS0FBWjs7QUE0Q0EsV0FBT0UsS0FBUDtBQUNILENBM0VBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDQWVvQixnQixHQUFBQSxnQjtRQUlBQyxtQixHQUFBQSxtQjtBQUpULFNBQVNELGdCQUFULENBQTJCdEksTUFBM0IsRUFBbUN3SSxTQUFuQyxFQUE4QzdCLEVBQTlDLEVBQWtEO0FBQ3JEM0csV0FBT3NJLGdCQUFQLENBQXdCRSxTQUF4QixFQUFtQzdCLEVBQW5DLEVBQXVDLEtBQXZDO0FBQ0g7O0FBRU0sU0FBUzRCLG1CQUFULENBQThCdkksTUFBOUIsRUFBc0N3SSxTQUF0QyxFQUFpRDdCLEVBQWpELEVBQXFEO0FBQ3hEM0csV0FBT3VJLG1CQUFQLENBQTJCQyxTQUEzQixFQUFzQzdCLEVBQXRDLEVBQTBDLEtBQTFDO0FBQ0gsQyIsImZpbGUiOiJ0YWJsZS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBUYWJsZSBmcm9tICcuL3NyYy90YWJsZS52dWUnXHJcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuL3NyYy90YWJsZS1jb2x1bW4nXHJcblxyXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFRhYmxlLm5hbWUpXHJcbiAgICBWdWUuY29tcG9uZW50KFRhYmxlLm5hbWUsIFRhYmxlKVxyXG4gICAgVnVlLmNvbXBvbmVudChUYWJsZUNvbHVtbi5uYW1lLCBUYWJsZUNvbHVtbilcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICAgIGluc3RhbGwod2luZG93LlZ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFRhYmxlLFxyXG4gICAgVGFibGVDb2x1bW5cclxufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInQtY29udGFpbmVyXCJcclxuICAgICAgICA6c3R5bGU9XCJzdHlsZVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImhpZGRlbi1jb2x1bW5cIlxyXG4gICAgICAgICAgICByZWY9XCJoaWRkZW5Db2x1bW5zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtaGVhZGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IHN0eWxlLndpZHRofVwiXHJcbiAgICAgICAgICAgIHJlZj1cInRUYWJsZUhlYWRlcldyYXBwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRhYmxlLWhlYWRlciA6c3RvcmU9XCJzdG9yZVwiIEBzb3J0RGF0YT1cInNvcnREYXRhXCIgOmhlaWdodD1cImhlYWRlckhlaWdodFwiPjwvdGFibGUtaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtaWY9XCJkYXRhLmxlbmd0aCA+IDBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtd3JhcHBlclwiXHJcbiAgICAgICAgICAgIHJlZj1cInRUYWJsZVdyYXBwZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBzdHlsZS53aWR0aCwgaGVpZ2h0OiBib2R5SGVpZ2h0IH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiByZWY9XCJ0VGFibGVCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtYm9keT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdi1pZj1cImlzTGVmdEZpeGVkICYmIGRhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZVwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInttYXhXaWR0aDogbGVmdEZpeENvbHVtbldpZHRoICsgJ3B4JywgaGVpZ2h0OiBzdHlsZS5oZWlnaHR9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidC10YWJsZS1maXhlZF9ib2R5XCIgcmVmPVwidFRhYmxlTGVmdEZpeGVkV3JhcHBlclwiIDpzdHlsZT1cInsgaGVpZ2h0OiBib2R5SGVpZ2h0IH1cIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtaWY9XCJpc1JpZ2h0Rml4ZWQgJiYgZGF0YS5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHRcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IHJpZ2h0Rml4Q29sdW1uV2lkdGggKyAncHgnfVwiXHJcbiAgICAgICAgICAgIHJlZj1cInRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICA6c3RvcmU9XCJzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGZpeGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHlcclxuICAgICAgICAgICAgICAgICAgICA6c3RvcmU9XCJzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiZW1wdHlcIiB2LWlmPVwiZGF0YS5sZW5ndGggPT09IDBcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5AaW1wb3J0IHVybCguL3N0eWxlL3N0eWxlLmxlc3MpO1xyXG48L3N0eWxlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vdGFibGUtYm9keSdcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vdGFibGUtaGVhZGVyJ1xyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscydcclxuY29uc3QgVFdFRU4gPSByZXF1aXJlKCcuL3R3ZWVuJylcclxuXHJcbmxldCB0YWJsZUlkU2VlZCA9IDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUVGFibGUnLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWJsZUJvZHksXHJcbiAgICAgICAgVGFibGVIZWFkZXJcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBib3JkZXI6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IEFycmF5LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3ZlQ2I6IHtcclxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5Nb3ZlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJIZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgciA9IHt9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgJiYgdHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgci5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoICYmIHR5cGVvZiB0aGlzLndpZHRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgci53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib2R5SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAnJ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgJiYgdHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gKCt0aGlzLmhlaWdodC5tYXRjaCgvKFxcZCspLylbMV0gLSB0aGlzLmhlYWRlckhlaWdodCkgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzTGVmdEZpeGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1JpZ2h0Rml4ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib2R5V3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxlZnRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmlnaHRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVSaWdodEZpeGVkV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlSGVhZGVyV3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlSGVhZGVyV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlQm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlQm9keVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heFNjcm9sbExlZnQoKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGggLSB0aGlzLmJvZHlXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgICAgIHJldHVybiByXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmxlSWQ6ICcnLFxyXG4gICAgICAgICAgICBzdG9yZTogbmV3IFN0b3JlKCksXHJcbiAgICAgICAgICAgIGxlZnRGaXhDb2x1bW5XaWR0aDogMCxcclxuICAgICAgICAgICAgcmlnaHRGaXhDb2x1bW5XaWR0aDogMCxcclxuICAgICAgICAgICAgbGF5b3V0OiBuZXcgTGF5b3V0KClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgJ3N0b3JlLmxlZnRGaXhDb2x1bW5XaWR0aCcobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBuZXdWYWxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUlkID0gYHQtdGFibGVfYCArIHRhYmxlSWRTZWVkKytcclxuICAgIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLmJvZHlXcmFwcGVyKVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmJvZHlXcmFwcGVyLCB0aGlzLnNjcm9sbEV2ZW50KVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRQb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIFRXRUVOLmNhbmNlbCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOmYu+atoum7mOiupOS6i+S7tuWPkeeUn1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5pc01vdmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5lbmRQb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB0aGlzLmxheW91dC5zdGFydFBvaW50XHJcblxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5sYXlvdXQuZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueVxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsTGVmdCA9IHRoaXMubGF5b3V0LmVuZFBvaW50LnggLSBzdGFydFBvaW50LnhcclxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gdGhpcy5sYXlvdXQuc2Nyb2xsVG9wIC0gc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmxheW91dC5zY3JvbGxMZWZ0IC0gc2Nyb2xsTGVmdFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVIb3Jpem9udGVsVHlwZSh0aGlzLm1heFNjcm9sbExlZnQsIHNjcm9sbExlZnQpXHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva5zY3JvbGxUb3DlkoxzY3JvbGxMZWZ0XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsKHNjcm9sbExlZnQsIHNjcm9sbFRvcClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5pc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5pc01vdmVkID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGVuZFBvaW50ID0gdGhpcy5sYXlvdXQuZW5kUG9pbnRcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB0aGlzLmxheW91dC5zdGFydFBvaW50XHJcbiAgICAgICAgICAgIGxldCBlbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMubGF5b3V0LnN0YXJ0VGltZXN0YW1wXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgX3NpZGUgPSBlbmRQb2ludC55IC0gc3RhcnRQb2ludC55ID4gMFxyXG4gICAgICAgICAgICAgICAgPyAndG9wJ1xyXG4gICAgICAgICAgICAgICAgOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICBsZXQgX3NpZGUyID0gZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCA+IDBcclxuICAgICAgICAgICAgICAgID8gJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgOiAnbGVmdCdcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRQb2ludCA9IHRoaXMuZW5kUG9pbnRcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuZW5kUG9pbnQgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnNldExheW91dERhdGEodGhpcy5ib2R5V3JhcHBlcilcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXhTY3JvbGxIZWlnaHQgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFibGVCb2R5KS5oZWlnaHQubWF0Y2goLyhcXGQrKS8pWzFdKSAtIHRoaXMuYm9keVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSG9yaXpvbnRlbFR5cGUodGhpcy5tYXhTY3JvbGxMZWZ0LCB0aGlzLmxheW91dC5zY3JvbGxMZWZ0KVxyXG5cclxuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcDtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbExlZnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuc2Nyb2xsVG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnNjcm9sbFRvcCA8IDAgJiYgdGhpcy5sYXlvdXQuc2Nyb2xsVG9wID49IG1heFNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gbWF4U2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5zY3JvbGxMZWZ0IDwgMCkgeyBcclxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSAwXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCA+IHRoaXMubWF4U2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMubWF4U2Nyb2xsTGVmdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0U3BlZWQ7XHJcbiAgICAgICAgICAgIGxldCB0d2VlblNpZGU7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRQb2ludC55IC0gc3RhcnRQb2ludC55KSA+IDMwICYmIGVuZFRpbWUgLSBzdGFydFRpbWUgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGluaXRTcGVlZCA9IE1hdGguYWJzKChlbmRQb2ludC55IC0gc3RhcnRQb2ludC55KSAvIChlbmRUaW1lIC0gc3RhcnRUaW1lKSAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICB0d2VlblNpZGUgPSBfc2lkZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpID4gMTAgJiYgZW5kVGltZSAtIHN0YXJ0VGltZSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdFNwZWVkID0gTWF0aC5hYnMoKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpICogMTAwMClcclxuICAgICAgICAgICAgICAgIHR3ZWVuU2lkZSA9IF9zaWRlMlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRTcGVlZCA9IE1hdGgubWluKGluaXRTcGVlZCwgMTUwMClcclxuXHJcbiAgICAgICAgICAgIFRXRUVOLmFuaW1hdGUoJ2Vhc2VPdXQnLCBpbml0U3BlZWQsIDAsIDEwMCwgMzUsIChlcnIsIHYsIHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsTGVmdCA9IHRoaXMubGF5b3V0LnNjcm9sbExlZnRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0d2VlblNpZGUgPT09ICdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsTGVmdCAtIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzY3JvbGxMZWZ0ICsgdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHR3ZWVuU2lkZSA9PT0gJ3RvcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsVG9wIC0gdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCArIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUhvcml6b250ZWxUeXBlKHRoaXMubWF4U2Nyb2xsTGVmdCwgYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKChjID49IHdyYXBwZXJIZWlnaHQgfHwgYyA8PSAwKSwgYywgd3JhcHBlckhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSAmJiAoYyA8IDAgfHwgYyA+IHRoaXMubWF4U2Nyb2xsTGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0d2VlblNpZGUgPT09ICd0b3AnIHx8IHR3ZWVuU2lkZSA9PT0gJ2JvdHRvbScpICYmIChjID49IG1heFNjcm9sbEhlaWdodCB8fCBjIDw9IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVOLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0JykgJiYgKGMgPCAwIHx8IGMgPiB0aGlzLm1heFNjcm9sbExlZnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXRUVOLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW5TaWRlID09PSAndG9wJyB8fCB0d2VlblNpZGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvcCA9IGNcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxMZWZ0ID0gY1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572uc2Nyb2xsVG9wIOWSjCBzY3JvbGxMZWZ0ICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmxheW91dC5zY3JvbGxMZWZ0LCB0aGlzLmxheW91dC5zY3JvbGxUb3ApXHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRFdmVudCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmQuYmluZCh0aGlzKSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzb3J0RGF0YShrZXksIHNvcnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVtrZXldIC0gYltrZXldXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJba2V5XSAtIGFba2V5XVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0U2Nyb2xsKHNjcm9sbExlZnQsIHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAvLyDliKTmlq3mmK/lkKblrZjlnKjlho3ov5vooYzorr7nva5cclxuICAgICAgICAgICAgdGhpcy5yaWdodEZpeGVkQm9keVdyYXBwZXIgJiYgICh0aGlzLnJpZ2h0Rml4ZWRCb2R5V3JhcHBlci5zY3JvbGxUb3AgPSBzY3JvbGxUb3ApXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIgJiYgKHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wKVxyXG4gICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyICYmICh0aGlzLmJvZHlXcmFwcGVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgdGhpcy5ib2R5V3JhcHBlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdClcclxuICAgICAgICAgICAgdGhpcy50YWJsZUhlYWRlcldyYXBwZXIgJiYgKHRoaXMudGFibGVIZWFkZXJXcmFwcGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmlzLWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdCxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtbWlkZGxlLFxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtcmlnaHQge1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNkZGQ7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5LFxcbi50LXRhYmxlX2JvZHkge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMyODJhMmU7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyLFxcbi50LXRhYmxlX2JvZHkgdHIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIuYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdHIuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNGRkY3RUU7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyLmFjdGl2ZSB0ZC5hY3RpdmUsXFxuLnQtdGFibGVfYm9keSB0ci5hY3RpdmUgdGQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmU2Y2E7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyIHRkLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRyIHRkLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG4udC10YWJsZS1oZWFkZXJfYm9keSB0ZCxcXG4udC10YWJsZV9ib2R5IHRkLFxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRoLFxcbi50LXRhYmxlX2JvZHkgdGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERERGRTY7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRoLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRoLmFjdGl2ZSB7XFxuICBjb2xvcjogIzI5NzlGRjtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi50LXRhYmxlLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtaGVhZGVyLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtZml4ZWRfYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1zb3J0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcbi50LXRhYmxlLXNvcnQgLnNvcnQtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uLmFzYyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01NSUsIDApO1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi50LXRhYmxlLXNvcnQgLnNvcnQtaWNvbi5kZXNjIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTUlLCAwKTtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uc29ydGFibGUuYXNjIC5zb3J0LWljb24uYXNjIHtcXG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjMjk3OUZGO1xcbn1cXG4uc29ydGFibGUuZGVzYyAuc29ydC1pY29uLmRlc2Mge1xcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMyOTc5RkY7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0LWNvbnRhaW5lclwiLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgcmVmOiBcImhpZGRlbkNvbHVtbnNcIiwgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLWNvbHVtblwiIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0VGFibGVIZWFkZXJXcmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1oZWFkZXItd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0uc3R5bGUud2lkdGggfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgaGVpZ2h0OiBfdm0uaGVhZGVySGVpZ2h0IH0sXG4gICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5kYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJ0VGFibGVXcmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnN0eWxlLndpZHRoLCBoZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyByZWY6IFwidFRhYmxlQm9keVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1ib2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgZGF0YTogX3ZtLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNMZWZ0Rml4ZWQgJiYgX3ZtLmRhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogX3ZtLmxlZnRGaXhDb2x1bW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInRUYWJsZUxlZnRGaXhlZFdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWRfYm9keVwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0uYm9keUhlaWdodCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnN0b3JlLCBkYXRhOiBfdm0uZGF0YSwgZml4ZWQ6IFwibGVmdFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzUmlnaHRGaXhlZCAmJiBfdm0uZGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwidFRhYmxlUmlnaHRGaXhlZFdyYXBwZXJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0ucmlnaHRGaXhDb2x1bW5XaWR0aCArIFwicHhcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0uc3RvcmUsIGRhdGE6IF92bS5kYXRhLCBmaXhlZDogXCJyaWdodFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmRhdGEubGVuZ3RoID09PSAwID8gX3ZtLl90KFwiZW1wdHlcIikgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI1NmUyYzRhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJjbGFzcyBMYXlvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvaW50ID0ge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IC0xXHJcbiAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIHRoaXMuaXNNb3ZlZCA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNmb3JtU3R5bGUoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGF5b3V0RGF0YSh0YXJnZXQpIHtcclxuICAgICAgICAvLyBsZXQgdHJhbnNmb3JtID0gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybVxyXG4gICAgICAgIC8vIGxldCByZWcgPSB0cmFuc2Zvcm0ubWF0Y2goLygtP1xcZCspcHgsXFxzKygtP1xcZCspcHgsXFxzKygtP1xcZCspcHgvKVxyXG5cclxuICAgICAgICAvLyBpZiAoIXJlZykge1xyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsTGVmdCA9IHBhcnNlSW50KHJlZ1sxXSlcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbFRvcCA9IHBhcnNlSW50KHJlZ1syXSlcclxuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGFyZ2V0LnNjcm9sbFRvcFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxheW91dCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQiLCJjbGFzcyBTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXSxcclxuICAgICAgICB0aGlzLmxlZnRGaXhlZENvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5ib2R5V2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5yZWFsQ29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMuc29ydEtleSA9ICcnXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICcnXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbFR5cGUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydENvbHVtbihjb2x1bW4sIGluZGV4LCBwYXJlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW4sIGluZGV4LCBwYXJlbnQpXHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5XaWR0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29sdW1ucygpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMuY29sdW1ucy5zbGljZSgpXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0uZml4ZWQgJiYgaXRlbS5maXhlZFNpZGUgPT09ICdsZWZ0JylcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0uZml4ZWQgJiYgaXRlbS5maXhlZFNpZGUgPT09ICdyaWdodCcpXHJcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zID0gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0uaGlkZGVuKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbHVtbldpZHRoKCkge1xyXG4gICAgICAgIGxldCByZWFsQ29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgbGV0IGxlZnRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICBsZXQgcmlnaHRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZWFsQ29sdW1uV2lkdGggKz0gaXRlbS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGVmdEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByaWdodEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVhbENvbHVtbldpZHRoID0gcmVhbENvbHVtbldpZHRoXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBsZWZ0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSByaWdodEZpeENvbHVtbldpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSG9yaXpvbnRlbFR5cGUobWF4U2Nyb2xsTGVmdCwgY3VyU2Nyb2xsTGVmdCkge1xyXG4gICAgICAgIGlmIChjdXJTY3JvbGxMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICdpcy1zY3JvbGwtbGVmdCdcclxuICAgICAgICB9IGVsc2UgaWYgKGN1clNjcm9sbExlZnQgPCBtYXhTY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnaXMtc2Nyb2xsLW1pZGRsZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJ2lzLXNjcm9sbC1yaWdodCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmU7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzdG9yZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IEFycmF5LFxyXG4gICAgICAgIHJvd0FjdGl2ZUluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogOFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBpc1JlYWR5OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0LXRhYmxlX2JvZHlcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBib3JkZXI9XCIwXCIgd2lkdGg9e3RoaXMuc3RvcmUucmVhbENvbHVtbldpZHRofT5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fbCh0aGlzLnN0b3JlLmNvbHVtbnMsIChyb3csIGluZGV4KSA9PiA8Y29sIHdpZHRoPXtyb3cud2lkdGh9Lz4pfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2wodGhpcy5kYXRhLCAocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpeGVkID09PSB0cnVlIHx8IHRoaXMuZml4ZWQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkcyA9IHRoaXMuc3RvcmUuY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2wuZml4ZWQgfHwgY29sLmZpeGVkU2lkZSAhPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCI+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZD57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gdGhpcy5zdG9yZS5jb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbC5maXhlZCB8fCBjb2wuZml4ZWRTaWRlICE9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCI+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZD57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSB0aGlzLnN0b3JlLmNvbHVtbnMubWFwKChjb2wsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2wuZml4ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9XCJpcy1oaWRkZW5cIj57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPXt7IGFjdGl2ZTogdGhpcy5zdG9yZS5zb3J0S2V5ID09PSBjb2wucHJvcCB9fT57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz17eyAnYWN0aXZlJzogdGhpcy5yb3dBY3RpdmVJbmRleCA+IGluZGV4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgbm9ybWFsQ29sdW1uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZnRGaXhlZENvdW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubGVmdEZpeGVkQ29sdW1ucy5sZW5ndGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpZ2h0Rml4ZWRDb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zLmxlbmd0aFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxubGV0IHRhYmxlQ29sdW1uSWRTZWVkID0gMTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlUHJvcCh0YXJnZXQpIHtcclxuICAgIGxldCBjb25maWcgPSB7XHJcbiAgICAgICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGZpeGVkU2lkZTogJycsXHJcbiAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgIG1pbnhXaWR0aDogNTAsXHJcbiAgICAgICAgc29ydGFibGU6ICcnLFxyXG4gICAgICAgIHByb3A6ICcnLFxyXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmZpeGVkKSB7XHJcbiAgICAgICAgY29uZmlnLmZpeGVkID0gdHJ1ZVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0LmZpeGVkID09PSAnc3RyaW5nJyAmJiBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHRhcmdldC5maXhlZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5maXhlZFNpZGUgPSB0YXJnZXQuZml4ZWQudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcuZml4ZWRTaWRlID0gJ2xlZnQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQud2lkdGgpIHtcclxuICAgICAgICBjb25maWcud2lkdGggPSBwYXJzZUludCh0YXJnZXQud2lkdGgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5taW5XaWR0aCkge1xyXG4gICAgICAgIGNvbmZpZy5taW5XaWR0aCA9IHBhcnNlSW50KHRhcmdldC5taW5XaWR0aClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LnNvcnRhYmxlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQuZml4ZWQgPT09ICdzdHJpbmcnICYmIFsnYXNjJywgJ2Rlc2MnXS5pbmRleE9mKHRhcmdldC5maXhlZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5zb3J0YWJsZSA9IHRhcmdldC5zb3J0YWJsZS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5zb3J0YWJsZSA9ICdhc2MnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQudGV4dEFsaWduKSB7XHJcbiAgICAgICAgY29uZmlnLnRleHRBbGlnbiA9IHRhcmdldC50ZXh0QWxpZ25cclxuICAgIH1cclxuXHJcbiAgICBjb25maWcucHJvcCA9IHRhcmdldC5wcm9wXHJcbiAgICBjb25maWcubGFiZWwgPSB0YXJnZXQubGFiZWxcclxuICAgIFxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUVGFibGVDb2x1bW4nLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBmaXhlZDogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgICAgd2lkdGg6IE51bWJlcixcclxuICAgICAgICBtaW5XaWR0aDogTnVtYmVyLFxyXG4gICAgICAgIHNvcnRhYmxlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBwcm9wOiBTdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcclxuICAgICAgICB0ZXh0QWxpZ246IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sdW1uSWQ6ICcnLFxyXG4gICAgICAgICAgICBjb2x1bW5Db25maWc6IHt9LFxyXG4gICAgICAgICAgICBpc1N1YkNvbHVtbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjb2x1bW5PclRhYmxlUGFyZW50KCkge1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudFxyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQudGFibGVJZCAmJiAhcGFyZW50LmNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG93bmVyKCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC50YWJsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbHVtbiBjcmVhdGVkJylcclxuICAgICAgICB0aGlzLiRvcHRpb25zLnJlbmRlciA9IGggPT4gaCgnZGl2JywgdGhpcy4kc2xvdHMuZGVmYXVsdClcclxuXHJcbiAgICAgICAgdGhpcy5jb2x1bW5JZCA9IHRoaXMuJHBhcmVudC50YWJsZUlkICsgJ19jb2x1bW5fJyArIHRhYmxlQ29sdW1uSWRTZWVkKytcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IHBhcnNlUHJvcCh0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2x1bW4gbW91bnRlZCcpXHJcbiAgICAgICAgdGhpcy5pc1N1YkNvbHVtbiA9IHRoaXMub3duZXIgIT09IHRoaXMuY29sdW1uT3JUYWJsZVBhcmVudFxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Q29sSW5kZXgodGhpcy5jb2x1bW5PclRhYmxlUGFyZW50LCB0aGlzLiRlbClcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcmVuZGVyQ2VsbCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzPVwiY2VsbFwiPntkYXRhW3Byb3BdfTwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJHNjb3BlZFNsb3RzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcclxuICAgICAgICAgICAgcmVuZGVyQ2VsbCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImNlbGxcIj57X3NlbGYuJHNjb3BlZFNsb3RzLmRlZmF1bHQoe3JvdzogZGF0YSwgaW5kZXg6IGl9KX08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5yZW5kZXJDZWxsID0gcmVuZGVyQ2VsbFxyXG5cclxuICAgICAgICB0aGlzLm93bmVyLnN0b3JlLmluc2VydENvbHVtbih0aGlzLmNvbHVtbkNvbmZpZywgaW5kZXgsIHRoaXMuJHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kc2xvdHMsIHRoaXMuJHNjb3BlZFNsb3RzKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRDb2xJbmRleCgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1YkNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5jb2x1bW5PclRhYmxlUGFyZW50LiRyZWZzLmhpZGRlbkNvbHVtbnMuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5vd25lci4kZWwuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc3RvcmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3J0VHlwZTogMCwgLy8gMCAtIG5vbmUsIDEgLSBhc2MsIDIgLSBkZXNjXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc29ydERhdGE6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnNvcnRLZXkgIT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgJT0gM1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0RGF0YScsIHRoaXMuc3RvcmUuc29ydEtleSwgdGhpcy5zb3J0VHlwZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0LXRhYmxlLWhlYWRlcl9ib2R5XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgYm9yZGVyPVwiMFwiIHdpZHRoPXt0aGlzLnN0b3JlLnJlYWxDb2x1bW5XaWR0aH0+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX2wodGhpcy5zdG9yZS5jb2x1bW5zLCAocm93LCBpbmRleCkgPT4gPGNvbCB3aWR0aD17cm93LndpZHRofS8+KX1cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGhlaWdodDogdGhpcy5oZWlnaHQgKyAncHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbCh0aGlzLnN0b3JlLmNvbHVtbnMsIChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LnNvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGggPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc29ydERhdGEocm93LnByb3ApLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogcm93LnRleHRBbGlnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3RpdmUnOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3J0YWJsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FzYyc6IHRoaXMuc29ydFR5cGUgPT09IDEgJiYgdGhpcy5zdG9yZS5zb3J0S2V5ID09PSByb3cucHJvcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2MnOiB0aGlzLnNvcnRUeXBlID09PSAyICYmIHRoaXMuc3RvcmUuc29ydEtleSA9PT0gcm93LnByb3AgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcm93LmxhYmVsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1zb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzb3J0LWljb24gYXNjXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic29ydC1pY29uIGRlc2NcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCA9IDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogcm93LnRleHRBbGlnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnsgcm93LmxhYmVsIH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiZDpcXFxcd2ViXFxcXGxpYmFyeVxcXFx0YWJsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYTAwM2U3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5KHJvb3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvb3QuVFdFRU4gPSBmYWN0b3J5KHJvb3QpO1xyXG4gICAgfVxyXG59KSh3aW5kb3csIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG4gICAgbGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgIHx8IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMTcpO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIGxldCBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07ICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdDog5b2T5YmN5pe26Ze0XHJcbiAgICAgKiBiOiDliJ3lp4vlgLxcclxuICAgICAqIGM6IOWPmOWMlumHj1xyXG4gICAgICogZDog5oyB57ut5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGxldCBUV0VFTiA9IHtcclxuICAgICAgICBwcml2YXRlOiB7XHJcbiAgICAgICAgICAgIGlkOiAtMVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFF1YWQ6IHtcclxuICAgICAgICAgICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBcclxuXHJcbiAgICAgICAgYW5pbWF0ZTogZnVuY3Rpb24gKGVhc2luZywgZnJvbSwgdG8sIGR1cmF0aW9uLCB0aWNrLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBsZXQgZm4gPSB0aGlzLlF1YWRbZWFzaW5nXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignbm8gZWFzaW5nIGZ1bmN0aW9uJykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBmbihzdGFydCwgZnJvbSwgdG8gLSBmcm9tLCBkdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0LCB2YWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7IC8vIOWIoOmZpOS4iuS4gOasoeeahOWKqOeUu1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPD0gdG8gfHwgc3RhcnQgPiB0aWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbEFuaW1hdGlvbkZyYW1lKFRXRUVOLnByaXZhdGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB2YWwsICdlbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcml2YXRlLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgc3RlcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnByaXZhdGUuaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFRXRUVOO1xyXG59KTsiLCJleHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lciAodGFyZ2V0LCBldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBmYWxzZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKHRhcmdldCwgZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZmFsc2UpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9