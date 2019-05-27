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
        data: {
            type: Array,
            default: []
        },
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
        },
        maxHeight: {
            type: String
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
            var _height = this.height ? +this.height.match(/(\d+)/)[1] : undefined;
            var _maxHeight = this.maxHeight ? +this.maxHeight.match(/(\d+)/)[1] : undefined;

            var h = _height && _maxHeight ? Math.min(_height, _maxHeight) : _height ? _height : _maxHeight;

            if (h) {
                height = h - this.headerHeight + 'px';
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
            return this.data.length / (this.data.length || 1) + this.tableBody.getBoundingClientRect().height - this.bodyWrapper.getBoundingClientRect().height;
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

            console.log('max-scrollheight', maxScrollHeight);

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
              style: {
                width: _vm.style.width,
                maxHeight: _vm.bodyHeight,
                height: _vm.bodyHeight
              }
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
                maxHeight: _vm.maxHeight,
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
                maxHeight: this.maxHeight,
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
        textAlign: String,
        filter: Function
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
        var _this2 = this;

        var h = this.$createElement;

        // console.log('column mounted')
        this.isSubColumn = this.owner !== this.columnOrTableParent;
        var index = this.getColIndex(this.columnOrTableParent, this.$el);
        console.log('filter = ', this.filter);
        var renderCell = function renderCell(i, data, prop) {
            var v = _this2.filter && typeof _this2.filter === 'function' ? _this2.filter(data[prop]) : data[prop];
            return h(
                'div',
                { 'class': 'cell' },
                [v]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9iN2FjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT9hOWNjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT8xYTZhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2M2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT83YWEyIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsInN0YXJ0UG9pbnQiLCJ4IiwieSIsImVuZFBvaW50Iiwic3RhcnRUaW1lc3RhbXAiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiaXNNb3ZlZCIsInR3ZWVuaW5nIiwieiIsInRhcmdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9yZSIsImNvbHVtbnMiLCJfY29sdW1ucyIsImxlZnRGaXhlZENvbHVtbnMiLCJyaWdodEZpeGVkQ29sdW1ucyIsImhpZGRlbkNvbHVtbnMiLCJib2R5V2lkdGgiLCJyZWFsQ29sdW1uV2lkdGgiLCJsZWZ0Rml4Q29sdW1uV2lkdGgiLCJyaWdodEZpeENvbHVtbldpZHRoIiwic29ydEtleSIsImhvcml6b250ZWxTY3JvbGxUeXBlIiwidmVydGljYWxTY3JvbGxUeXBlIiwiY29sdW1uIiwiaW5kZXgiLCJwYXJlbnQiLCJwdXNoIiwidXBkYXRlQ29sdW1ucyIsInVwZGF0ZUNvbHVtbldpZHRoIiwic2xpY2UiLCJub3JtYWxDb2x1bW5zIiwiZmlsdGVyIiwiaXRlbSIsImZpeGVkIiwiaGlkZGVuIiwiZml4ZWRTaWRlIiwibWFwIiwid2lkdGgiLCJtYXhTY3JvbGxMZWZ0IiwiY3VyU2Nyb2xsTGVmdCIsInByb3BzIiwic3RvcmUiLCJyZXF1aXJlZCIsIkJvb2xlYW4iLCJTdHJpbmciLCJkYXRhIiwiQXJyYXkiLCJyb3dBY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwicmVuZGVyIiwiaCIsInJldmVyc2UiLCJfbCIsInJvdyIsInRkcyIsImNvbCIsImNvbEluZGV4IiwicmVuZGVyQ2VsbCIsInByb3AiLCJhY3RpdmUiLCJ0ZXh0QWxpZ24iLCJ0ciIsImNvbXB1dGVkIiwibGVmdEZpeGVkQ291bnQiLCJsZW5ndGgiLCJyaWdodEZpeGVkQ291bnQiLCJtZXRob2RzIiwidGFibGVDb2x1bW5JZFNlZWQiLCJwYXJzZVByb3AiLCJjb25maWciLCJtaW54V2lkdGgiLCJzb3J0YWJsZSIsInZhbHVlIiwidW5kZWZpbmVkIiwibGFiZWwiLCJjb25zb2xlIiwibG9nIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwicGFyc2VJbnQiLCJtaW5XaWR0aCIsIm5hbWUiLCJGdW5jdGlvbiIsImNvbHVtbklkIiwiY29sdW1uQ29uZmlnIiwiaXNTdWJDb2x1bW4iLCJjb2x1bW5PclRhYmxlUGFyZW50IiwiJHBhcmVudCIsInRhYmxlSWQiLCJvd25lciIsImNyZWF0ZWQiLCIkb3B0aW9ucyIsIiRzbG90cyIsIm1vdW50ZWQiLCJnZXRDb2xJbmRleCIsIiRlbCIsImkiLCJ2IiwicmVuZGVySGVhZGVyIiwiJHNjb3BlZFNsb3RzIiwiX3NlbGYiLCJoZWFkZXIiLCJpbnNlcnRDb2x1bW4iLCJjYWxsIiwiJHJlZnMiLCJjaGlsZHJlbiIsImhlaWdodCIsInNvcnRUeXBlIiwic29ydERhdGEiLCJrZXkiLCJlIiwiJGVtaXQiLCJ0aCIsImJpbmQiLCJhc2MiLCJkZXNjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93Iiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0IiwiY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiVFdFRU4iLCJwcml2YXRlIiwicHJvdG90eXBlIiwiUXVhZCIsImVhc2VPdXQiLCJ0IiwiYiIsImMiLCJkIiwiYW5pbWF0ZSIsImVhc2luZyIsImZyb20iLCJ0byIsImR1cmF0aW9uIiwidGljayIsImNhbGxiYWNrIiwiRXJyb3IiLCJzdGFydCIsInN0ZXAiLCJ2YWwiLCJjYW5jZWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFn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dUMsS0FBdkM7QUFDSDs7QUFFTSxTQUFTNkIsbUJBQVQsQ0FBNkIvSSxNQUE3QixFQUFxQ2dKLFNBQXJDLEVBQWdEOUIsRUFBaEQsRUFBb0Q7QUFDdkRsSCxXQUFPK0ksbUJBQVAsQ0FBMkJDLFNBQTNCLEVBQXNDOUIsRUFBdEMsRUFBMEMsS0FBMUM7QUFDSCxDIiwiZmlsZSI6InRhYmxlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRhYmxlIGZyb20gJy4vc3JjL3RhYmxlLnZ1ZSdcclxuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4vc3JjL3RhYmxlLWNvbHVtbidcclxuXHJcbmZ1bmN0aW9uIGluc3RhbGwoVnVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhUYWJsZS5uYW1lKVxyXG4gICAgVnVlLmNvbXBvbmVudChUYWJsZS5uYW1lLCBUYWJsZSlcclxuICAgIFZ1ZS5jb21wb25lbnQoVGFibGVDb2x1bW4ubmFtZSwgVGFibGVDb2x1bW4pXHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XHJcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFRhYmxlLFxyXG4gICAgVGFibGVDb2x1bW5cclxufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInQtY29udGFpbmVyXCJcclxuICAgICAgICByZWY9XCJ0YWJsZUNvbnRhaW5lclwiXHJcbiAgICAgICAgOnN0eWxlPVwic3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJoaWRkZW4tY29sdW1uXCJcclxuICAgICAgICAgICAgcmVmPVwiaGlkZGVuQ29sdW1uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWhlYWRlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBzdHlsZS53aWR0aH1cIlxyXG4gICAgICAgICAgICByZWY9XCJ0VGFibGVIZWFkZXJXcmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnN0b3JlPVwic3RvcmVcIiBAc29ydERhdGE9XCJzb3J0RGF0YVwiIDptYXhIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIj48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LWlmPVwidGVtcERhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgcmVmPVwidFRhYmxlV3JhcHBlclwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IHN0eWxlLndpZHRoLCBtYXhIZWlnaHQ6IGJvZHlIZWlnaHQsIGhlaWdodDogYm9keUhlaWdodCB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPVwidFRhYmxlQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHlcclxuICAgICAgICAgICAgICAgICAgICA6c3RvcmU9XCJzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0ZW1wRGF0YVwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1ib2R5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LWlmPVwiaXNMZWZ0Rml4ZWQgJiYgdGVtcERhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnRcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZVwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInttYXhXaWR0aDogbGVmdEZpeENvbHVtbldpZHRoICsgJ3B4JywgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsIGhlaWdodDogc3R5bGUuaGVpZ2h0fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiaGVhZGVySGVpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBAc29ydERhdGE9XCJzb3J0RGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkX2JvZHlcIiByZWY9XCJ0VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXCIgOnN0eWxlPVwieyBtYXhIZWlnaHQ6IGJvZHlIZWlnaHQgfVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHlcclxuICAgICAgICAgICAgICAgICAgICA6c3RvcmU9XCJzdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGE9XCJ0ZW1wRGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtaWY9XCJpc1JpZ2h0Rml4ZWQgJiYgdGVtcERhdGEubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0XCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGVcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7bWF4V2lkdGg6IHJpZ2h0Rml4Q29sdW1uV2lkdGggKyAncHgnLCBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0LCBoZWlnaHQ6IHN0eWxlLmhlaWdodH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXJcclxuICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgIDptYXhIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgQHNvcnREYXRhPVwic29ydERhdGFcIlxyXG4gICAgICAgICAgICAgICAgZml4ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidC10YWJsZS1maXhlZF9ib2R5XCIgcmVmPVwidFRhYmxlUmlnaHRGaXhlZFdyYXBwZXJcIiA6c3R5bGU9XCJ7IG1heEhlaWdodDogYm9keUhlaWdodCB9XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cInRlbXBEYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiZW1wdHlcIiB2LWlmPVwiZGF0YS5sZW5ndGggPT09IDBcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5AaW1wb3J0IHVybCguL3N0eWxlL3N0eWxlLmxlc3MpO1xyXG48L3N0eWxlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vdGFibGUtYm9keSdcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vdGFibGUtaGVhZGVyJ1xyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi91dGlscydcclxuY29uc3QgVFdFRU4gPSByZXF1aXJlKCcuL3R3ZWVuJylcclxuXHJcbmxldCB0YWJsZUlkU2VlZCA9IDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUVGFibGUnLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWJsZUJvZHksXHJcbiAgICAgICAgVGFibGVIZWFkZXJcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBib3JkZXI6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuTW92ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVySGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heEhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHJhd19kYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX19yYXdfaW5kZXhfXyA9IGluZGV4XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCByID0ge307XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlaWdodCAmJiB0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByLmhlaWdodCA9IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggJiYgdHlwZW9mIHRoaXMud2lkdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByLndpZHRoID0gdGhpcy53aWR0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvZHlIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9ICcnXHJcbiAgICAgICAgICAgIGxldCBfaGVpZ2h0ID0gdGhpcy5oZWlnaHQgICBcclxuICAgICAgICAgICAgICAgID8gK3RoaXMuaGVpZ2h0Lm1hdGNoKC8oXFxkKykvKVsxXVxyXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgbGV0IF9tYXhIZWlnaHQgPSB0aGlzLm1heEhlaWdodFxyXG4gICAgICAgICAgICAgICAgPyArdGhpcy5tYXhIZWlnaHQubWF0Y2goLyhcXGQrKS8pWzFdXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG5cclxuICAgICAgICAgICAgbGV0IGggPSBfaGVpZ2h0ICYmIF9tYXhIZWlnaHRcclxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oX2hlaWdodCwgX21heEhlaWdodClcclxuICAgICAgICAgICAgICAgIDogX2hlaWdodCA/IF9oZWlnaHQgOiBfbWF4SGVpZ2h0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGggLSB0aGlzLmhlYWRlckhlaWdodCkgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzTGVmdEZpeGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1JpZ2h0Rml4ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zLmxlbmd0aCA+IDBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBib2R5V3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxlZnRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmlnaHRGaXhlZEJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVSaWdodEZpeGVkV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlSGVhZGVyV3JhcHBlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlSGVhZGVyV3JhcHBlclxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRhYmxlQm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMudFRhYmxlQm9keVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heFNjcm9sbExlZnQoKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gdGhpcy5zdG9yZS5yZWFsQ29sdW1uV2lkdGggLSB0aGlzLmJvZHlXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcbiAgICAgICAgICAgIHJldHVybiByXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWF4U2Nyb2xsSGVpZ2h0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCAvICh0aGlzLmRhdGEubGVuZ3RoIHx8IDEpICsgdGhpcy50YWJsZUJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gdGhpcy5ib2R5V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFibGVJZDogJycsXHJcbiAgICAgICAgICAgIHN0b3JlOiBuZXcgU3RvcmUoKSxcclxuICAgICAgICAgICAgbGVmdEZpeENvbHVtbldpZHRoOiAwLFxyXG4gICAgICAgICAgICByaWdodEZpeENvbHVtbldpZHRoOiAwLFxyXG4gICAgICAgICAgICBsYXlvdXQ6IG5ldyBMYXlvdXQoKSxcclxuICAgICAgICAgICAgdHdlZW46IG5ldyBUV0VFTigpLFxyXG4gICAgICAgICAgICB0ZW1wRGF0YTogdGhpcy5kYXRhLnNsaWNlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgJ3N0b3JlLmxlZnRGaXhDb2x1bW5XaWR0aCcobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBuZXdWYWxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdG9yZS5yaWdodEZpeENvbHVtbldpZHRoJyhuZXdWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEZpeENvbHVtbldpZHRoID0gbmV3VmFsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGF0YScobmV3VmFsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1ZhbClcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGF0YSA9IG5ld1ZhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9fcmF3X2luZGV4X18gPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUlkID0gYHQtdGFibGVfYCArIHRhYmxlSWRTZWVkKytcclxuICAgIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLiRyZWZzLnRhYmxlQ29udGFpbmVyKVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpXHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3llZCgpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuYm9keVdyYXBwZXIsIHRoaXMuc2Nyb2xsRXZlbnQpXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5zdGFydFBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCB5OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5zdGFydFRpbWVzdGFtcCA9IERhdGUubm93KClcclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnR3ZWVuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQgY2FuY2VsJylcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnR3ZWVuaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW4uY2FuY2VsKClcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ21vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMubGF5b3V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoTW92ZShldmVudCkge1xyXG5cclxuICAgICAgICAgICAgLy8g6Zi75q2i6buY6K6k5LqL5Lu25Y+R55SfXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LmlzTW92ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LmVuZFBvaW50ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCB5OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHRoaXMubGF5b3V0LnN0YXJ0UG9pbnRcclxuXHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmxheW91dC5lbmRQb2ludC55IC0gc3RhcnRQb2ludC55XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxMZWZ0ID0gdGhpcy5sYXlvdXQuZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueFxyXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSB0aGlzLmxheW91dC5zY3JvbGxUb3AgLSBzY3JvbGxUb3BcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMubGF5b3V0LnNjcm9sbExlZnQgLSBzY3JvbGxMZWZ0XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUhvcml6b250ZWxUeXBlKHRoaXMubWF4U2Nyb2xsTGVmdCwgc2Nyb2xsTGVmdClcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9rnNjcm9sbFRvcOWSjHNjcm9sbExlZnRcclxuICAgICAgICAgICAgdGhpcy5zZXRTY3JvbGwoc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG91Y2hFbmQoZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGF5b3V0LmlzTW92ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LmlzTW92ZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBsZXQgZW5kUG9pbnQgPSB0aGlzLmxheW91dC5lbmRQb2ludFxyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHRoaXMubGF5b3V0LnN0YXJ0UG9pbnRcclxuICAgICAgICAgICAgbGV0IGVuZFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gdGhpcy5sYXlvdXQuc3RhcnRUaW1lc3RhbXBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBfc2lkZSA9IGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnkgPiAwXHJcbiAgICAgICAgICAgICAgICA/ICd0b3AnXHJcbiAgICAgICAgICAgICAgICA6ICdib3R0b20nXHJcbiAgICAgICAgICAgIGxldCBfc2lkZTIgPSBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54ID4gMFxyXG4gICAgICAgICAgICAgICAgPyAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICA6ICdsZWZ0J1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5zdGFydFBvaW50ID0gdGhpcy5lbmRQb2ludFxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC5lbmRQb2ludCA9IG51bGxcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc2V0TGF5b3V0RGF0YSh0aGlzLmJvZHlXcmFwcGVyKVxyXG5cclxuICAgICAgICAgICAgbGV0IG1heFNjcm9sbEhlaWdodCA9IHRoaXMubWF4U2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSG9yaXpvbnRlbFR5cGUodGhpcy5tYXhTY3JvbGxMZWZ0LCB0aGlzLmxheW91dC5zY3JvbGxMZWZ0KVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21heC1zY3JvbGxoZWlnaHQnLCBtYXhTY3JvbGxIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluaXRTcGVlZDtcclxuICAgICAgICAgICAgbGV0IHR3ZWVuU2lkZTtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnkpID4gMzAgJiYgZW5kVGltZSAtIHN0YXJ0VGltZSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdFNwZWVkID0gTWF0aC5hYnMoKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnkpIC8gKGVuZFRpbWUgLSBzdGFydFRpbWUpICogMTAwMClcclxuICAgICAgICAgICAgICAgIHR3ZWVuU2lkZSA9IF9zaWRlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCkgPiAxMCAmJiBlbmRUaW1lIC0gc3RhcnRUaW1lIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0U3BlZWQgPSBNYXRoLmFicygoZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCkgLyAoZW5kVGltZSAtIHN0YXJ0VGltZSkgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgdHdlZW5TaWRlID0gX3NpZGUyXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMubGF5b3V0LnNjcm9sbExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmxheW91dC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5pdFNwZWVkID0gTWF0aC5taW4oaW5pdFNwZWVkLCAxNTAwKVxyXG4gICAgICAgICAgICB0aGlzLmxheW91dC50d2VlbmluZyA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHdlZW4uYW5pbWF0ZSgnZWFzZU91dCcsIGluaXRTcGVlZCwgMCwgMTAwLCAzNSwgKGVyciwgdiwgdGFnKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZml4IGJ1ZyBmb3IgdHdlZW4gYW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBjYWxsIFRXRUVOLmNhbmNlbCwgdGhlIGFuaW1hdGUgZnVuY3Rpb24gY2FudCBlbmQgYXQgb25jZVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC50d2VlbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5sYXlvdXQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbExlZnQgPSB0aGlzLmxheW91dC5zY3JvbGxMZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3Nob3VsZENhbmNlbCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0d2VlblNpZGUgPT09ICdsZWZ0JyB8fCB0d2VlblNpZGUgPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY3JvbGxMZWZ0IC0gdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNjcm9sbExlZnQgKyB2IC8gMzVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdHdlZW5TaWRlID09PSAndG9wJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY3JvbGxUb3AgLSB2IC8gMzVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2Nyb2xsVG9wICsgdiAvIDM1XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHdlZW5TaWRlID09PSAnbGVmdCcgfHwgdHdlZW5TaWRlID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSG9yaXpvbnRlbFR5cGUodGhpcy5tYXhTY3JvbGxMZWZ0LCBjKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKGMgPj0gd3JhcHBlckhlaWdodCB8fCBjIDw9IDApLCBjLCB3cmFwcGVySGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCh0d2VlblNpZGUgPT09ICdsZWZ0JyB8fCB0d2VlblNpZGUgPT09ICdyaWdodCcpICYmIChjIDwgMCB8fCBjID4gdGhpcy5tYXhTY3JvbGxMZWZ0KSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHR3ZWVuU2lkZSA9PT0gJ3RvcCcgfHwgdHdlZW5TaWRlID09PSAnYm90dG9tJykgJiYgKGMgPj0gbWF4U2Nyb2xsSGVpZ2h0IHx8IGMgPD0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Nob3VsZENhbmNlbCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCh0d2VlblNpZGUgPT09ICdsZWZ0JyB8fCB0d2VlblNpZGUgPT09ICdyaWdodCcpICYmIChjIDwgMCB8fCBjID4gdGhpcy5tYXhTY3JvbGxMZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfc2hvdWxkQ2FuY2VsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHdlZW5TaWRlID09PSAndG9wJyB8fCB0d2VlblNpZGUgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvcCA9IGNcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxMZWZ0ID0gY1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572uc2Nyb2xsVG9wIOWSjCBzY3JvbGxMZWZ0ICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmxheW91dC5zY3JvbGxMZWZ0LCB0aGlzLmxheW91dC5zY3JvbGxUb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zaG91bGRDYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6LaF6L+H6L6555WM77yM5YGc5q2iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnR3ZWVuaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbi5jYW5jZWwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdtb3ZlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogdGhpcy5sYXlvdXQuc2Nyb2xsTGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy5sYXlvdXQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICdlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnR3ZWVuaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW92ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHRoaXMubGF5b3V0LnNjcm9sbExlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMubGF5b3V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdEV2ZW50KHRhcmdldCkge1xyXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgJ3RvdWNoc3RhcnQnLCB0aGlzLnRvdWNoU3RhcnQuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaG1vdmUnLCB0aGlzLnRvdWNoTW92ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgJ3RvdWNoZW5kJywgdGhpcy50b3VjaEVuZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNvcnREYXRhKGtleSwgc29ydFR5cGUpIHtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgICAgICAgICAgaWYgKHNvcnRUeXBlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBEYXRhID0gdGhpcy50ZW1wRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhW2tleV0gLSBiW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiW2tleV0gLSBhW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRGF0YSA9IHRoaXMucmF3X2RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLl9fcmF3X2luZGV4X18gLSBiLl9fcmF3X2luZGV4X19cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50ZW1wRGF0YSlcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydCcsIGBrZXkgPSAke2tleX1gLCBgc29ydFR5cGUgPSAke3NvcnRUeXBlfWApXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0U2Nyb2xsKHNjcm9sbExlZnQsIHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAvLyDliKTmlq3mmK/lkKblrZjlnKjlho3ov5vooYzorr7nva5cclxuICAgICAgICAgICAgdGhpcy5yaWdodEZpeGVkQm9keVdyYXBwZXIgJiYgICh0aGlzLnJpZ2h0Rml4ZWRCb2R5V3JhcHBlci5zY3JvbGxUb3AgPSBzY3JvbGxUb3ApXHJcbiAgICAgICAgICAgIHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIgJiYgKHRoaXMubGVmdEZpeGVkQm9keVdyYXBwZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wKVxyXG4gICAgICAgICAgICB0aGlzLmJvZHlXcmFwcGVyICYmICh0aGlzLmJvZHlXcmFwcGVyLnNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgdGhpcy5ib2R5V3JhcHBlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdClcclxuICAgICAgICAgICAgdGhpcy50YWJsZUhlYWRlcldyYXBwZXIgJiYgKHRoaXMudGFibGVIZWFkZXJXcmFwcGVyLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmlzLWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdCxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtbWlkZGxlLFxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdC5pcy1zY3JvbGwtcmlnaHQge1xcbiAgYm94LXNoYWRvdzogMCAtMnB4IDVweCAjZGRkO1xcbn1cXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0LmlzLXNjcm9sbC1taWRkbGUsXFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9yaWdodC5pcy1zY3JvbGwtbGVmdCB7XFxuICBib3gtc2hhZG93OiAwIC0ycHggNXB4ICNkZGQ7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5LFxcbi50LXRhYmxlX2JvZHkge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMyODJhMmU7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyLFxcbi50LXRhYmxlX2JvZHkgdHIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIuYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdHIuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNGRkY3RUU7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyLmFjdGl2ZSB0ZC5hY3RpdmUsXFxuLnQtdGFibGVfYm9keSB0ci5hY3RpdmUgdGQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmU2Y2E7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyIHRkLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRyIHRkLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG4udC10YWJsZS1oZWFkZXJfYm9keSB0ZCxcXG4udC10YWJsZV9ib2R5IHRkLFxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRoLFxcbi50LXRhYmxlX2JvZHkgdGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERERGRTY7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRoLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRoLmFjdGl2ZSB7XFxuICBjb2xvcjogIzI5NzlGRjtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRyIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi50LXRhYmxlLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtaGVhZGVyLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNlbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtZml4ZWRfYm9keSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1zb3J0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcbi50LXRhYmxlLXNvcnQgLnNvcnQtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uLmFzYyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01NSUsIDApO1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi50LXRhYmxlLXNvcnQgLnNvcnQtaWNvbi5kZXNjIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTUlLCAwKTtcXG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uc29ydGFibGUuYXNjIC5zb3J0LWljb24uYXNjIHtcXG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjMjk3OUZGO1xcbn1cXG4uc29ydGFibGUuZGVzYyAuc29ydC1pY29uLmRlc2Mge1xcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMyOTc5RkY7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyByZWY6IFwidGFibGVDb250YWluZXJcIiwgc3RhdGljQ2xhc3M6IFwidC1jb250YWluZXJcIiwgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHJlZjogXCJoaWRkZW5Db2x1bW5zXCIsIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1jb2x1bW5cIiB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwidFRhYmxlSGVhZGVyV3JhcHBlclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtaGVhZGVyLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnN0eWxlLndpZHRoIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0uc3RvcmUsIG1heEhlaWdodDogX3ZtLmhlYWRlckhlaWdodCB9LFxuICAgICAgICAgICAgb246IHsgc29ydERhdGE6IF92bS5zb3J0RGF0YSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udGVtcERhdGEubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRUYWJsZVdyYXBwZXJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS13cmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5zdHlsZS53aWR0aCxcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5ib2R5SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmJvZHlIZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHJlZjogXCJ0VGFibGVCb2R5XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnN0b3JlLCBkYXRhOiBfdm0udGVtcERhdGEgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNMZWZ0Rml4ZWQgJiYgX3ZtLnRlbXBEYXRhLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uc3RvcmUuaG9yaXpvbnRlbFNjcm9sbFR5cGUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IF92bS5sZWZ0Rml4Q29sdW1uV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBfdm0ubWF4SGVpZ2h0LFxuICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLnN0eWxlLmhlaWdodFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgc29ydERhdGE6IF92bS5zb3J0RGF0YSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJ0VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLWZpeGVkX2JvZHlcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG1heEhlaWdodDogX3ZtLmJvZHlIZWlnaHQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1ib2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS50ZW1wRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNSaWdodEZpeGVkICYmIF92bS50ZW1wRGF0YS5sZW5ndGggPiAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogX3ZtLnJpZ2h0Rml4Q29sdW1uV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLm1heEhlaWdodCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLWZpeGVkX2JvZHlcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG1heEhlaWdodDogX3ZtLmJvZHlIZWlnaHQgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1ib2R5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS50ZW1wRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmRhdGEubGVuZ3RoID09PSAwID8gX3ZtLl90KFwiZW1wdHlcIikgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI1NmUyYzRhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJjbGFzcyBMYXlvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvaW50ID0ge1xyXG4gICAgICAgICAgICB4OiAwLCB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSB7XHJcbiAgICAgICAgICAgIHg6IDAsIHk6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IC0xXHJcbiAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0gMFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gMFxyXG4gICAgICAgIHRoaXMuaXNNb3ZlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50d2VlbmluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNmb3JtU3R5bGUoeCA9IDAsIHkgPSAwLCB6ID0gMCkge1xyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGF5b3V0RGF0YSh0YXJnZXQpIHtcclxuICAgICAgICAvLyBsZXQgdHJhbnNmb3JtID0gdGFyZ2V0LnN0eWxlLnRyYW5zZm9ybVxyXG4gICAgICAgIC8vIGxldCByZWcgPSB0cmFuc2Zvcm0ubWF0Y2goLygtP1xcZCspcHgsXFxzKygtP1xcZCspcHgsXFxzKygtP1xcZCspcHgvKVxyXG5cclxuICAgICAgICAvLyBpZiAoIXJlZykge1xyXG4gICAgICAgIC8vICAgICByZXR1cm5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsTGVmdCA9IHBhcnNlSW50KHJlZ1sxXSlcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbFRvcCA9IHBhcnNlSW50KHJlZ1syXSlcclxuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gdGFyZ2V0LnNjcm9sbFRvcFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxheW91dCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQiLCJjbGFzcyBTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMubGVmdEZpeGVkQ29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeGVkQ29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLmJvZHlXaWR0aCA9IDBcclxuICAgICAgICB0aGlzLnJlYWxDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLmxlZnRGaXhDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4Q29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5zb3J0S2V5ID0gJydcclxuICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJydcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU2Nyb2xsVHlwZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0Q29sdW1uKGNvbHVtbiwgaW5kZXgsIHBhcmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbHVtbiwgaW5kZXgsIHBhcmVudClcclxuICAgICAgICB0aGlzLl9jb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpXHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5XaWR0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29sdW1ucygpIHtcclxuICAgICAgICBsZXQgY29sdW1ucyA9IHRoaXMuX2NvbHVtbnMuc2xpY2UoKVxyXG4gICAgICAgIGxldCBub3JtYWxDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5maXhlZCAmJiAhaXRlbS5oaWRkZW4pXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4ZWRDb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgIGl0ZW0gPT4gISFpdGVtLmZpeGVkICYmIGl0ZW0uZml4ZWRTaWRlID09PSAnbGVmdCdcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeGVkQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+ICEhaXRlbS5maXhlZCAmJiBpdGVtLmZpeGVkU2lkZSA9PT0gJ3JpZ2h0J1xyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmhpZGRlbkNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihpdGVtID0+ICEhaXRlbS5oaWRkZW4pXHJcbiAgICAgICAgLy8g5oqKbGVmdF9maXjnmoTliJfmlL7lnKjmnIDlt6bovrnvvIxyaWdodF9maXjnmoTliJfmlL7lnKjmnIDlj7PovrlcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMubGVmdEZpeGVkQ29sdW1ucyxcclxuICAgICAgICAgICAgLi4ubm9ybWFsQ29sdW1ucyxcclxuICAgICAgICAgICAgLi4udGhpcy5yaWdodEZpeGVkQ29sdW1uc1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb2x1bW5XaWR0aCgpIHtcclxuICAgICAgICBsZXQgcmVhbENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIGxldCBsZWZ0Rml4Q29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgbGV0IHJpZ2h0Rml4Q29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmVhbENvbHVtbldpZHRoICs9IGl0ZW0ud2lkdGhcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubGVmdEZpeGVkQ29sdW1ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxlZnRGaXhDb2x1bW5XaWR0aCArPSBpdGVtLndpZHRoXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJpZ2h0Rml4ZWRDb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmlnaHRGaXhDb2x1bW5XaWR0aCArPSBpdGVtLndpZHRoXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJlYWxDb2x1bW5XaWR0aCA9IHJlYWxDb2x1bW5XaWR0aFxyXG4gICAgICAgIHRoaXMubGVmdEZpeENvbHVtbldpZHRoID0gbGVmdEZpeENvbHVtbldpZHRoXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeENvbHVtbldpZHRoID0gcmlnaHRGaXhDb2x1bW5XaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhvcml6b250ZWxUeXBlKG1heFNjcm9sbExlZnQsIGN1clNjcm9sbExlZnQpIHtcclxuICAgICAgICBpZiAoY3VyU2Nyb2xsTGVmdCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnaXMtc2Nyb2xsLWxlZnQnXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJTY3JvbGxMZWZ0IDwgbWF4U2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJ2lzLXNjcm9sbC1taWRkbGUnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICdpcy1zY3JvbGwtcmlnaHQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JlXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc3RvcmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBkYXRhOiBBcnJheSxcclxuICAgICAgICByb3dBY3RpdmVJbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDhcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gaXNSZWFkeTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcihoKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLnN0b3JlLmNvbHVtbnMuc2xpY2UoKVxyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLnJldmVyc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0LXRhYmxlX2JvZHlcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBib3JkZXI9XCIwXCIgd2lkdGg9e3RoaXMuc3RvcmUucmVhbENvbHVtbldpZHRofT5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fbChjb2x1bW5zLCAocm93LCBpbmRleCkgPT4gPGNvbCB3aWR0aD17cm93LndpZHRofS8+KX1cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sKHRoaXMuZGF0YSwgKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2wuZml4ZWQgfHwgY29sLmZpeGVkU2lkZSAhPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz1cImlzLWhpZGRlblwiPntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9e3sgYWN0aXZlOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IGNvbC5wcm9wIH19ICBzdHlsZT17eyAndGV4dC1hbGlnbic6IGNvbC50ZXh0QWxpZ24gfX0+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maXhlZCA9PT0gJycgfHwgdGhpcy5maXhlZCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2wuZml4ZWQgfHwgY29sLmZpeGVkU2lkZSAhPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPVwiaXMtaGlkZGVuXCIgc3R5bGU9e3sgJ3RleHQtYWxpZ24nOiBjb2wudGV4dEFsaWduIH19Pntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9e3sgYWN0aXZlOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IGNvbC5wcm9wIH19ICBzdHlsZT17eyAndGV4dC1hbGlnbic6IGNvbC50ZXh0QWxpZ24gfX0+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5maXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz1cImlzLWhpZGRlblwiPntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGQgY2xhc3M9e3sgYWN0aXZlOiB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IGNvbC5wcm9wIH19ICBzdHlsZT17eyAndGV4dC1hbGlnbic6IGNvbC50ZXh0QWxpZ24gfX0+e2NvbC5yZW5kZXJDZWxsKGluZGV4LCByb3csIGNvbC5wcm9wKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ciA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9e3sgJ2FjdGl2ZSc6IHRoaXMucm93QWN0aXZlSW5kZXggPiBpbmRleCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIG5vcm1hbENvbHVtbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWZ0Rml4ZWRDb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5sZWZ0Rml4ZWRDb2x1bW5zLmxlbmd0aFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmlnaHRGaXhlZENvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zLmxlbmd0aFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwibGV0IHRhYmxlQ29sdW1uSWRTZWVkID0gMVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wKHRhcmdldCkge1xyXG4gICAgbGV0IGNvbmZpZyA9IHtcclxuICAgICAgICBmaXhlZDogZmFsc2UsXHJcbiAgICAgICAgZml4ZWRTaWRlOiAnJyxcclxuICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgbWlueFdpZHRoOiA1MCxcclxuICAgICAgICBzb3J0YWJsZTogJycsXHJcbiAgICAgICAgcHJvcDogJycsXHJcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2ZpeGVkID0gJywgdGFyZ2V0LmZpeGVkKVxyXG5cclxuICAgIGlmICh0YXJnZXQuZml4ZWQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgY29uZmlnLmZpeGVkID0gdHJ1ZVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0LmZpeGVkID09PSAnc3RyaW5nJyAmJiBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHRhcmdldC5maXhlZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5maXhlZFNpZGUgPSB0YXJnZXQuZml4ZWQudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5maXhlZFNpZGUgPSAnbGVmdCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC53aWR0aCkge1xyXG4gICAgICAgIGNvbmZpZy53aWR0aCA9IHBhcnNlSW50KHRhcmdldC53aWR0aClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0Lm1pbldpZHRoKSB7XHJcbiAgICAgICAgY29uZmlnLm1pbldpZHRoID0gcGFyc2VJbnQodGFyZ2V0Lm1pbldpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQuc29ydGFibGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQuZml4ZWQgPT09ICdzdHJpbmcnICYmIFsnYXNjJywgJ2Rlc2MnXS5pbmRleE9mKHRhcmdldC5maXhlZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5zb3J0YWJsZSA9IHRhcmdldC5zb3J0YWJsZS50b1N0cmluZygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRhYmxlID0gJ2FzYydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC50ZXh0QWxpZ24pIHtcclxuICAgICAgICBjb25maWcudGV4dEFsaWduID0gdGFyZ2V0LnRleHRBbGlnblxyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZy5wcm9wID0gdGFyZ2V0LnByb3BcclxuICAgIGNvbmZpZy5sYWJlbCA9IHRhcmdldC5sYWJlbFxyXG4gICAgXHJcbiAgICByZXR1cm4gY29uZmlnXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1RUYWJsZUNvbHVtbicsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICB3aWR0aDogTnVtYmVyLFxyXG4gICAgICAgIG1pbldpZHRoOiBOdW1iZXIsXHJcbiAgICAgICAgc29ydGFibGU6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIHByb3A6IFN0cmluZyxcclxuICAgICAgICBsYWJlbDogU3RyaW5nLFxyXG4gICAgICAgIHRleHRBbGlnbjogU3RyaW5nLFxyXG4gICAgICAgIGZpbHRlcjogRnVuY3Rpb25cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbHVtbklkOiAnJyxcclxuICAgICAgICAgICAgY29sdW1uQ29uZmlnOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJDb2x1bW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgY29sdW1uT3JUYWJsZVBhcmVudCgpIHtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnRcclxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LnRhYmxlSWQgJiYgIXBhcmVudC5jb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvd25lcigpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudFxyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQudGFibGVJZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2x1bW4gY3JlYXRlZCcpXHJcbiAgICAgICAgdGhpcy4kb3B0aW9ucy5yZW5kZXIgPSBoID0+IGgoJ2RpdicsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXHJcblxyXG4gICAgICAgIHRoaXMuY29sdW1uSWQgPSB0aGlzLiRwYXJlbnQudGFibGVJZCArICdfY29sdW1uXycgKyB0YWJsZUNvbHVtbklkU2VlZCsrXHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcgPSBwYXJzZVByb3AodGhpcylcclxuXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY29sdW1uIG1vdW50ZWQnKVxyXG4gICAgICAgIHRoaXMuaXNTdWJDb2x1bW4gPSB0aGlzLm93bmVyICE9PSB0aGlzLmNvbHVtbk9yVGFibGVQYXJlbnRcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldENvbEluZGV4KHRoaXMuY29sdW1uT3JUYWJsZVBhcmVudCwgdGhpcy4kZWwpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbHRlciA9ICcsIHRoaXMuZmlsdGVyKVxyXG4gICAgICAgIGxldCByZW5kZXJDZWxsID0gKGksIGRhdGEsIHByb3ApID0+IHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmZpbHRlciAmJiB0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdmdW5jdGlvbidcclxuICAgICAgICAgICAgICAgID8gdGhpcy5maWx0ZXIoZGF0YVtwcm9wXSlcclxuICAgICAgICAgICAgICAgIDogZGF0YVtwcm9wXVxyXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImNlbGxcIj57IHYgfTwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uIChpLCBsYWJlbCwgcHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRzY29wZWRTbG90cy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBfc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgcmVuZGVyQ2VsbCA9IGZ1bmN0aW9uIChpLCBkYXRhLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cImNlbGxcIj57X3NlbGYuJHNjb3BlZFNsb3RzLmRlZmF1bHQoe3JvdzogZGF0YSwgaW5kZXg6IGl9KX08L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy4kc2xvdHMuaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBfc2VsZiA9IHRoaXNcclxuICAgICAgICAgICAgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gKGksIGxhYmVsLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NlbGYuJHNsb3RzLmhlYWRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnJlbmRlckNlbGwgPSByZW5kZXJDZWxsXHJcbiAgICAgICAgdGhpcy5jb2x1bW5Db25maWcucmVuZGVySGVhZGVyID0gcmVuZGVySGVhZGVyXHJcblxyXG4gICAgICAgIHRoaXMub3duZXIuc3RvcmUuaW5zZXJ0Q29sdW1uKHRoaXMuY29sdW1uQ29uZmlnLCBpbmRleCwgdGhpcy4kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRzbG90cywgdGhpcy4kc2NvcGVkU2xvdHMpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENvbEluZGV4KCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3ViQ29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IFtdLmluZGV4T2YuY2FsbCh0aGlzLmNvbHVtbk9yVGFibGVQYXJlbnQuJHJlZnMuaGlkZGVuQ29sdW1ucy5jaGlsZHJlbiwgdGhpcy4kZWwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IFtdLmluZGV4T2YuY2FsbCh0aGlzLm93bmVyLiRlbC5jaGlsZHJlbiwgdGhpcy4kZWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzdG9yZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvcnRUeXBlOiAwIC8vIDAgLSBub25lLCAxIC0gYXNjLCAyIC0gZGVzY1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNvcnREYXRhOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmUuc29ydEtleSAhPT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPSBrZXlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSArPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSAlPSAzXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydFR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NvcnREYXRhJywgdGhpcy5zdG9yZS5zb3J0S2V5LCB0aGlzLnNvcnRUeXBlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXIoaCkge1xyXG4gICAgICAgIGxldCBjb2x1bW5zID0gW11cclxuICAgICAgICBsZXQgd2lkdGhcclxuICAgICAgICBpZiAodGhpcy5maXhlZCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICBjb2x1bW5zID0gdGhpcy5zdG9yZS5yaWdodEZpeGVkQ29sdW1uc1xyXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuc3RvcmUucmlnaHRGaXhDb2x1bW5XaWR0aFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maXhlZCA9PT0gJycgfHwgdGhpcy5maXhlZCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLnN0b3JlLmxlZnRGaXhlZENvbHVtbnNcclxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnN0b3JlLmxlZnRGaXhDb2x1bW5XaWR0aFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLnN0b3JlLmNvbHVtbnNcclxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnN0b3JlLnJlYWxDb2x1bW5XaWR0aFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGVcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidC10YWJsZS1oZWFkZXJfYm9keVwiXHJcbiAgICAgICAgICAgICAgICBjZWxscGFkZGluZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgY2VsbHNwYWNpbmc9XCIwXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuX2woY29sdW1ucywgKHJvdywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbCB3aWR0aD17cm93LndpZHRofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9jb2xncm91cD5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLmhlaWdodCArICdweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9sKGNvbHVtbnMsIChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGhcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LnNvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGggPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zb3J0RGF0YShyb3cucHJvcCkuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9PT0gcm93LnByb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNjOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9PT0gcm93LnByb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnJlbmRlckhlYWRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnByb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInQtdGFibGUtc29ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic29ydC1pY29uIGFzY1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzb3J0LWljb24gZGVzY1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5yZW5kZXJIZWFkZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcd2ViXFxcXGxpYmFyeVxcXFx0YWJsZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2EwMDNlNzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYTAwM2U3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtMiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMDAzZTc2JlwiIiwibGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMTcpIFxyXG4gICAgfVxyXG5cclxubGV0IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcclxuICAgIH1cclxuXHJcbi8qKlxyXG4gKiB0OiDlvZPliY3ml7bpl7RcclxuICogYjog5Yid5aeL5YC8XHJcbiAqIGM6IOWPmOWMlumHj1xyXG4gKiBkOiDmjIHnu63ml7bpl7RcclxuICovXHJcblxyXG5mdW5jdGlvbiBUV0VFTigpIHtcclxuICAgIHRoaXMucHJpdmF0ZSA9IHtcclxuICAgICAgICBpZDogLTFcclxuICAgIH1cclxufVxyXG5cclxuVFdFRU4ucHJvdG90eXBlLlF1YWQgPSB7XHJcbiAgICBlYXNlT3V0OiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGJcclxuICAgIH1cclxufVxyXG5cclxuVFdFRU4ucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoZWFzaW5nLCBmcm9tLCB0bywgZHVyYXRpb24sIHRpY2ssIGNhbGxiYWNrKSB7XHJcbiAgICBsZXQgZm4gPSB0aGlzLlF1YWRbZWFzaW5nXVxyXG5cclxuICAgIGlmICghZm4pIHtcclxuICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ25vIGVhc2luZyBmdW5jdGlvbicpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgc3RhcnQgPSAwXHJcblxyXG4gICAgICAgIGxldCBzdGVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCsrXHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBmbihzdGFydCwgZnJvbSwgdG8gLSBmcm9tLCBkdXJhdGlvbilcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXJ0LCB2YWwpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpIC8vIOWIoOmZpOS4iuS4gOasoeeahOWKqOeUu1xyXG4gICAgICAgICAgICBpZiAodmFsIDw9IHRvIHx8IHN0YXJ0ID4gdGljaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FuY2VsQW5pbWF0aW9uRnJhbWUoVFdFRU4ucHJpdmF0ZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB2YWwsICdlbmQnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcml2YXRlLmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0ZXAoKVxyXG4gICAgfVxyXG59XHJcblxyXG5UV0VFTi5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucHJpdmF0ZS5pZClcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUV0VFTlxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIGZhbHNlKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgZm4pIHtcclxuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIGZhbHNlKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==