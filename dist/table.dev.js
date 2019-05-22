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
        },
        maxScrollHeight: function maxScrollHeight() {
            return parseInt(getComputedStyle(this.tableBody).height.match(/(\d+)/)[1]) - this.bodyWrapper.getBoundingClientRect().height;
        }
    },

    data: function data() {
        return {
            tableId: '',
            store: new _store2.default(),
            leftFixColumnWidth: 0,
            rightFixColumnWidth: 0,
            layout: new _layout2.default(),
            tween: new TWEEN()
        };
    },


    watch: {
        'store.leftFixColumnWidth': function storeLeftFixColumnWidth(newVal, oldVal) {
            this.leftFixColumnWidth = newVal;
        },
        'store.rightFixColumnWidth': function storeRightFixColumnWidth(newVal) {
            this.rightFixColumnWidth = newVal;
        }
    },

    created: function created() {
        this.tableId = 't-table_' + tableIdSeed++;
    },
    mounted: function mounted() {
        this.initEvent(this.$refs.tableContainer);
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
            if (this.layout.tweening) {
                console.log('start cancel');
                this.layout.tweening = false;
                this.tween.cancel();
                this.$emit('move', {
                    scrollLeft: this.layout.scrollLeft,
                    scrollTop: this.layout.scrollTop
                });
            }
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

            var maxScrollHeight = this.maxScrollHeight;
            this.store.updateHorizontelType(this.maxScrollLeft, this.layout.scrollLeft);

            var initSpeed = void 0;
            var tweenSide = void 0;
            if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000);
                tweenSide = _side;
            } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000);
                tweenSide = _side2;
            } else {
                this.$emit('move', {
                    scrollLeft: this.layout.scrollLeft,
                    scrollTop: this.layout.scrollTop
                });
                return;
            }

            initSpeed = Math.min(initSpeed, 1500);
            this.layout.tweening = true;

            this.tween.animate('easeOut', initSpeed, 0, 100, 35, function (err, v, tag) {

                // fix bug for tween animate
                // when call TWEEN.cancel, the animate function cant end at once
                if (!_this.layout.tweening) {
                    return;
                }

                if (err) {
                    console.error(err);
                } else {

                    var scrollTop = _this.layout.scrollTop;
                    var scrollLeft = _this.layout.scrollLeft;
                    var c = void 0;
                    var _shouldCancel = false;

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        c = tweenSide === 'right' ? scrollLeft - v / 35 : scrollLeft + v / 35;
                    } else {
                        c = tweenSide === 'top' ? scrollTop - v / 35 : scrollTop + v / 35;
                    }

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        _this.store.updateHorizontelType(_this.maxScrollLeft, c);
                    }

                    // console.log((c >= wrapperHeight || c <= 0), c, wrapperHeight)
                    // console.log((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > this.maxScrollLeft))
                    if ((tweenSide === 'top' || tweenSide === 'bottom') && (c >= maxScrollHeight || c <= 0)) {
                        _shouldCancel = true;
                    } else if ((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > _this.maxScrollLeft)) {
                        _shouldCancel = true;
                    }
                    if (tweenSide === 'top' || tweenSide === 'bottom') {
                        _this.layout.scrollTop = c;
                    } else {
                        _this.layout.scrollLeft = c;
                    }

                    // 设置scrollTop 和 scrollLeft  
                    _this.setScroll(_this.layout.scrollLeft, _this.layout.scrollTop);
                    if (_shouldCancel) {
                        // 超过边界，停止
                        _this.layout.tweening = false;
                        _this.tween.cancel();
                        _this.$emit('move', {
                            scrollLeft: _this.layout.scrollLeft,
                            scrollTop: _this.layout.scrollTop
                        });
                        return;
                    }

                    if (tag === 'end') {
                        _this.layout.tweening = false;
                        _this.$emit('move', {
                            scrollLeft: _this.layout.scrollLeft,
                            scrollTop: _this.layout.scrollTop
                        });
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
exports.push([module.i, ".t-container {\n  position: relative;\n  overflow: hidden;\n}\n.is-hidden {\n  visibility: hidden;\n}\n.t-table-fixed-wrapper_left,\n.t-table-fixed-wrapper_right {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  color: #282a2e;\n}\n.t-table-fixed-wrapper_left {\n  left: 0;\n}\n.t-table-fixed-wrapper_left.is-scroll-middle,\n.t-table-fixed-wrapper_left.is-scroll-right {\n  box-shadow: 0 2px 5px #ddd;\n}\n.t-table-fixed-wrapper_right {\n  right: 0;\n}\n.t-table-fixed-wrapper_right.is-scroll-middle,\n.t-table-fixed-wrapper_right.is-scroll-left {\n  box-shadow: 0 -2px 5px #ddd;\n}\n.t-table-header_body,\n.t-table_body {\n  table-layout: fixed;\n  overflow: hidden;\n  background: #fff;\n  color: #282a2e;\n}\n.t-table-header_body tr,\n.t-table_body tr {\n  background: #fff;\n}\n.t-table-header_body tr.active,\n.t-table_body tr.active {\n  background: #FFF7EE;\n}\n.t-table-header_body tr.active td.active,\n.t-table_body tr.active td.active {\n  background: #ffe6ca;\n}\n.t-table-header_body tr td.active,\n.t-table_body tr td.active {\n  background: #f0f0f0;\n}\n.t-table-header_body td,\n.t-table_body td,\n.t-table-header_body th,\n.t-table_body th {\n  border-bottom: 1px solid #DDDFE6;\n}\n.t-table-header_body th.active,\n.t-table_body th.active {\n  color: #2979FF;\n  background: #f0f0f0;\n}\n.t-table-header_body tr {\n  vertical-align: middle;\n}\n.t-table-wrapper {\n  overflow: hidden;\n}\n.t-table-header-wrapper {\n  overflow: hidden;\n}\n.cell {\n  overflow: hidden;\n}\n.t-table-fixed_body {\n  overflow: hidden;\n}\n.t-table-sort {\n  position: relative;\n  margin-left: 4px;\n}\n.t-table-sort .sort-icon {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n}\n.t-table-sort .sort-icon.asc {\n  transform: translate3d(0, -55%, 0);\n  border-bottom: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.t-table-sort .sort-icon.desc {\n  transform: translate3d(0, 55%, 0);\n  border-top: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.sortable.asc .sort-icon.asc {\n  border-bottom: 8px solid #2979FF;\n}\n.sortable.desc .sort-icon.desc {\n  border-top: 8px solid #2979FF;\n}\n", ""]);



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
    { ref: "tableContainer", staticClass: "t-container", style: _vm.style },
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
                    },
                    on: { sortData: _vm.sortData }
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
              staticClass: "t-table-fixed-wrapper_right",
              class: _vm.store.horizontelScrollType,
              style: {
                maxWidth: _vm.rightFixColumnWidth + "px",
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
                      fixed: "right"
                    },
                    on: { sortData: _vm.sortData }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "tTableRightFixedWrapper",
                  staticClass: "t-table-fixed_body",
                  style: { height: _vm.bodyHeight }
                },
                [
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
        this.tweening = false;
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);

        this.columns = [];
        this._columns = [];
        this.leftFixedColumns = [];
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
            this._columns.push(column);
            this.updateColumns();
            this.updateColumnWidth();
        }
    }, {
        key: 'updateColumns',
        value: function updateColumns() {
            var columns = this._columns.slice();
            var normalColumns = columns.filter(function (item) {
                return !item.fixed && !item.hidden;
            });
            this.leftFixedColumns = columns.filter(function (item) {
                return !!item.fixed && item.fixedSide === 'left';
            });
            this.rightFixedColumns = columns.filter(function (item) {
                return !!item.fixed && item.fixedSide === 'right';
            });
            this.hiddenColumns = columns.filter(function (item) {
                return !!item.hidden;
            });
            // 把left_fix的列放在最左边，right_fix的列放在最右边
            this.columns = [].concat(_toConsumableArray(this.leftFixedColumns), _toConsumableArray(normalColumns), _toConsumableArray(this.rightFixedColumns));
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

        var columns = this.store.columns.slice();
        if (this.fixed === 'right') {
            columns = columns.reverse();
        }

        return h(
            "table",
            { "class": "t-table_body", attrs: { cellpadding: "0", cellspacing: "0", border: "0", width: this.store.realColumnWidth }
            },
            [h("colgroup", [this._l(columns, function (row, index) {
                return h("col", {
                    attrs: { width: row.width }
                });
            })]), h("tbody", [this._l(this.data, function (row, index) {
                var tds = void 0;
                if (_this.fixed === true || _this.fixed === 'left') {
                    tds = columns.map(function (col, colIndex) {
                        if (!col.fixed || col.fixedSide !== 'left') {
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
                } else if (_this.fixed === 'right') {
                    tds = columns.map(function (col, colIndex) {
                        if (!col.fixed || col.fixedSide !== 'right') {
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
                } else {
                    tds = columns.map(function (col, colIndex) {
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

        var renderHeader = function renderHeader(i, label, prop) {
            return h('span', [label]);
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
        if (this.$slots.header) {
            var _self2 = this;
            renderHeader = function renderHeader(i, label, prop) {
                return _self2.$slots.header;
            };
        }
        this.columnConfig.renderCell = renderCell;
        this.columnConfig.renderHeader = renderHeader;

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

        var columns = [];
        var width = void 0;
        if (this.fixed === true || this.fixed === 'left') {
            columns = this.store.leftFixedColumns;
            width = this.store.leftFixColumnWidth;
        } else if (this.fixed === 'right') {
            columns = this.store.rightFixedColumns;
            width = this.store.rightFixColumnWidth;
        } else {
            columns = this.store.columns;
            width = this.store.realColumnWidth;
        }
        return h(
            'table',
            { 'class': 't-table-header_body', attrs: { cellpadding: '0', cellspacing: '0', border: '0', width: width }
            },
            [h('colgroup', [this._l(columns, function (row, index) {
                return h('col', {
                    attrs: { width: row.width }
                });
            })]), h('thead', [h(
                'tr',
                { style: { height: this.height + 'px' } },
                [this._l(columns, function (row, index) {
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
                            [row.renderHeader(index, row.label, row.prop), h(
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
                            [row.renderHeader(index, row.label, row.prop)]
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

    function TWEEN() {
        this.private = {
            id: -1
        };
    }

    TWEEN.prototype.Quad = {
        easeOut: function easeOut(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        }
    };

    TWEEN.prototype.animate = function (easing, from, to, duration, tick, callback) {
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
    };

    TWEEN.prototype.cancel = function () {
        cancelRequestAnimationFrame(this.private.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9iN2FjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9hOWNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT8xYTZhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2M2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT83YWEyIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsInN0YXJ0UG9pbnQiLCJ4IiwieSIsImVuZFBvaW50Iiwic3RhcnRUaW1lc3RhbXAiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiaXNNb3ZlZCIsInR3ZWVuaW5nIiwieiIsInRhcmdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9yZSIsImNvbHVtbnMiLCJfY29sdW1ucyIsImxlZnRGaXhlZENvbHVtbnMiLCJyaWdodEZpeGVkQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJib2R5V2lkdGgiLCJyZWFsQ29sdW1uV2lkdGgiLCJsZWZ0Rml4Q29sdW1uV2lkdGgiLCJyaWdodEZpeENvbHVtbldpZHRoIiwic29ydEtleSIsImhvcml6b250ZWxTY3JvbGxUeXBlIiwidmVydGljYWxTY3JvbGxUeXBlIiwiY29sdW1uIiwiaW5kZXgiLCJwYXJlbnQiLCJwdXNoIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZUNvbHVtbldpZHRoIiwic2xpY2UiLCJub3JtYWxDb2x1bW5zIiwiZmlsdGVyIiwiaXRlbSIsImZpeGVkIiwiaGlkZGVuIiwiZml4ZWRTaWRlIiwibWFwIiwid2lkdGgiLCJtYXhTY3JvbGxMZWZ0IiwiY3VyU2Nyb2xsTGVmdCIsInByb3BzIiwic3RvcmUiLCJyZXF1aXJlZCIsIkJvb2xlYW4iLCJTdHJpbmciLCJkYXRhIiwiQXJyYXkiLCJyb3dBY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwicmVuZGVyIiwiaCIsInJldmVyc2UiLCJfbCIsInJvdyIsInRkcyIsImNvbCIsImNvbEluZGV4IiwicmVuZGVyQ2VsbCIsInByb3AiLCJhY3RpdmUiLCJ0ciIsImNvbXB1dGVkIiwibGVmdEZpeGVkQ291bnQiLCJsZW5ndGgiLCJyaWdodEZpeGVkQ291bnQiLCJtZXRob2RzIiwidGFibGVDb2x1bW5JZFNlZWQiLCJwYXJzZVByb3AiLCJjb25maWciLCJtaW54V2lkdGgiLCJzb3J0YWJsZSIsInZhbHVlIiwidW5kZWZpbmVkIiwibGFiZWwiLCJ0ZXh0QWxpZ24iLCJpbmRleE9mIiwidG9TdHJpbmciLCJwYXJzZUludCIsIm1pbldpZHRoIiwibmFtZSIsImNvbHVtbklkIiwiY29sdW1uQ29uZmlnIiwiaXNTdWJDb2x1bW4iLCJjb2x1bW5PclRhYmxlUGFyZW50IiwiJHBhcmVudCIsInRhYmxlSWQiLCJvd25lciIsImNyZWF0ZWQiLCIkb3B0aW9ucyIsIiRzbG90cyIsIm1vdW50ZWQiLCJnZXRDb2xJbmRleCIsIiRlbCIsImkiLCJyZW5kZXJIZWFkZXIiLCIkc2NvcGVkU2xvdHMiLCJfc2VsZiIsImhlYWRlciIsImluc2VydENvbHVtbiIsImNhbGwiLCIkcmVmcyIsImNoaWxkcmVuIiwiaGVpZ2h0Iiwic29ydFR5cGUiLCJzb3J0RGF0YSIsImtleSIsImUiLCIkZW1pdCIsInRoIiwiYmluZCIsInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0IiwiY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiVFdFRU4iLCJwcml2YXRlIiwicHJvdG90eXBlIiwiUXVhZCIsImVhc2VPdXQiLCJ0IiwiYiIsImMiLCJkIiwiYW5pbWF0ZSIsImVhc2luZyIsImZyb20iLCJ0byIsImR1cmF0aW9uIiwidGljayIsImNhbGxiYWNrIiwiRXJyb3IiLCJzdGFydCIsInN0ZXAiLCJ2YWwiLCJjYW5jZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVB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R0FBZjtBQUNBLDBCQUFLbEIsT0FBTCxDQUFhSCxFQUFiLEdBQWtCUCxzQkFBc0IyQixJQUF0QixDQUFsQjtBQUNIO0FBQ0osYUFkRDs7QUFnQkFBO0FBQ0g7QUFDSixLQTFCRDs7QUE0QkFsQixVQUFNRSxTQUFOLENBQWdCa0IsTUFBaEIsR0FBeUIsWUFBWTtBQUNqQ3pCLG9DQUE0QixLQUFLTSxPQUFMLENBQWFILEVBQXpDO0FBQ0gsS0FGRDs7QUFJQSxXQUFPRSxLQUFQO0FBQ0gsQ0E1RUEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNBZXFCLGdCLEdBQUFBLGdCO1FBSUFDLG1CLEdBQUFBLG1CO0FBSlQsU0FBU0QsZ0JBQVQsQ0FBMkIzSSxNQUEzQixFQUFtQzZJLFNBQW5DLEVBQThDOUIsRUFBOUMsRUFBa0Q7QUFDckQvRyxXQUFPMkksZ0JBQVAsQ0FBd0JFLFNBQXhCLEVBQW1DOUIsRUFBbkMsRUFBdUMsS0FBdkM7QUFDSDs7QUFFTSxTQUFTNkIsbUJBQVQsQ0FBOEI1SSxNQUE5QixFQUFzQzZJLFNBQXRDLEVBQWlEOUIsRUFBakQsRUFBcUQ7QUFDeEQvRyxXQUFPNEksbUJBQVAsQ0FBMkJDLFNBQTNCLEVBQXNDOUIsRUFBdEMsRUFBMEMsS0FBMUM7QUFDSCxDIiwiZmlsZSI6InRhYmxlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRhYmxlIGZyb20gJy4vc3JjL3RhYmxlLnZ1ZSdcclxuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4vc3JjL3RhYmxlLWNvbHVtbidcclxuXHJcbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coVGFibGUubmFtZSlcclxuICAgIFZ1ZS5jb21wb25lbnQoVGFibGUubmFtZSwgVGFibGUpXHJcbiAgICBWdWUuY29tcG9uZW50KFRhYmxlQ29sdW1uLm5hbWUsIFRhYmxlQ29sdW1uKVxyXG59XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xyXG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVGFibGUsXHJcbiAgICBUYWJsZUNvbHVtblxyXG59IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwidC1jb250YWluZXJcIlxyXG4gICAgICAgIHJlZj1cInRhYmxlQ29udGFpbmVyXCJcclxuICAgICAgICA6c3R5bGU9XCJzdHlsZVwiXHJcbiAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImhpZGRlbi1jb2x1bW5cIlxyXG4gICAgICAgICAgICByZWY9XCJoaWRkZW5Db2x1bW5zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtaGVhZGVyLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IHN0eWxlLndpZHRofVwiXHJcbiAgICAgICAgICAgIHJlZj1cInRUYWJsZUhlYWRlcldyYXBwZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHRhYmxlLWhlYWRlciA6c3RvcmU9XCJzdG9yZVwiIEBzb3J0RGF0YT1cInNvcnREYXRhXCIgOmhlaWdodD1cImhlYWRlckhlaWdodFwiPjwvdGFibGUtaGVhZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtaWY9XCJkYXRhLmxlbmd0aCA+IDBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtd3JhcHBlclwiXHJcbiAgICAgICAgICAgIHJlZj1cInRUYWJsZVdyYXBwZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBzdHlsZS53aWR0aCwgaGVpZ2h0OiBib2R5SGVpZ2h0IH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiByZWY9XCJ0VGFibGVCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtYm9keT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdi1pZj1cImlzTGVmdEZpeGVkICYmIGRhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZVwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInttYXhXaWR0aDogbGVmdEZpeENvbHVtbldpZHRoICsgJ3B4JywgaGVpZ2h0OiBzdHlsZS5oZWlnaHR9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBzb3J0RGF0YT1cInNvcnREYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtaGVhZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInQtdGFibGUtZml4ZWRfYm9keVwiIHJlZj1cInRUYWJsZUxlZnRGaXhlZFdyYXBwZXJcIiA6c3R5bGU9XCJ7IGhlaWdodDogYm9keUhlaWdodCB9XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1ib2R5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LWlmPVwiaXNSaWdodEZpeGVkICYmIGRhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7bWF4V2lkdGg6IHJpZ2h0Rml4Q29sdW1uV2lkdGggKyAncHgnLCBoZWlnaHQ6IHN0eWxlLmhlaWdodH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXJcclxuICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgQHNvcnREYXRhPVwic29ydERhdGFcIlxyXG4gICAgICAgICAgICAgICAgZml4ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidC10YWJsZS1maXhlZF9ib2R5XCIgcmVmPVwidFRhYmxlUmlnaHRGaXhlZFdyYXBwZXJcIiA6c3R5bGU9XCJ7IGhlaWdodDogYm9keUhlaWdodCB9XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtYm9keT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzbG90IG5hbWU9XCJlbXB0eVwiIHYtaWY9XCJkYXRhLmxlbmd0aCA9PT0gMFwiPjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XHJcbkBpbXBvcnQgdXJsKC4vc3R5bGUvc3R5bGUubGVzcyk7XHJcbjwvc3R5bGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi90YWJsZS1ib2R5J1xyXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi90YWJsZS1oZWFkZXInXHJcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3V0aWxzJ1xyXG5jb25zdCBUV0VFTiA9IHJlcXVpcmUoJy4vdHdlZW4nKVxyXG5cclxubGV0IHRhYmxlSWRTZWVkID0gMVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1RUYWJsZScsXHJcblxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIFRhYmxlQm9keSxcclxuICAgICAgICBUYWJsZUhlYWRlclxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGJvcmRlcjogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgICAgZGF0YTogQXJyYXksXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbk1vdmU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWRlckhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCByID0ge307XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCAmJiB0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByLmhlaWdodCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggJiYgdHlwZW9mIHRoaXMud2lkdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByLndpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvZHlIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9ICcnXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCAmJiB0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAoK3RoaXMuaGVpZ2h0Lm1hdGNoKC8oXFxkKykvKVsxXSAtIHRoaXMuaGVhZGVySGVpZ2h0KSArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNMZWZ0Rml4ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmxlZnRGaXhlZENvbHVtbnMubGVuZ3RoID4gMFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzUmlnaHRGaXhlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnMubGVuZ3RoID4gMFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVmdEZpeGVkQm9keVdyYXBwZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRUYWJsZUxlZnRGaXhlZFdyYXBwZXJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByaWdodEZpeGVkQm9keVdyYXBwZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGFibGVIZWFkZXJXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVIZWFkZXJXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGFibGVCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVCb2R5XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWF4U2Nyb2xsTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnN0b3JlLnJlYWxDb2x1bW5XaWR0aCAtIHRoaXMuYm9keVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuICAgICAgICAgICAgcmV0dXJuIHJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtYXhTY3JvbGxIZWlnaHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMudGFibGVCb2R5KS5oZWlnaHQubWF0Y2goLyhcXGQrKS8pWzFdKSAtIHRoaXMuYm9keVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmxlSWQ6ICcnLFxyXG4gICAgICAgICAgICBzdG9yZTogbmV3IFN0b3JlKCksXHJcbiAgICAgICAgICAgIGxlZnRGaXhDb2x1bW5XaWR0aDogMCxcclxuICAgICAgICAgICAgcmlnaHRGaXhDb2x1bW5XaWR0aDogMCxcclxuICAgICAgICAgICAgbGF5b3V0OiBuZXcgTGF5b3V0KCksXHJcbiAgICAgICAgICAgIHR3ZWVuOiBuZXcgVFdFRU4oKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICAnc3RvcmUubGVmdEZpeENvbHVtbldpZHRoJyhuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRGaXhDb2x1bW5XaWR0aCA9IG5ld1ZhbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0b3JlLnJpZ2h0Rml4Q29sdW1uV2lkdGgnKG5ld1ZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSBuZXdWYWxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUlkID0gYHQtdGFibGVfYCArIHRhYmxlSWRTZWVkKytcclxuICAgIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLiRyZWZzLnRhYmxlQ29udGFpbmVyKVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmJvZHlXcmFwcGVyLCB0aGlzLnNjcm9sbEV2ZW50KVxyXG4gICAgfSxcclxuXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRQb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC50d2VlbmluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IGNhbmNlbCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50d2VlbmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMubGF5b3V0LnNjcm9sbExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOmYu+atoum7mOiupOS6i+S7tuWPkeeUn1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5pc01vdmVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5lbmRQb2ludCA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB0aGlzLmxheW91dC5zdGFydFBvaW50XHJcblxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5sYXlvdXQuZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueVxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsTGVmdCA9IHRoaXMubGF5b3V0LmVuZFBvaW50LnggLSBzdGFydFBvaW50LnhcclxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gdGhpcy5sYXlvdXQuc2Nyb2xsVG9wIC0gc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmxheW91dC5zY3JvbGxMZWZ0IC0gc2Nyb2xsTGVmdFxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVIb3Jpem9udGVsVHlwZSh0aGlzLm1heFNjcm9sbExlZnQsIHNjcm9sbExlZnQpXHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva5zY3JvbGxUb3DlkoxzY3JvbGxMZWZ0XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsKHNjcm9sbExlZnQsIHNjcm9sbFRvcClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5pc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5pc01vdmVkID0gZmFsc2VcclxuICAgICAgICAgICAgbGV0IGVuZFBvaW50ID0gdGhpcy5sYXlvdXQuZW5kUG9pbnRcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSB0aGlzLmxheW91dC5zdGFydFBvaW50XHJcbiAgICAgICAgICAgIGxldCBlbmRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHRoaXMubGF5b3V0LnN0YXJ0VGltZXN0YW1wXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgX3NpZGUgPSBlbmRQb2ludC55IC0gc3RhcnRQb2ludC55ID4gMFxyXG4gICAgICAgICAgICAgICAgPyAndG9wJ1xyXG4gICAgICAgICAgICAgICAgOiAnYm90dG9tJ1xyXG4gICAgICAgICAgICBsZXQgX3NpZGUyID0gZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCA+IDBcclxuICAgICAgICAgICAgICAgID8gJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgOiAnbGVmdCdcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc3RhcnRQb2ludCA9IHRoaXMuZW5kUG9pbnRcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuZW5kUG9pbnQgPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnNldExheW91dERhdGEodGhpcy5ib2R5V3JhcHBlcilcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXhTY3JvbGxIZWlnaHQgPSB0aGlzLm1heFNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUhvcml6b250ZWxUeXBlKHRoaXMubWF4U2Nyb2xsTGVmdCwgdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdClcclxuXHJcbiAgICAgICAgICAgIGxldCBpbml0U3BlZWQ7XHJcbiAgICAgICAgICAgIGxldCB0d2VlblNpZGU7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRQb2ludC55IC0gc3RhcnRQb2ludC55KSA+IDMwICYmIGVuZFRpbWUgLSBzdGFydFRpbWUgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGluaXRTcGVlZCA9IE1hdGguYWJzKChlbmRQb2ludC55IC0gc3RhcnRQb2ludC55KSAvIChlbmRUaW1lIC0gc3RhcnRUaW1lKSAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICB0d2VlblNpZGUgPSBfc2lkZVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpID4gMTAgJiYgZW5kVGltZSAtIHN0YXJ0VGltZSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdFNwZWVkID0gTWF0aC5hYnMoKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpICogMTAwMClcclxuICAgICAgICAgICAgICAgIHR3ZWVuU2lkZSA9IF9zaWRlMlxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW92ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmxheW91dC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5sYXlvdXQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRTcGVlZCA9IE1hdGgubWluKGluaXRTcGVlZCwgMTUwMClcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQudHdlZW5pbmcgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuLmFuaW1hdGUoJ2Vhc2VPdXQnLCBpbml0U3BlZWQsIDAsIDEwMCwgMzUsIChlcnIsIHYsIHRhZykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpeCBidWcgZm9yIHR3ZWVuIGFuaW1hdGVcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gY2FsbCBUV0VFTi5jYW5jZWwsIHRoZSBhbmltYXRlIGZ1bmN0aW9uIGNhbnQgZW5kIGF0IG9uY2VcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYXlvdXQudHdlZW5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMubGF5b3V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxMZWZ0ID0gdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9zaG91bGRDYW5jZWwgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0d2VlblNpZGUgPT09ICdyaWdodCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsTGVmdCAtIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzY3JvbGxMZWZ0ICsgdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHR3ZWVuU2lkZSA9PT0gJ3RvcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2Nyb2xsVG9wIC0gdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNjcm9sbFRvcCArIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUhvcml6b250ZWxUeXBlKHRoaXMubWF4U2Nyb2xsTGVmdCwgYylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKChjID49IHdyYXBwZXJIZWlnaHQgfHwgYyA8PSAwKSwgYywgd3JhcHBlckhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSAmJiAoYyA8IDAgfHwgYyA+IHRoaXMubWF4U2Nyb2xsTGVmdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0d2VlblNpZGUgPT09ICd0b3AnIHx8IHR3ZWVuU2lkZSA9PT0gJ2JvdHRvbScpICYmIChjID49IG1heFNjcm9sbEhlaWdodCB8fCBjIDw9IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zaG91bGRDYW5jZWwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSAmJiAoYyA8IDAgfHwgYyA+IHRoaXMubWF4U2Nyb2xsTGVmdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Nob3VsZENhbmNlbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3ZWVuU2lkZSA9PT0gJ3RvcCcgfHwgdHdlZW5TaWRlID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb3AgPSBjXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCA9IGNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOiuvue9rnNjcm9sbFRvcCDlkowgc2Nyb2xsTGVmdCAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGwodGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCwgdGhpcy5sYXlvdXQuc2Nyb2xsVG9wKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2hvdWxkQ2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi2hei/h+i+ueeVjO+8jOWBnOatolxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50d2VlbmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW4uY2FuY2VsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW92ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMubGF5b3V0LnNjcm9sbExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMubGF5b3V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAnZW5kJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50d2VlbmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ21vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmxheW91dC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRFdmVudCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmQuYmluZCh0aGlzKSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzb3J0RGF0YShrZXksIHNvcnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVtrZXldIC0gYltrZXldXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJba2V5XSAtIGFba2V5XVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0U2Nyb2xsKHNjcm9sbExlZnQsIHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAvLyDliKTmlq3mmK/lkKblrZjlnKjlho3ov5vooYzorr7nva5cclxuICAgICAgICAgICAgdGhpcy5yaWdodEZpeGVkQm9keVdyYXBwZXIgJiYgICh0aGlzLnJpZ2h0Rml4ZWRCb2R5V3JhcHBlci5zY3JvbGxUb3AgPSBzY3JvbGxUb3ApXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIgJiYgKHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wKVxyXG4gICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyICYmICh0aGlzLmJvZHlXcmFwcGVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgdGhpcy5ib2R5V3JhcHBlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdClcclxuICAgICAgICAgICAgdGhpcy50YWJsZUhlYWRlcldyYXBwZXIgJiYgKHRoaXMudGFibGVIZWFkZXJXcmFwcGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmlzLWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdCxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtbWlkZGxlLFxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtcmlnaHQge1xcbiAgYm94LXNoYWRvdzogMCAycHggNXB4ICNkZGQ7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQuaXMtc2Nyb2xsLW1pZGRsZSxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0LmlzLXNjcm9sbC1sZWZ0IHtcXG4gIGJveC1zaGFkb3c6IDAgLTJweCA1cHggI2RkZDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHksXFxuLnQtdGFibGVfYm9keSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIsXFxuLnQtdGFibGVfYm9keSB0ciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4udC10YWJsZS1oZWFkZXJfYm9keSB0ci5hY3RpdmUsXFxuLnQtdGFibGVfYm9keSB0ci5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0ZGRjdFRTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIuYWN0aXZlIHRkLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRyLmFjdGl2ZSB0ZC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZTZjYTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIgdGQuYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdHIgdGQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRkLFxcbi50LXRhYmxlX2JvZHkgdGQsXFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGgsXFxuLnQtdGFibGVfYm9keSB0aCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0REREZFNjtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGguYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdGguYWN0aXZlIHtcXG4gIGNvbG9yOiAjMjk3OUZGO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnQtdGFibGUtd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1oZWFkZXItd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1maXhlZF9ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLXNvcnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udC10YWJsZS1zb3J0IC5zb3J0LWljb24uYXNjIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTU1JSwgMCk7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uLmRlc2Mge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1NSUsIDApO1xcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5zb3J0YWJsZS5hc2MgLnNvcnQtaWNvbi5hc2Mge1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMyOTc5RkY7XFxufVxcbi5zb3J0YWJsZS5kZXNjIC5zb3J0LWljb24uZGVzYyB7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgIzI5NzlGRjtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJ0YWJsZUNvbnRhaW5lclwiLCBzdGF0aWNDbGFzczogXCJ0LWNvbnRhaW5lclwiLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgcmVmOiBcImhpZGRlbkNvbHVtbnNcIiwgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLWNvbHVtblwiIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0VGFibGVIZWFkZXJXcmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1oZWFkZXItd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0uc3R5bGUud2lkdGggfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgaGVpZ2h0OiBfdm0uaGVhZGVySGVpZ2h0IH0sXG4gICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5kYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJ0VGFibGVXcmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnN0eWxlLndpZHRoLCBoZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyByZWY6IFwidFRhYmxlQm9keVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1ib2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgZGF0YTogX3ZtLmRhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNMZWZ0Rml4ZWQgJiYgX3ZtLmRhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogX3ZtLmxlZnRGaXhDb2x1bW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHNvcnREYXRhOiBfdm0uc29ydERhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwidFRhYmxlTGVmdEZpeGVkV3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZF9ib2R5XCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0uc3RvcmUsIGRhdGE6IF92bS5kYXRhLCBmaXhlZDogXCJsZWZ0XCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNSaWdodEZpeGVkICYmIF92bS5kYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWQtd3JhcHBlcl9yaWdodFwiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnN0b3JlLmhvcml6b250ZWxTY3JvbGxUeXBlLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiBfdm0ucmlnaHRGaXhDb2x1bW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLWZpeGVkX2JvZHlcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLmJvZHlIZWlnaHQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1ib2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgZGF0YTogX3ZtLmRhdGEsIGZpeGVkOiBcInJpZ2h0XCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZGF0YS5sZW5ndGggPT09IDAgPyBfdm0uX3QoXCJlbXB0eVwiKSA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjU2ZTJjNGFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImNsYXNzIExheW91dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IHtcclxuICAgICAgICAgICAgeDogMCwgeTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gLTFcclxuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdGhpcy5pc01vdmVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR3ZWVuaW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2Zvcm1TdHlsZSh4ID0gMCwgeSA9IDAsIHogPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWBcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYXlvdXREYXRhKHRhcmdldCkge1xyXG4gICAgICAgIC8vIGxldCB0cmFuc2Zvcm0gPSB0YXJnZXQuc3R5bGUudHJhbnNmb3JtXHJcbiAgICAgICAgLy8gbGV0IHJlZyA9IHRyYW5zZm9ybS5tYXRjaCgvKC0/XFxkKylweCxcXHMrKC0/XFxkKylweCxcXHMrKC0/XFxkKylweC8pXHJcblxyXG4gICAgICAgIC8vIGlmICghcmVnKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxMZWZ0ID0gcGFyc2VJbnQocmVnWzFdKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVG9wID0gcGFyc2VJbnQocmVnWzJdKVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsVG9wXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGF5b3V0KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dCIsImNsYXNzIFN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuYm9keVdpZHRoID0gMFxyXG4gICAgICAgIHRoaXMucmVhbENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMubGVmdEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLnNvcnRLZXkgPSAnJ1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnJ1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxUeXBlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRDb2x1bW4oY29sdW1uLCBpbmRleCwgcGFyZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uLCBpbmRleCwgcGFyZW50KVxyXG4gICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKClcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbldpZHRoKClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb2x1bW5zKCkge1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zbGljZSgpXHJcbiAgICAgICAgbGV0IG5vcm1hbENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICFpdGVtLmZpeGVkICYmICFpdGVtLmhpZGRlbilcclxuICAgICAgICB0aGlzLmxlZnRGaXhlZENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICEhaXRlbS5maXhlZCAmJiBpdGVtLmZpeGVkU2lkZSA9PT0gJ2xlZnQnKVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICEhaXRlbS5maXhlZCAmJiBpdGVtLmZpeGVkU2lkZSA9PT0gJ3JpZ2h0JylcclxuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICEhaXRlbS5oaWRkZW4pXHJcbiAgICAgICAgLy8g5oqKbGVmdF9maXjnmoTliJfmlL7lnKjmnIDlt6bovrnvvIxyaWdodF9maXjnmoTliJfmlL7lnKjmnIDlj7PovrlcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbLi4udGhpcy5sZWZ0Rml4ZWRDb2x1bW5zLCAuLi5ub3JtYWxDb2x1bW5zLCAuLi50aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zXVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbHVtbldpZHRoKCkge1xyXG4gICAgICAgIGxldCByZWFsQ29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgbGV0IGxlZnRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICBsZXQgcmlnaHRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZWFsQ29sdW1uV2lkdGggKz0gaXRlbS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGVmdEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByaWdodEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVhbENvbHVtbldpZHRoID0gcmVhbENvbHVtbldpZHRoXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBsZWZ0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSByaWdodEZpeENvbHVtbldpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSG9yaXpvbnRlbFR5cGUobWF4U2Nyb2xsTGVmdCwgY3VyU2Nyb2xsTGVmdCkge1xyXG4gICAgICAgIGlmIChjdXJTY3JvbGxMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICdpcy1zY3JvbGwtbGVmdCdcclxuICAgICAgICB9IGVsc2UgaWYgKGN1clNjcm9sbExlZnQgPCBtYXhTY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnaXMtc2Nyb2xsLW1pZGRsZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJ2lzLXNjcm9sbC1yaWdodCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmU7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzdG9yZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IEFycmF5LFxyXG4gICAgICAgIHJvd0FjdGl2ZUluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogOFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBpc1JlYWR5OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKGgpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMuc3RvcmUuY29sdW1ucy5zbGljZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMucmV2ZXJzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInQtdGFibGVfYm9keVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGJvcmRlcj1cIjBcIiB3aWR0aD17dGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiA8Y29sIHdpZHRoPXtyb3cud2lkdGh9Lz4pfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2wodGhpcy5kYXRhLCAocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpeGVkID09PSB0cnVlIHx8IHRoaXMuZml4ZWQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkcyA9IGNvbHVtbnMubWFwKChjb2wsIGNvbEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29sLmZpeGVkIHx8IGNvbC5maXhlZFNpZGUgIT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz1cImlzLWhpZGRlblwiPntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9e3sgYWN0aXZlOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IGNvbC5wcm9wIH19Pntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSBjb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbC5maXhlZCB8fCBjb2wuZml4ZWRTaWRlICE9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCI+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IHRoaXMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AgfX0+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz1cImlzLWhpZGRlblwiPntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9e3sgYWN0aXZlOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IGNvbC5wcm9wIH19Pntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHIgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPXt7ICdhY3RpdmUnOiB0aGlzLnJvd0FjdGl2ZUluZGV4ID4gaW5kZXggfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBub3JtYWxDb2x1bW5zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVmdEZpeGVkQ291bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zLmxlbmd0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmlnaHRGaXhlZENvdW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnMubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5sZXQgdGFibGVDb2x1bW5JZFNlZWQgPSAxO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wKHRhcmdldCkge1xyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgZml4ZWRTaWRlOiAnJyxcclxuICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgbWlueFdpZHRoOiA1MCxcclxuICAgICAgICBzb3J0YWJsZTogJycsXHJcbiAgICAgICAgcHJvcDogJycsXHJcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0YXJnZXQuZml4ZWQpIHtcclxuICAgICAgICBjb25maWcuZml4ZWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQuZml4ZWQgPT09ICdzdHJpbmcnICYmIFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLmZpeGVkU2lkZSA9IHRhcmdldC5maXhlZC50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5maXhlZFNpZGUgPSAnbGVmdCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC53aWR0aCkge1xyXG4gICAgICAgIGNvbmZpZy53aWR0aCA9IHBhcnNlSW50KHRhcmdldC53aWR0aClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0Lm1pbldpZHRoKSB7XHJcbiAgICAgICAgY29uZmlnLm1pbldpZHRoID0gcGFyc2VJbnQodGFyZ2V0Lm1pbldpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuc29ydGFibGUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldC5maXhlZCA9PT0gJ3N0cmluZycgJiYgWydhc2MnLCAnZGVzYyddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRhYmxlID0gdGFyZ2V0LnNvcnRhYmxlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRhYmxlID0gJ2FzYydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC50ZXh0QWxpZ24pIHtcclxuICAgICAgICBjb25maWcudGV4dEFsaWduID0gdGFyZ2V0LnRleHRBbGlnblxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZy5wcm9wID0gdGFyZ2V0LnByb3BcclxuICAgIGNvbmZpZy5sYWJlbCA9IHRhcmdldC5sYWJlbFxyXG4gICAgXHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1RUYWJsZUNvbHVtbicsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICB3aWR0aDogTnVtYmVyLFxyXG4gICAgICAgIG1pbldpZHRoOiBOdW1iZXIsXHJcbiAgICAgICAgc29ydGFibGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIHByb3A6IFN0cmluZyxcclxuICAgICAgICBsYWJlbDogU3RyaW5nLFxyXG4gICAgICAgIHRleHRBbGlnbjogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2x1bW5JZDogJycsXHJcbiAgICAgICAgICAgIGNvbHVtbkNvbmZpZzoge30sXHJcbiAgICAgICAgICAgIGlzU3ViQ29sdW1uOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGNvbHVtbk9yVGFibGVQYXJlbnQoKSB7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC50YWJsZUlkICYmICFwYXJlbnQuY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3duZXIoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnRcclxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LnRhYmxlSWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY29sdW1uIGNyZWF0ZWQnKVxyXG4gICAgICAgIHRoaXMuJG9wdGlvbnMucmVuZGVyID0gaCA9PiBoKCdkaXYnLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxyXG5cclxuICAgICAgICB0aGlzLmNvbHVtbklkID0gdGhpcy4kcGFyZW50LnRhYmxlSWQgKyAnX2NvbHVtbl8nICsgdGFibGVDb2x1bW5JZFNlZWQrK1xyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnID0gcGFyc2VQcm9wKHRoaXMpXHJcblxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbHVtbiBtb3VudGVkJylcclxuICAgICAgICB0aGlzLmlzU3ViQ29sdW1uID0gdGhpcy5vd25lciAhPT0gdGhpcy5jb2x1bW5PclRhYmxlUGFyZW50XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRDb2xJbmRleCh0aGlzLmNvbHVtbk9yVGFibGVQYXJlbnQsIHRoaXMuJGVsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZW5kZXJDZWxsID0gZnVuY3Rpb24gKGksIGRhdGEsIHByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJjZWxsXCI+e2RhdGFbcHJvcF19PC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gKGksIGxhYmVsLCBwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJHNjb3BlZFNsb3RzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gdGhpc1xyXG4gICAgICAgICAgICByZW5kZXJDZWxsID0gZnVuY3Rpb24gKGksIGRhdGEsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzPVwiY2VsbFwiPntfc2VsZi4kc2NvcGVkU2xvdHMuZGVmYXVsdCh7cm93OiBkYXRhLCBpbmRleDogaX0pfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLiRzbG90cy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgbGV0IF9zZWxmID0gdGhpc1xyXG4gICAgICAgICAgICByZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiAoaSwgbGFiZWwsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc2VsZi4kc2xvdHMuaGVhZGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcucmVuZGVyQ2VsbCA9IHJlbmRlckNlbGxcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5yZW5kZXJIZWFkZXIgPSByZW5kZXJIZWFkZXJcclxuXHJcbiAgICAgICAgdGhpcy5vd25lci5zdG9yZS5pbnNlcnRDb2x1bW4odGhpcy5jb2x1bW5Db25maWcsIGluZGV4LCB0aGlzLiRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHNsb3RzLCB0aGlzLiRzY29wZWRTbG90cylcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0Q29sSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTdWJDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gW10uaW5kZXhPZi5jYWxsKHRoaXMuY29sdW1uT3JUYWJsZVBhcmVudC4kcmVmcy5oaWRkZW5Db2x1bW5zLmNoaWxkcmVuLCB0aGlzLiRlbClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gW10uaW5kZXhPZi5jYWxsKHRoaXMub3duZXIuJGVsLmNoaWxkcmVuLCB0aGlzLiRlbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHN0b3JlOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXhlZDogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogMzBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc29ydFR5cGU6IDAsIC8vIDAgLSBub25lLCAxIC0gYXNjLCAyIC0gZGVzY1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNvcnREYXRhOiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zb3J0S2V5ICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9IGtleVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlICs9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlICU9IDNcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0VHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydERhdGEnLCB0aGlzLnN0b3JlLnNvcnRLZXksIHRoaXMuc29ydFR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcihoKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXVxyXG4gICAgICAgIGxldCB3aWR0aFxyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkID09PSB0cnVlIHx8IHRoaXMuZml4ZWQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zdG9yZS5sZWZ0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnNcclxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnN0b3JlLnJpZ2h0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5zdG9yZS5jb2x1bW5zXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidC10YWJsZS1oZWFkZXJfYm9keVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGJvcmRlcj1cIjBcIiB3aWR0aD17d2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiA8Y29sIHdpZHRoPXtyb3cud2lkdGh9Lz4pfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLmhlaWdodCArICdweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LnNvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGggPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc29ydERhdGEocm93LnByb3ApLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogcm93LnRleHRBbGlnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXt7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhY3RpdmUnOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3J0YWJsZSc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FzYyc6IHRoaXMuc29ydFR5cGUgPT09IDEgJiYgdGhpcy5zdG9yZS5zb3J0S2V5ID09PSByb3cucHJvcCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2MnOiB0aGlzLnNvcnRUeXBlID09PSAyICYmIHRoaXMuc3RvcmUuc29ydEtleSA9PT0gcm93LnByb3AgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucmVuZGVySGVhZGVyKGluZGV4LCByb3cubGFiZWwsIHJvdy5wcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLXNvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInNvcnQtaWNvbiBhc2NcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzb3J0LWljb24gZGVzY1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoID0gPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQtYWxpZ24nOiByb3cudGV4dEFsaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucmVuZGVySGVhZGVyKGluZGV4LCByb3cubGFiZWwsIHJvdy5wcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiZDpcXFxcd2ViXFxcXGxpYmFyeVxcXFx0YWJsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYTAwM2U3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5KHJvb3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJvb3QuVFdFRU4gPSBmYWN0b3J5KHJvb3QpO1xyXG4gICAgfVxyXG59KSh3aW5kb3csIGZ1bmN0aW9uIChyb290KSB7XHJcblxyXG4gICAgbGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3QucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgIHx8IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMTcpO1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgIGxldCBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgICAgfHwgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07ICAgIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdDog5b2T5YmN5pe26Ze0XHJcbiAgICAgKiBiOiDliJ3lp4vlgLxcclxuICAgICAqIGM6IOWPmOWMlumHj1xyXG4gICAgICogZDog5oyB57ut5pe26Ze0XHJcbiAgICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBUV0VFTigpIHtcclxuICAgICAgICB0aGlzLnByaXZhdGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiAtMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBUV0VFTi5wcm90b3R5cGUuUXVhZCA9IHtcclxuICAgICAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRXRUVOLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKGVhc2luZywgZnJvbSwgdG8sIGR1cmF0aW9uLCB0aWNrLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBmbiA9IHRoaXMuUXVhZFtlYXNpbmddO1xyXG5cclxuICAgICAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignbm8gZWFzaW5nIGZ1bmN0aW9uJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IDA7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0Kys7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gZm4oc3RhcnQsIGZyb20sIHRvIC0gZnJvbSwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0LCB2YWwpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTsgLy8g5Yig6Zmk5LiK5LiA5qyh55qE5Yqo55S7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsIDw9IHRvIHx8IHN0YXJ0ID4gdGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbEFuaW1hdGlvbkZyYW1lKFRXRUVOLnByaXZhdGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHZhbCwgJ2VuZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaXZhdGUuaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzdGVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFRXRUVOLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucHJpdmF0ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFRXRUVOO1xyXG59KTsiLCJleHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lciAodGFyZ2V0LCBldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBmYWxzZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKHRhcmdldCwgZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZmFsc2UpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9