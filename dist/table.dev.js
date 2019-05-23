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



function install(Vue) {
    // console.log(Table.name)
    Vue.component(_src_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _src_table_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
    Vue.component(_src_table_column__WEBPACK_IMPORTED_MODULE_1___default.a.name, _src_table_column__WEBPACK_IMPORTED_MODULE_1___default.a)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
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
        raw_data: function raw_data() {
            var data = this.data.map(function (item, index) {
                item.__raw_index__ = index;
                return item;
            });
            return data;
        },

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
            tween: new TWEEN(),
            tempData: this.data.slice()
        };
    },


    watch: {
        'store.leftFixColumnWidth': function storeLeftFixColumnWidth(newVal, oldVal) {
            this.leftFixColumnWidth = newVal;
        },
        'store.rightFixColumnWidth': function storeRightFixColumnWidth(newVal) {
            this.rightFixColumnWidth = newVal;
        },
        'data': function data(newVal) {
            // console.log(newVal)
            this.tempData = newVal.map(function (item, index) {
                item.__raw_index__ = index;
                return item;
            });
        }
    },

    created: function created() {
        this.tableId = 't-table_' + tableIdSeed++;
    },
    mounted: function mounted() {
        this.initEvent(this.$refs.tableContainer);
    },
    updated: function updated() {
        this.$emit('update');
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
            // debugger
            if (sortType !== 0) {
                this.tempData = this.tempData.sort(function (a, b) {
                    if (sortType === 1) {
                        return a[key] - b[key];
                    } else if (sortType === 2) {
                        return b[key] - a[key];
                    }
                });
            } else {
                this.tempData = this.raw_data.sort(function (a, b) {
                    return a.__raw_index__ - b.__raw_index__;
                });
            }
            console.log(this.tempData);
            this.$emit('sort', 'key = ' + key, 'sortType = ' + sortType);
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
exports.push([module.i, ".t-container {\n  position: relative;\n  overflow: hidden;\n}\n.is-hidden {\n  visibility: hidden;\n}\n.t-table-fixed-wrapper_left,\n.t-table-fixed-wrapper_right {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  color: #282a2e;\n}\n.t-table-fixed-wrapper_left {\n  left: 0;\n}\n.t-table-fixed-wrapper_left.is-scroll-middle,\n.t-table-fixed-wrapper_left.is-scroll-right {\n  box-shadow: 0 -2px 5px #ddd;\n}\n.t-table-fixed-wrapper_right {\n  right: 0;\n}\n.t-table-fixed-wrapper_right.is-scroll-middle,\n.t-table-fixed-wrapper_right.is-scroll-left {\n  box-shadow: 0 -2px 5px #ddd;\n}\n.t-table-header_body,\n.t-table_body {\n  table-layout: fixed;\n  overflow: hidden;\n  background: #fff;\n  color: #282a2e;\n}\n.t-table-header_body tr,\n.t-table_body tr {\n  background: #fff;\n}\n.t-table-header_body tr.active,\n.t-table_body tr.active {\n  background: #FFF7EE;\n}\n.t-table-header_body tr.active td.active,\n.t-table_body tr.active td.active {\n  background: #ffe6ca;\n}\n.t-table-header_body tr td.active,\n.t-table_body tr td.active {\n  background: #f0f0f0;\n}\n.t-table-header_body td,\n.t-table_body td,\n.t-table-header_body th,\n.t-table_body th {\n  border-bottom: 1px solid #DDDFE6;\n}\n.t-table-header_body th.active,\n.t-table_body th.active {\n  color: #2979FF;\n  background: #f0f0f0;\n}\n.t-table-header_body tr {\n  vertical-align: middle;\n}\n.t-table-wrapper {\n  overflow: hidden;\n}\n.t-table-header-wrapper {\n  overflow: hidden;\n}\n.cell {\n  overflow: hidden;\n}\n.t-table-fixed_body {\n  overflow: hidden;\n}\n.t-table-sort {\n  position: relative;\n  margin-left: 4px;\n}\n.t-table-sort .sort-icon {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 0;\n  height: 0;\n}\n.t-table-sort .sort-icon.asc {\n  transform: translate3d(0, -55%, 0);\n  border-bottom: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.t-table-sort .sort-icon.desc {\n  transform: translate3d(0, 55%, 0);\n  border-top: 8px solid #ddd;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n}\n.sortable.asc .sort-icon.asc {\n  border-bottom: 8px solid #2979FF;\n}\n.sortable.desc .sort-icon.desc {\n  border-top: 8px solid #2979FF;\n}\n", ""]);



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
            attrs: { store: _vm.store, maxHeight: _vm.headerHeight },
            on: { sortData: _vm.sortData }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.tempData.length > 0
        ? _c(
            "div",
            {
              ref: "tTableWrapper",
              staticClass: "t-table-wrapper",
              style: { width: _vm.style.width, maxHeight: _vm.bodyHeight }
            },
            [
              _c(
                "div",
                { ref: "tTableBody" },
                [
                  _c("table-body", {
                    attrs: { store: _vm.store, data: _vm.tempData }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isLeftFixed && _vm.tempData.length > 0
        ? _c(
            "div",
            {
              staticClass: "t-table-fixed-wrapper_left",
              class: _vm.store.horizontelScrollType,
              style: {
                maxWidth: _vm.leftFixColumnWidth + "px",
                maxHeight: _vm.style.height
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
                  style: { maxHeight: _vm.bodyHeight }
                },
                [
                  _c("table-body", {
                    attrs: {
                      store: _vm.store,
                      data: _vm.tempData,
                      fixed: "left"
                    }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isRightFixed && _vm.tempData.length > 0
        ? _c(
            "div",
            {
              staticClass: "t-table-fixed-wrapper_right",
              class: _vm.store.horizontelScrollType,
              style: {
                maxWidth: _vm.rightFixColumnWidth + "px",
                maxHeight: _vm.style.height
              }
            },
            [
              _c(
                "div",
                [
                  _c("table-header", {
                    attrs: {
                      store: _vm.store,
                      maxHeight: _vm.headerHeight,
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
                  style: { maxHeight: _vm.bodyHeight }
                },
                [
                  _c("table-body", {
                    attrs: {
                      store: _vm.store,
                      data: _vm.tempData,
                      fixed: "right"
                    }
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
                if (_this.fixed === 'right') {
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
                                { "class": { active: _this.store.sortKey === col.prop }, style: { 'text-align': col.textAlign } },
                                [col.renderCell(index, row, col.prop)]
                            );
                        }
                    });
                } else if (_this.fixed === '' || _this.fixed === 'left') {
                    tds = columns.map(function (col, colIndex) {
                        if (!col.fixed || col.fixedSide !== 'left') {
                            return h(
                                "td",
                                { "class": "is-hidden", style: { 'text-align': col.textAlign } },
                                [col.renderCell(index, row, col.prop)]
                            );
                        } else {
                            return h(
                                "td",
                                { "class": { active: _this.store.sortKey === col.prop }, style: { 'text-align': col.textAlign } },
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
                                { "class": { active: _this.store.sortKey === col.prop }, style: { 'text-align': col.textAlign } },
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

    console.log('fixed = ', target.fixed);

    if (target.fixed !== false) {
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

    if (target.sortable !== false) {
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
        if (this.fixed === 'right') {
            columns = this.store.rightFixedColumns;
            width = this.store.rightFixColumnWidth;
        } else if (this.fixed === '' || this.fixed === 'left') {
            columns = this.store.leftFixedColumns;
            width = this.store.leftFixColumnWidth;
        } else {
            columns = this.store.columns;
            width = this.store.realColumnWidth;
        }
        return h(
            'table',
            {
                'class': 't-table-header_body',
                attrs: { cellpadding: '0',
                    cellspacing: '0',
                    border: '0',
                    width: width
                }
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

                                'class': {
                                    active: _this.store.sortKey === row.prop,
                                    sortable: true,
                                    asc: _this.sortType === 1 && _this.store.sortKey === row.prop,
                                    desc: _this.sortType === 2 && _this.store.sortKey === row.prop
                                }
                            },
                            [row.renderHeader(index, row.label, row.prop), h(
                                'span',
                                { 'class': 't-table-sort' },
                                [h('i', { 'class': 'sort-icon asc' }), h('i', { 'class': 'sort-icon desc' })]
                            )]
                        );
                    } else {
                        th = h('th', [row.renderHeader(index, row.label, row.prop)]);
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


var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    return setTimeout(fn, 17);
};

var cancelRequestAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function (id) {
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

module.exports = TWEEN;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9iN2FjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9hOWNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT8xYTZhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2M2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT83YWEyIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsInN0YXJ0UG9pbnQiLCJ4IiwieSIsImVuZFBvaW50Iiwic3RhcnRUaW1lc3RhbXAiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiaXNNb3ZlZCIsInR3ZWVuaW5nIiwieiIsInRhcmdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9yZSIsImNvbHVtbnMiLCJfY29sdW1ucyIsImxlZnRGaXhlZENvbHVtbnMiLCJyaWdodEZpeGVkQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJib2R5V2lkdGgiLCJyZWFsQ29sdW1uV2lkdGgiLCJsZWZ0Rml4Q29sdW1uV2lkdGgiLCJyaWdodEZpeENvbHVtbldpZHRoIiwic29ydEtleSIsImhvcml6b250ZWxTY3JvbGxUeXBlIiwidmVydGljYWxTY3JvbGxUeXBlIiwiY29sdW1uIiwiaW5kZXgiLCJwYXJlbnQiLCJwdXNoIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZUNvbHVtbldpZHRoIiwic2xpY2UiLCJub3JtYWxDb2x1bW5zIiwiZmlsdGVyIiwiaXRlbSIsImZpeGVkIiwiaGlkZGVuIiwiZml4ZWRTaWRlIiwibWFwIiwid2lkdGgiLCJtYXhTY3JvbGxMZWZ0IiwiY3VyU2Nyb2xsTGVmdCIsInByb3BzIiwic3RvcmUiLCJyZXF1aXJlZCIsIkJvb2xlYW4iLCJTdHJpbmciLCJkYXRhIiwiQXJyYXkiLCJyb3dBY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwicmVuZGVyIiwiaCIsInJldmVyc2UiLCJfbCIsInJvdyIsInRkcyIsImNvbCIsImNvbEluZGV4IiwicmVuZGVyQ2VsbCIsInByb3AiLCJhY3RpdmUiLCJ0ZXh0QWxpZ24iLCJ0ciIsImNvbXB1dGVkIiwibGVmdEZpeGVkQ291bnQiLCJsZW5ndGgiLCJyaWdodEZpeGVkQ291bnQiLCJtZXRob2RzIiwidGFibGVDb2x1bW5JZFNlZWQiLCJwYXJzZVByb3AiLCJjb25maWciLCJtaW54V2lkdGgiLCJzb3J0YWJsZSIsInZhbHVlIiwidW5kZWZpbmVkIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwicGFyc2VJbnQiLCJtaW5XaWR0aCIsIm5hbWUiLCJjb2x1bW5JZCIsImNvbHVtbkNvbmZpZyIsImlzU3ViQ29sdW1uIiwiY29sdW1uT3JUYWJsZVBhcmVudCIsIiRwYXJlbnQiLCJ0YWJsZUlkIiwib3duZXIiLCJjcmVhdGVkIiwiJG9wdGlvbnMiLCIkc2xvdHMiLCJtb3VudGVkIiwiZ2V0Q29sSW5kZXgiLCIkZWwiLCJpIiwicmVuZGVySGVhZGVyIiwiJHNjb3BlZFNsb3RzIiwiX3NlbGYiLCJoZWFkZXIiLCJpbnNlcnRDb2x1bW4iLCJjYWxsIiwiJHJlZnMiLCJjaGlsZHJlbiIsImhlaWdodCIsInNvcnRUeXBlIiwic29ydERhdGEiLCJrZXkiLCJlIiwiJGVtaXQiLCJ0aCIsImJpbmQiLCJhc2MiLCJkZXNjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93Iiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0IiwiY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiVFdFRU4iLCJwcml2YXRlIiwicHJvdG90eXBlIiwiUXVhZCIsImVhc2VPdXQiLCJ0IiwiYiIsImMiLCJkIiwiYW5pbWF0ZSIsImVhc2luZyIsImZyb20iLCJ0byIsImR1cmF0aW9uIiwidGljayIsImNhbGxiYWNrIiwiRXJyb3IiLCJzdGFydCIsInN0ZXAiLCJ2YWwiLCJjYW5jZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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QU5hLENBTUM7QUFDZCxnQkFBSUQsT0FBT1AsRUFBUCxJQUFhSyxRQUFRSCxJQUF6QixFQUErQjtBQUMzQjtBQUNBQyx5QkFBUyxJQUFULEVBQWVJLEdBQWYsRUFBb0IsS0FBcEI7QUFDSCxhQUhELE1BR087QUFDSEoseUJBQVMsSUFBVCxFQUFlSSxHQUFmO0FBQ0Esc0JBQUtsQixPQUFMLENBQWFILEVBQWIsR0FBa0JSLHNCQUFzQjRCLElBQXRCLENBQWxCO0FBQ0g7QUFDSixTQWREOztBQWdCQUE7QUFDSDtBQUNKLENBMUJEOztBQTRCQWxCLE1BQU1FLFNBQU4sQ0FBZ0JrQixNQUFoQixHQUF5QixZQUFZO0FBQ2pDekIsZ0NBQTRCLEtBQUtNLE9BQUwsQ0FBYUgsRUFBekM7QUFDSCxDQUZEOztBQUlBcEgsT0FBT0MsT0FBUCxHQUFpQnFILEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDakVnQnFCLGdCLEdBQUFBLGdCO1FBSUFDLG1CLEdBQUFBLG1CO0FBSlQsU0FBU0QsZ0JBQVQsQ0FBMEI1SSxNQUExQixFQUFrQzhJLFNBQWxDLEVBQTZDOUIsRUFBN0MsRUFBaUQ7QUFDcERoSCxXQUFPNEksZ0JBQVAsQ0FBd0JFLFNBQXhCLEVBQW1DOUIsRUFBbkMsRUFBdUMsS0FBdkM7QUFDSDs7QUFFTSxTQUFTNkIsbUJBQVQsQ0FBNkI3SSxNQUE3QixFQUFxQzhJLFNBQXJDLEVBQWdEOUIsRUFBaEQsRUFBb0Q7QUFDdkRoSCxXQUFPNkksbUJBQVAsQ0FBMkJDLFNBQTNCLEVBQXNDOUIsRUFBdEMsRUFBMEMsS0FBMUM7QUFDSCxDIiwiZmlsZSI6InRhYmxlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRhYmxlIGZyb20gJy4vc3JjL3RhYmxlLnZ1ZSdcclxuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4vc3JjL3RhYmxlLWNvbHVtbidcclxuXHJcbmZ1bmN0aW9uIGluc3RhbGwoVnVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhUYWJsZS5uYW1lKVxyXG4gICAgVnVlLmNvbXBvbmVudChUYWJsZS5uYW1lLCBUYWJsZSlcclxuICAgIFZ1ZS5jb21wb25lbnQoVGFibGVDb2x1bW4ubmFtZSwgVGFibGVDb2x1bW4pXHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFRhYmxlLFxyXG4gICAgVGFibGVDb2x1bW5cclxufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInQtY29udGFpbmVyXCJcclxuICAgICAgICByZWY9XCJ0YWJsZUNvbnRhaW5lclwiXHJcbiAgICAgICAgOnN0eWxlPVwic3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJoaWRkZW4tY29sdW1uXCJcclxuICAgICAgICAgICAgcmVmPVwiaGlkZGVuQ29sdW1uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWhlYWRlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBzdHlsZS53aWR0aH1cIlxyXG4gICAgICAgICAgICByZWY9XCJ0VGFibGVIZWFkZXJXcmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnN0b3JlPVwic3RvcmVcIiBAc29ydERhdGE9XCJzb3J0RGF0YVwiIDptYXhIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIj48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LWlmPVwidGVtcERhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgcmVmPVwidFRhYmxlV3JhcHBlclwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IHN0eWxlLndpZHRoLCBtYXhIZWlnaHQ6IGJvZHlIZWlnaHQgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj1cInRUYWJsZUJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhPVwidGVtcERhdGFcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtYm9keT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgdi1pZj1cImlzTGVmdEZpeGVkICYmIHRlbXBEYXRhLmxlbmd0aCA+IDBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7bWF4V2lkdGg6IGxlZnRGaXhDb2x1bW5XaWR0aCArICdweCcsIG1heEhlaWdodDogc3R5bGUuaGVpZ2h0fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBAc29ydERhdGE9XCJzb3J0RGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkX2JvZHlcIiByZWY9XCJ0VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXCIgOnN0eWxlPVwieyBtYXhIZWlnaHQ6IGJvZHlIZWlnaHQgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHlcclxuICAgICAgICAgICAgICAgICAgICA6c3RvcmU9XCJzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0ZW1wRGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtaWY9XCJpc1JpZ2h0Rml4ZWQgJiYgdGVtcERhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7bWF4V2lkdGg6IHJpZ2h0Rml4Q29sdW1uV2lkdGggKyAncHgnLCBtYXhIZWlnaHQ6IHN0eWxlLmhlaWdodH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXJcclxuICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgIDptYXhIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgQHNvcnREYXRhPVwic29ydERhdGFcIlxyXG4gICAgICAgICAgICAgICAgZml4ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidC10YWJsZS1maXhlZF9ib2R5XCIgcmVmPVwidFRhYmxlUmlnaHRGaXhlZFdyYXBwZXJcIiA6c3R5bGU9XCJ7IG1heEhlaWdodDogYm9keUhlaWdodCB9XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cInRlbXBEYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiZW1wdHlcIiB2LWlmPVwiZGF0YS5sZW5ndGggPT09IDBcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5AaW1wb3J0IHVybCguL3N0eWxlL3N0eWxlLmxlc3MpO1xyXG48L3N0eWxlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vdGFibGUtYm9keSdcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vdGFibGUtaGVhZGVyJ1xyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscydcclxuY29uc3QgVFdFRU4gPSByZXF1aXJlKCcuL3R3ZWVuJylcclxuXHJcbmxldCB0YWJsZUlkU2VlZCA9IDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUVGFibGUnLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWJsZUJvZHksXHJcbiAgICAgICAgVGFibGVIZWFkZXJcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBib3JkZXI6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IEFycmF5LFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5Nb3ZlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXJIZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICByYXdfZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9fcmF3X2luZGV4X18gPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgciA9IHt9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgJiYgdHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgci5oZWlnaHQgPSB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoICYmIHR5cGVvZiB0aGlzLndpZHRoID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgci53aWR0aCA9IHRoaXMud2lkdGhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib2R5SGVpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAnJ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWlnaHQgJiYgdHlwZW9mIHRoaXMuaGVpZ2h0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gKCt0aGlzLmhlaWdodC5tYXRjaCgvKFxcZCspLylbMV0gLSB0aGlzLmhlYWRlckhlaWdodCkgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzTGVmdEZpeGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1JpZ2h0Rml4ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib2R5V3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxlZnRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmlnaHRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVSaWdodEZpeGVkV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlSGVhZGVyV3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlSGVhZGVyV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlQm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlQm9keVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heFNjcm9sbExlZnQoKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGggLSB0aGlzLmJvZHlXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgICAgIHJldHVybiByXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWF4U2Nyb2xsSGVpZ2h0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRhYmxlQm9keSkuaGVpZ2h0Lm1hdGNoKC8oXFxkKykvKVsxXSkgLSB0aGlzLmJvZHlXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJsZUlkOiAnJyxcclxuICAgICAgICAgICAgc3RvcmU6IG5ldyBTdG9yZSgpLFxyXG4gICAgICAgICAgICBsZWZ0Rml4Q29sdW1uV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0Rml4Q29sdW1uV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIGxheW91dDogbmV3IExheW91dCgpLFxyXG4gICAgICAgICAgICB0d2VlbjogbmV3IFRXRUVOKCksXHJcbiAgICAgICAgICAgIHRlbXBEYXRhOiB0aGlzLmRhdGEuc2xpY2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICAnc3RvcmUubGVmdEZpeENvbHVtbldpZHRoJyhuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRGaXhDb2x1bW5XaWR0aCA9IG5ld1ZhbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0b3JlLnJpZ2h0Rml4Q29sdW1uV2lkdGgnKG5ld1ZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSBuZXdWYWxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdkYXRhJyhuZXdWYWwpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VmFsKVxyXG4gICAgICAgICAgICB0aGlzLnRlbXBEYXRhID0gbmV3VmFsLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX19yYXdfaW5kZXhfXyA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLnRhYmxlSWQgPSBgdC10YWJsZV9gICsgdGFibGVJZFNlZWQrK1xyXG4gICAgfSxcclxuXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KHRoaXMuJHJlZnMudGFibGVDb250YWluZXIpXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJylcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveWVkKCkge1xyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ib2R5V3JhcHBlciwgdGhpcy5zY3JvbGxFdmVudClcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzTW92ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnN0YXJ0UG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIHk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnN0YXJ0VGltZXN0YW1wID0gRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQudHdlZW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCBjYW5jZWwnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQudHdlZW5pbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbi5jYW5jZWwoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW92ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmxheW91dC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5sYXlvdXQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hNb3ZlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAvLyDpmLvmraLpu5jorqTkuovku7blj5HnlJ9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbk1vdmUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuaXNNb3ZlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuZW5kUG9pbnQgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIHk6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvaW50ID0gdGhpcy5sYXlvdXQuc3RhcnRQb2ludFxyXG5cclxuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMubGF5b3V0LmVuZFBvaW50LnkgLSBzdGFydFBvaW50LnlcclxuICAgICAgICAgICAgbGV0IHNjcm9sbExlZnQgPSB0aGlzLmxheW91dC5lbmRQb2ludC54IC0gc3RhcnRQb2ludC54XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IHRoaXMubGF5b3V0LnNjcm9sbFRvcCAtIHNjcm9sbFRvcFxyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCAtIHNjcm9sbExlZnRcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSG9yaXpvbnRlbFR5cGUodGhpcy5tYXhTY3JvbGxMZWZ0LCBzY3JvbGxMZWZ0KVxyXG5cclxuICAgICAgICAgICAgLy8g6K6+572uc2Nyb2xsVG9w5ZKMc2Nyb2xsTGVmdFxyXG4gICAgICAgICAgICB0aGlzLnNldFNjcm9sbChzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaEVuZChldmVudCkge1xyXG4gICAgICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYXlvdXQuaXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuaXNNb3ZlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGxldCBlbmRQb2ludCA9IHRoaXMubGF5b3V0LmVuZFBvaW50XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvaW50ID0gdGhpcy5sYXlvdXQuc3RhcnRQb2ludFxyXG4gICAgICAgICAgICBsZXQgZW5kVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSB0aGlzLmxheW91dC5zdGFydFRpbWVzdGFtcFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IF9zaWRlID0gZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSA+IDBcclxuICAgICAgICAgICAgICAgID8gJ3RvcCdcclxuICAgICAgICAgICAgICAgIDogJ2JvdHRvbSdcclxuICAgICAgICAgICAgbGV0IF9zaWRlMiA9IGVuZFBvaW50LnggLSBzdGFydFBvaW50LnggPiAwXHJcbiAgICAgICAgICAgICAgICA/ICdyaWdodCdcclxuICAgICAgICAgICAgICAgIDogJ2xlZnQnXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnN0YXJ0UG9pbnQgPSB0aGlzLmVuZFBvaW50XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LmVuZFBvaW50ID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5zZXRMYXlvdXREYXRhKHRoaXMuYm9keVdyYXBwZXIpXHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4U2Nyb2xsSGVpZ2h0ID0gdGhpcy5tYXhTY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVIb3Jpem9udGVsVHlwZSh0aGlzLm1heFNjcm9sbExlZnQsIHRoaXMubGF5b3V0LnNjcm9sbExlZnQpXHJcblxyXG4gICAgICAgICAgICBsZXQgaW5pdFNwZWVkO1xyXG4gICAgICAgICAgICBsZXQgdHdlZW5TaWRlO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSkgPiAzMCAmJiBlbmRUaW1lIC0gc3RhcnRUaW1lIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0U3BlZWQgPSBNYXRoLmFicygoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSkgLyAoZW5kVGltZSAtIHN0YXJ0VGltZSkgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgdHdlZW5TaWRlID0gX3NpZGVcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSA+IDEwICYmIGVuZFRpbWUgLSBzdGFydFRpbWUgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgIGluaXRTcGVlZCA9IE1hdGguYWJzKChlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSAvIChlbmRUaW1lIC0gc3RhcnRUaW1lKSAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICB0d2VlblNpZGUgPSBfc2lkZTJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ21vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMubGF5b3V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0U3BlZWQgPSBNYXRoLm1pbihpbml0U3BlZWQsIDE1MDApXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnR3ZWVuaW5nID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy50d2Vlbi5hbmltYXRlKCdlYXNlT3V0JywgaW5pdFNwZWVkLCAwLCAxMDAsIDM1LCAoZXJyLCB2LCB0YWcpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmaXggYnVnIGZvciB0d2VlbiBhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGNhbGwgVFdFRU4uY2FuY2VsLCB0aGUgYW5pbWF0ZSBmdW5jdGlvbiBjYW50IGVuZCBhdCBvbmNlXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGF5b3V0LnR3ZWVuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsTGVmdCA9IHRoaXMubGF5b3V0LnNjcm9sbExlZnRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfc2hvdWxkQ2FuY2VsID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdHdlZW5TaWRlID09PSAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbExlZnQgLSB2IC8gMzVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2Nyb2xsTGVmdCArIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0d2VlblNpZGUgPT09ICd0b3AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjcm9sbFRvcCAtIHYgLyAzNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzY3JvbGxUb3AgKyB2IC8gMzVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0d2VlblNpZGUgPT09ICdsZWZ0JyB8fCB0d2VlblNpZGUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVIb3Jpem9udGVsVHlwZSh0aGlzLm1heFNjcm9sbExlZnQsIGMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygoYyA+PSB3cmFwcGVySGVpZ2h0IHx8IGMgPD0gMCksIGMsIHdyYXBwZXJIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0JykgJiYgKGMgPCAwIHx8IGMgPiB0aGlzLm1heFNjcm9sbExlZnQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgodHdlZW5TaWRlID09PSAndG9wJyB8fCB0d2VlblNpZGUgPT09ICdib3R0b20nKSAmJiAoYyA+PSBtYXhTY3JvbGxIZWlnaHQgfHwgYyA8PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2hvdWxkQ2FuY2VsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0JykgJiYgKGMgPCAwIHx8IGMgPiB0aGlzLm1heFNjcm9sbExlZnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zaG91bGRDYW5jZWwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0d2VlblNpZGUgPT09ICd0b3AnIHx8IHR3ZWVuU2lkZSA9PT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9wID0gY1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbExlZnQgPSBjXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva5zY3JvbGxUb3Ag5ZKMIHNjcm9sbExlZnQgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsKHRoaXMubGF5b3V0LnNjcm9sbExlZnQsIHRoaXMubGF5b3V0LnNjcm9sbFRvcClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3Nob3VsZENhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotoXov4fovrnnlYzvvIzlgZzmraJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQudHdlZW5pbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ21vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmxheW91dC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2VuZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQudHdlZW5pbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5sYXlvdXQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbml0RXZlbnQodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2hzdGFydCcsIHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgJ3RvdWNobW92ZScsIHRoaXMudG91Y2hNb3ZlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2hlbmQnLCB0aGlzLnRvdWNoRW5kLmJpbmQodGhpcykpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc29ydERhdGEoa2V5LCBzb3J0VHlwZSkge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICBpZiAoc29ydFR5cGUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcERhdGEgPSB0aGlzLnRlbXBEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFba2V5XSAtIGJba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydFR5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJba2V5XSAtIGFba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBEYXRhID0gdGhpcy5yYXdfZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuX19yYXdfaW5kZXhfXyAtIGIuX19yYXdfaW5kZXhfX1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRlbXBEYXRhKVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0JywgYGtleSA9ICR7a2V5fWAsIGBzb3J0VHlwZSA9ICR7c29ydFR5cGV9YClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRTY3JvbGwoc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpuWtmOWcqOWGjei/m+ihjOiuvue9rlxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRCb2R5V3JhcHBlciAmJiAgKHRoaXMucmlnaHRGaXhlZEJvZHlXcmFwcGVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvcClcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Rml4ZWRCb2R5V3JhcHBlciAmJiAodGhpcy5sZWZ0Rml4ZWRCb2R5V3JhcHBlci5zY3JvbGxUb3AgPSBzY3JvbGxUb3ApXHJcbiAgICAgICAgICAgIHRoaXMuYm9keVdyYXBwZXIgJiYgKHRoaXMuYm9keVdyYXBwZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wLCB0aGlzLmJvZHlXcmFwcGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0KVxyXG4gICAgICAgICAgICB0aGlzLnRhYmxlSGVhZGVyV3JhcHBlciAmJiAodGhpcy50YWJsZUhlYWRlcldyYXBwZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uaXMtaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LFxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiAjMjgyYTJlO1xcbn1cXG4udC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnQge1xcbiAgbGVmdDogMDtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LmlzLXNjcm9sbC1taWRkbGUsXFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LmlzLXNjcm9sbC1yaWdodCB7XFxuICBib3gtc2hhZG93OiAwIC0ycHggNXB4ICNkZGQ7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQuaXMtc2Nyb2xsLW1pZGRsZSxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0LmlzLXNjcm9sbC1sZWZ0IHtcXG4gIGJveC1zaGFkb3c6IDAgLTJweCA1cHggI2RkZDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHksXFxuLnQtdGFibGVfYm9keSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIsXFxuLnQtdGFibGVfYm9keSB0ciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4udC10YWJsZS1oZWFkZXJfYm9keSB0ci5hY3RpdmUsXFxuLnQtdGFibGVfYm9keSB0ci5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0ZGRjdFRTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIuYWN0aXZlIHRkLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRyLmFjdGl2ZSB0ZC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZTZjYTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIgdGQuYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdHIgdGQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRkLFxcbi50LXRhYmxlX2JvZHkgdGQsXFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGgsXFxuLnQtdGFibGVfYm9keSB0aCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0REREZFNjtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGguYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdGguYWN0aXZlIHtcXG4gIGNvbG9yOiAjMjk3OUZGO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnQtdGFibGUtd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1oZWFkZXItd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1maXhlZF9ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLXNvcnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udC10YWJsZS1zb3J0IC5zb3J0LWljb24uYXNjIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTU1JSwgMCk7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uLmRlc2Mge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1NSUsIDApO1xcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5zb3J0YWJsZS5hc2MgLnNvcnQtaWNvbi5hc2Mge1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMyOTc5RkY7XFxufVxcbi5zb3J0YWJsZS5kZXNjIC5zb3J0LWljb24uZGVzYyB7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgIzI5NzlGRjtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHJlZjogXCJ0YWJsZUNvbnRhaW5lclwiLCBzdGF0aWNDbGFzczogXCJ0LWNvbnRhaW5lclwiLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgcmVmOiBcImhpZGRlbkNvbHVtbnNcIiwgc3RhdGljQ2xhc3M6IFwiaGlkZGVuLWNvbHVtblwiIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ0VGFibGVIZWFkZXJXcmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1oZWFkZXItd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0uc3R5bGUud2lkdGggfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5zdG9yZSwgbWF4SGVpZ2h0OiBfdm0uaGVhZGVySGVpZ2h0IH0sXG4gICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS50ZW1wRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwidFRhYmxlV3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF92bS5zdHlsZS53aWR0aCwgbWF4SGVpZ2h0OiBfdm0uYm9keUhlaWdodCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgcmVmOiBcInRUYWJsZUJvZHlcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0uc3RvcmUsIGRhdGE6IF92bS50ZW1wRGF0YSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc0xlZnRGaXhlZCAmJiBfdm0udGVtcERhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogX3ZtLmxlZnRGaXhDb2x1bW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHNvcnREYXRhOiBfdm0uc29ydERhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwidFRhYmxlTGVmdEZpeGVkV3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZF9ib2R5XCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBtYXhIZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0udGVtcERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzUmlnaHRGaXhlZCAmJiBfdm0udGVtcERhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uc3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IF92bS5yaWdodEZpeENvbHVtbldpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogX3ZtLnN0eWxlLmhlaWdodFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogX3ZtLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHNvcnREYXRhOiBfdm0uc29ydERhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwidFRhYmxlUmlnaHRGaXhlZFdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWRfYm9keVwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgbWF4SGVpZ2h0OiBfdm0uYm9keUhlaWdodCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLnRlbXBEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgIGZpeGVkOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZGF0YS5sZW5ndGggPT09IDAgPyBfdm0uX3QoXCJlbXB0eVwiKSA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjU2ZTJjNGFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImNsYXNzIExheW91dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmRQb2ludCA9IHtcclxuICAgICAgICAgICAgeDogMCwgeTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gLTFcclxuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAwXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSAwXHJcbiAgICAgICAgdGhpcy5pc01vdmVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnR3ZWVuaW5nID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2Zvcm1TdHlsZSh4ID0gMCwgeSA9IDAsIHogPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWBcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYXlvdXREYXRhKHRhcmdldCkge1xyXG4gICAgICAgIC8vIGxldCB0cmFuc2Zvcm0gPSB0YXJnZXQuc3R5bGUudHJhbnNmb3JtXHJcbiAgICAgICAgLy8gbGV0IHJlZyA9IHRyYW5zZm9ybS5tYXRjaCgvKC0/XFxkKylweCxcXHMrKC0/XFxkKylweCxcXHMrKC0/XFxkKylweC8pXHJcblxyXG4gICAgICAgIC8vIGlmICghcmVnKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxMZWZ0ID0gcGFyc2VJbnQocmVnWzFdKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVG9wID0gcGFyc2VJbnQocmVnWzJdKVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsVG9wXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGF5b3V0KCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dCIsImNsYXNzIFN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuYm9keVdpZHRoID0gMFxyXG4gICAgICAgIHRoaXMucmVhbENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMubGVmdEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLnNvcnRLZXkgPSAnJ1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnJ1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTY3JvbGxUeXBlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRDb2x1bW4oY29sdW1uLCBpbmRleCwgcGFyZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sdW1uLCBpbmRleCwgcGFyZW50KVxyXG4gICAgICAgIHRoaXMuX2NvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKClcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbldpZHRoKClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb2x1bW5zKCkge1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5fY29sdW1ucy5zbGljZSgpXHJcbiAgICAgICAgbGV0IG5vcm1hbENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICFpdGVtLmZpeGVkICYmICFpdGVtLmhpZGRlbilcclxuICAgICAgICB0aGlzLmxlZnRGaXhlZENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiAhIWl0ZW0uZml4ZWQgJiYgaXRlbS5maXhlZFNpZGUgPT09ICdsZWZ0J1xyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gISFpdGVtLmZpeGVkICYmIGl0ZW0uZml4ZWRTaWRlID09PSAncmlnaHQnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gISFpdGVtLmhpZGRlbilcclxuICAgICAgICAvLyDmiopsZWZ0X2ZpeOeahOWIl+aUvuWcqOacgOW3pui+ue+8jHJpZ2h0X2ZpeOeahOWIl+aUvuWcqOacgOWPs+i+uVxyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5sZWZ0Rml4ZWRDb2x1bW5zLFxyXG4gICAgICAgICAgICAuLi5ub3JtYWxDb2x1bW5zLFxyXG4gICAgICAgICAgICAuLi50aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbHVtbldpZHRoKCkge1xyXG4gICAgICAgIGxldCByZWFsQ29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgbGV0IGxlZnRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICBsZXQgcmlnaHRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZWFsQ29sdW1uV2lkdGggKz0gaXRlbS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGVmdEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByaWdodEZpeENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVhbENvbHVtbldpZHRoID0gcmVhbENvbHVtbldpZHRoXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBsZWZ0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSByaWdodEZpeENvbHVtbldpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSG9yaXpvbnRlbFR5cGUobWF4U2Nyb2xsTGVmdCwgY3VyU2Nyb2xsTGVmdCkge1xyXG4gICAgICAgIGlmIChjdXJTY3JvbGxMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICdpcy1zY3JvbGwtbGVmdCdcclxuICAgICAgICB9IGVsc2UgaWYgKGN1clNjcm9sbExlZnQgPCBtYXhTY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnaXMtc2Nyb2xsLW1pZGRsZSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJ2lzLXNjcm9sbC1yaWdodCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmVcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzdG9yZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IEFycmF5LFxyXG4gICAgICAgIHJvd0FjdGl2ZUluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogOFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBpc1JlYWR5OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKGgpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMuc3RvcmUuY29sdW1ucy5zbGljZSgpXHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMucmV2ZXJzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInQtdGFibGVfYm9keVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiIGJvcmRlcj1cIjBcIiB3aWR0aD17dGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiA8Y29sIHdpZHRoPXtyb3cud2lkdGh9Lz4pfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2wodGhpcy5kYXRhLCAocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSBjb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbC5maXhlZCB8fCBjb2wuZml4ZWRTaWRlICE9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCI+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IHRoaXMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AgfX0gIHN0eWxlPXt7ICd0ZXh0LWFsaWduJzogY29sLnRleHRBbGlnbiB9fT57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpeGVkID09PSAnJyB8fCB0aGlzLmZpeGVkID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSBjb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbC5maXhlZCB8fCBjb2wuZml4ZWRTaWRlICE9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9XCJpcy1oaWRkZW5cIiBzdHlsZT17eyAndGV4dC1hbGlnbic6IGNvbC50ZXh0QWxpZ24gfX0+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IHRoaXMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AgfX0gIHN0eWxlPXt7ICd0ZXh0LWFsaWduJzogY29sLnRleHRBbGlnbiB9fT57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSBjb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sLmZpeGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCI+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IHRoaXMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AgfX0gIHN0eWxlPXt7ICd0ZXh0LWFsaWduJzogY29sLnRleHRBbGlnbiB9fT57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz17eyAnYWN0aXZlJzogdGhpcy5yb3dBY3RpdmVJbmRleCA+IGluZGV4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgbm9ybWFsQ29sdW1uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZnRGaXhlZENvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmxlZnRGaXhlZENvbHVtbnMubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodEZpeGVkQ291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnMubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJsZXQgdGFibGVDb2x1bW5JZFNlZWQgPSAxXHJcblxyXG5mdW5jdGlvbiBwYXJzZVByb3AodGFyZ2V0KSB7XHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBmaXhlZFNpZGU6ICcnLFxyXG4gICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICBtaW54V2lkdGg6IDUwLFxyXG4gICAgICAgIHNvcnRhYmxlOiAnJyxcclxuICAgICAgICBwcm9wOiAnJyxcclxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnZml4ZWQgPSAnLCB0YXJnZXQuZml4ZWQpXHJcblxyXG4gICAgaWYgKHRhcmdldC5maXhlZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBjb25maWcuZml4ZWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQuZml4ZWQgPT09ICdzdHJpbmcnICYmIFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLmZpeGVkU2lkZSA9IHRhcmdldC5maXhlZC50b1N0cmluZygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnLmZpeGVkU2lkZSA9ICdsZWZ0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LndpZHRoKSB7XHJcbiAgICAgICAgY29uZmlnLndpZHRoID0gcGFyc2VJbnQodGFyZ2V0LndpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQubWluV2lkdGgpIHtcclxuICAgICAgICBjb25maWcubWluV2lkdGggPSBwYXJzZUludCh0YXJnZXQubWluV2lkdGgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5zb3J0YWJsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldC5maXhlZCA9PT0gJ3N0cmluZycgJiYgWydhc2MnLCAnZGVzYyddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRhYmxlID0gdGFyZ2V0LnNvcnRhYmxlLnRvU3RyaW5nKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcuc29ydGFibGUgPSAnYXNjJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LnRleHRBbGlnbikge1xyXG4gICAgICAgIGNvbmZpZy50ZXh0QWxpZ24gPSB0YXJnZXQudGV4dEFsaWduXHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnLnByb3AgPSB0YXJnZXQucHJvcFxyXG4gICAgY29uZmlnLmxhYmVsID0gdGFyZ2V0LmxhYmVsXHJcbiAgICBcclxuICAgIHJldHVybiBjb25maWdcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnVFRhYmxlQ29sdW1uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIHdpZHRoOiBOdW1iZXIsXHJcbiAgICAgICAgbWluV2lkdGg6IE51bWJlcixcclxuICAgICAgICBzb3J0YWJsZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgICAgcHJvcDogU3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICAgICAgdGV4dEFsaWduOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbHVtbklkOiAnJyxcclxuICAgICAgICAgICAgY29sdW1uQ29uZmlnOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJDb2x1bW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY29sdW1uT3JUYWJsZVBhcmVudCgpIHtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnRcclxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LnRhYmxlSWQgJiYgIXBhcmVudC5jb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvd25lcigpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudFxyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQudGFibGVJZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2x1bW4gY3JlYXRlZCcpXHJcbiAgICAgICAgdGhpcy4kb3B0aW9ucy5yZW5kZXIgPSBoID0+IGgoJ2RpdicsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXHJcblxyXG4gICAgICAgIHRoaXMuY29sdW1uSWQgPSB0aGlzLiRwYXJlbnQudGFibGVJZCArICdfY29sdW1uXycgKyB0YWJsZUNvbHVtbklkU2VlZCsrXHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcgPSBwYXJzZVByb3AodGhpcylcclxuXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY29sdW1uIG1vdW50ZWQnKVxyXG4gICAgICAgIHRoaXMuaXNTdWJDb2x1bW4gPSB0aGlzLm93bmVyICE9PSB0aGlzLmNvbHVtbk9yVGFibGVQYXJlbnRcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldENvbEluZGV4KHRoaXMuY29sdW1uT3JUYWJsZVBhcmVudCwgdGhpcy4kZWwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlbmRlckNlbGwgPSBmdW5jdGlvbiAoaSwgZGF0YSwgcHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImNlbGxcIj57ZGF0YVtwcm9wXX08L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiAoaSwgbGFiZWwsIHByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHJlbmRlckNlbGwgPSBmdW5jdGlvbiAoaSwgZGF0YSwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJjZWxsXCI+e19zZWxmLiRzY29wZWRTbG90cy5kZWZhdWx0KHtyb3c6IGRhdGEsIGluZGV4OiBpfSl9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuJHNsb3RzLmhlYWRlcikge1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uIChpLCBsYWJlbCwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zZWxmLiRzbG90cy5oZWFkZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5yZW5kZXJDZWxsID0gcmVuZGVyQ2VsbFxyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnJlbmRlckhlYWRlciA9IHJlbmRlckhlYWRlclxyXG5cclxuICAgICAgICB0aGlzLm93bmVyLnN0b3JlLmluc2VydENvbHVtbih0aGlzLmNvbHVtbkNvbmZpZywgaW5kZXgsIHRoaXMuJHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kc2xvdHMsIHRoaXMuJHNjb3BlZFNsb3RzKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRDb2xJbmRleCgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1YkNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5jb2x1bW5PclRhYmxlUGFyZW50LiRyZWZzLmhpZGRlbkNvbHVtbnMuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5vd25lci4kZWwuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc3RvcmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3J0VHlwZTogMCAvLyAwIC0gbm9uZSwgMSAtIGFzYywgMiAtIGRlc2NcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzb3J0RGF0YTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlLnNvcnRLZXkgIT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgJT0gM1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0RGF0YScsIHRoaXMuc3RvcmUuc29ydEtleSwgdGhpcy5zb3J0VHlwZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKGgpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IFtdXHJcbiAgICAgICAgbGV0IHdpZHRoXHJcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnNcclxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnN0b3JlLnJpZ2h0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZml4ZWQgPT09ICcnIHx8IHRoaXMuZml4ZWQgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zdG9yZS5sZWZ0Rml4Q29sdW1uV2lkdGhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5zdG9yZS5jb2x1bW5zXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGhcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRhYmxlXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInQtdGFibGUtaGVhZGVyX2JvZHlcIlxyXG4gICAgICAgICAgICAgICAgY2VsbHBhZGRpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2wgd2lkdGg9e3Jvdy53aWR0aH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGhlaWdodDogdGhpcy5oZWlnaHQgKyAncHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5fbChjb2x1bW5zLCAocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5zb3J0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc29ydERhdGEocm93LnByb3ApLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzYzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFR5cGUgPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID09PSByb3cucHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yZW5kZXJIZWFkZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0LXRhYmxlLXNvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInNvcnQtaWNvbiBhc2NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic29ydC1pY29uIGRlc2NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGggPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucmVuZGVySGVhZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdlYlxcXFxsaWJhcnlcXFxcdGFibGVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNhMDAzZTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNhMDAzZTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EwMDNlNzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2EwMDNlNzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy90YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIiIsImxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDE3KSBcclxuICAgIH1cclxuXHJcbmxldCBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXHJcbiAgICB9XHJcblxyXG4vKipcclxuICogdDog5b2T5YmN5pe26Ze0XHJcbiAqIGI6IOWIneWni+WAvFxyXG4gKiBjOiDlj5jljJbph49cclxuICogZDog5oyB57ut5pe26Ze0XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gVFdFRU4oKSB7XHJcbiAgICB0aGlzLnByaXZhdGUgPSB7XHJcbiAgICAgICAgaWQ6IC0xXHJcbiAgICB9XHJcbn1cclxuXHJcblRXRUVOLnByb3RvdHlwZS5RdWFkID0ge1xyXG4gICAgZWFzZU91dDogZnVuY3Rpb24gKHQsIGIsIGMsIGQpIHtcclxuICAgICAgICByZXR1cm4gLWMgKiAodCAvPSBkKSAqICh0IC0gMikgKyBiXHJcbiAgICB9XHJcbn1cclxuXHJcblRXRUVOLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKGVhc2luZywgZnJvbSwgdG8sIGR1cmF0aW9uLCB0aWNrLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGZuID0gdGhpcy5RdWFkW2Vhc2luZ11cclxuXHJcbiAgICBpZiAoIWZuKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdubyBlYXNpbmcgZnVuY3Rpb24nKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gMFxyXG5cclxuICAgICAgICBsZXQgc3RlcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQrK1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gZm4oc3RhcnQsIGZyb20sIHRvIC0gZnJvbSwgZHVyYXRpb24pXHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGFydCwgdmFsKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKSAvLyDliKDpmaTkuIrkuIDmrKHnmoTliqjnlLtcclxuICAgICAgICAgICAgaWYgKHZhbCA8PSB0byB8fCBzdGFydCA+IHRpY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbmNlbEFuaW1hdGlvbkZyYW1lKFRXRUVOLnByaXZhdGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsLCAnZW5kJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHZhbClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpdmF0ZS5pZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGVwKClcclxuICAgIH1cclxufVxyXG5cclxuVFdFRU4ucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnByaXZhdGUuaWQpXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVFdFRU5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBmYWxzZSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuLCBmYWxzZSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=