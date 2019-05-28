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

/***/ "./node_modules/@tweenjs/tween.js/src/Tween.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an update, then the
		// new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated. However,
		// if the removed tween was added during the current batch, then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use self.performance.now if it is available.
else if (typeof (self) !== 'undefined' &&
         self.performance !== undefined &&
		 self.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onRepeatCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function () {
		return this._id;
	},

	isPlaying: function () {
		return this._isPlaying;
	},

	to: function (properties, duration) {

		this._valuesEnd = Object.create(properties);

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	duration: function duration(d) {
		this._duration = d;
		return this;
	},

	start: function (time) {

		this._group.add(this);

		this._isPlaying = true;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			this._valuesStart[property] = this._object[property];

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function () {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);
		this._isPlaying = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function () {

		this.update(Infinity);
		return this;

	},

	stopChainedTweens: function () {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function (group) {
		this._group = group;
		return this;
	},

	delay: function (amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function (times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function (amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function (yoyo) {

		this._yoyo = yoyo;
		return this;

	},

	easing: function (easingFunction) {

		this._easingFunction = easingFunction;
		return this;

	},

	interpolation: function (interpolationFunction) {

		this._interpolationFunction = interpolationFunction;
		return this;

	},

	chain: function () {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function (callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function (callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onRepeat: function onRepeat(callback) {

		this._onRepeatCallback = callback;
		return this;

	},

	onComplete: function (callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function (callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function (time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object, elapsed);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				if (this._onRepeatCallback !== null) {
					this._onRepeatCallback(this._object);
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (true) {

		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return TWEEN;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	} else {}

})(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

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

var _tableBody = __webpack_require__(/*! ./table-body */ "./src/table-body.js");

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHeader = __webpack_require__(/*! ./table-header */ "./src/table-header.js");

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

var _scroller = __webpack_require__(/*! ./scroller */ "./src/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableIdSeed = 1; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
        },
        rowActiveIndex: {
            type: Number,
            default: 8
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
            tempData: this.data.slice(),
            scroller: null
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
        var _this = this;

        setTimeout(function (_) {
            _this.scroller = new _scroller2.default(_this.bodyWrapper, _this.tableHeaderWrapper, _this.leftFixedBodyWrapper, _this.rightFixedBodyWrapper, function (d) {
                _this.$emit('move', d);
                _this.store.updateHorizontelType(_this.maxScrollLeft, d.x);
            });
            _this.initEvent(_this.$refs.tableContainer);
        }, 300);
    },
    updated: function updated() {
        this.$emit('update');
    },
    beforeDestroy: function beforeDestroy() {
        this.destroyEvent(this.$refs.tableContainer);
    },


    methods: {
        touchStart: function touchStart(event) {
            this.scroller.start(event);
        },
        touchMove: function touchMove(event) {
            var _this2 = this;

            // 阻止默认事件发生
            if (!this.canMove) {
                event.preventDefault();
            }
            this.scroller.move(event, function (_ref) {
                var x = _ref.x;

                _this2.store.updateHorizontelType(_this2.maxScrollLeft, x);
            });
        },
        touchEnd: function touchEnd(event) {
            this.scroller.end(event);
        },
        initEvent: function initEvent(target) {
            (0, _utils.addEventListener)(target, 'touchstart', this.touchStart.bind(this));
            (0, _utils.addEventListener)(target, 'touchmove', this.touchMove.bind(this));
            (0, _utils.addEventListener)(target, 'touchend', this.touchEnd.bind(this));
        },
        destroyEvent: function destroyEvent(target) {
            (0, _utils.removeEventListener)(target, 'touchstart', this.touchStart.bind(this));
            (0, _utils.removeEventListener)(target, 'touchmove', this.touchMove.bind(this));
            (0, _utils.removeEventListener)(target, 'touchend', this.touchEnd.bind(this));
        },
        sortData: function sortData(key, sortType) {
            // debugger
            if (sortType === 1) {
                this.tempData = this.tempData.sort(function (a, b) {
                    return a[key] - b[key];
                });
            } else if (sortType === 2) {
                this.tempData = this.tempData.sort(function (a, b) {
                    return b[key] - a[key];
                });
            } else {
                this.tempData = this.raw_data.sort(function (a, b) {
                    return a.__raw_index__ - b.__raw_index__;
                });
            }
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.tempData.length > 0,
              expression: "tempData.length > 0"
            }
          ],
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
                attrs: {
                  store: _vm.store,
                  data: _vm.tempData,
                  rowActiveIndex: _vm.rowActiveIndex
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isLeftFixed && _vm.tempData.length > 0,
              expression: "isLeftFixed && tempData.length > 0"
            }
          ],
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
                  rowActiveIndex: _vm.rowActiveIndex,
                  fixed: "left"
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isRightFixed && _vm.tempData.length > 0,
              expression: "isRightFixed && tempData.length > 0"
            }
          ],
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
                  rowActiveIndex: _vm.rowActiveIndex,
                  fixed: "right"
                }
              })
            ],
            1
          )
        ]
      ),
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

/***/ "./src/scroller.js":
/*!*************************!*\
  !*** ./src/scroller.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tween = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/src/Tween.js");

var _tween2 = _interopRequireDefault(_tween);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroller = function () {
    function Scroller(body, header, left, right, endCallback) {
        _classCallCheck(this, Scroller);

        this.body = body;
        this.header = header;
        this.left = left;
        this.right = right;
        this.x = 0;
        this.y = 0;
        this.startPoint = null;
        this.endPoint = null;
        this._isMoved = false;
        this.startTimestamp = -1;
        this.endTimestamp = -1;
        this.tweenObj = {
            tweenSide: '',
            speed: 0
        };
        this.tween = null;
        this.endCallback = endCallback;
        this.timer = -1;
    }

    _createClass(Scroller, [{
        key: 'render',
        value: function render(x, y) {
            this.body && (this.body.scrollTop = y, this.body.scrollLeft = x);
            this.left && (this.left.scrollTop = y);
            this.right && (this.right.scrollTop = y);
            this.header && (this.header.scrollLeft = x);
        }
    }, {
        key: 'start',
        value: function start(event) {
            if (this._isMoved) {
                return;
            }
            if (this.tween) {
                this.tween.stop();
                (0, _utils.cancelRequestAnimationFrame)(this.timer);
                this.endCallback({ x: this.x, y: this.y });
            }
            this.startTimestamp = Date.now();
            this.startPoint = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
        }
    }, {
        key: 'move',
        value: function move(event, callback) {
            this._isMoved = true;
            this.endPoint = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };
            var x = this.endPoint.x - this.startPoint.x;
            var y = this.endPoint.y - this.startPoint.y;

            x = this.x - x;
            y = this.y - y;

            this.render(x, y);
            callback({ x: x, y: y });
        }
    }, {
        key: 'end',
        value: function end(event, callback) {
            if (!this._isMoved) {
                return;
            }
            this.updateLayout();
            var endPoint = this.endPoint;
            var startPoint = this.startPoint;
            this._isMoved = false;
            var endTime = Date.now();
            var startTime = this.startTimestamp;

            var _side = endPoint.y - startPoint.y > 0 ? 'top' : 'bottom';
            var _side2 = endPoint.x - startPoint.x > 0 ? 'right' : 'left';
            if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
                this.tweenObj.speed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000);
                this.tweenObj.tweenSide = _side;
            } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
                this.tweenObj.speed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000);
                this.tweenObj.tweenSide = _side2;
            } else {
                return;
            }

            this.tween = new _tween2.default.Tween(this.tweenObj).to({
                speed: 0
            }, 500).start();

            this.animate();
        }
    }, {
        key: 'animate',
        value: function animate() {
            console.log('tween');
            _tween2.default.update();

            var tweenSide = this.tweenObj.tweenSide;
            var v = this.tweenObj.speed;
            if (tweenSide === 'left' || tweenSide === 'right') {
                this.x = tweenSide === 'right' ? this.x - v / 35 : this.x + v / 35;
            } else {
                this.y = tweenSide === 'top' ? this.y - v / 35 : this.y + v / 35;
            }

            this.render(this.x, this.y);

            if (this.tweenObj.speed > 0) {
                this.timer = (0, _utils.requestAnimationFrame)(this.animate.bind(this));
            } else {
                this.endCallback({ x: this.x, y: this.y });
                this.tween = null;
            }
        }
    }, {
        key: 'updateLayout',
        value: function updateLayout() {
            this.y = this.body.scrollTop;
            this.x = this.body.scrollLeft;
        }
    }]);

    return Scroller;
}();

module.exports = Scroller;

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
    functional: true,

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

    render: function render(h, context) {
        var columns = context.props.store.columns.slice();
        if (context.props.fixed === 'right') {
            columns = columns.reverse();
        }

        return h(
            "table",
            { "class": "t-table_body", attrs: { cellpadding: "0", cellspacing: "0", border: "0", width: context.props.store.realColumnWidth }
            },
            [h("colgroup", [context._l(columns, function (row, index) {
                return h("col", {
                    attrs: { width: row.width }
                });
            })]), h("tbody", [context._l(context.props.data, function (row, index) {
                var tds = void 0;
                if (context.props.fixed === 'right') {
                    tds = columns.map(function (col, colIndex) {
                        return h(
                            "td",
                            { "class": { active: context.props.store.sortKey === col.prop, 'is-hidden': !col.fixed || col.fixedSide !== 'right' }, style: { 'text-align': col.textAlign } },
                            [col.renderCell(index, row, col.prop)]
                        );
                    });
                } else if (context.props.fixed === '' || context.props.fixed === 'left') {
                    tds = columns.map(function (col, colIndex) {
                        return h(
                            "td",
                            { "class": { active: context.props.store.sortKey === col.prop, 'is-hidden': !col.fixed || col.fixedSide !== 'left' }, style: { 'text-align': col.textAlign } },
                            [col.renderCell(index, row, col.prop)]
                        );
                    });
                } else {
                    tds = columns.map(function (col, colIndex) {
                        return h(
                            "td",
                            { "class": { active: context.props.store.sortKey === col.prop, 'is-hidden': col.fixed }, style: { 'text-align': col.textAlign } },
                            [col.renderCell(index, row, col.prop)]
                        );
                    });
                }
                var tr = h(
                    "tr",
                    { "class": { 'active': context.props.rowActiveIndex > index } },
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
        sortData: function sortData(key, sortable) {
            return function (e) {
                if (!sortable) {
                    return false;
                }
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

                    th = h(
                        'th',
                        {
                            on: {
                                'click': _this.sortData(row.prop, row.sortable).bind(_this)
                            },

                            'class': {
                                active: _this.sortType !== 0 && _this.store.sortKey === row.prop,
                                sortable: row.sortable,
                                asc: _this.sortType === 1 && _this.store.sortKey === row.prop,
                                desc: _this.sortType === 2 && _this.store.sortKey === row.prop
                            }
                        },
                        [row.renderHeader(index, row.label, row.prop), row.sortable ? h(
                            'span',
                            { 'class': 't-table-sort' },
                            [h('i', { 'class': 'sort-icon asc' }), h('i', { 'class': 'sort-icon desc' })]
                        ) : '']
                    );
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

var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    return setTimeout(fn, 17);
};

var cancelRequestAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function (id) {
    return clearTimeout(id);
};
exports.requestAnimationFrame = requestAnimationFrame;
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;

exports.quickSort = function (arr) {
    function partition(arr, start, end) {
        if (start >= end) {
            return;
        }

        var i = start;
        var j = end;
        var temp = arr[start];

        while (i < j) {
            while (arr[i] > temp && i < j) {
                i += 1;
            }
            while (arr[j] < temp && i < j) {
                j -= 1;
            }
            if (i < j) {
                var _ref = [arr[j], arr[i]];
                arr[i] = _ref[0];
                arr[j] = _ref[1];
            }
        }

        arr[start] = arr[i];
        arr[i] = temp;
        return i;
    }

    var index = partition(arr, 0, arr.length - 1);
    partition(arr, 0, index - 1);
    partition(arr, index + 1, arr.length - 1);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0d2VlbmpzL3R3ZWVuLmpzL3NyYy9Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2I3YWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/YTljYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MWE2YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njcm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUtY29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJsZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdGFibGUudnVlP2M2ZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYmxlLnZ1ZT83YWEyIiwid2VicGFjazovLy8uL3NyYy90YWJsZS52dWU/MmUxMSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiU2Nyb2xsZXIiLCJib2R5IiwiaGVhZGVyIiwibGVmdCIsInJpZ2h0IiwiZW5kQ2FsbGJhY2siLCJ4IiwieSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsIl9pc01vdmVkIiwic3RhcnRUaW1lc3RhbXAiLCJlbmRUaW1lc3RhbXAiLCJ0d2Vlbk9iaiIsInR3ZWVuU2lkZSIsInNwZWVkIiwidHdlZW4iLCJ0aW1lciIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJldmVudCIsInN0b3AiLCJEYXRlIiwibm93IiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiY2FsbGJhY2siLCJyZW5kZXIiLCJ1cGRhdGVMYXlvdXQiLCJlbmRUaW1lIiwic3RhcnRUaW1lIiwiX3NpZGUiLCJfc2lkZTIiLCJNYXRoIiwiYWJzIiwiVFdFRU4iLCJUd2VlbiIsInRvIiwic3RhcnQiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsInYiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsIlN0b3JlIiwiY29sdW1ucyIsIl9jb2x1bW5zIiwibGVmdEZpeGVkQ29sdW1ucyIsInJpZ2h0Rml4ZWRDb2x1bW5zIiwiaGlkZGVuQ29sdW1ucyIsImJvZHlXaWR0aCIsInJlYWxDb2x1bW5XaWR0aCIsImxlZnRGaXhDb2x1bW5XaWR0aCIsInJpZ2h0Rml4Q29sdW1uV2lkdGgiLCJzb3J0S2V5IiwiaG9yaXpvbnRlbFNjcm9sbFR5cGUiLCJ2ZXJ0aWNhbFNjcm9sbFR5cGUiLCJjb2x1bW4iLCJpbmRleCIsInBhcmVudCIsInB1c2giLCJ1cGRhdGVDb2x1bW5zIiwidXBkYXRlQ29sdW1uV2lkdGgiLCJzbGljZSIsIm5vcm1hbENvbHVtbnMiLCJmaWx0ZXIiLCJpdGVtIiwiZml4ZWQiLCJoaWRkZW4iLCJmaXhlZFNpZGUiLCJtYXAiLCJ3aWR0aCIsIm1heFNjcm9sbExlZnQiLCJjdXJTY3JvbGxMZWZ0IiwiZnVuY3Rpb25hbCIsInByb3BzIiwic3RvcmUiLCJyZXF1aXJlZCIsIkJvb2xlYW4iLCJTdHJpbmciLCJkYXRhIiwiQXJyYXkiLCJyb3dBY3RpdmVJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiaCIsImNvbnRleHQiLCJyZXZlcnNlIiwiX2wiLCJyb3ciLCJ0ZHMiLCJjb2wiLCJjb2xJbmRleCIsImFjdGl2ZSIsInByb3AiLCJ0ZXh0QWxpZ24iLCJyZW5kZXJDZWxsIiwidHIiLCJjb21wdXRlZCIsImxlZnRGaXhlZENvdW50IiwibGVuZ3RoIiwicmlnaHRGaXhlZENvdW50IiwibWV0aG9kcyIsInRhYmxlQ29sdW1uSWRTZWVkIiwicGFyc2VQcm9wIiwidGFyZ2V0IiwiY29uZmlnIiwibWlueFdpZHRoIiwic29ydGFibGUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImxhYmVsIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwicGFyc2VJbnQiLCJtaW5XaWR0aCIsIm5hbWUiLCJGdW5jdGlvbiIsImNvbHVtbklkIiwiY29sdW1uQ29uZmlnIiwiaXNTdWJDb2x1bW4iLCJjb2x1bW5PclRhYmxlUGFyZW50IiwiJHBhcmVudCIsInRhYmxlSWQiLCJvd25lciIsImNyZWF0ZWQiLCIkb3B0aW9ucyIsIiRzbG90cyIsIm1vdW50ZWQiLCJnZXRDb2xJbmRleCIsIiRlbCIsImkiLCJyZW5kZXJIZWFkZXIiLCIkc2NvcGVkU2xvdHMiLCJfc2VsZiIsImluc2VydENvbHVtbiIsImNhbGwiLCIkcmVmcyIsImNoaWxkcmVuIiwiaGVpZ2h0Iiwic29ydFR5cGUiLCJzb3J0RGF0YSIsImtleSIsImUiLCIkZW1pdCIsInRoIiwiYXNjIiwiZGVzYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnROYW1lIiwiZm4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwicXVpY2tTb3J0IiwiYXJyIiwicGFydGl0aW9uIiwiZW5kIiwiaiIsInRlbXAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDUzs7QUFFNUM7QUFDQTtBQUNBLGtCQUFrQixzREFBSyxPQUFPLHNEQUFLO0FBQ25DLGtCQUFrQix3REFBVyxPQUFPLHdEQUFXO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLElBQUksNkRBQUs7QUFDVCxJQUFJLHVFQUFXO0FBQ2YsQzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7O0FBRXZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUEsZ0VBQWdFLHNCQUFzQjtBQUN0RjtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7O0FBRUEsa0VBQWtFLHNCQUFzQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QXhCLEVBQStCa0ksR0FBL0IsRUFBb0M7QUFDaEMsWUFBSWxJLFNBQVNrSSxHQUFiLEVBQWtCO0FBQ2Q7QUFDSDs7QUFFRCxZQUFJakMsSUFBSWpHLEtBQVI7QUFDQSxZQUFJbUksSUFBSUQsR0FBUjtBQUNBLFlBQUlFLE9BQU9KLElBQUloSSxLQUFKLENBQVg7O0FBRUEsZUFBT2lHLElBQUlrQyxDQUFYLEVBQWM7QUFDVixtQkFBT0gsSUFBSS9CLENBQUosSUFBU21DLElBQVQsSUFBaUJuQyxJQUFJa0MsQ0FBNUIsRUFBK0I7QUFDM0JsQyxxQkFBSyxDQUFMO0FBQ0g7QUFDRCxtQkFBTytCLElBQUlHLENBQUosSUFBU0MsSUFBVCxJQUFpQm5DLElBQUlrQyxDQUE1QixFQUErQjtBQUMzQkEscUJBQUssQ0FBTDtBQUNIO0FBQ0QsZ0JBQUlsQyxJQUFJa0MsQ0FBUixFQUFXO0FBQUEsMkJBQ1ksQ0FBQ0gsSUFBSUcsQ0FBSixDQUFELEVBQVNILElBQUkvQixDQUFKLENBQVQsQ0FEWjtBQUNOK0Isb0JBQUkvQixDQUFKLENBRE07QUFDRStCLG9CQUFJRyxDQUFKLENBREY7QUFFVjtBQUNKOztBQUVESCxZQUFJaEksS0FBSixJQUFhZ0ksSUFBSS9CLENBQUosQ0FBYjtBQUNBK0IsWUFBSS9CLENBQUosSUFBU21DLElBQVQ7QUFDQSxlQUFPbkMsQ0FBUDtBQUNIOztBQUVELFFBQUkxRSxRQUFRMEcsVUFBVUQsR0FBVixFQUFlLENBQWYsRUFBa0JBLElBQUk5RCxNQUFKLEdBQWEsQ0FBL0IsQ0FBWjtBQUNBK0QsY0FBVUQsR0FBVixFQUFlLENBQWYsRUFBa0J6RyxRQUFRLENBQTFCO0FBQ0EwRyxjQUFVRCxHQUFWLEVBQWV6RyxRQUFRLENBQXZCLEVBQTBCeUcsSUFBSTlELE1BQUosR0FBYSxDQUF2QztBQUNILENBOUJELEMiLCJmaWxlIjoidGFibGUuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnLi9zcmMvdGFibGUudnVlJ1xyXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi9zcmMvdGFibGUtY29sdW1uJ1xyXG5cclxuZnVuY3Rpb24gaW5zdGFsbChWdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFRhYmxlLm5hbWUpXHJcbiAgICBWdWUuY29tcG9uZW50KFRhYmxlLm5hbWUsIFRhYmxlKVxyXG4gICAgVnVlLmNvbXBvbmVudChUYWJsZUNvbHVtbi5uYW1lLCBUYWJsZUNvbHVtbilcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcclxuICAgIGluc3RhbGwod2luZG93LlZ1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgVGFibGUsXHJcbiAgICBUYWJsZUNvbHVtblxyXG59IiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG5cbnZhciBfR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX3R3ZWVucyA9IHt9O1xuXHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xufTtcblxuX0dyb3VwLnByb3RvdHlwZSA9IHtcblx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKS5tYXAoZnVuY3Rpb24gKHR3ZWVuSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl90d2VlbnNbdHdlZW5JZF07XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9LFxuXG5cdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fdHdlZW5zID0ge307XG5cblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0dGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV0gPSB0d2VlbjtcblxuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldO1xuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXTtcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUsIHByZXNlcnZlKSB7XG5cblx0XHR2YXIgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuXG5cdFx0aWYgKHR3ZWVuSWRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogVFdFRU4ubm93KCk7XG5cblx0XHQvLyBUd2VlbnMgYXJlIHVwZGF0ZWQgaW4gXCJiYXRjaGVzXCIuIElmIHlvdSBhZGQgYSBuZXcgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgdGhlbiB0aGVcblx0XHQvLyBuZXcgdHdlZW4gd2lsbCBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IGJhdGNoLlxuXHRcdC8vIElmIHlvdSByZW1vdmUgYSB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCBpdCBtYXkgb3IgbWF5IG5vdCBiZSB1cGRhdGVkLiBIb3dldmVyLFxuXHRcdC8vIGlmIHRoZSByZW1vdmVkIHR3ZWVuIHdhcyBhZGRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgYmF0Y2gsIHRoZW4gaXQgd2lsbCBub3QgYmUgdXBkYXRlZC5cblx0XHR3aGlsZSAodHdlZW5JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0d2Vlbklkcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cblx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLnVwZGF0ZSh0aW1lKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0d2Vlbi5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIXByZXNlcnZlKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxudmFyIFRXRUVOID0gbmV3IF9Hcm91cCgpO1xuXG5UV0VFTi5Hcm91cCA9IF9Hcm91cDtcblRXRUVOLl9uZXh0SWQgPSAwO1xuVFdFRU4ubmV4dElkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gVFdFRU4uX25leHRJZCsrO1xufTtcblxuXG4vLyBJbmNsdWRlIGEgcGVyZm9ybWFuY2Uubm93IHBvbHlmaWxsLlxuLy8gSW4gbm9kZS5qcywgdXNlIHByb2Nlc3MuaHJ0aW1lLlxuaWYgKHR5cGVvZiAoc2VsZikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugc2VsZi5wZXJmb3JtYW5jZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAodHlwZW9mIChzZWxmKSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHNlbGYucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCBzZWxmLnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdC8vIFRoaXMgbXVzdCBiZSBib3VuZCwgYmVjYXVzZSBkaXJlY3RseSBhc3NpZ25pbmcgdGhpcyBmdW5jdGlvblxuXHQvLyBsZWFkcyB0byBhbiBpbnZvY2F0aW9uIGV4Y2VwdGlvbiBpbiBDaHJvbWUuXG5cdFRXRUVOLm5vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QsIGdyb3VwKSB7XG5cdHRoaXMuX29iamVjdCA9IG9iamVjdDtcblx0dGhpcy5fdmFsdWVzU3RhcnQgPSB7fTtcblx0dGhpcy5fdmFsdWVzRW5kID0ge307XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHRoaXMuX2R1cmF0aW9uID0gMTAwMDtcblx0dGhpcy5fcmVwZWF0ID0gMDtcblx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gdW5kZWZpbmVkO1xuXHR0aGlzLl95b3lvID0gZmFsc2U7XG5cdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXHR0aGlzLl9yZXZlcnNlZCA9IGZhbHNlO1xuXHR0aGlzLl9kZWxheVRpbWUgPSAwO1xuXHR0aGlzLl9zdGFydFRpbWUgPSBudWxsO1xuXHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX2dyb3VwID0gZ3JvdXAgfHwgVFdFRU47XG5cdHRoaXMuX2lkID0gVFdFRU4ubmV4dElkKCk7XG5cbn07XG5cblRXRUVOLlR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Z2V0SWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH0sXG5cblx0aXNQbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzUGxheWluZztcblx0fSxcblxuXHR0bzogZnVuY3Rpb24gKHByb3BlcnRpZXMsIGR1cmF0aW9uKSB7XG5cblx0XHR0aGlzLl92YWx1ZXNFbmQgPSBPYmplY3QuY3JlYXRlKHByb3BlcnRpZXMpO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkdXJhdGlvbjogZnVuY3Rpb24gZHVyYXRpb24oZCkge1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdGFydDogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHRoaXMuX2dyb3VwLmFkZCh0aGlzKTtcblxuXHRcdHRoaXMuX2lzUGxheWluZyA9IHRydWU7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdHlwZW9mIHRpbWUgPT09ICdzdHJpbmcnID8gVFdFRU4ubm93KCkgKyBwYXJzZUZsb2F0KHRpbWUpIDogdGltZSA6IFRXRUVOLm5vdygpO1xuXHRcdHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSB0aGUgc3RhcnRpbmcgdmFsdWUuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcDogZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzKTtcblx0XHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMudXBkYXRlKEluZmluaXR5KTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3BDaGFpbmVkVHdlZW5zOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fSxcblxuXHRncm91cDogZnVuY3Rpb24gKGdyb3VwKSB7XG5cdFx0dGhpcy5fZ3JvdXAgPSBncm91cDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0OiBmdW5jdGlvbiAodGltZXMpIHtcblxuXHRcdHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0RGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHlveW86IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHR0aGlzLl95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVhc2luZzogZnVuY3Rpb24gKGVhc2luZ0Z1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0aW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKGludGVycG9sYXRpb25GdW5jdGlvbikge1xuXG5cdFx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2hhaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25VcGRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25SZXBlYXQ6IGZ1bmN0aW9uIG9uUmVwZWF0KGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvbkNvbXBsZXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdG9wOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcblxuXHRcdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGVsYXBzZWQgPSAodGltZSAtIHRoaXMuX3N0YXJ0VGltZSkgLyB0aGlzLl9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gKHRoaXMuX2R1cmF0aW9uID09PSAwIHx8IGVsYXBzZWQgPiAxKSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIERvbid0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCwgZWxhcHNlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsYXBzZWQgPT09IDEpIHtcblxuXHRcdFx0aWYgKHRoaXMuX3JlcGVhdCA+IDApIHtcblxuXHRcdFx0XHRpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0RGVsYXlUaW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fcmVwZWF0RGVsYXlUaW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fb25SZXBlYXRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0XHRcdC8vIE1ha2UgdGhlIGNoYWluZWQgdHdlZW5zIHN0YXJ0IGV4YWN0bHkgYXQgdGhlIHRpbWUgdGhleSBzaG91bGQsXG5cdFx0XHRcdFx0Ly8gZXZlbiBpZiB0aGUgYHVwZGF0ZSgpYCBtZXRob2Qgd2FzIGNhbGxlZCB3YXkgcGFzdCB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuXG5cdFx0XHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdGFydCh0aGlzLl9zdGFydFRpbWUgKyB0aGlzLl9kdXJhdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cblxuVFdFRU4uRWFzaW5nID0ge1xuXG5cdExpbmVhcjoge1xuXG5cdFx0Tm9uZTogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqICgyIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YXJ0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKC0tayAqIGsgKiBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRTaW51c29pZGFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyhrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc2luKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtIDEwICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKC0gTWF0aC5wb3coMiwgLSAxMCAqIChrIC0gMSkpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1rICogaykpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtIDAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoayAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGsgKj0gMjtcblxuXHRcdFx0aWYgKGsgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1O1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi4yNSAvIDIuNzUpKSAqIGsgKyAwLjkzNzU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuNjI1IC8gMi43NSkpICogayArIDAuOTg0Mzc1O1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8IDAuNSkge1xuXHRcdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmIChrIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xuXHRcdH1cblxuXHRcdGlmIChrID4gMSkge1xuXHRcdFx0cmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIGIgPSAwO1xuXHRcdHZhciBuID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBwdyA9IE1hdGgucG93O1xuXHRcdHZhciBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG5cdFx0XHRiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAodlswXSA9PT0gdlttXSkge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0aSA9IE1hdGguZmxvb3IoZiA9IG0gKiAoMSArIGspKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0cmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID4gMSkge1xuXHRcdFx0XHRyZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uIChwMCwgcDEsIHQpIHtcblxuXHRcdFx0cmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uIChuLCBpKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXG5cdFx0XHRyZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWzFdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0XHR2YXIgcyA9IDE7XG5cblx0XHRcdFx0aWYgKGFbbl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gYVtuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0cyAqPSBpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YVtuXSA9IHM7XG5cdFx0XHRcdHJldHVybiBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuXG5cdFx0XHR2YXIgdjAgPSAocDIgLSBwMCkgKiAwLjU7XG5cdFx0XHR2YXIgdjEgPSAocDMgLSBwMSkgKiAwLjU7XG5cdFx0XHR2YXIgdDIgPSB0ICogdDtcblx0XHRcdHZhciB0MyA9IHQgKiB0MjtcblxuXHRcdFx0cmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuKGZ1bmN0aW9uIChyb290KSB7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gVFdFRU47XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblxuXHRcdC8vIE5vZGUuanNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFRXRUVOO1xuXG5cdH0gZWxzZSBpZiAocm9vdCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHQvLyBHbG9iYWwgdmFyaWFibGVcblx0XHRyb290LlRXRUVOID0gVFdFRU47XG5cblx0fVxuXG59KSh0aGlzKTtcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInQtY29udGFpbmVyXCJcclxuICAgICAgICByZWY9XCJ0YWJsZUNvbnRhaW5lclwiXHJcbiAgICAgICAgOnN0eWxlPVwic3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJoaWRkZW4tY29sdW1uXCJcclxuICAgICAgICAgICAgcmVmPVwiaGlkZGVuQ29sdW1uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWhlYWRlci13cmFwcGVyXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBzdHlsZS53aWR0aH1cIlxyXG4gICAgICAgICAgICByZWY9XCJ0VGFibGVIZWFkZXJXcmFwcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnN0b3JlPVwic3RvcmVcIiBAc29ydERhdGE9XCJzb3J0RGF0YVwiIDptYXhIZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIj48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LXNob3c9XCJ0ZW1wRGF0YS5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICByZWY9XCJ0VGFibGVXcmFwcGVyXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogc3R5bGUud2lkdGgsIG1heEhlaWdodDogYm9keUhlaWdodCwgaGVpZ2h0OiBib2R5SGVpZ2h0IH1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiByZWY9XCJ0VGFibGVCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cInRlbXBEYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICA6cm93QWN0aXZlSW5kZXg9XCJyb3dBY3RpdmVJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA+PC90YWJsZS1ib2R5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LXNob3c9XCJpc0xlZnRGaXhlZCAmJiB0ZW1wRGF0YS5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkLXdyYXBwZXJfbGVmdFwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInN0b3JlLmhvcml6b250ZWxTY3JvbGxUeXBlXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie21heFdpZHRoOiBsZWZ0Rml4Q29sdW1uV2lkdGggKyAncHgnLCBtYXhIZWlnaHQ6IG1heEhlaWdodCwgaGVpZ2h0OiBzdHlsZS5oZWlnaHR9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWFkZXJIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBzb3J0RGF0YT1cInNvcnREYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGFibGUtaGVhZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInQtdGFibGUtZml4ZWRfYm9keVwiIHJlZj1cInRUYWJsZUxlZnRGaXhlZFdyYXBwZXJcIiA6c3R5bGU9XCJ7IG1heEhlaWdodDogYm9keUhlaWdodCB9XCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIDpzdG9yZT1cInN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YT1cInRlbXBEYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICA6cm93QWN0aXZlSW5kZXg9XCJyb3dBY3RpdmVJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZml4ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHYtc2hvdz1cImlzUmlnaHRGaXhlZCAmJiB0ZW1wRGF0YS5sZW5ndGggPiAwXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHRcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZVwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInttYXhXaWR0aDogcmlnaHRGaXhDb2x1bW5XaWR0aCArICdweCcsIG1heEhlaWdodDogdGhpcy5tYXhIZWlnaHQsIGhlaWdodDogc3R5bGUuaGVpZ2h0fVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlclxyXG4gICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgOm1heEhlaWdodD1cImhlYWRlckhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICBAc29ydERhdGE9XCJzb3J0RGF0YVwiXHJcbiAgICAgICAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWhlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0LXRhYmxlLWZpeGVkX2JvZHlcIiByZWY9XCJ0VGFibGVSaWdodEZpeGVkV3JhcHBlclwiIDpzdHlsZT1cInsgbWF4SGVpZ2h0OiBib2R5SGVpZ2h0IH1cIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgOnN0b3JlPVwic3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhPVwidGVtcERhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpyb3dBY3RpdmVJbmRleD1cInJvd0FjdGl2ZUluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICBmaXhlZD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID48L3RhYmxlLWJvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c2xvdCBuYW1lPVwiZW1wdHlcIiB2LWlmPVwiZGF0YS5sZW5ndGggPT09IDBcIj48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxyXG5AaW1wb3J0IHVybCguL3N0eWxlL3N0eWxlLmxlc3MpO1xyXG48L3N0eWxlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vdGFibGUtYm9keSdcclxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vdGFibGUtaGVhZGVyJ1xyXG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyLCBxdWlja1NvcnQgfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgU2Nyb2xsZXIgZnJvbSAnLi9zY3JvbGxlcidcclxuXHJcbmxldCB0YWJsZUlkU2VlZCA9IDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUVGFibGUnLFxyXG5cclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBUYWJsZUJvZHksXHJcbiAgICAgICAgVGFibGVIZWFkZXJcclxuICAgIH0sXHJcblxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBib3JkZXI6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuTW92ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVySGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgZGVmYXVsdDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heEhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3dBY3RpdmVJbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDhcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgcmF3X2RhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5fX3Jhd19pbmRleF9fID0gaW5kZXhcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSB7fTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0ICYmIHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHIuaGVpZ2h0ID0gdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCAmJiB0eXBlb2YgdGhpcy53aWR0aCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHIud2lkdGggPSB0aGlzLndpZHRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYm9keUhlaWdodDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gJydcclxuICAgICAgICAgICAgbGV0IF9oZWlnaHQgPSB0aGlzLmhlaWdodCAgIFxyXG4gICAgICAgICAgICAgICAgPyArdGhpcy5oZWlnaHQubWF0Y2goLyhcXGQrKS8pWzFdXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBsZXQgX21heEhlaWdodCA9IHRoaXMubWF4SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICA/ICt0aGlzLm1heEhlaWdodC5tYXRjaCgvKFxcZCspLylbMV1cclxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcblxyXG4gICAgICAgICAgICBsZXQgaCA9IF9oZWlnaHQgJiYgX21heEhlaWdodFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbihfaGVpZ2h0LCBfbWF4SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgOiBfaGVpZ2h0ID8gX2hlaWdodCA6IF9tYXhIZWlnaHRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAoaCAtIHRoaXMuaGVhZGVySGVpZ2h0KSArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNMZWZ0Rml4ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmxlZnRGaXhlZENvbHVtbnMubGVuZ3RoID4gMFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzUmlnaHRGaXhlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnMubGVuZ3RoID4gMFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJvZHlXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVmdEZpeGVkQm9keVdyYXBwZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRUYWJsZUxlZnRGaXhlZFdyYXBwZXJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByaWdodEZpeGVkQm9keVdyYXBwZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGFibGVIZWFkZXJXcmFwcGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVIZWFkZXJXcmFwcGVyXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGFibGVCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy50VGFibGVCb2R5XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWF4U2Nyb2xsTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnN0b3JlLnJlYWxDb2x1bW5XaWR0aCAtIHRoaXMuYm9keVdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuICAgICAgICAgICAgcmV0dXJuIHJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtYXhTY3JvbGxIZWlnaHQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoIC8gKHRoaXMuZGF0YS5sZW5ndGggfHwgMSkgKyB0aGlzLnRhYmxlQm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSB0aGlzLmJvZHlXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YWJsZUlkOiAnJyxcclxuICAgICAgICAgICAgc3RvcmU6IG5ldyBTdG9yZSgpLFxyXG4gICAgICAgICAgICBsZWZ0Rml4Q29sdW1uV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0Rml4Q29sdW1uV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHRlbXBEYXRhOiB0aGlzLmRhdGEuc2xpY2UoKSxcclxuICAgICAgICAgICAgc2Nyb2xsZXI6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgJ3N0b3JlLmxlZnRGaXhDb2x1bW5XaWR0aCcobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSBuZXdWYWxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzdG9yZS5yaWdodEZpeENvbHVtbldpZHRoJyhuZXdWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodEZpeENvbHVtbldpZHRoID0gbmV3VmFsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGF0YScobmV3VmFsKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1ZhbClcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGF0YSA9IG5ld1ZhbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9fcmF3X2luZGV4X18gPSBpbmRleFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUlkID0gYHQtdGFibGVfYCArIHRhYmxlSWRTZWVkKytcclxuICAgIH0sXHJcblxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KF8gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyID0gbmV3IFNjcm9sbGVyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5V3JhcHBlciwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSGVhZGVyV3JhcHBlciwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRGaXhlZEJvZHlXcmFwcGVyLCBcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRGaXhlZEJvZHlXcmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbW92ZScsIGQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVIb3Jpem9udGVsVHlwZSh0aGlzLm1heFNjcm9sbExlZnQsIGQueClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudCh0aGlzLiRyZWZzLnRhYmxlQ29udGFpbmVyKVxyXG4gICAgICAgIH0sIDMwMClcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlZCgpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKVxyXG4gICAgfSxcclxuXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveUV2ZW50KHRoaXMuJHJlZnMudGFibGVDb250YWluZXIpXHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuc3RhcnQoZXZlbnQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOmYu+atoum7mOiupOS6i+S7tuWPkeeUn1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuTW92ZSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLm1vdmUoZXZlbnQsICh7eH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSG9yaXpvbnRlbFR5cGUodGhpcy5tYXhTY3JvbGxMZWZ0LCB4KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIuZW5kKGV2ZW50KVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXRFdmVudCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsICd0b3VjaGVuZCcsIHRoaXMudG91Y2hFbmQuYmluZCh0aGlzKSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZXN0cm95RXZlbnQodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2hzdGFydCcsIHRoaXMudG91Y2hTdGFydC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKHRhcmdldCwgJ3RvdWNobW92ZScsIHRoaXMudG91Y2hNb3ZlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIodGFyZ2V0LCAndG91Y2hlbmQnLCB0aGlzLnRvdWNoRW5kLmJpbmQodGhpcykpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc29ydERhdGEoa2V5LCBzb3J0VHlwZSkge1xyXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcERhdGEgPSB0aGlzLnRlbXBEYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVtrZXldIC0gYltrZXldXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBEYXRhID0gdGhpcy50ZW1wRGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJba2V5XSAtIGFba2V5XVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcERhdGEgPSB0aGlzLnJhd19kYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5fX3Jhd19pbmRleF9fIC0gYi5fX3Jhd19pbmRleF9fXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uaXMtaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LFxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiAjMjgyYTJlO1xcbn1cXG4udC10YWJsZS1maXhlZC13cmFwcGVyX2xlZnQge1xcbiAgbGVmdDogMDtcXG59XFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LmlzLXNjcm9sbC1taWRkbGUsXFxuLnQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0LmlzLXNjcm9sbC1yaWdodCB7XFxuICBib3gtc2hhZG93OiAwIC0ycHggNXB4ICNkZGQ7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi50LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHQuaXMtc2Nyb2xsLW1pZGRsZSxcXG4udC10YWJsZS1maXhlZC13cmFwcGVyX3JpZ2h0LmlzLXNjcm9sbC1sZWZ0IHtcXG4gIGJveC1zaGFkb3c6IDAgLTJweCA1cHggI2RkZDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHksXFxuLnQtdGFibGVfYm9keSB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzI4MmEyZTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIsXFxuLnQtdGFibGVfYm9keSB0ciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4udC10YWJsZS1oZWFkZXJfYm9keSB0ci5hY3RpdmUsXFxuLnQtdGFibGVfYm9keSB0ci5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0ZGRjdFRTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIuYWN0aXZlIHRkLmFjdGl2ZSxcXG4udC10YWJsZV9ib2R5IHRyLmFjdGl2ZSB0ZC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZmZTZjYTtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIgdGQuYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdHIgdGQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxufVxcbi50LXRhYmxlLWhlYWRlcl9ib2R5IHRkLFxcbi50LXRhYmxlX2JvZHkgdGQsXFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGgsXFxuLnQtdGFibGVfYm9keSB0aCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0REREZFNjtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdGguYWN0aXZlLFxcbi50LXRhYmxlX2JvZHkgdGguYWN0aXZlIHtcXG4gIGNvbG9yOiAjMjk3OUZGO1xcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG59XFxuLnQtdGFibGUtaGVhZGVyX2JvZHkgdHIge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnQtdGFibGUtd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1oZWFkZXItd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2VsbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udC10YWJsZS1maXhlZF9ib2R5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi50LXRhYmxlLXNvcnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4udC10YWJsZS1zb3J0IC5zb3J0LWljb24uYXNjIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTU1JSwgMCk7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLnQtdGFibGUtc29ydCAuc29ydC1pY29uLmRlc2Mge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1NSUsIDApO1xcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5zb3J0YWJsZS5hc2MgLnNvcnQtaWNvbi5hc2Mge1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICMyOTc5RkY7XFxufVxcbi5zb3J0YWJsZS5kZXNjIC5zb3J0LWljb24uZGVzYyB7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgIzI5NzlGRjtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyByZWY6IFwidGFibGVDb250YWluZXJcIiwgc3RhdGljQ2xhc3M6IFwidC1jb250YWluZXJcIiwgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHJlZjogXCJoaWRkZW5Db2x1bW5zXCIsIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1jb2x1bW5cIiB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwidFRhYmxlSGVhZGVyV3JhcHBlclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtaGVhZGVyLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnN0eWxlLndpZHRoIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0uc3RvcmUsIG1heEhlaWdodDogX3ZtLmhlYWRlckhlaWdodCB9LFxuICAgICAgICAgICAgb246IHsgc29ydERhdGE6IF92bS5zb3J0RGF0YSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVtcERhdGEubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZW1wRGF0YS5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZjogXCJ0VGFibGVXcmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidC10YWJsZS13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBfdm0uc3R5bGUud2lkdGgsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5ib2R5SGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0uYm9keUhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgcmVmOiBcInRUYWJsZUJvZHlcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlLWJvZHlcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzdG9yZTogX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLnRlbXBEYXRhLFxuICAgICAgICAgICAgICAgICAgcm93QWN0aXZlSW5kZXg6IF92bS5yb3dBY3RpdmVJbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0xlZnRGaXhlZCAmJiBfdm0udGVtcERhdGEubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc0xlZnRGaXhlZCAmJiB0ZW1wRGF0YS5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWQtd3JhcHBlcl9sZWZ0XCIsXG4gICAgICAgICAgY2xhc3M6IF92bS5zdG9yZS5ob3Jpem9udGVsU2Nyb2xsVHlwZSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6IF92bS5sZWZ0Rml4Q29sdW1uV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5tYXhIZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS5zdHlsZS5oZWlnaHRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3RvcmU6IF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogX3ZtLmhlYWRlckhlaWdodCxcbiAgICAgICAgICAgICAgICAgIGZpeGVkOiBcImxlZnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc29ydERhdGE6IF92bS5zb3J0RGF0YSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJ0VGFibGVMZWZ0Rml4ZWRXcmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWRfYm9keVwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtYXhIZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlOiBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0udGVtcERhdGEsXG4gICAgICAgICAgICAgICAgICByb3dBY3RpdmVJbmRleDogX3ZtLnJvd0FjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzUmlnaHRGaXhlZCAmJiBfdm0udGVtcERhdGEubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc1JpZ2h0Rml4ZWQgJiYgdGVtcERhdGEubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0LXRhYmxlLWZpeGVkLXdyYXBwZXJfcmlnaHRcIixcbiAgICAgICAgICBjbGFzczogX3ZtLnN0b3JlLmhvcml6b250ZWxTY3JvbGxUeXBlLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogX3ZtLnJpZ2h0Rml4Q29sdW1uV2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHRoaXMubWF4SGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0uc3R5bGUuaGVpZ2h0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlLWhlYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlOiBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IF92bS5oZWFkZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICBmaXhlZDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBzb3J0RGF0YTogX3ZtLnNvcnREYXRhIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRUYWJsZVJpZ2h0Rml4ZWRXcmFwcGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInQtdGFibGUtZml4ZWRfYm9keVwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtYXhIZWlnaHQ6IF92bS5ib2R5SGVpZ2h0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGUtYm9keVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlOiBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0udGVtcERhdGEsXG4gICAgICAgICAgICAgICAgICByb3dBY3RpdmVJbmRleDogX3ZtLnJvd0FjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICAgICAgZml4ZWQ6IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5kYXRhLmxlbmd0aCA9PT0gMCA/IF92bS5fdChcImVtcHR5XCIpIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiNTZlMmM0YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJ1xyXG5pbXBvcnQgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jbGFzcyBTY3JvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5LCBoZWFkZXIsIGxlZnQsIHJpZ2h0LCBlbmRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHlcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlclxyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnRcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHRcclxuICAgICAgICB0aGlzLnggPSAwXHJcbiAgICAgICAgdGhpcy55ID0gMFxyXG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IG51bGxcclxuICAgICAgICB0aGlzLmVuZFBvaW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuX2lzTW92ZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSAtMVxyXG4gICAgICAgIHRoaXMuZW5kVGltZXN0YW1wID0gLTFcclxuICAgICAgICB0aGlzLnR3ZWVuT2JqID0ge1xyXG4gICAgICAgICAgICB0d2VlblNpZGU6ICcnLFxyXG4gICAgICAgICAgICBzcGVlZDogMFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR3ZWVuID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZW5kQ2FsbGJhY2sgPSBlbmRDYWxsYmFja1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAtMVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5ib2R5ICYmICh0aGlzLmJvZHkuc2Nyb2xsVG9wID0geSwgdGhpcy5ib2R5LnNjcm9sbExlZnQgPSB4KVxyXG4gICAgICAgIHRoaXMubGVmdCAmJiAodGhpcy5sZWZ0LnNjcm9sbFRvcCA9IHkpXHJcbiAgICAgICAgdGhpcy5yaWdodCAmJiAodGhpcy5yaWdodC5zY3JvbGxUb3AgPSB5KVxyXG4gICAgICAgIHRoaXMuaGVhZGVyICYmICh0aGlzLmhlYWRlci5zY3JvbGxMZWZ0ID0geClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50d2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuLnN0b3AoKVxyXG4gICAgICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcilcclxuICAgICAgICAgICAgdGhpcy5lbmRDYWxsYmFjayh7eDogdGhpcy54LCB5OiB0aGlzLnl9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHtcclxuICAgICAgICAgICAgeDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICB5OiBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShldmVudCwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9pc01vdmVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuZW5kUG9pbnQgPSB7XHJcbiAgICAgICAgICAgIHg6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgICAgeTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB4ID0gdGhpcy5lbmRQb2ludC54IC0gdGhpcy5zdGFydFBvaW50LnhcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZW5kUG9pbnQueSAtIHRoaXMuc3RhcnRQb2ludC55XHJcblxyXG4gICAgICAgIHggPSB0aGlzLnggLSB4XHJcbiAgICAgICAgeSA9IHRoaXMueSAtIHlcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoeCwgeSlcclxuICAgICAgICBjYWxsYmFjayh7eCwgeX0pXHJcbiAgICB9XHJcblxyXG4gICAgZW5kKGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNNb3ZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxyXG4gICAgICAgIGxldCBlbmRQb2ludCA9IHRoaXMuZW5kUG9pbnRcclxuICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHRoaXMuc3RhcnRQb2ludFxyXG4gICAgICAgIHRoaXMuX2lzTW92ZWQgPSBmYWxzZVxyXG4gICAgICAgIGxldCBlbmRUaW1lID0gRGF0ZS5ub3coKVxyXG4gICAgICAgIGxldCBzdGFydFRpbWUgPSB0aGlzLnN0YXJ0VGltZXN0YW1wXHJcblxyXG4gICAgICAgIGxldCBfc2lkZSA9IGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnkgPiAwXHJcbiAgICAgICAgICAgID8gJ3RvcCdcclxuICAgICAgICAgICAgOiAnYm90dG9tJ1xyXG4gICAgICAgIGxldCBfc2lkZTIgPSBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54ID4gMFxyXG4gICAgICAgICAgICA/ICdyaWdodCdcclxuICAgICAgICAgICAgOiAnbGVmdCdcclxuICAgICAgICBpZiAoTWF0aC5hYnMoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSkgPiAzMCAmJiBlbmRUaW1lIC0gc3RhcnRUaW1lIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5PYmouc3BlZWQgPSBNYXRoLmFicygoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSkgLyAoZW5kVGltZSAtIHN0YXJ0VGltZSkgKiAxMDAwKVxyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuT2JqLnR3ZWVuU2lkZSA9IF9zaWRlXHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSA+IDEwICYmIGVuZFRpbWUgLSBzdGFydFRpbWUgPCAzMDApIHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbk9iai5zcGVlZCA9IE1hdGguYWJzKChlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSAvIChlbmRUaW1lIC0gc3RhcnRUaW1lKSAqIDEwMDApXHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5PYmoudHdlZW5TaWRlID0gX3NpZGUyXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKHRoaXMudHdlZW5PYmopLnRvKHtcclxuICAgICAgICAgICAgc3BlZWQ6IDBcclxuICAgICAgICB9LCA1MDApLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRlKClcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0d2VlbicpXHJcbiAgICAgICAgVFdFRU4udXBkYXRlKClcclxuXHJcbiAgICAgICAgbGV0IHR3ZWVuU2lkZSA9IHRoaXMudHdlZW5PYmoudHdlZW5TaWRlXHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnR3ZWVuT2JqLnNwZWVkXHJcbiAgICAgICAgaWYgKHR3ZWVuU2lkZSA9PT0gJ2xlZnQnIHx8IHR3ZWVuU2lkZSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0d2VlblNpZGUgPT09ICdyaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhpcy54IC0gdiAvIDM1XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMueCArIHYgLyAzNVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHR3ZWVuU2lkZSA9PT0gJ3RvcCdcclxuICAgICAgICAgICAgICAgID8gdGhpcy55IC0gdiAvIDM1XHJcbiAgICAgICAgICAgICAgICA6IHRoaXMueSArIHYgLyAzNVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIodGhpcy54LCB0aGlzLnkpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR3ZWVuT2JqLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2FsbGJhY2soe3g6IHRoaXMueCwgeTogdGhpcy55fSlcclxuICAgICAgICAgICAgdGhpcy50d2VlbiA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGF5b3V0KCkge1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuYm9keS5zY3JvbGxUb3BcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmJvZHkuc2Nyb2xsTGVmdFxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbGVyIiwiY2xhc3MgU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLl9jb2x1bW5zID0gW11cclxuICAgICAgICB0aGlzLmxlZnRGaXhlZENvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMgPSBbXVxyXG4gICAgICAgIHRoaXMuaGlkZGVuQ29sdW1ucyA9IFtdXHJcbiAgICAgICAgdGhpcy5ib2R5V2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5yZWFsQ29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5sZWZ0Rml4Q29sdW1uV2lkdGggPSAwXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMuc29ydEtleSA9ICcnXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICcnXHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFNjcm9sbFR5cGUgPSAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydENvbHVtbihjb2x1bW4sIGluZGV4LCBwYXJlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2x1bW4sIGluZGV4LCBwYXJlbnQpXHJcbiAgICAgICAgdGhpcy5fY29sdW1ucy5wdXNoKGNvbHVtbilcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uV2lkdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbHVtbnMoKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLl9jb2x1bW5zLnNsaWNlKClcclxuICAgICAgICBsZXQgbm9ybWFsQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uZml4ZWQgJiYgIWl0ZW0uaGlkZGVuKVxyXG4gICAgICAgIHRoaXMubGVmdEZpeGVkQ29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICBpdGVtID0+ICEhaXRlbS5maXhlZCAmJiBpdGVtLmZpeGVkU2lkZSA9PT0gJ2xlZnQnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhlZENvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcihcclxuICAgICAgICAgICAgaXRlbSA9PiAhIWl0ZW0uZml4ZWQgJiYgaXRlbS5maXhlZFNpZGUgPT09ICdyaWdodCdcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5oaWRkZW5Db2x1bW5zID0gY29sdW1ucy5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0uaGlkZGVuKVxyXG4gICAgICAgIC8vIOaKimxlZnRfZml455qE5YiX5pS+5Zyo5pyA5bem6L6577yMcmlnaHRfZml455qE5YiX5pS+5Zyo5pyA5Y+z6L65XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xyXG4gICAgICAgICAgICAuLi50aGlzLmxlZnRGaXhlZENvbHVtbnMsXHJcbiAgICAgICAgICAgIC4uLm5vcm1hbENvbHVtbnMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMucmlnaHRGaXhlZENvbHVtbnNcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29sdW1uV2lkdGgoKSB7XHJcbiAgICAgICAgbGV0IHJlYWxDb2x1bW5XaWR0aCA9IDBcclxuICAgICAgICBsZXQgbGVmdEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIGxldCByaWdodEZpeENvbHVtbldpZHRoID0gMFxyXG4gICAgICAgIHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJlYWxDb2x1bW5XaWR0aCArPSBpdGVtLndpZHRoXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxlZnRGaXhlZENvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZWZ0Rml4Q29sdW1uV2lkdGggKz0gaXRlbS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yaWdodEZpeGVkQ29sdW1ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJpZ2h0Rml4Q29sdW1uV2lkdGggKz0gaXRlbS53aWR0aFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yZWFsQ29sdW1uV2lkdGggPSByZWFsQ29sdW1uV2lkdGhcclxuICAgICAgICB0aGlzLmxlZnRGaXhDb2x1bW5XaWR0aCA9IGxlZnRGaXhDb2x1bW5XaWR0aFxyXG4gICAgICAgIHRoaXMucmlnaHRGaXhDb2x1bW5XaWR0aCA9IHJpZ2h0Rml4Q29sdW1uV2lkdGhcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIb3Jpem9udGVsVHlwZShtYXhTY3JvbGxMZWZ0LCBjdXJTY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgaWYgKGN1clNjcm9sbExlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvcml6b250ZWxTY3JvbGxUeXBlID0gJ2lzLXNjcm9sbC1sZWZ0J1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyU2Nyb2xsTGVmdCA8IG1heFNjcm9sbExlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3Jpem9udGVsU2Nyb2xsVHlwZSA9ICdpcy1zY3JvbGwtbWlkZGxlJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRlbFNjcm9sbFR5cGUgPSAnaXMtc2Nyb2xsLXJpZ2h0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdG9yZVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmdW5jdGlvbmFsOiB0cnVlLFxyXG5cclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc3RvcmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBkYXRhOiBBcnJheSxcclxuICAgICAgICByb3dBY3RpdmVJbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDhcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcihoLCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBjb250ZXh0LnByb3BzLnN0b3JlLmNvbHVtbnMuc2xpY2UoKVxyXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLnJldmVyc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0LXRhYmxlX2JvZHlcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBib3JkZXI9XCIwXCIgd2lkdGg9e2NvbnRleHQucHJvcHMuc3RvcmUucmVhbENvbHVtbldpZHRofT5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5fbChjb2x1bW5zLCAocm93LCBpbmRleCkgPT4gPGNvbCB3aWR0aD17cm93LndpZHRofS8+KX1cclxuICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Ll9sKGNvbnRleHQucHJvcHMuZGF0YSwgKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnByb3BzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IGNvbnRleHQucHJvcHMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AsICdpcy1oaWRkZW4nOiAhY29sLmZpeGVkIHx8IGNvbC5maXhlZFNpZGUgIT09ICdyaWdodCcgfX0gIHN0eWxlPXt7ICd0ZXh0LWFsaWduJzogY29sLnRleHRBbGlnbiB9fT57Y29sLnJlbmRlckNlbGwoaW5kZXgsIHJvdywgY29sLnByb3ApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5wcm9wcy5maXhlZCA9PT0gJycgfHwgY29udGV4dC5wcm9wcy5maXhlZCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzID0gY29sdW1ucy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCBjbGFzcz17eyBhY3RpdmU6IGNvbnRleHQucHJvcHMuc3RvcmUuc29ydEtleSA9PT0gY29sLnByb3AsICdpcy1oaWRkZW4nOiAhY29sLmZpeGVkIHx8IGNvbC5maXhlZFNpZGUgIT09ICdsZWZ0JyB9fSAgc3R5bGU9e3sgJ3RleHQtYWxpZ24nOiBjb2wudGV4dEFsaWduIH19Pntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZHMgPSBjb2x1bW5zLm1hcCgoY29sLCBjb2xJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIGNsYXNzPXt7IGFjdGl2ZTogY29udGV4dC5wcm9wcy5zdG9yZS5zb3J0S2V5ID09PSBjb2wucHJvcCwgJ2lzLWhpZGRlbic6IGNvbC5maXhlZCB9fSAgc3R5bGU9e3sgJ3RleHQtYWxpZ24nOiBjb2wudGV4dEFsaWduIH19Pntjb2wucmVuZGVyQ2VsbChpbmRleCwgcm93LCBjb2wucHJvcCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz17eyAnYWN0aXZlJzogY29udGV4dC5wcm9wcy5yb3dBY3RpdmVJbmRleCA+IGluZGV4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApXHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgbm9ybWFsQ29sdW1uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZnRGaXhlZENvdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmxlZnRGaXhlZENvbHVtbnMubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodEZpeGVkQ291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUucmlnaHRGaXhlZENvbHVtbnMubGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJsZXQgdGFibGVDb2x1bW5JZFNlZWQgPSAxXHJcblxyXG5mdW5jdGlvbiBwYXJzZVByb3AodGFyZ2V0KSB7XHJcbiAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgIGZpeGVkOiBmYWxzZSxcclxuICAgICAgICBmaXhlZFNpZGU6ICcnLFxyXG4gICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICBtaW54V2lkdGg6IDUwLFxyXG4gICAgICAgIHNvcnRhYmxlOiAnJyxcclxuICAgICAgICBwcm9wOiAnJyxcclxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgIGhpZGRlbjogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnZml4ZWQgPSAnLCB0YXJnZXQuZml4ZWQpXHJcblxyXG4gICAgaWYgKHRhcmdldC5maXhlZCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBjb25maWcuZml4ZWQgPSB0cnVlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQuZml4ZWQgPT09ICdzdHJpbmcnICYmIFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLmZpeGVkU2lkZSA9IHRhcmdldC5maXhlZC50b1N0cmluZygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uZmlnLmZpeGVkU2lkZSA9ICdsZWZ0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LndpZHRoKSB7XHJcbiAgICAgICAgY29uZmlnLndpZHRoID0gcGFyc2VJbnQodGFyZ2V0LndpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQubWluV2lkdGgpIHtcclxuICAgICAgICBjb25maWcubWluV2lkdGggPSBwYXJzZUludCh0YXJnZXQubWluV2lkdGgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldC5zb3J0YWJsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldC5maXhlZCA9PT0gJ3N0cmluZycgJiYgWydhc2MnLCAnZGVzYyddLmluZGV4T2YodGFyZ2V0LmZpeGVkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uZmlnLnNvcnRhYmxlID0gdGFyZ2V0LnNvcnRhYmxlLnRvU3RyaW5nKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25maWcuc29ydGFibGUgPSAnYXNjJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0LnRleHRBbGlnbikge1xyXG4gICAgICAgIGNvbmZpZy50ZXh0QWxpZ24gPSB0YXJnZXQudGV4dEFsaWduXHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnLnByb3AgPSB0YXJnZXQucHJvcFxyXG4gICAgY29uZmlnLmxhYmVsID0gdGFyZ2V0LmxhYmVsXHJcbiAgICBcclxuICAgIHJldHVybiBjb25maWdcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnVFRhYmxlQ29sdW1uJyxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZml4ZWQ6IFtCb29sZWFuLCBTdHJpbmddLFxyXG4gICAgICAgIHdpZHRoOiBOdW1iZXIsXHJcbiAgICAgICAgbWluV2lkdGg6IE51bWJlcixcclxuICAgICAgICBzb3J0YWJsZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgICAgcHJvcDogU3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICAgICAgdGV4dEFsaWduOiBTdHJpbmcsXHJcbiAgICAgICAgZmlsdGVyOiBGdW5jdGlvblxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29sdW1uSWQ6ICcnLFxyXG4gICAgICAgICAgICBjb2x1bW5Db25maWc6IHt9LFxyXG4gICAgICAgICAgICBpc1N1YkNvbHVtbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBjb2x1bW5PclRhYmxlUGFyZW50KCkge1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudFxyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQudGFibGVJZCAmJiAhcGFyZW50LmNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG93bmVyKCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50XHJcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC50YWJsZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudCBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbHVtbiBjcmVhdGVkJylcclxuICAgICAgICB0aGlzLiRvcHRpb25zLnJlbmRlciA9IGggPT4gaCgnZGl2JywgdGhpcy4kc2xvdHMuZGVmYXVsdClcclxuXHJcbiAgICAgICAgdGhpcy5jb2x1bW5JZCA9IHRoaXMuJHBhcmVudC50YWJsZUlkICsgJ19jb2x1bW5fJyArIHRhYmxlQ29sdW1uSWRTZWVkKytcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZyA9IHBhcnNlUHJvcCh0aGlzKVxyXG5cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb2x1bW4gbW91bnRlZCcpXHJcbiAgICAgICAgdGhpcy5pc1N1YkNvbHVtbiA9IHRoaXMub3duZXIgIT09IHRoaXMuY29sdW1uT3JUYWJsZVBhcmVudFxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Q29sSW5kZXgodGhpcy5jb2x1bW5PclRhYmxlUGFyZW50LCB0aGlzLiRlbClcclxuICAgICAgICBsZXQgcmVuZGVyQ2VsbCA9IChpLCBkYXRhLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5maWx0ZXIgJiYgdHlwZW9mIHRoaXMuZmlsdGVyID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuZmlsdGVyKGRhdGFbcHJvcF0pXHJcbiAgICAgICAgICAgICAgICA6IGRhdGFbcHJvcF1cclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJjZWxsXCI+eyB2IH08L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZW5kZXJIZWFkZXIgPSBmdW5jdGlvbiAoaSwgbGFiZWwsIHByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxzcGFuPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy4kc2NvcGVkU2xvdHMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHJlbmRlckNlbGwgPSBmdW5jdGlvbiAoaSwgZGF0YSwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3M9XCJjZWxsXCI+e19zZWxmLiRzY29wZWRTbG90cy5kZWZhdWx0KHtyb3c6IGRhdGEsIGluZGV4OiBpfSl9PC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuJHNsb3RzLmhlYWRlcikge1xyXG4gICAgICAgICAgICBsZXQgX3NlbGYgPSB0aGlzXHJcbiAgICAgICAgICAgIHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uIChpLCBsYWJlbCwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zZWxmLiRzbG90cy5oZWFkZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbHVtbkNvbmZpZy5yZW5kZXJDZWxsID0gcmVuZGVyQ2VsbFxyXG4gICAgICAgIHRoaXMuY29sdW1uQ29uZmlnLnJlbmRlckhlYWRlciA9IHJlbmRlckhlYWRlclxyXG5cclxuICAgICAgICB0aGlzLm93bmVyLnN0b3JlLmluc2VydENvbHVtbih0aGlzLmNvbHVtbkNvbmZpZywgaW5kZXgsIHRoaXMuJHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kc2xvdHMsIHRoaXMuJHNjb3BlZFNsb3RzKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRDb2xJbmRleCgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gLTFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N1YkNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5jb2x1bW5PclRhYmxlUGFyZW50LiRyZWZzLmhpZGRlbkNvbHVtbnMuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBbXS5pbmRleE9mLmNhbGwodGhpcy5vd25lci4kZWwuY2hpbGRyZW4sIHRoaXMuJGVsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc3RvcmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpeGVkOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuICAgICAgICBoZWlnaHQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb3J0VHlwZTogMCAvLyAwIC0gbm9uZSwgMSAtIGFzYywgMiAtIGRlc2NcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzb3J0RGF0YTogZnVuY3Rpb24gKGtleSwgc29ydGFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNvcnRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9yZS5zb3J0S2V5ICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9IGtleVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlICs9IDFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlICU9IDNcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0VHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydERhdGEnLCB0aGlzLnN0b3JlLnNvcnRLZXksIHRoaXMuc29ydFR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcihoKSB7XHJcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBbXVxyXG4gICAgICAgIGxldCB3aWR0aFxyXG4gICAgICAgIGlmICh0aGlzLmZpeGVkID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLnN0b3JlLnJpZ2h0Rml4ZWRDb2x1bW5zXHJcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zdG9yZS5yaWdodEZpeENvbHVtbldpZHRoXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpeGVkID09PSAnJyB8fCB0aGlzLmZpeGVkID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuc3RvcmUubGVmdEZpeGVkQ29sdW1uc1xyXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuc3RvcmUubGVmdEZpeENvbHVtbldpZHRoXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sdW1ucyA9IHRoaXMuc3RvcmUuY29sdW1uc1xyXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMuc3RvcmUucmVhbENvbHVtbldpZHRoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0LXRhYmxlLWhlYWRlcl9ib2R5XCJcclxuICAgICAgICAgICAgICAgIGNlbGxwYWRkaW5nPVwiMFwiXHJcbiAgICAgICAgICAgICAgICBjZWxsc3BhY2luZz1cIjBcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxjb2xncm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5fbChjb2x1bW5zLCAocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29sIHdpZHRoPXtyb3cud2lkdGh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBoZWlnaHQ6IHRoaXMuaGVpZ2h0ICsgJ3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuX2woY29sdW1ucywgKHJvdywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNvcnREYXRhKHJvdy5wcm9wLCByb3cuc29ydGFibGUpLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSAhPT0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNvcnRLZXkgPT09IHJvdy5wcm9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHJvdy5zb3J0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzYzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRUeXBlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zb3J0S2V5ID09PSByb3cucHJvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0VHlwZSA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc29ydEtleSA9PT0gcm93LnByb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cucmVuZGVySGVhZGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc29ydGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxzcGFuIGNsYXNzPVwidC10YWJsZS1zb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic29ydC1pY29uIGFzY1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwic29ydC1pY29uIGRlc2NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXHdlYlxcXFxsaWJhcnlcXFxcdGFibGVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNhMDAzZTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNhMDAzZTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EwMDNlNzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2EwMDNlNzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy90YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTAwM2U3NiZcIiIsImV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZmFsc2UpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmbiwgZmFsc2UpXHJcbn1cclxuXHJcbmxldCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDE3KSBcclxuICAgIH1cclxuXHJcbmxldCBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgIGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXHJcbiAgICB9XHJcbmV4cG9ydHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbmV4cG9ydHMuY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcblxyXG5leHBvcnRzLnF1aWNrU29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgIGZ1bmN0aW9uIHBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gZW5kKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGkgPSBzdGFydFxyXG4gICAgICAgIGxldCBqID0gZW5kXHJcbiAgICAgICAgbGV0IHRlbXAgPSBhcnJbc3RhcnRdXHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xyXG4gICAgICAgICAgICB3aGlsZSAoYXJyW2ldID4gdGVtcCAmJiBpIDwgaikge1xyXG4gICAgICAgICAgICAgICAgaSArPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGFycltqXSA8IHRlbXAgJiYgaSA8IGopIHtcclxuICAgICAgICAgICAgICAgIGogLT0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpIDwgaikge1xyXG4gICAgICAgICAgICAgICAgW2FycltpXSwgYXJyW2pdXSA9IFthcnJbal0sIGFycltpXV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGFycltzdGFydF0gPSBhcnJbaV1cclxuICAgICAgICBhcnJbaV0gPSB0ZW1wXHJcbiAgICAgICAgcmV0dXJuIGlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5kZXggPSBwYXJ0aXRpb24oYXJyLCAwLCBhcnIubGVuZ3RoIC0gMSlcclxuICAgIHBhcnRpdGlvbihhcnIsIDAsIGluZGV4IC0gMSlcclxuICAgIHBhcnRpdGlvbihhcnIsIGluZGV4ICsgMSwgYXJyLmxlbmd0aCAtIDEpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9