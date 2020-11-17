(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vant", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vant"] = factory(require("vue"));
	else
		root["vant"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cancelRaf; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = ___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(2);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// EXTERNAL MODULE: ./es/utils/deep-assign.js
var deep_assign = __webpack_require__(7);

// CONCATENATED MODULE: ./es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    }
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./es/locale/index.js



var proto = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype;
var defineReactive = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = __webpack_exports__["a"] = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(deep_assign["a" /* deepAssign */])(proto.$vantMessages, messages);
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaN; });
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepAssign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "c"])(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUnit; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _validate_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


function addUnit(value) {
  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validate_number__WEBPACK_IMPORTED_MODULE_1__[/* isNumber */ "b"])(value) ? value + "px" : value;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function bem_prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return bem_prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, bem_prefix(el, mods)] : el;
  };
}
// EXTERNAL MODULE: ./es/utils/format/string.js
var string = __webpack_require__(3);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(2);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});
// CONCATENATED MODULE: ./es/utils/create/component.js
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(string["a" /* camelize */])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// EXTERNAL MODULE: ./es/utils/index.js
var utils = __webpack_require__(0);

// EXTERNAL MODULE: ./es/locale/index.js + 1 modules
var locale = __webpack_require__(5);

// CONCATENATED MODULE: ./es/utils/create/i18n.js



function createI18N(name) {
  var prefix = Object(string["a" /* camelize */])(name) + '.';
  return function (path) {
    var message = Object(utils["a" /* get */])(locale["a" /* default */].messages(), prefix + path) || Object(utils["a" /* get */])(locale["a" /* default */].messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./es/utils/create/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNamespace; });



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__(1);
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./es/utils/create/index.js + 4 modules
var create = __webpack_require__(9);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(2);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./es/utils/functional.js


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    _extends(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, _extends({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}
// CONCATENATED MODULE: ./es/utils/constant.js
// color
var RED = '#ee0a24';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_RIGHT = BORDER + "--right";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";
// CONCATENATED MODULE: ./es/mixins/popup/context.js
var context_context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
// EXTERNAL MODULE: ./es/utils/index.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./es/utils/dom/event.js
 // eslint-disable-next-line import/no-mutable-exports

var supportsPassive = false;

if (!utils["d" /* isServer */]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function event_on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!utils["d" /* isServer */]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!utils["d" /* isServer */]) {
    target.removeEventListener(event, handler);
  }
}
function event_stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    event_stopPropagation(event);
  }
}
// CONCATENATED MODULE: ./es/mixins/touch.js


var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    // avoid Vue 2.6 event bubble issues by manually binding events
    // https://github.com/youzan/vant/issues/3015
    bindTouchEvent: function bindTouchEvent(el) {
      var _ref = this,
          onTouchStart = _ref.onTouchStart,
          onTouchMove = _ref.onTouchMove,
          onTouchEnd = _ref.onTouchEnd;

      event_on(el, 'touchstart', onTouchStart);
      event_on(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        event_on(el, 'touchend', onTouchEnd);
        event_on(el, 'touchcancel', onTouchEnd);
      }
    }
  }
});
// CONCATENATED MODULE: ./es/mixins/portal.js


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var ref = _ref.ref,
      afterPortal = _ref.afterPortal;
  return external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var el = ref ? this.$refs[ref] : this.$el;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== el.parentNode) {
          container.appendChild(el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}
// CONCATENATED MODULE: ./es/mixins/bind-event.js
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, event_on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
// CONCATENATED MODULE: ./es/mixins/close-on-popstate.js



var CloseOnPopstateMixin = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
  mixins: [BindEventMixin(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? event_on : off;
        action(window, 'popstate', this.close);
      }
    }
  }
});
// CONCATENATED MODULE: ./es/overlay/index.js




 // Types

var _createNamespace = Object(create["a" /* createNamespace */])('overlay'),
    createComponent = _createNamespace[0],
    overlay_bem = _createNamespace[1];

function preventTouchMove(event) {
  preventDefault(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = _extends({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(utils["b" /* isDef */])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", helper_default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [overlay_bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, inherit(ctx, true)]), [slots.default && slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: Object,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
/* harmony default export */ var es_overlay = (createComponent(Overlay));
// CONCATENATED MODULE: ./es/mixins/popup/overlay.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay_overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (context_context.top) {
    var vm = context_context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function mountOverlay() {
  overlay_overlay = mount(es_overlay, {
    on: {
      click: onClickOverlay
    }
  });
}

function updateOverlay() {
  if (!overlay_overlay) {
    mountOverlay();
  }

  if (context_context.top) {
    var _context$top = context_context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay_overlay.$el, el);
    } else {
      document.body.appendChild(overlay_overlay.$el);
    }

    _extends(overlay_overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay_overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!context_context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    context_context.stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = context_context.stack;

  if (stack.length) {
    if (context_context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      context_context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
// CONCATENATED MODULE: ./es/utils/dom/scroll.js
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function scroll_getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}
function getVisibleTop(element) {
  return element === window ? 0 : element.getBoundingClientRect().top;
}
// CONCATENATED MODULE: ./es/mixins/popup/index.js







var popupMixinProps = {
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when click overlay
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  }
};
function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    mixins: [TouchMixin, CloseOnPopstateMixin, PortalMixin({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          updateOverlay();
        }
      }
    })],
    props: popupMixinProps,
    data: function data() {
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.close();

      if (this.getContainer && this.$parent && this.$parent.$el) {
        this.$parent.$el.appendChild(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex


        if (this.zIndex !== undefined) {
          context_context.zIndex = this.zIndex;
        }

        this.opened = true;
        this.renderOverlay();

        if (this.lockScroll) {
          event_on(document, 'touchstart', this.touchStart);
          event_on(document, 'touchmove', this.onTouchMove);

          if (!context_context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }

          context_context.lockCount++;
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }

        if (this.lockScroll) {
          context_context.lockCount--;
          off(document, 'touchstart', this.touchStart);
          off(document, 'touchmove', this.onTouchMove);

          if (!context_context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }

        this.opened = false;
        closeOverlay(this);
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = getScrollEventTarget(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */


        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          preventDefault(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;

        if (this.$isServer || !this.value) {
          return;
        }

        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);

          if (_this.overlay) {
            openOverlay(_this, {
              zIndex: context_context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            closeOverlay(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }

        this.$el.style.zIndex = ++context_context.zIndex + value;
      }
    }
  };
}
// EXTERNAL MODULE: ./es/utils/format/unit.js
var unit = __webpack_require__(8);

// CONCATENATED MODULE: ./es/info/index.js


 // Types

var info_createNamespace = Object(create["a" /* createNamespace */])('info'),
    info_createComponent = info_createNamespace[0],
    info_bem = info_createNamespace[1];

function info_Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = Object(utils["b" /* isDef */])(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", helper_default()([{
    "class": info_bem({
      dot: dot
    })
  }, inherit(ctx, true)]), [dot ? '' : props.info]);
}

info_Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ var es_info = (info_createComponent(info_Info));
// CONCATENATED MODULE: ./es/icon/index.js



 // Types

var icon_createNamespace = Object(create["a" /* createNamespace */])('icon'),
    icon_createComponent = icon_createNamespace[0],
    icon_bem = icon_createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
} // compatible with legacy usage, should be removed in next major version


var LEGACY_MAP = {
  medel: 'medal',
  'medel-o': 'medal-o'
};

function correctName(name) {
  return name && LEGACY_MAP[name] || name;
}

function Icon(h, props, slots, ctx) {
  var name = correctName(props.name);
  var imageIcon = isImage(name);
  return h(props.tag, helper_default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + name],
    "style": {
      color: props.color,
      fontSize: Object(unit["a" /* addUnit */])(props.size)
    }
  }, inherit(ctx, true)]), [slots.default && slots.default(), imageIcon && h("img", {
    "class": icon_bem('image'),
    "attrs": {
      "src": name
    }
  }), h(es_info, {
    "attrs": {
      "dot": props.dot,
      "info": props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: icon_bem()
  }
};
/* harmony default export */ var es_icon = (icon_createComponent(Icon));
// CONCATENATED MODULE: ./es/popup/index.js




var popup_createNamespace = Object(create["a" /* createNamespace */])('popup'),
    popup_createComponent = popup_createNamespace[0],
    popup_bem = popup_createNamespace[1];

/* harmony default export */ var popup = (popup_createComponent({
  mixins: [PopupMixin()],
  props: {
    round: Boolean,
    duration: Number,
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    },
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(utils["b" /* isDef */])(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": popup_bem((_bem = {
        round: round
      }, _bem[position] = position, _bem['safe-area-inset-bottom'] = this.safeAreaInsetBottom, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots(), this.closeable && h(es_icon, {
      "attrs": {
        "role": "button",
        "tabindex": "0",
        "name": this.closeIcon
      },
      "class": popup_bem('close-icon', this.closeIconPosition),
      "on": {
        "click": this.close
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/loading/index.js


 // Types

var loading_createNamespace = Object(create["a" /* createNamespace */])('loading'),
    loading_createComponent = loading_createNamespace[0],
    loading_bem = loading_createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": loading_bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(unit["a" /* addUnit */])(props.textSize)
    };
    return h("span", {
      "class": loading_bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(unit["a" /* addUnit */])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", helper_default()([{
    "class": loading_bem([type, {
      vertical: props.vertical
    }])
  }, inherit(ctx, true)]), [h("span", {
    "class": loading_bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  color: String,
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  }
};
/* harmony default export */ var es_loading = (loading_createComponent(Loading));
// CONCATENATED MODULE: ./es/action-sheet/index.js








 // Types

var action_sheet_createNamespace = Object(create["a" /* createNamespace */])('action-sheet'),
    action_sheet_createComponent = action_sheet_createNamespace[0],
    action_sheet_bem = action_sheet_createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    emit(ctx, 'input', false);
    emit(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [action_sheet_bem('header'), BORDER_BOTTOM]
      }, [title, h(es_icon, {
        "attrs": {
          "name": props.closeIcon
        },
        "class": action_sheet_bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": action_sheet_bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      emit(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        emit(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(es_loading, {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": action_sheet_bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": action_sheet_bem('subname')
      }, [item.subname])];
    }

    return h("button", {
      "attrs": {
        "type": "button"
      },
      "class": [action_sheet_bem('item', {
        disabled: disabled
      }), item.className, BORDER_TOP],
      "style": {
        color: item.color
      },
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("button", {
        "attrs": {
          "type": "button"
        },
        "class": action_sheet_bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  var Description = props.description && h("div", {
    "class": action_sheet_bem('description')
  }, [props.description]);
  return h(popup, helper_default()([{
    "class": action_sheet_bem(),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay,
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }
  }, inherit(ctx, true)]), [Header(), Description, props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = _extends({}, popupMixinProps, {
  title: String,
  actions: Array,
  duration: Number,
  cancelText: String,
  description: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  round: {
    type: Boolean,
    default: true
  },
  closeIcon: {
    type: String,
    default: 'close'
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});
/* harmony default export */ var action_sheet = (action_sheet_createComponent(ActionSheet));
// CONCATENATED MODULE: ./es/utils/validate/mobile.js
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
// CONCATENATED MODULE: ./es/picker/shared.js
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  },
  swipeDuration: {
    type: Number,
    default: 1000
  }
};
// EXTERNAL MODULE: ./es/utils/deep-assign.js
var deep_assign = __webpack_require__(7);

// CONCATENATED MODULE: ./es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(deep_assign["a" /* deepAssign */])({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./es/utils/format/number.js
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
// CONCATENATED MODULE: ./es/picker/PickerColumn.js






var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var PickerColumn_createNamespace = Object(create["a" /* createNamespace */])('picker-column'),
    PickerColumn_createComponent = PickerColumn_createNamespace[0],
    PickerColumn_bem = PickerColumn_createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(utils["c" /* isObj */])(option) && option.disabled;
}

/* harmony default export */ var PickerColumn = (PickerColumn_createComponent({
  mixins: [TouchMixin],
  props: {
    valueKey: String,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    swipeDuration: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        preventDefault(event, true);
      }

      this.offset = range(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this = this;

      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      var index = this.getIndexByOffset(this.offset);
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true); // compatible with desktop scenario
      // use setTimeout to skip the click event triggered after touchstart

      setTimeout(function () {
        _this.moving = false;
      }, 0);
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["c" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this2 = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this2.currentIndex) {
          _this2.currentIndex = index;

          if (userAction) {
            _this2.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = this.swipeDuration;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
    genOptions: function genOptions() {
      var _this3 = this;

      var h = this.$createElement;
      var optionStyle = {
        height: this.itemHeight + "px"
      };
      return this.options.map(function (option, index) {
        var text = _this3.getOptionText(option);

        var disabled = isOptionDisabled(option);
        var data = {
          style: optionStyle,
          attrs: {
            role: 'button',
            tabindex: disabled ? -1 : 0
          },
          class: ['van-ellipsis', PickerColumn_bem('item', {
            disabled: disabled,
            selected: index === _this3.currentIndex
          })],
          on: {
            click: function click() {
              _this3.onClickItem(index);
            }
          }
        };

        if (_this3.allowHtml) {
          data.domProps = {
            innerHTML: text
          };
        }

        return h("li", helper_default()([{}, data]), [_this3.allowHtml ? '' : text]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: this.itemHeight + "px"
    };
    return h("div", {
      "class": [PickerColumn_bem(), this.className]
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": PickerColumn_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.genOptions()])]);
  }
}));
// CONCATENATED MODULE: ./es/picker/index.js









var picker_createNamespace = Object(create["a" /* createNamespace */])('picker'),
    picker_createComponent = picker_createNamespace[0],
    picker_bem = picker_createNamespace[1],
    t = picker_createNamespace[2];

/* harmony default export */ var picker = (picker_createComponent({
  props: _extends({}, pickerProps, {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: 'setColumns'
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, deepClone(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // @exposed-api
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // @exposed-api
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // @exposed-api
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // @exposed-api
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // @exposed-api
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // @exposed-api
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // @exposed-api
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // @exposed-api
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // @exposed-api
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // @exposed-api
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    // @exposed-api
    confirm: function confirm() {
      this.children.forEach(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    cancel: function cancel() {
      this.emit('cancel');
    },
    genTitle: function genTitle() {
      var h = this.$createElement;
      var titleSlot = this.slots('title');

      if (titleSlot) {
        return titleSlot;
      }

      if (this.title) {
        return h("div", {
          "class": ['van-ellipsis', picker_bem('title')]
        }, [this.title]);
      }
    },
    genToolbar: function genToolbar() {
      var h = this.$createElement;

      if (this.showToolbar) {
        return h("div", {
          "class": [BORDER_TOP_BOTTOM, picker_bem('toolbar')]
        }, [this.slots() || [h("button", {
          "attrs": {
            "type": "button"
          },
          "class": picker_bem('cancel'),
          "on": {
            "click": this.cancel
          }
        }, [this.cancelButtonText || t('cancel')]), this.genTitle(), h("button", {
          "attrs": {
            "type": "button"
          },
          "class": picker_bem('confirm'),
          "on": {
            "click": this.confirm
          }
        }, [this.confirmButtonText || t('confirm')])]]);
      }
    },
    genColumns: function genColumns() {
      var _this4 = this;

      var h = this.$createElement;
      var columns = this.simple ? [this.columns] : this.columns;
      return columns.map(function (item, index) {
        return h(PickerColumn, {
          "attrs": {
            "valueKey": _this4.valueKey,
            "allowHtml": _this4.allowHtml,
            "className": item.className,
            "itemHeight": _this4.itemHeight,
            "defaultIndex": item.defaultIndex || _this4.defaultIndex,
            "swipeDuration": _this4.swipeDuration,
            "visibleItemCount": _this4.visibleItemCount,
            "initialOptions": _this4.simple ? item : item.values
          },
          "on": {
            "change": function change() {
              _this4.onChange(index);
            }
          }
        });
      });
    }
  },
  render: function render(h) {
    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    return h("div", {
      "class": picker_bem()
    }, [this.toolbarPosition === 'top' ? this.genToolbar() : h(), this.loading ? h(es_loading, {
      "class": picker_bem('loading')
    }) : h(), this.slots('columns-top'), h("div", {
      "class": picker_bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": preventDefault
      }
    }, [this.genColumns(), h("div", {
      "class": picker_bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": [BORDER_UNSET_TOP_BOTTOM, picker_bem('frame')],
      "style": frameStyle
    })]), this.slots('columns-bottom'), this.toolbarPosition === 'bottom' ? this.genToolbar() : h()]);
  }
}));
// CONCATENATED MODULE: ./es/area/index.js





var area_createNamespace = Object(create["a" /* createNamespace */])('area'),
    area_createComponent = area_createNamespace[0],
    area_bem = area_createNamespace[1];

var PLACEHOLDER_CODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

/* harmony default export */ var es_area = (area_createComponent({
  props: _extends({}, pickerProps, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    },
    columnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    },
    placeholderMap: function placeholderMap() {
      return {
        province: this.columnsPlaceholder[0] || '',
        city: this.columnsPlaceholder[1] || '',
        county: this.columnsPlaceholder[2] || ''
      };
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: 'setValues'
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      if (this.placeholderMap[type] && result.length) {
        // set columns placeholder
        var codeFill = type === 'province' ? '' : type === 'city' ? PLACEHOLDER_CODE.slice(2, 4) : PLACEHOLDER_CODE.slice(4, 6);
        result.unshift({
          code: "" + code + codeFill,
          name: this.placeholderMap[type]
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (this.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    // parse output columns data
    parseOutputValues: function parseOutputValues(values) {
      var _this2 = this;

      return values.map(function (value, index) {
        // save undefined value
        if (!value) return value;
        value = JSON.parse(JSON.stringify(value));

        if (!value.code || value.name === _this2.columnsPlaceholder[index]) {
          value.code = '';
          value.name = '';
        }

        return value;
      });
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      var getValues = picker.getValues();
      getValues = this.parseOutputValues(getValues);
      this.$emit('change', picker, getValues, index);
    },
    onConfirm: function onConfirm(values, index) {
      values = this.parseOutputValues(values);
      this.setValues();
      this.$emit('confirm', values, index);
    },
    setValues: function setValues() {
      var code = this.code;

      if (!code) {
        if (this.columnsPlaceholder.length) {
          code = PLACEHOLDER_CODE;
        } else if (Object.keys(this.county)[0]) {
          code = Object.keys(this.county)[0];
        } else {
          code = '';
        }
      }

      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      var picker = this.$refs.picker;
      var getValues = picker ? picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
      getValues = this.parseOutputValues(getValues);
      return getValues;
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      var validValues = values.filter(function (value) {
        return !!value.code;
      });
      area.code = validValues.length ? validValues[validValues.length - 1].code : '';

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    // @exposed-api
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render() {
    var h = arguments[0];

    var on = _extends({}, this.$listeners, {
      change: this.onChange,
      confirm: this.onConfirm
    });

    return h(picker, {
      "ref": "picker",
      "class": area_bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "swipeDuration": this.swipeDuration,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": _extends({}, on)
    });
  }
}));
// CONCATENATED MODULE: ./es/cell/shared.js
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
// CONCATENATED MODULE: ./es/utils/router.js
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err && err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
// CONCATENATED MODULE: ./es/cell/index.js






 // Types

var cell_createNamespace = Object(create["a" /* createNamespace */])('cell'),
    cell_createComponent = cell_createNamespace[0],
    cell_bem = cell_createNamespace[1];

function Cell(h, props, slots, ctx) {
  var _slots$extra;

  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink;
  var showTitle = slots.title || Object(utils["b" /* isDef */])(title);

  function Label() {
    var showLabel = slots.label || Object(utils["b" /* isDef */])(label);

    if (showLabel) {
      return h("div", {
        "class": [cell_bem('label'), props.labelClass]
      }, [slots.label ? slots.label() : label]);
    }
  }

  function Title() {
    if (showTitle) {
      return h("div", {
        "class": [cell_bem('title'), props.titleClass],
        "style": props.titleStyle
      }, [slots.title ? slots.title() : h("span", [title]), Label()]);
    }
  }

  function Value() {
    var showValue = slots.default || Object(utils["b" /* isDef */])(value);

    if (showValue) {
      return h("div", {
        "class": [cell_bem('value', {
          alone: !showTitle
        }), props.valueClass]
      }, [slots.default ? slots.default() : h("span", [value])]);
    }
  }

  function LeftIcon() {
    if (slots.icon) {
      return slots.icon();
    }

    if (icon) {
      return h(es_icon, {
        "class": cell_bem('left-icon'),
        "attrs": {
          "name": icon
        }
      });
    }
  }

  function RightIcon() {
    var rightIconSlot = slots['right-icon'];

    if (rightIconSlot) {
      return rightIconSlot();
    }

    if (isLink) {
      var arrowDirection = props.arrowDirection;
      return h(es_icon, {
        "class": cell_bem('right-icon'),
        "attrs": {
          "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
        }
      });
    }
  }

  function onClick(event) {
    emit(ctx, 'click', event);
    functionalRoute(ctx);
  }

  var clickable = isLink || props.clickable;
  var classes = {
    clickable: clickable,
    center: props.center,
    required: props.required,
    borderless: !props.border
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", helper_default()([{
    "class": cell_bem(classes),
    "attrs": {
      "role": clickable ? 'button' : null,
      "tabindex": clickable ? 0 : null
    },
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [LeftIcon(), Title(), Value(), RightIcon(), (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)]);
}

Cell.props = _extends({}, cellProps, {}, routeProps);
/* harmony default export */ var cell = (cell_createComponent(Cell));
// CONCATENATED MODULE: ./es/utils/validate/system.js

function isAndroid() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// CONCATENATED MODULE: ./es/utils/dom/reset-scroll.js
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var reset_scroll_isIOS = isIOS();
/* istanbul ignore next */

function resetScroll() {
  if (reset_scroll_isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}
// CONCATENATED MODULE: ./es/field/index.js










var field_createNamespace = Object(create["a" /* createNamespace */])('field'),
    field_createComponent = field_createNamespace[0],
    field_bem = field_createNamespace[1];

/* harmony default export */ var field = (field_createComponent({
  inheritAttrs: false,
  props: _extends({}, cellProps, {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    maxlength: [Number, String],
    labelWidth: [Number, String],
    labelClass: null,
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    showWordLimit: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(utils["b" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = _extends({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: Object(unit["a" /* addUnit */])(labelWidth)
        };
      }
    }
  },
  methods: {
    // @exposed-api
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    // @exposed-api
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.maxlength;

      if (Object(utils["b" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      resetScroll();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          preventDefault(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["c" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    genInput: function genInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": field_bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: field_bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: _extends({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", helper_default()([{}, inputProps]));
      }

      return h("input", helper_default()([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    genLeftIcon: function genLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": field_bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(es_icon, {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    genRightIcon: function genRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": field_bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(es_icon, {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    },
    genWordLimit: function genWordLimit() {
      var h = this.$createElement;

      if (this.showWordLimit && this.maxlength) {
        return h("div", {
          "class": field_bem('word-limit')
        }, [this.value.length, "/", this.maxlength]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.genLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(cell, {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [field_bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": field_bem((_bem = {
        error: this.error
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": field_bem('body')
    }, [this.genInput(), this.showClear && h(es_icon, {
      "attrs": {
        "name": "clear"
      },
      "class": field_bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.genRightIcon(), slots('button') && h("div", {
      "class": field_bem('button')
    }, [slots('button')])]), this.genWordLimit(), this.errorMessage && h("div", {
      "class": field_bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
}));
// CONCATENATED MODULE: ./es/toast/lock-click.js
var lockCount = 0;
function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('van-toast--unclickable');
    }

    lockCount++;
  } else {
    lockCount--;

    if (!lockCount) {
      document.body.classList.remove('van-toast--unclickable');
    }
  }
}
// CONCATENATED MODULE: ./es/toast/Toast.js






var Toast_createNamespace = Object(create["a" /* createNamespace */])('toast'),
    Toast_createComponent = Toast_createNamespace[0],
    Toast_bem = Toast_createNamespace[1];

/* harmony default export */ var Toast = (Toast_createComponent({
  mixins: [PopupMixin()],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    transition: {
      type: String,
      default: 'van-fade'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable'
  },
  methods: {
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        lockClick(clickable);
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var icon = this.icon,
          type = this.type,
          iconPrefix = this.iconPrefix,
          loadingType = this.loadingType;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return h(es_icon, {
          "class": Toast_bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(es_loading, {
          "class": Toast_bem('loading'),
          "attrs": {
            "type": loadingType
          }
        });
      }
    },
    genMessage: function genMessage() {
      var h = this.$createElement;
      var type = this.type,
          message = this.message;

      if (!Object(utils["b" /* isDef */])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": Toast_bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": Toast_bem('text')
      }, [message]);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [Toast_bem([this.position, (_ref = {}, _ref[this.type] = !this.icon, _ref)]), this.className],
      "on": {
        "click": this.onClick
      }
    }, [this.genIcon(), this.genMessage()])]);
  }
}));
// CONCATENATED MODULE: ./es/toast/index.js




var defaultOptions = {
  icon: '',
  type: 'text',
  // @deprecated
  mask: false,
  value: true,
  message: '',
  className: '',
  overlay: false,
  onClose: null,
  onOpened: null,
  duration: 2000,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null,
  closeOnClick: false,
  closeOnClickOverlay: false
}; // default options of specific type

var defaultOptionsMap = {};
var queue = [];
var multiple = false;

var currentOptions = _extends({}, defaultOptions);

function parseOptions(message) {
  if (Object(utils["c" /* isObj */])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    toast.$on('input', function (value) {
      toast.value = value;
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  return _extends({}, options, {
    overlay: options.mask || options.overlay,
    mask: undefined,
    duration: undefined
  });
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = parseOptions(options);
  options = _extends({}, currentOptions, {}, defaultOptionsMap[options.type || currentOptions.type], {}, options);

  options.clear = function () {
    toast.value = false;

    if (options.onClose) {
      options.onClose();
    }

    if (multiple && !utils["d" /* isServer */]) {
      toast.$on('closed', function () {
        clearTimeout(toast.timer);
        queue = queue.filter(function (item) {
          return item !== toast;
        });
        var parent = toast.$el.parentNode;

        if (parent) {
          parent.removeChild(toast.$el);
        }

        toast.$destroy();
      });
    }
  };

  _extends(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(_extends({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    _extends(currentOptions, type);
  }
};

toast_Toast.resetDefaultOptions = function (type) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = _extends({}, defaultOptions);
    defaultOptionsMap = {};
  }
};

toast_Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

toast_Toast.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(Toast);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = (toast_Toast);
// CONCATENATED MODULE: ./es/button/index.js







 // Types

var button_createNamespace = Object(create["a" /* createNamespace */])('button'),
    button_createComponent = button_createNamespace[0],
    button_bem = button_createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

  function onTouchstart(event) {
    emit(ctx, 'touchstart', event);
  }

  var classes = [button_bem([type, props.size, {
    plain: plain,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[BORDER_SURROUND] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(es_loading, {
        "class": button_bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": "currentColor"
        }
      }));
    } else if (icon) {
      content.push(h(es_icon, {
        "attrs": {
          "name": icon
        },
        "class": button_bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": button_bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, helper_default()([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, inherit(ctx)]), [Content()]);
}

Button.props = _extends({}, routeProps, {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ var es_button = (button_createComponent(Button));
// CONCATENATED MODULE: ./es/dialog/Dialog.js





var Dialog_createNamespace = Object(create["a" /* createNamespace */])('dialog'),
    Dialog_createComponent = Dialog_createNamespace[0],
    Dialog_bem = Dialog_createNamespace[1],
    Dialog_t = Dialog_createNamespace[2];

/* harmony default export */ var Dialog = (Dialog_createComponent({
  mixins: [PopupMixin()],
  props: {
    title: String,
    width: [Number, String],
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    transition: {
      type: String,
      default: 'van-dialog-bounce'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action); // show not trigger close event when hidden

      if (!this.value) {
        return;
      }

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false && _this.loading[action]) {
            _this.onClose(action);
          }

          _this.loading.confirm = false;
          _this.loading.cancel = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    },
    onOpened: function onOpened() {
      this.$emit('opened');
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var _bem,
        _this2 = this,
        _ref;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
        messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": Dialog_bem('header', {
        isolated: !message && !messageSlot
      })
    }, [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": Dialog_bem('content')
    }, [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": Dialog_bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": [BORDER_TOP, Dialog_bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(es_button, {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || Dialog_t('cancel')
      },
      "class": Dialog_bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(es_button, {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || Dialog_t('confirm')
      },
      "class": [Dialog_bem('confirm'), (_ref = {}, _ref[BORDER_LEFT] = hasButtons, _ref)],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message
      },
      "class": [Dialog_bem(), this.className],
      "style": {
        width: Object(unit["a" /* addUnit */])(this.width)
      }
    }, [Title, Content, ButtonGroup])]);
  }
}));
// CONCATENATED MODULE: ./es/dialog/index.js




var dialog_instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function dialog_initInstance() {
  if (dialog_instance) {
    dialog_instance.$destroy();
  }

  dialog_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(Dialog))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  dialog_instance.$on('input', function (value) {
    dialog_instance.value = value;
  });
}

function dialog_Dialog(options) {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!dialog_instance || !isInDocument(dialog_instance.$el)) {
      dialog_initInstance();
    }

    _extends(dialog_instance, dialog_Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

dialog_Dialog.defaultOptions = {
  value: true,
  title: '',
  width: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    dialog_instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
dialog_Dialog.alert = dialog_Dialog;

dialog_Dialog.confirm = function (options) {
  return dialog_Dialog(_extends({
    showCancelButton: true
  }, options));
};

dialog_Dialog.close = function () {
  if (dialog_instance) {
    dialog_instance.value = false;
  }
};

dialog_Dialog.setDefaultOptions = function (options) {
  _extends(dialog_Dialog.currentOptions, options);
};

dialog_Dialog.resetDefaultOptions = function () {
  dialog_Dialog.currentOptions = _extends({}, dialog_Dialog.defaultOptions);
};

dialog_Dialog.resetDefaultOptions();

dialog_Dialog.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(Dialog);
};

dialog_Dialog.Component = Dialog;
external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$dialog = dialog_Dialog;
/* harmony default export */ var dialog = (dialog_Dialog);
// CONCATENATED MODULE: ./es/address-edit/Detail.js






var Detail_createNamespace = Object(create["a" /* createNamespace */])('address-edit-detail'),
    Detail_createComponent = Detail_createNamespace[0],
    Detail_bem = Detail_createNamespace[1],
    Detail_t = Detail_createNamespace[2];

var android = isAndroid();
/* harmony default export */ var Detail = (Detail_createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },
  computed: {
    shouldShowSearchResult: function shouldShowSearchResult() {
      return this.focused && this.searchResult && this.showSearchResult;
    }
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    genFinish: function genFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": Detail_bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [Detail_t('complete')]);
      }
    },
    genSearchResult: function genSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var value = this.value,
          shouldShowSearchResult = this.shouldShowSearchResult,
          searchResult = this.searchResult;

      if (shouldShowSearchResult) {
        return searchResult.map(function (express) {
          return h(cell, {
            "key": express.name + express.address,
            "attrs": {
              "clickable": true,
              "border": false,
              "icon": "location-o",
              "label": express.address
            },
            "class": Detail_bem('search-item'),
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            },
            "scopedSlots": {
              title: function title() {
                if (express.name) {
                  var text = express.name.replace(value, "<span class=" + Detail_bem('keyword') + ">" + value + "</span>");
                  return h("div", {
                    "domProps": {
                      "innerHTML": text
                    }
                  });
                }
              }
            }
          });
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(cell, {
      "class": Detail_bem()
    }, [h(field, {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "border": !this.shouldShowSearchResult,
        "label": Detail_t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": Detail_t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.genFinish
      },
      "on": _extends({}, this.$listeners)
    }), this.genSearchResult()]);
  }
}));
// CONCATENATED MODULE: ./es/switch/shared.js
/**
 * Common Switch Props
 */
var switchProps = {
  size: [String, Number],
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  }
};
// CONCATENATED MODULE: ./es/switch/index.js





 // Types

var switch_createNamespace = Object(create["a" /* createNamespace */])('switch'),
    switch_createComponent = switch_createNamespace[0],
    switch_bem = switch_createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: Object(unit["a" /* addUnit */])(size),
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || BLUE : inactiveColor || '';

  function onClick(event) {
    emit(ctx, 'click', event);

    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      emit(ctx, 'input', newValue);
      emit(ctx, 'change', newValue);
    }
  }

  return h("div", helper_default()([{
    "class": switch_bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [h("div", {
    "class": switch_bem('node')
  }, [loading && h(es_loading, {
    "class": switch_bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = switchProps;
/* harmony default export */ var es_switch = (switch_createComponent(Switch));
// CONCATENATED MODULE: ./es/switch-cell/index.js






 // Types

var switch_cell_createNamespace = Object(create["a" /* createNamespace */])('switch-cell'),
    switch_cell_createComponent = switch_cell_createNamespace[0],
    switch_cell_bem = switch_cell_createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(cell, helper_default()([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": switch_cell_bem([props.cellSize])
  }, inherit(ctx)]), [h(es_switch, {
    "props": _extends({}, props),
    "on": _extends({}, ctx.listeners)
  })]);
}

SwitchCell.props = _extends({}, switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
/* harmony default export */ var switch_cell = (switch_cell_createComponent(SwitchCell));
// CONCATENATED MODULE: ./es/address-edit/index.js












var address_edit_createNamespace = Object(create["a" /* createNamespace */])('address-edit'),
    address_edit_createComponent = address_edit_createNamespace[0],
    address_edit_bem = address_edit_createNamespace[1],
    address_edit_t = address_edit_createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

/* harmony default export */ var address_edit = (address_edit_createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    detailMaxlength: {
      type: Number,
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    },
    postalValidator: {
      type: Function,
      default: isPostal
    },
    areaColumnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(utils["c" /* isObj */])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      values = values.filter(function (value) {
        return !!value;
      });

      if (values.some(function (value) {
        return !value.code;
      })) {
        es_toast(address_edit_t('areaEmpty'));
        return;
      }

      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        _extends(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : address_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : address_edit_t('telInvalid');

        case 'areaCode':
          return value ? '' : address_edit_t('areaEmpty');

        case 'addressDetail':
          return value ? '' : address_edit_t('addressEmpty');

        case 'postalCode':
          return value && !this.postalValidator(value) ? address_edit_t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        title: address_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    // @exposed-api
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this; // await for click search event


      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": address_edit_bem()
    }, [h("div", {
      "class": address_edit_bem('fields')
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "label": address_edit_t('name'),
        "placeholder": address_edit_t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          _this4.$set(data, "name", $$v);
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": address_edit_t('tel'),
        "placeholder": address_edit_t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          _this4.$set(data, "tel", $$v);
        }
      }
    }), h(field, {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "clickable": true,
        "label": address_edit_t('area'),
        "placeholder": address_edit_t('areaPlaceholder'),
        "rightIcon": "arrow",
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(Detail, {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(field, {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": address_edit_t('postal'),
        "placeholder": address_edit_t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          _this4.$set(data, "postalCode", $$v);
        }
      }
    }), this.slots()]), this.showSetDefault && h(switch_cell, {
      "class": address_edit_bem('default'),
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": address_edit_t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          _this4.$set(data, "isDefault", $$v);
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": address_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "round": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || address_edit_t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(es_button, {
      "attrs": {
        "block": true,
        "round": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || address_edit_t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(popup, {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(es_area, {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList,
        "columnsPlaceholder": this.areaColumnsPlaceholder
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/relation.js


function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        if (this.disableBindRelation) {
          return null;
        }

        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
// CONCATENATED MODULE: ./es/radio-group/index.js



var radio_group_createNamespace = Object(create["a" /* createNamespace */])('radio-group'),
    radio_group_createComponent = radio_group_createNamespace[0],
    radio_group_bem = radio_group_createNamespace[1];

/* harmony default export */ var radio_group = (radio_group_createComponent({
  mixins: [ParentMixin('vanRadio')],
  props: {
    value: null,
    disabled: Boolean,
    checkedColor: String,
    iconSize: [Number, String]
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": radio_group_bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/checkbox.js
/**
 * Common part of Checkbox & Radio
 */



var checkbox_CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [ChildrenMixin(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      },
      bindGroup: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      disableBindRelation: function disableBindRelation() {
        return !this.bindGroup;
      },
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor || this.parent && this.parent.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.isDisabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      }
    },
    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(es_icon, {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }])
      }, [slots()]);
      var iconSize = this.iconSize || this.parent && this.parent.iconSize;
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: Object(unit["a" /* addUnit */])(iconSize)
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};
// CONCATENATED MODULE: ./es/radio/index.js



var radio_createNamespace = Object(create["a" /* createNamespace */])('radio'),
    radio_createComponent = radio_createNamespace[0],
    radio_bem = radio_createNamespace[1];

/* harmony default export */ var es_radio = (radio_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: radio_bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
}));
// CONCATENATED MODULE: ./es/tag/index.js




 // Types

var tag_createNamespace = Object(create["a" /* createNamespace */])('tag'),
    tag_createComponent = tag_createNamespace[0],
    tag_bem = tag_createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref, _slots$default;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  var CloseIcon = props.closeable && h(es_icon, {
    "attrs": {
      "name": "cross"
    },
    "class": tag_bem('close'),
    "on": {
      "click": function click(event) {
        event.stopPropagation();
        emit(ctx, 'close');
      }
    }
  });
  return h("transition", {
    "attrs": {
      "name": props.closeable ? 'van-fade' : null
    }
  }, [h("span", helper_default()([{
    "key": "content",
    "style": style,
    "class": [tag_bem([classes, type]), (_ref = {}, _ref[BORDER_SURROUND] = plain, _ref)]
  }, inherit(ctx, true)]), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), CloseIcon])]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  closeable: Boolean,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ var es_tag = (tag_createComponent(Tag));
// CONCATENATED MODULE: ./es/address-list/Item.js






 // Types

var Item_createNamespace = Object(create["a" /* createNamespace */])('address-item'),
    Item_createComponent = Item_createNamespace[0],
    Item_bem = Item_createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      emit(ctx, 'select');
    }

    emit(ctx, 'click');
  }

  var genRightIcon = function genRightIcon() {
    return h(es_icon, {
      "attrs": {
        "name": "edit"
      },
      "class": Item_bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          emit(ctx, 'edit');
          emit(ctx, 'click');
        }
      }
    });
  };

  function genTag() {
    if (props.data.isDefault && props.defaultTagText) {
      return h(es_tag, {
        "attrs": {
          "type": "danger",
          "round": true
        },
        "class": Item_bem('tag')
      }, [props.defaultTagText]);
    }
  }

  function genContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": Item_bem('name')
    }, [data.name + " " + data.tel, genTag()]), h("div", {
      "class": Item_bem('address')
    }, [data.address])];

    if (switchable && !disabled) {
      return h(es_radio, {
        "attrs": {
          "name": data.id,
          "iconSize": 16
        }
      }, [Info]);
    }

    return Info;
  }

  return h(cell, helper_default()([{
    "class": Item_bem({
      disabled: disabled
    }),
    "attrs": {
      "border": false,
      "valueClass": Item_bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: genContent,
      'right-icon': genRightIcon
    },
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String
};
/* harmony default export */ var Item = (Item_createComponent(AddressItem));
// CONCATENATED MODULE: ./es/address-list/index.js





 // Types

var address_list_createNamespace = Object(create["a" /* createNamespace */])('address-list'),
    address_list_createComponent = address_list_createNamespace[0],
    address_list_bem = address_list_createNamespace[1],
    address_list_t = address_list_createNamespace[2];

function AddressList(h, props, slots, ctx) {
  var _slots$top, _slots$default;

  function genList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(Item, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable,
          "defaultTagText": props.defaultTagText
        },
        "key": item.id,
        "on": {
          "select": function select() {
            emit(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              emit(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            emit(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = genList(props.list);
  var DisabledList = genList(props.disabledList, true);
  return h("div", helper_default()([{
    "class": address_list_bem()
  }, inherit(ctx)]), [(_slots$top = slots.top) === null || _slots$top === void 0 ? void 0 : _slots$top.call(slots), h(radio_group, {
    "attrs": {
      "value": props.value
    }
  }, [List]), props.disabledText && h("div", {
    "class": address_list_bem('disabled-text')
  }, [props.disabledText]), DisabledList, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), h("div", {
    "class": address_list_bem('bottom')
  }, [h(es_button, {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addButtonText || address_list_t('add')
    },
    "class": address_list_bem('add'),
    "on": {
      "click": function click() {
        emit(ctx, 'add');
      }
    }
  })])]);
}

AddressList.props = {
  list: Array,
  value: [Number, String],
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  defaultTagText: String,
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var address_list = (address_list_createComponent(AddressList));
// EXTERNAL MODULE: ./es/utils/validate/number.js
var number = __webpack_require__(6);

// CONCATENATED MODULE: ./es/utils/validate/date.js

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Object(number["a" /* isNaN */])(date.getTime());
}
// CONCATENATED MODULE: ./es/calendar/utils.js


var utils_createNamespace = Object(create["a" /* createNamespace */])('calendar'),
    utils_createComponent = utils_createNamespace[0],
    utils_bem = utils_createNamespace[1],
    utils_t = utils_createNamespace[2];


var ROW_HEIGHT = 64;
function formatMonthTitle(date) {
  return utils_t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}
function compareMonth(date1, date2) {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}
function compareDay(day1, day2) {
  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}
function getNextDay(date) {
  date = new Date(date);
  date.setDate(date.getDate() + 1);
  return date;
}
// CONCATENATED MODULE: ./es/datetime-picker/utils.js

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return 0;
  }

  while (Object(number["a" /* isNaN */])(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// CONCATENATED MODULE: ./es/calendar/components/Month.js




var Month_createNamespace = Object(create["a" /* createNamespace */])('calendar-month'),
    Month_createComponent = Month_createNamespace[0];

/* harmony default export */ var Month = (Month_createComponent({
  props: {
    date: Date,
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    showTitle: Boolean,
    rowHeight: Number,
    formatter: Function,
    currentDate: [Date, Array]
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    title: function title() {
      return formatMonthTitle(this.date);
    },
    offset: function offset() {
      var day = this.date.getDay();
      return day > 0 ? day - 1 : 6;
    },
    totalDay: function totalDay() {
      return getMonthEndDay(this.date.getFullYear(), this.date.getMonth() + 1);
    },
    monthStyle: function monthStyle() {
      if (!this.visible) {
        var padding = Math.ceil((this.totalDay + this.offset) / 7) * this.rowHeight;
        return {
          paddingBottom: padding + "px"
        };
      }
    },
    days: function days() {
      var days = [];
      var year = this.date.getFullYear();
      var month = this.date.getMonth();

      for (var day = 1; day <= this.totalDay; day++) {
        var date = new Date(year, month, day);
        var type = this.getDayType(date);
        var config = {
          date: date,
          type: type,
          text: day,
          bottomInfo: this.getBottomInfo(type)
        };

        if (this.formatter) {
          config = this.formatter(config);
        }

        days.push(config);
      }

      return days;
    }
  },
  mounted: function mounted() {
    this.height = this.$el.getBoundingClientRect().height;
  },
  methods: {
    getDayType: function getDayType(day) {
      var type = this.type,
          minDate = this.minDate,
          maxDate = this.maxDate,
          currentDate = this.currentDate;

      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled';
      }

      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : '';
      }
      /* istanbul ignore else */


      if (type === 'range') {
        var _this$currentDate = this.currentDate,
            startDay = _this$currentDate[0],
            endDay = _this$currentDate[1];

        if (!startDay) {
          return;
        }

        var compareToStart = compareDay(day, startDay);

        if (compareToStart === 0) {
          return 'start';
        }

        if (!endDay) {
          return;
        }

        var compareToEnd = compareDay(day, endDay);

        if (compareToEnd === 0) {
          return 'end';
        }

        if (compareToStart > 0 && compareToEnd < 0) {
          return 'middle';
        }
      }
    },
    getBottomInfo: function getBottomInfo(type) {
      if (type === 'start') {
        return utils_t('start');
      }

      if (type === 'end') {
        return utils_t('end');
      }
    },
    getDayStyle: function getDayStyle(type, index) {
      var style = {};

      if (index === 0) {
        style.marginLeft = 100 * this.offset / 7 + "%";
      }

      if (this.rowHeight !== ROW_HEIGHT) {
        style.height = this.rowHeight + "px";
      }

      if (this.color) {
        if (type === 'start' || type === 'end') {
          style.background = this.color;
        } else if (type === 'middle') {
          style.color = this.color;
        }
      }

      return style;
    },
    genTitle: function genTitle() {
      var h = this.$createElement;

      if (this.showTitle) {
        return h("div", {
          "class": utils_bem('month-title')
        }, [this.title]);
      }
    },
    genMark: function genMark() {
      var h = this.$createElement;

      if (this.showMark) {
        return h("div", {
          "class": utils_bem('month-mark')
        }, [this.date.getMonth() + 1]);
      }
    },
    genDays: function genDays() {
      var h = this.$createElement;

      if (this.visible) {
        return h("div", {
          "class": utils_bem('days')
        }, [this.genMark(), this.days.map(this.genDay)]);
      }
    },
    genDay: function genDay(item, index) {
      var _this = this;

      var h = this.$createElement;
      var type = item.type,
          topInfo = item.topInfo,
          bottomInfo = item.bottomInfo;
      var style = this.getDayStyle(type, index);

      var onClick = function onClick() {
        if (type !== 'disabled') {
          _this.$emit('click', item);
        }
      };

      if (type === 'selected') {
        return h("div", {
          "style": style,
          "class": utils_bem('day'),
          "on": {
            "click": onClick
          }
        }, [h("div", {
          "class": utils_bem('selected-day'),
          "style": {
            background: this.color
          }
        }, [item.text])]);
      }

      var TopInfo = topInfo && h("div", {
        "class": utils_bem('top-info')
      }, [topInfo]);
      var BottomInfo = bottomInfo && h("div", {
        "class": utils_bem('bottom-info')
      }, [bottomInfo]);
      return h("div", {
        "style": style,
        "class": [utils_bem('day', [type]), item.className],
        "on": {
          "click": onClick
        }
      }, [TopInfo, item.text, BottomInfo]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": utils_bem('month'),
      "style": this.monthStyle
    }, [this.genTitle(), this.genDays()]);
  }
}));
// CONCATENATED MODULE: ./es/calendar/components/Header.js



var Header_createNamespace = Object(create["a" /* createNamespace */])('calendar-header'),
    Header_createComponent = Header_createNamespace[0];

/* harmony default export */ var components_Header = (Header_createComponent({
  props: {
    title: String,
    monthTitle: String
  },
  methods: {
    genTitle: function genTitle() {
      var h = this.$createElement;
      var title = this.slots('title') || this.title || utils_t('title');
      return h("div", {
        "class": utils_bem('header-title')
      }, [title]);
    },
    genMonth: function genMonth() {
      var h = this.$createElement;
      return h("div", {
        "class": utils_bem('month-title')
      }, [this.monthTitle]);
    },
    genWeekDays: function genWeekDays() {
      var h = this.$createElement;
      var weekdays = utils_t('weekdays');
      return h("div", {
        "class": utils_bem('weekdays')
      }, [weekdays.map(function (item) {
        return h("span", {
          "class": utils_bem('weekday')
        }, [item]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": utils_bem('header')
    }, [this.genTitle(), this.genMonth(), this.genWeekDays()]);
  }
}));
// CONCATENATED MODULE: ./es/calendar/index.js







/* harmony default export */ var calendar = (utils_createComponent({
  props: {
    title: String,
    color: String,
    value: Boolean,
    formatter: Function,
    defaultDate: [Date, Array],
    confirmText: String,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    minDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        return new Date();
      }
    },
    maxDate: {
      type: Date,
      validator: isDate,
      default: function _default() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    position: {
      type: String,
      default: 'bottom'
    },
    rowHeight: {
      type: Number,
      default: ROW_HEIGHT
    },
    round: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showMark: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      monthTitle: '',
      currentDate: this.getInitialDate()
    };
  },
  computed: {
    months: function months() {
      var months = [];
      var cursor = new Date(this.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while (compareMonth(cursor, this.maxDate) !== 1);

      return months;
    },
    buttonDisabled: function buttonDisabled() {
      if (this.type === 'single') {
        return !this.currentDate;
      }
      /* istanbul ignore else */


      if (this.type === 'range') {
        return !this.currentDate[0] || !this.currentDate[1];
      }
    }
  },
  watch: {
    type: function type() {
      this.reset();
    },
    value: function value(val) {
      if (val) {
        this.initRect();
      }
    },
    defaultDate: function defaultDate(val) {
      this.currentDate = val;
    }
  },
  mounted: function mounted() {
    if (!this.poppable) {
      this.initRect();
    }
  },
  methods: {
    // @exposed-api
    reset: function reset() {
      this.currentDate = this.getInitialDate();
    },
    initRect: function initRect() {
      var _this = this;

      this.$nextTick(function () {
        _this.bodyHeight = _this.$refs.body.getBoundingClientRect().height;

        _this.onScroll();
      });
    },
    getInitialDate: function getInitialDate() {
      var type = this.type,
          defaultDate = this.defaultDate,
          minDate = this.minDate;

      if (type === 'single') {
        return defaultDate || minDate;
      }
      /* istanbul ignore else */


      if (type === 'range') {
        var _ref = defaultDate || [],
            startDay = _ref[0],
            endDay = _ref[1];

        return [startDay || minDate, endDay || getNextDay(minDate)];
      }
    },
    // calculate the position of the elements
    // and find the elements that needs to be rendered
    onScroll: function onScroll() {
      var _this$$refs = this.$refs,
          body = _this$$refs.body,
          months = _this$$refs.months;
      var top = getScrollTop(body);
      var bottom = top + this.bodyHeight;
      var heights = months.map(function (item) {
        return item.height;
      });
      var heightSum = heights.reduce(function (a, b) {
        return a + b;
      }, 0); // iOS scroll bounce may exceed the range

      /* istanbul ignore next */

      if (top < 0 || bottom > heightSum && top > 0) {
        return;
      }

      var height = 0;
      var firstMonth;

      for (var i = 0; i < months.length; i++) {
        var visible = height <= bottom && height + heights[i] >= top;

        if (visible && !firstMonth) {
          firstMonth = months[i];
        }

        months[i].visible = visible;
        height += heights[i];
      }
      /* istanbul ignore else */


      if (firstMonth) {
        this.monthTitle = firstMonth.title;
      }
    },
    onClickDay: function onClickDay(item) {
      var date = item.date;

      if (this.type === 'single') {
        this.select(date, true);
      }

      if (this.type === 'range') {
        var _this$currentDate = this.currentDate,
            startDay = _this$currentDate[0],
            endDay = _this$currentDate[1];

        if (startDay && !endDay) {
          var compareToStart = compareDay(date, startDay);

          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          }
        } else {
          this.select([date, null]);
        }
      }
    },
    togglePopup: function togglePopup(val) {
      this.$emit('input', val);
    },
    select: function select(date, complete) {
      this.currentDate = date;
      this.$emit('select', this.currentDate);

      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.currentDate);
    },
    genMonth: function genMonth(date, index) {
      var h = this.$createElement;
      return h(Month, {
        "ref": "months",
        "refInFor": true,
        "attrs": {
          "date": date,
          "type": this.type,
          "color": this.color,
          "minDate": this.minDate,
          "maxDate": this.maxDate,
          "showMark": this.showMark,
          "formatter": this.formatter,
          "rowHeight": this.rowHeight,
          "showTitle": index !== 0,
          "currentDate": this.currentDate
        },
        "on": {
          "click": this.onClickDay
        }
      });
    },
    genFooterContent: function genFooterContent() {
      var h = this.$createElement;
      var slot = this.slots('footer');

      if (slot) {
        return slot;
      }

      if (this.showConfirm) {
        var text = this.buttonDisabled ? this.confirmDisabledText : this.confirmText;
        return h(es_button, {
          "attrs": {
            "round": true,
            "block": true,
            "type": "danger",
            "color": this.color,
            "disabled": this.buttonDisabled
          },
          "class": utils_bem('confirm'),
          "on": {
            "click": this.onConfirm
          }
        }, [text || utils_t('confirm')]);
      }
    },
    genFooter: function genFooter() {
      var h = this.$createElement;
      return h("div", {
        "class": utils_bem('footer', {
          'safe-area-inset-bottom': this.safeAreaInsetBottom
        })
      }, [this.genFooterContent()]);
    },
    genCalendar: function genCalendar() {
      var _this2 = this;

      var h = this.$createElement;
      return h("div", {
        "class": utils_bem()
      }, [h(components_Header, {
        "attrs": {
          "title": this.title,
          "monthTitle": this.monthTitle
        },
        "scopedSlots": {
          title: function title() {
            return _this2.slots('title');
          }
        }
      }), h("div", {
        "ref": "body",
        "class": utils_bem('body'),
        "on": {
          "scroll": this.onScroll
        }
      }, [this.months.map(this.genMonth)]), this.genFooter()]);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this.poppable) {
      var _attrs;

      return h(popup, {
        "attrs": (_attrs = {
          "round": true,
          "closeable": true,
          "value": this.value
        }, _attrs["round"] = this.round, _attrs["position"] = this.position, _attrs["closeOnClickOverlay"] = this.closeOnClickOverlay, _attrs),
        "class": utils_bem('popup'),
        "on": {
          "input": this.togglePopup
        }
      }, [this.genCalendar()]);
    }

    return this.genCalendar();
  }
}));
// CONCATENATED MODULE: ./es/image/index.js





var image_createNamespace = Object(create["a" /* createNamespace */])('image'),
    image_createComponent = image_createNamespace[0],
    image_bem = image_createNamespace[1];

/* harmony default export */ var es_image = (image_createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(utils["b" /* isDef */])(this.width)) {
        style.width = Object(unit["a" /* addUnit */])(this.width);
      }

      if (Object(utils["b" /* isDef */])(this.height)) {
        style.height = Object(unit["a" /* addUnit */])(this.height);
      }

      if (Object(utils["b" /* isDef */])(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = Object(unit["a" /* addUnit */])(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    genPlaceholder: function genPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": image_bem('loading')
        }, [this.slots('loading') || h(es_icon, {
          "attrs": {
            "name": "photo-o"
          },
          "class": image_bem('loading-icon')
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": image_bem('error')
        }, [this.slots('error') || h(es_icon, {
          "attrs": {
            "name": "warning-o"
          },
          "class": image_bem('error-icon')
        })]);
      }
    },
    genImage: function genImage() {
      var h = this.$createElement;
      var imgData = {
        class: image_bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", helper_default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", helper_default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": image_bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.genImage(), this.genPlaceholder()]);
  }
}));
// CONCATENATED MODULE: ./es/card/index.js




 // Types

var card_createNamespace = Object(create["a" /* createNamespace */])('card'),
    card_createComponent = card_createNamespace[0],
    card_bem = card_createNamespace[1];

function Card(h, props, slots, ctx) {
  var _slots$tags, _slots$priceTop, _slots$bottom;

  var thumb = props.thumb;
  var showNum = slots.num || Object(utils["b" /* isDef */])(props.num);
  var showPrice = slots.price || Object(utils["b" /* isDef */])(props.price);
  var showOriginPrice = slots['origin-price'] || Object(utils["b" /* isDef */])(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice || slots.bottom;

  function onThumbClick(event) {
    emit(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": card_bem('tag')
      }, [slots.tag ? slots.tag() : h(es_tag, {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": card_bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(es_image, {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": [card_bem('title'), 'van-multi-ellipsis--l2']
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [card_bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function PriceContent() {
    var priceArr = props.price.toString().split('.');
    return h("div", [h("span", {
      "class": card_bem('price-currency')
    }, [props.currency]), h("span", {
      "class": card_bem('price-integer')
    }, [priceArr[0]]), ".", h("span", {
      "class": card_bem('price-decimal')
    }, [priceArr[1]])]);
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": card_bem('price')
      }, [slots.price ? slots.price() : PriceContent()]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": card_bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": card_bem('num')
      }, [slots.num ? slots.num() : "x" + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": card_bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", helper_default()([{
    "class": card_bem()
  }, inherit(ctx, true)]), [h("div", {
    "class": card_bem('header')
  }, [Thumb(), h("div", {
    "class": card_bem('content', {
      centered: props.centered
    })
  }, [h("div", [Title(), Desc(), (_slots$tags = slots.tags) === null || _slots$tags === void 0 ? void 0 : _slots$tags.call(slots)]), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [(_slots$priceTop = slots['price-top']) === null || _slots$priceTop === void 0 ? void 0 : _slots$priceTop.call(slots), Price(), OriginPrice(), Num(), (_slots$bottom = slots.bottom) === null || _slots$bottom === void 0 ? void 0 : _slots$bottom.call(slots)])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};
/* harmony default export */ var card = (card_createComponent(Card));
// CONCATENATED MODULE: ./es/cell-group/index.js



 // Types

var cell_group_createNamespace = Object(create["a" /* createNamespace */])('cell-group'),
    cell_group_createComponent = cell_group_createNamespace[0],
    cell_group_bem = cell_group_createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref, _slots$default;

  var Group = h("div", helper_default()([{
    "class": [cell_group_bem(), (_ref = {}, _ref[BORDER_TOP_BOTTOM] = props.border, _ref)]
  }, inherit(ctx, true)]), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);

  if (props.title || slots.title) {
    return h("div", [h("div", {
      "class": cell_group_bem('title')
    }, [slots.title ? slots.title() : props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var cell_group = (cell_group_createComponent(CellGroup));
// CONCATENATED MODULE: ./es/checkbox/index.js



var checkbox_createNamespace = Object(create["a" /* createNamespace */])('checkbox'),
    checkbox_createComponent = checkbox_createNamespace[0],
    checkbox_bem = checkbox_createNamespace[1];

/* harmony default export */ var es_checkbox = (checkbox_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: checkbox_bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    // @exposed-api
    toggle: function toggle(checked) {
      var _this = this;

      if (checked === void 0) {
        checked = !this.checked;
      } // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.


      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));
// CONCATENATED MODULE: ./es/checkbox-group/index.js



var checkbox_group_createNamespace = Object(create["a" /* createNamespace */])('checkbox-group'),
    checkbox_group_createComponent = checkbox_group_createNamespace[0],
    checkbox_group_bem = checkbox_group_createNamespace[1];

/* harmony default export */ var checkbox_group = (checkbox_group_createComponent({
  mixins: [ParentMixin('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    iconSize: [Number, String],
    checkedColor: String,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    // @exposed-api
    toggleAll: function toggleAll(checked) {
      if (checked === false) {
        this.$emit('input', []);
        return;
      }

      var children = this.children;

      if (!checked) {
        children = children.filter(function (item) {
          return !item.checked;
        });
      }

      var names = children.map(function (item) {
        return item.name;
      });
      this.$emit('input', names);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": checkbox_group_bem()
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./es/utils/dom/raf.js
var raf = __webpack_require__(4);

// CONCATENATED MODULE: ./es/circle/index.js




var circle_createNamespace = Object(create["a" /* createNamespace */])('circle'),
    circle_createComponent = circle_createNamespace[0],
    circle_bem = circle_createNamespace[1];

var PERIMETER = 3140;
var uid = 0;

function circle_format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M " + viewBoxSize / 2 + " " + viewBoxSize / 2 + " m 0, -500 a 500, 500 0 1, " + sweepFlag + " 0, 1000 a 500, 500 0 1, " + sweepFlag + " 0, -1000";
}

/* harmony default export */ var circle = (circle_createComponent({
  props: {
    text: String,
    strokeLinecap: String,
    value: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    size: {
      type: [String, Number],
      default: 100
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: WHITE
    },
    color: {
      type: [String, Object],
      default: BLUE
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    this.uid = "van-circle-gradient-" + uid++;
  },
  computed: {
    style: function style() {
      var size = Object(unit["a" /* addUnit */])(this.size);
      return {
        width: size,
        height: size
      };
    },
    path: function path() {
      return getPath(this.clockwise, this.viewBoxSize);
    },
    viewBoxSize: function viewBoxSize() {
      return 1000 + this.strokeWidth;
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * this.value / 100;
      return {
        stroke: "" + this.color,
        strokeWidth: this.strokeWidth + 1 + "px",
        strokeLinecap: this.strokeLinecap,
        strokeDasharray: offset + "px " + PERIMETER + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    },
    gradient: function gradient() {
      return Object(utils["c" /* isObj */])(this.color);
    },
    LinearGradient: function LinearGradient() {
      var _this = this;

      var h = this.$createElement;

      if (!this.gradient) {
        return;
      }

      var Stops = Object.keys(this.color).sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      }).map(function (key, index) {
        return h("stop", {
          "key": index,
          "attrs": {
            "offset": key,
            "stop-color": _this.color[key]
          }
        });
      });
      return h("defs", [h("linearGradient", {
        "attrs": {
          "id": this.uid,
          "x1": "100%",
          "y1": "0%",
          "x2": "0%",
          "y2": "0%"
        }
      }, [Stops])]);
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = circle_format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(raf["a" /* cancelRaf */])(this.rafId);
          this.rafId = Object(raf["c" /* raf */])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', circle_format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(raf["c" /* raf */])(this.animate);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": circle_bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 " + this.viewBoxSize + " " + this.viewBoxSize
      }
    }, [this.LinearGradient, h("path", {
      "class": circle_bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": this.path
      }
    }), h("path", {
      "attrs": {
        "d": this.path,
        "stroke": this.gradient ? "url(#" + this.uid + ")" : this.color
      },
      "class": circle_bem('layer'),
      "style": this.layerStyle
    })]), this.slots() || this.text && h("div", {
      "class": circle_bem('text')
    }, [this.text])]);
  }
}));
// CONCATENATED MODULE: ./es/col/index.js


var col_createNamespace = Object(create["a" /* createNamespace */])('col'),
    col_createComponent = col_createNamespace[0],
    col_bem = col_createNamespace[1];

/* harmony default export */ var col = (col_createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": col_bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/collapse/index.js




var collapse_createNamespace = Object(create["a" /* createNamespace */])('collapse'),
    collapse_createComponent = collapse_createNamespace[0],
    collapse_bem = collapse_createNamespace[1];

/* harmony default export */ var collapse = (collapse_createComponent({
  mixins: [ParentMixin('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [collapse_bem(), (_ref = {}, _ref[BORDER_TOP_BOTTOM] = this.border, _ref)]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/collapse-item/index.js








var collapse_item_createNamespace = Object(create["a" /* createNamespace */])('collapse-item'),
    collapse_item_createComponent = collapse_item_createNamespace[0],
    collapse_item_bem = collapse_item_createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ var collapse_item = (collapse_item_createComponent({
  mixins: [ChildrenMixin('vanCollapse')],
  props: _extends({}, cellProps, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return Object(utils["b" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var _this$parent = this.parent,
          value = _this$parent.value,
          accordion = _this$parent.accordion;

      if (false) {}

      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : raf["c" /* raf */];
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          Object(raf["b" /* doubleRaf */])(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent,
          currentName = this.currentName;
      var name = parent.accordion && currentName === parent.value ? '' : currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    },
    genTitle: function genTitle() {
      var _this3 = this;

      var h = this.$createElement;
      var disabled = this.disabled,
          expanded = this.expanded;
      var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
        if (_this3.slots(name)) {
          slots[name] = function () {
            return _this3.slots(name);
          };
        }

        return slots;
      }, {});

      if (this.slots('value')) {
        titleSlots.default = function () {
          return _this3.slots('value');
        };
      }

      return h(cell, {
        "attrs": {
          "role": "button",
          "tabindex": disabled ? -1 : 0,
          "aria-expanded": String(expanded)
        },
        "class": collapse_item_bem('title', {
          disabled: disabled,
          expanded: expanded
        }),
        "on": {
          "click": this.onClick
        },
        "scopedSlots": titleSlots,
        "props": _extends({}, this.$props)
      });
    },
    genContent: function genContent() {
      var h = this.$createElement;

      if (this.inited) {
        return h("div", {
          "directives": [{
            name: "show",
            value: this.show
          }],
          "ref": "wrapper",
          "class": collapse_item_bem('wrapper'),
          "on": {
            "transitionend": this.onTransitionEnd
          }
        }, [h("div", {
          "ref": "content",
          "class": collapse_item_bem('content')
        }, [this.slots()])]);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [collapse_item_bem(), (_ref = {}, _ref[BORDER_TOP] = this.index, _ref)]
    }, [this.genTitle(), this.genContent()]);
  }
}));
// CONCATENATED MODULE: ./es/contact-card/index.js



 // Types

var contact_card_createNamespace = Object(create["a" /* createNamespace */])('contact-card'),
    contact_card_createComponent = contact_card_createNamespace[0],
    contact_card_bem = contact_card_createNamespace[1],
    contact_card_t = contact_card_createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      emit(ctx, 'click', event);
    }
  }

  function Content() {
    if (type === 'add') {
      return props.addText || contact_card_t('addText');
    }

    return [h("div", [contact_card_t('name') + "\uFF1A" + props.name]), h("div", [contact_card_t('tel') + "\uFF1A" + props.tel])];
  }

  return h(cell, helper_default()([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": contact_card_bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": contact_card_bem([type]),
    "on": {
      "click": onClick
    }
  }, inherit(ctx)]), [Content()]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};
/* harmony default export */ var contact_card = (contact_card_createComponent(ContactCard));
// CONCATENATED MODULE: ./es/contact-edit/index.js










var contact_edit_createNamespace = Object(create["a" /* createNamespace */])('contact-edit'),
    contact_edit_createComponent = contact_edit_createNamespace[0],
    contact_edit_bem = contact_edit_createNamespace[1],
    contact_edit_t = contact_edit_createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ var contact_edit = (contact_edit_createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },
  data: function data() {
    return {
      data: _extends({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = _extends({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : contact_edit_t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : contact_edit_t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          es_toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      dialog.confirm({
        message: contact_edit_t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": contact_edit_bem()
    }, [h("div", {
      "class": contact_edit_bem('fields')
    }, [h(field, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": contact_edit_t('name'),
        "placeholder": contact_edit_t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          _this3.$set(data, "name", $$v);
        }
      }
    }), h(field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": contact_edit_t('tel'),
        "placeholder": contact_edit_t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          _this3.$set(data, "tel", $$v);
        }
      }
    })]), this.showSetDefault && h(cell, {
      "attrs": {
        "title": this.setDefaultLabel,
        "border": false
      },
      "class": contact_edit_bem('switch-cell')
    }, [h(es_switch, {
      "attrs": {
        "size": 24
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          _this3.$set(data, "isDefault", $$v);
        }
      }
    })]), h("div", {
      "class": contact_edit_bem('buttons')
    }, [h(es_button, {
      "attrs": {
        "block": true,
        "round": true,
        "type": "danger",
        "text": contact_edit_t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(es_button, {
      "attrs": {
        "block": true,
        "round": true,
        "text": contact_edit_t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/contact-list/index.js









 // Types

var contact_list_createNamespace = Object(create["a" /* createNamespace */])('contact-list'),
    contact_list_createComponent = contact_list_createNamespace[0],
    contact_list_bem = contact_list_createNamespace[1],
    contact_list_t = contact_list_createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      emit(ctx, 'input', item.id);
      emit(ctx, 'select', item, index);
    }

    function RightIcon() {
      return h(es_radio, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": RED
        },
        "on": {
          "click": onClick
        }
      });
    }

    function LeftIcon() {
      return h(es_icon, {
        "attrs": {
          "name": "edit"
        },
        "class": contact_list_bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            emit(ctx, 'edit', item, index);
          }
        }
      });
    }

    function Content() {
      var nodes = [item.name + "\uFF0C" + item.tel];

      if (item.isDefault && props.defaultTagText) {
        nodes.push(h(es_tag, {
          "attrs": {
            "type": "danger",
            "round": true
          },
          "class": contact_list_bem('item-tag')
        }, [props.defaultTagText]));
      }

      return nodes;
    }

    return h(cell, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "center": true,
        "valueClass": contact_list_bem('item-value')
      },
      "class": contact_list_bem('item'),
      "scopedSlots": {
        icon: LeftIcon,
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", helper_default()([{
    "class": contact_list_bem()
  }, inherit(ctx)]), [h(radio_group, {
    "attrs": {
      "value": props.value
    },
    "class": contact_list_bem('group')
  }, [List]), h("div", {
    "class": contact_list_bem('bottom')
  }, [h(es_button, {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addText || contact_list_t('addText')
    },
    "class": contact_list_bem('add'),
    "on": {
      "click": function click() {
        emit(ctx, 'add');
      }
    }
  })])]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String,
  defaultTagText: String
};
/* harmony default export */ var contact_list = (contact_list_createComponent(ContactList));
// EXTERNAL MODULE: ./es/utils/format/string.js
var string = __webpack_require__(3);

// CONCATENATED MODULE: ./es/count-down/utils.js

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', Object(string["b" /* padZero */])(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', Object(string["b" /* padZero */])(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', Object(string["b" /* padZero */])(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', Object(string["b" /* padZero */])(seconds));
  }

  if (format.indexOf('S') !== -1) {
    var ms = Object(string["b" /* padZero */])(milliseconds, 3);

    if (format.indexOf('SSS') !== -1) {
      format = format.replace('SSS', ms);
    } else if (format.indexOf('SS') !== -1) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
// CONCATENATED MODULE: ./es/count-down/index.js




var count_down_createNamespace = Object(create["a" /* createNamespace */])('count-down'),
    count_down_createComponent = count_down_createNamespace[0],
    count_down_bem = count_down_createNamespace[1];

/* harmony default export */ var count_down = (count_down_createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return parseTimeData(this.remain);
    },
    formattedTime: function formattedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated: function activated() {
    if (this.keepAlivePaused) {
      this.counting = true;
      this.keepAlivePaused = false;
      this.tick();
    }
  },
  deactivated: function deactivated() {
    if (this.counting) {
      this.pause();
      this.keepAlivePaused = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.pause();
  },
  methods: {
    // @exposed-api
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    // @exposed-api
    pause: function pause() {
      this.counting = false;
      Object(raf["a" /* cancelRaf */])(this.rafId);
    },
    // @exposed-api
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this.counting) {
          return;
        }

        _this.setRemain(_this.getRemain());

        if (_this.remain > 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = Object(raf["c" /* raf */])(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this2.counting) {
          return;
        }

        var remain = _this2.getRemain();

        if (!isSameSecond(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain > 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": count_down_bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
}));
// CONCATENATED MODULE: ./es/coupon/index.js





var coupon_createNamespace = Object(create["a" /* createNamespace */])('coupon'),
    coupon_createComponent = coupon_createNamespace[0],
    coupon_bem = coupon_createNamespace[1],
    coupon_t = coupon_createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + Object(string["b" /* padZero */])(date.getMonth() + 1) + "." + Object(string["b" /* padZero */])(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

/* harmony default export */ var es_coupon = (coupon_createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return coupon_t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? coupon_t('unlimited') : coupon_t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": coupon_bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": coupon_bem('content')
    }, [h("div", {
      "class": coupon_bem('head')
    }, [h("h2", {
      "class": coupon_bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", {
      "class": coupon_bem('condition')
    }, [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": coupon_bem('body')
    }, [h("p", {
      "class": coupon_bem('name')
    }, [coupon.name]), h("p", {
      "class": coupon_bem('valid')
    }, [this.validPeriod]), !this.disabled && h(es_checkbox, {
      "attrs": {
        "value": this.chosen,
        "size": 18,
        "checked-color": RED
      },
      "class": coupon_bem('corner')
    })])]), description && h("p", {
      "class": coupon_bem('description')
    }, [description])]);
  }
}));
// CONCATENATED MODULE: ./es/coupon-cell/index.js



 // Types

var coupon_cell_createNamespace = Object(create["a" /* createNamespace */])('coupon-cell'),
    coupon_cell_createComponent = coupon_cell_createNamespace[0],
    coupon_cell_bem = coupon_cell_createNamespace[1],
    coupon_cell_t = coupon_cell_createNamespace[2];

function coupon_cell_formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? coupon_cell_t('tips') : coupon_cell_t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = coupon_cell_formatValue(props);
  return h(cell, helper_default()([{
    "class": coupon_cell_bem(),
    "attrs": {
      "value": value,
      "title": props.title || coupon_cell_t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, inherit(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};
/* harmony default export */ var coupon_cell = (coupon_cell_createComponent(CouponCell));
// CONCATENATED MODULE: ./es/tab/index.js





var tab_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    tab_createComponent = tab_createNamespace[0],
    tab_bem = tab_createNamespace[1];

/* harmony default export */ var tab = (tab_createComponent({
  mixins: [ChildrenMixin('vanTabs')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    info: [Number, String],
    name: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean
  }),
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return Object(utils["b" /* isDef */])(this.name) ? this.name : this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    },
    inited: function inited(val) {
      var _this = this;

      if (this.parent.lazyRender && val) {
        this.$nextTick(function () {
          _this.parent.$emit('rendered', _this.computedName, _this.title);
        });
      }
    }
  },
  render: function render(h) {
    var slots = this.slots,
        parent = this.parent,
        isActive = this.isActive;
    var shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
    var show = parent.scrollspy || isActive;
    var Content = shouldRender ? slots() : h();

    if (parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": tab_bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": tab_bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: show
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": tab_bem('pane')
    }, [Content]);
  }
}));
// CONCATENATED MODULE: ./es/tabs/utils.js


var scrollLeftRafId;
function scrollLeftTo(el, to, duration) {
  Object(raf["a" /* cancelRaf */])(scrollLeftRafId);
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = Object(raf["c" /* raf */])(animate);
    }
  }

  animate();
}
function scrollTopTo(to, duration, cb) {
  var current = getRootScrollTop();
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    setRootScrollTop(current);

    if (isDown && current < to || !isDown && current > to) {
      Object(raf["c" /* raf */])(animate);
    } else {
      cb && cb();
    }
  }

  animate();
}
// CONCATENATED MODULE: ./es/utils/dom/style.js
function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}
// CONCATENATED MODULE: ./es/tabs/Title.js



var Title_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    Title_createComponent = Title_createNamespace[0],
    Title_bem = Title_createNamespace[1];

/* harmony default export */ var tabs_Title = (Title_createComponent({
  props: {
    dot: Boolean,
    type: String,
    info: [Number, String],
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": [Title_bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }), {
        'van-ellipsis': this.ellipsis
      }],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "class": Title_bem('text')
    }, [this.slots() || this.title, h(es_info, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/tabs/Content.js




var Content_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    Content_createComponent = Content_createNamespace[0],
    Content_bem = Content_createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ var tabs_Content = (Content_createComponent({
  mixins: [TouchMixin],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    genChildren: function genChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": Content_bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": Content_bem('content', {
        animated: this.animated
      }),
      "on": _extends({}, this.listeners)
    }, [this.genChildren()]);
  }
}));
// CONCATENATED MODULE: ./es/sticky/index.js




var sticky_createNamespace = Object(create["a" /* createNamespace */])('sticky'),
    sticky_createComponent = sticky_createNamespace[0],
    sticky_bem = sticky_createNamespace[1];

/* harmony default export */ var es_sticky = (sticky_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(utils["b" /* isDef */])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = getScrollTop(window);
      var topToPageTop = scroll_getElementTop(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": sticky_bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./es/tabs/index.js













var tabs_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    tabs_createComponent = tabs_createNamespace[0],
    tabs_bem = tabs_createNamespace[1];

/* harmony default export */ var tabs = (tabs_createComponent({
  mixins: [ParentMixin('vanTabs'), BindEventMixin(function (bind) {
    bind(window, 'resize', this.resize, true);

    if (this.scrollspy) {
      bind(window, 'scroll', this.onScroll, true);
    }
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    },
    scrollOffset: function scrollOffset() {
      if (this.sticky) {
        return this.offsetTop + this.tabHeight;
      }

      return 0;
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;

      this.setCurrentIndexByName(this.currentName || this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed && !this.scrollspy) {
        setRootScrollTop(Math.ceil(scroll_getElementTop(this.$el) - this.offsetTop));
      }
    },
    scrollspy: function scrollspy(val) {
      if (val) {
        event_on(window, 'scroll', this.onScroll, true);
      } else {
        off(window, 'scroll', this.onScroll);
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    // @exposed-api
    resize: function resize() {
      this.setLine();
    },
    onShow: function onShow() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;
        _this2.tabHeight = getVisibleHeight(_this2.$refs.wrap);

        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || isHidden(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var width = Object(utils["b" /* isDef */])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(unit["a" /* addUnit */])(width),
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if (Object(utils["b" /* isDef */])(lineHeight)) {
          var height = Object(unit["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(utils["b" /* isDef */])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.scrollToCurrentContent();
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : this.duration);
    },
    onSticktScroll: function onSticktScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    },
    scrollToCurrentContent: function scrollToCurrentContent() {
      var _this4 = this;

      if (this.scrollspy) {
        this.clickedScroll = true;
        var instance = this.children[this.currentIndex];
        var el = instance && instance.$el;

        if (el) {
          var to = Math.ceil(scroll_getElementTop(el)) - this.scrollOffset;
          scrollTopTo(to, this.duration, function () {
            _this4.clickedScroll = false;
          });
        }
      }
    },
    onScroll: function onScroll() {
      if (this.scrollspy && !this.clickedScroll) {
        var index = this.getCurrentIndexOnScroll();
        this.setCurrentIndex(index);
      }
    },
    getCurrentIndexOnScroll: function getCurrentIndexOnScroll() {
      var children = this.children;

      for (var index = 0; index < children.length; index++) {
        var top = getVisibleTop(children[index].$el);

        if (top > this.scrollOffset) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    }
  },
  render: function render() {
    var _this5 = this,
        _ref;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(tabs_Title, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "dot": item.dot,
          "info": item.info,
          "title": item.title,
          "color": _this5.color,
          "isActive": index === _this5.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this5.titleActiveColor,
          "inactiveColor": _this5.titleInactiveColor,
          "swipeThreshold": _this5.swipeThreshold
        },
        "style": item.titleStyle,
        "scopedSlots": {
          default: function _default() {
            return item.slots('title');
          }
        },
        "on": {
          "click": function click() {
            _this5.onClick(index);

            route(item.$router, item);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [tabs_bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[BORDER_TOP_BOTTOM] = type === 'line' && this.border, _ref)]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": tabs_bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": tabs_bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": tabs_bem([type])
    }, [this.sticky ? h(es_sticky, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onSticktScroll
      }
    }, [Wrap]) : Wrap, h(tabs_Content, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./es/coupon-list/index.js







var coupon_list_createNamespace = Object(create["a" /* createNamespace */])('coupon-list'),
    coupon_list_createComponent = coupon_list_createNamespace[0],
    coupon_list_bem = coupon_list_createNamespace[1],
    coupon_list_t = coupon_list_createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
/* harmony default export */ var coupon_list = (coupon_list_createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showCount: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: 'scrollToShowCoupon'
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    genEmpty: function genEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": coupon_list_bem('empty')
      }, [h("img", {
        "attrs": {
          "src": this.emptyImage
        }
      }), h("p", [coupon_list_t('empty')])]);
    },
    genExchangeButton: function genExchangeButton() {
      var h = this.$createElement;
      return h(es_button, {
        "attrs": {
          "plain": true,
          "type": "danger",
          "text": this.exchangeButtonText || coupon_list_t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": coupon_list_bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var count = this.showCount ? " (" + coupons.length + ")" : '';
    var title = (this.enabledTitle || coupon_list_t('enable')) + count;
    var disabledCount = this.showCount ? " (" + disabledCoupons.length + ")" : '';
    var disabledTitle = (this.disabledTitle || coupon_list_t('disabled')) + disabledCount;
    var ExchangeBar = this.showExchangeBar && h(field, {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || coupon_list_t('placeholder'),
        "maxlength": "20"
      },
      "class": coupon_list_bem('field'),
      "scopedSlots": {
        button: this.genExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(tab, {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": coupon_list_bem('list', {
        'with-bottom': this.showCloseButton
      }),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(es_coupon, {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.genEmpty()])]);
    var DisabledCouponTab = h(tab, {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": coupon_list_bem('list', {
        'with-bottom': this.showCloseButton
      }),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(es_coupon, {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.genEmpty()])]);
    return h("div", {
      "class": coupon_list_bem()
    }, [ExchangeBar, h(tabs, {
      "class": coupon_list_bem('tab'),
      "attrs": {
        "border": false
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h("div", {
      "class": coupon_list_bem('bottom')
    }, [h(es_button, {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "round": true,
        "type": "danger",
        "block": true,
        "text": this.closeButtonText || coupon_list_t('close')
      },
      "class": coupon_list_bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/shared.js





var sharedProps = _extends({}, pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = times(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(string["b" /* padZero */])(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    columns: 'updateColumnValue',
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.updateColumnValue();
    this.$nextTick(function () {
      _this3.updateInnerValue();
    });
  },
  methods: {
    // @exposed-api
    getPicker: function getPicker() {
      return this.$refs.picker;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(pickerProps).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(picker, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": _extends({}, props)
    });
  }
};
// CONCATENATED MODULE: ./es/datetime-picker/TimePicker.js






var TimePicker_createNamespace = Object(create["a" /* createNamespace */])('time-picker'),
    TimePicker_createComponent = TimePicker_createNamespace[0];

/* harmony default export */ var TimePicker = (TimePicker_createComponent({
  mixins: [TimePickerMixin],
  props: _extends({}, sharedProps, {
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour]
      }, {
        type: 'minute',
        range: [this.minMinute, this.maxMinute]
      }];
    }
  },
  watch: {
    filter: 'updateInnerValue',
    minHour: 'updateInnerValue',
    maxHour: 'updateInnerValue',
    minMinute: 'updateInnerValue',
    maxMinute: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = Object(string["b" /* padZero */])(this.minHour) + ":" + Object(string["b" /* padZero */])(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = Object(string["b" /* padZero */])(range(hour, this.minHour, this.maxHour));
      minute = Object(string["b" /* padZero */])(range(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    updateInnerValue: function updateInnerValue() {
      var _this$getPicker$getIn = this.getPicker().getIndexes(),
          hourIndex = _this$getPicker$getIn[0],
          minuteIndex = _this$getPicker$getIn[1];

      var hour = this.originColumns[0].values[hourIndex] || this.originColumns[0].values[0];
      var minute = this.originColumns[1].values[minuteIndex] || this.originColumns[1].values[0];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
    },
    onChange: function onChange(picker) {
      var _this = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = this.innerValue.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.getPicker().setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/DatePicker.js






var currentYear = new Date().getFullYear();

var DatePicker_createNamespace = Object(create["a" /* createNamespace */])('date-picker'),
    DatePicker_createComponent = DatePicker_createNamespace[0];

/* harmony default export */ var DatePicker = (DatePicker_createComponent({
  mixins: [TimePickerMixin],
  props: _extends({}, sharedProps, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isDate
    }
  }),
  watch: {
    filter: 'updateInnerValue',
    minDate: 'updateInnerValue',
    maxDate: 'updateInnerValue',
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!isDate(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    updateInnerValue: function updateInnerValue() {
      var _this = this;

      var indexes = this.getPicker().getIndexes();

      var getValue = function getValue(index) {
        return getTrueValue(_this.originColumns[index].values[indexes[index]]);
      };

      var year = getValue(0);
      var month = getValue(1);
      var maxDate = getMonthEndDay(year, month);
      var date;

      if (this.type === 'year-month') {
        date = 1;
      } else {
        date = getValue(2);
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = getValue(3);
        minute = getValue(4);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
    },
    onChange: function onChange(picker) {
      var _this2 = this;

      this.updateInnerValue();
      this.$nextTick(function () {
        _this2.$nextTick(function () {
          _this2.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue() {
      var _this3 = this;

      var value = this.innerValue;
      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(string["b" /* padZero */])(value.getMonth() + 1)), formatter('day', Object(string["b" /* padZero */])(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', Object(string["b" /* padZero */])(value.getHours())), formatter('minute', Object(string["b" /* padZero */])(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this3.getPicker().setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./es/datetime-picker/index.js





var datetime_picker_createNamespace = Object(create["a" /* createNamespace */])('datetime-picker'),
    datetime_picker_createComponent = datetime_picker_createNamespace[0],
    datetime_picker_bem = datetime_picker_createNamespace[1];

/* harmony default export */ var datetime_picker = (datetime_picker_createComponent({
  props: _extends({}, TimePicker.props, {}, DatePicker.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? TimePicker : DatePicker;
    return h(Component, {
      "class": datetime_picker_bem(),
      "props": _extends({}, this.$props),
      "on": _extends({}, this.$listeners)
    });
  }
}));
// CONCATENATED MODULE: ./es/divider/index.js


 // Types

var divider_createNamespace = Object(create["a" /* createNamespace */])('divider'),
    divider_createComponent = divider_createNamespace[0],
    divider_bem = divider_createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", helper_default()([{
    "attrs": {
      "role": "separator"
    },
    "style": {
      borderColor: props.borderColor
    },
    "class": divider_bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, inherit(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};
/* harmony default export */ var divider = (divider_createComponent(Divider));
// CONCATENATED MODULE: ./es/dropdown-item/index.js








var dropdown_item_createNamespace = Object(create["a" /* createNamespace */])('dropdown-item'),
    dropdown_item_createComponent = dropdown_item_createNamespace[0],
    dropdown_item_bem = dropdown_item_createNamespace[1];

/* harmony default export */ var dropdown_item = (dropdown_item_createComponent({
  mixins: [PortalMixin({
    ref: 'wrapper'
  }), ChildrenMixin('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    }
  },
  watch: {
    showPopup: function showPopup(val) {
      this.bindScroll(val);
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  methods: {
    // @exposed-api
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    },
    bindScroll: function bindScroll(bind) {
      var scroller = this.parent.scroller;
      var action = bind ? event_on : off;
      action(scroller, 'scroll', this.onScroll, true);
    },
    onScroll: function onScroll() {
      this.parent.updateOffset();
    },
    onClickWrapper: function onClickWrapper(event) {
      // prevent being identified as clicking outside and closed when use get-contaienr
      if (this.getContainer) {
        event.stopPropagation();
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var _this$parent = this.parent,
        zIndex = _this$parent.zIndex,
        offset = _this$parent.offset,
        overlay = _this$parent.overlay,
        duration = _this$parent.duration,
        direction = _this$parent.direction,
        activeColor = _this$parent.activeColor,
        closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(cell, {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text
        },
        "key": option.value,
        "class": dropdown_item_bem('option', {
          active: active
        }),
        "style": {
          color: active ? activeColor : ''
        },
        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          }
        }
      }, [active && h(es_icon, {
        "class": dropdown_item_bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success"
        }
      })]);
    });
    var style = {
      zIndex: zIndex
    };

    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", [h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper
      }],
      "ref": "wrapper",
      "style": style,
      "class": dropdown_item_bem([direction]),
      "on": {
        "click": this.onClickWrapper
      }
    }, [h(popup, {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute'
        }
      },
      "class": dropdown_item_bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        }
      },
      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        }
      }
    }, [Options, this.slots('default')])])]);
  }
}));
// CONCATENATED MODULE: ./es/mixins/click-outside.js
/**
 * Listen to click outside event
 */


var click_outside_ClickOutsideMixin = function ClickOutsideMixin(config) {
  return external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      event_on(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      off(document, config.event, this.clickOutsideHandler);
    }
  });
};
// CONCATENATED MODULE: ./es/dropdown-menu/index.js






var dropdown_menu_createNamespace = Object(create["a" /* createNamespace */])('dropdown-menu'),
    dropdown_menu_createComponent = dropdown_menu_createNamespace[0],
    dropdown_menu_bem = dropdown_menu_createNamespace[1];

/* harmony default export */ var dropdown_menu = (dropdown_menu_createComponent({
  mixins: [ParentMixin('vanDropdownMenu'), click_outside_ClickOutsideMixin({
    event: 'click',
    method: 'onClickOutside'
  })],
  props: {
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      offset: 0
    };
  },
  computed: {
    scroller: function scroller() {
      return getScrollEventTarget(this.$el);
    }
  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0
        },
        "class": dropdown_menu_bem('item', {
          disabled: item.disabled
        }),
        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          }
        }
      }, [h("span", {
        "class": [dropdown_menu_bem('title', {
          active: item.showPopup,
          down: item.showPopup === (_this.direction === 'down')
        }), item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : ''
        }
      }, [h("div", {
        "class": "van-ellipsis"
      }, [item.slots('title') || item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [dropdown_menu_bem(), BORDER_TOP_BOTTOM]
    }, [Titles, this.slots('default')]);
  }
}));
// CONCATENATED MODULE: ./es/goods-action/index.js



var goods_action_createNamespace = Object(create["a" /* createNamespace */])('goods-action'),
    goods_action_createComponent = goods_action_createNamespace[0],
    goods_action_bem = goods_action_createNamespace[1];

/* harmony default export */ var goods_action = (goods_action_createComponent({
  mixins: [ParentMixin('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": goods_action_bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/goods-action-button/index.js






var goods_action_button_createNamespace = Object(create["a" /* createNamespace */])('goods-action-button'),
    goods_action_button_createComponent = goods_action_button_createNamespace[0],
    goods_action_button_bem = goods_action_button_createNamespace[1];

/* harmony default export */ var goods_action_button = (goods_action_button_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    type: String,
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(es_button, {
      "class": goods_action_button_bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
}));
// CONCATENATED MODULE: ./es/goods-action-icon/index.js






var goods_action_icon_createNamespace = Object(create["a" /* createNamespace */])('goods-action-icon'),
    goods_action_icon_createComponent = goods_action_icon_createNamespace[0],
    goods_action_icon_bem = goods_action_icon_createNamespace[1];

/* harmony default export */ var goods_action_icon = (goods_action_icon_createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": goods_action_icon_bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.slots('icon') ? h("div", {
      "class": goods_action_icon_bem('icon')
    }, [this.slots('icon')]) : h(es_icon, {
      "class": [goods_action_icon_bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon
      }
    }), this.slots() || this.text]);
  }
}));
// CONCATENATED MODULE: ./es/grid/index.js




var grid_createNamespace = Object(create["a" /* createNamespace */])('grid'),
    grid_createComponent = grid_createNamespace[0],
    grid_bem = grid_createNamespace[1];

/* harmony default export */ var grid = (grid_createComponent({
  mixins: [ParentMixin('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: Object(unit["a" /* addUnit */])(gutter)
        };
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [grid_bem(), (_ref = {}, _ref[BORDER_TOP] = this.border && !this.gutter, _ref)]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/grid-item/index.js








var grid_item_createNamespace = Object(create["a" /* createNamespace */])('grid-item'),
    grid_item_createComponent = grid_item_createNamespace[0],
    grid_item_bem = grid_item_createNamespace[1];

/* harmony default export */ var grid_item = (grid_item_createComponent({
  mixins: [ChildrenMixin('vanGrid')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = Object(unit["a" /* addUnit */])(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var iconSlot = this.slots('icon');

      if (iconSlot) {
        return h("div", {
          "class": grid_item_bem('icon-wrapper')
        }, [iconSlot, h(es_info, {
          "attrs": {
            "dot": this.dot,
            "info": this.info
          }
        })]);
      }

      if (this.icon) {
        return h(es_icon, {
          "attrs": {
            "name": this.icon,
            "dot": this.dot,
            "info": this.info,
            "size": this.parent.iconSize
          },
          "class": grid_item_bem('icon')
        });
      }
    },
    genContent: function genContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.genIcon(), this.slots('text') || this.text && h("span", {
        "class": grid_item_bem('text')
      }, [this.text])];
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [grid_item_bem({
        square: square
      })],
      "style": this.style
    }, [h("div", {
      "style": this.contentStyle,
      "attrs": {
        "role": clickable ? 'button' : null,
        "tabindex": clickable ? 0 : null
      },
      "class": [grid_item_bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), (_ref = {}, _ref[BORDER] = border, _ref)],
      "on": {
        "click": this.onClick
      }
    }, [this.genContent()])]);
  }
}));
// CONCATENATED MODULE: ./es/swipe/index.js







var swipe_createNamespace = Object(create["a" /* createNamespace */])('swipe'),
    swipe_createComponent = swipe_createNamespace[0],
    swipe_bem = swipe_createNamespace[1];

/* harmony default export */ var es_swipe = (swipe_createComponent({
  mixins: [TouchMixin, BindEventMixin(function (bind, isBind) {
    bind(window, 'resize', this.resize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    // @exposed-api
    resize: function resize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        preventDefault(event, this.stopPropagation);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      Object(raf["b" /* doubleRaf */])(function () {
        var targetIndex;

        if (_this.loop && index === _this.count) {
          targetIndex = _this.active === 0 ? 0 : index;
        } else {
          targetIndex = index % _this.count;
        }

        _this.move({
          pace: targetIndex - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          Object(raf["b" /* doubleRaf */])(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          Object(raf["b" /* doubleRaf */])(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    genIndicator: function genIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": swipe_bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": swipe_bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": swipe_bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": swipe_bem('track')
    }, [this.slots()]), this.genIndicator()]);
  }
}));
// CONCATENATED MODULE: ./es/swipe-item/index.js



var swipe_item_createNamespace = Object(create["a" /* createNamespace */])('swipe-item'),
    swipe_item_createComponent = swipe_item_createNamespace[0],
    swipe_item_bem = swipe_item_createNamespace[1];

/* harmony default export */ var swipe_item = (swipe_item_createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": swipe_item_bem(),
      "style": style,
      "on": _extends({}, this.$listeners)
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/ImagePreview.js










var ImagePreview_createNamespace = Object(create["a" /* createNamespace */])('image-preview'),
    ImagePreview_createComponent = ImagePreview_createNamespace[0],
    ImagePreview_bem = ImagePreview_createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

/* harmony default export */ var image_preview_ImagePreview = (ImagePreview_createComponent({
  mixins: [PopupMixin({
    skipToggleEvent: true
  }), TouchMixin],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: ImagePreview_bem('overlay')
    }
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      active: 0,
      moving: false,
      zooming: false,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value(val) {
      var _this = this;

      if (val) {
        this.setActive(this.startPosition);
        this.$nextTick(function () {
          _this.$refs.swipe.swipeTo(_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    },
    startPosition: function startPosition(val) {
      this.setActive(val);
    },
    shouldRender: {
      handler: function handler(val) {
        var _this2 = this;

        if (val) {
          this.$nextTick(function () {
            var swipe = _this2.$refs.swipe.$el;
            event_on(swipe, 'touchstart', _this2.onWrapperTouchStart);
            event_on(swipe, 'touchmove', preventDefault);
            event_on(swipe, 'touchend', _this2.onWrapperTouchEnd);
            event_on(swipe, 'touchcancel', _this2.onWrapperTouchEnd);
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this3 = this;

      preventDefault(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            if (!_this3.asyncClose) {
              _this3.$emit('input', false);
            }

            _this3.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        preventDefault(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = range(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          preventDefault(event, true);
        }
      }
    },
    setActive: function setActive(active) {
      this.resetScale();

      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": ImagePreview_bem('index')
        }, [this.slots('index') || this.active + 1 + " / " + this.images.length]);
      }
    },
    genCover: function genCover() {
      var h = this.$createElement;
      var cover = this.slots('cover');

      if (cover) {
        return h("div", {
          "class": ImagePreview_bem('cover')
        }, [cover]);
      }
    },
    genImages: function genImages() {
      var _this4 = this;

      var h = this.$createElement;
      var imageSlots = {
        loading: function loading() {
          return h(es_loading, {
            "attrs": {
              "type": "spinner"
            }
          });
        }
      };
      return h(es_swipe, {
        "ref": "swipe",
        "attrs": {
          "loop": this.loop,
          "indicatorColor": "white",
          "duration": this.swipeDuration,
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators
        },
        "class": ImagePreview_bem('swipe'),
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image, index) {
        return h(swipe_item, [h(es_image, {
          "attrs": {
            "src": image,
            "fit": "contain",
            "lazyLoad": _this4.lazyLoad
          },
          "class": ImagePreview_bem('image'),
          "scopedSlots": imageSlots,
          "style": index === _this4.active ? _this4.imageStyle : null,
          "nativeOn": {
            "touchstart": _this4.onImageTouchStart,
            "touchmove": _this4.onImageTouchMove,
            "touchend": _this4.onImageTouchEnd,
            "touchcancel": _this4.onImageTouchEnd
          }
        })]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [ImagePreview_bem(), this.className]
    }, [this.genImages(), this.genIndex(), this.genCover()])]);
  }
}));
// CONCATENATED MODULE: ./es/image-preview/index.js




var image_preview_instance;
var image_preview_defaultConfig = {
  loop: true,
  images: [],
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: false
};

var image_preview_initInstance = function initInstance() {
  image_preview_instance = new (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(image_preview_ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(image_preview_instance.$el);
  image_preview_instance.$on('change', function (index) {
    if (image_preview_instance.onChange) {
      image_preview_instance.onChange(index);
    }
  });
};

var es_image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }
  /* istanbul ignore if */


  if (utils["d" /* isServer */]) {
    return;
  }

  if (!image_preview_instance) {
    image_preview_initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(image_preview_instance, image_preview_defaultConfig, options);

  image_preview_instance.$once('input', function (show) {
    image_preview_instance.value = show;
  });

  if (options.onClose) {
    image_preview_instance.$off('close');
    image_preview_instance.$once('close', options.onClose);
  }

  return image_preview_instance;
};

es_image_preview_ImagePreview.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(image_preview_ImagePreview);
};

/* harmony default export */ var image_preview = (es_image_preview_ImagePreview);
// CONCATENATED MODULE: ./es/index-anchor/index.js




var index_anchor_createNamespace = Object(create["a" /* createNamespace */])('index-anchor'),
    index_anchor_createComponent = index_anchor_createNamespace[0],
    index_anchor_bem = index_anchor_createNamespace[1];

/* harmony default export */ var index_anchor = (index_anchor_createComponent({
  mixins: [ChildrenMixin('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      left: null,
      width: null,
      active: false
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          zIndex: "" + this.parent.zIndex,
          left: this.left ? this.left + "px" : null,
          width: this.width ? this.width + "px" : null,
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [index_anchor_bem({
        sticky: sticky
      }), (_ref = {}, _ref[BORDER_BOTTOM] = sticky, _ref)]
    }, [this.slots('default') || this.index])]);
  }
}));
// CONCATENATED MODULE: ./es/index-bar/index.js









var index_bar_createNamespace = Object(create["a" /* createNamespace */])('index-bar'),
    index_bar_createComponent = index_bar_createNamespace[0],
    index_bar_bem = index_bar_createNamespace[1];

/* harmony default export */ var index_bar = (index_bar_createComponent({
  mixins: [TouchMixin, ParentMixin('vanIndexBar'), BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    highlightColor: {
      type: String,
      default: GREEN
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },
  data: function data() {
    return {
      activeAnchorIndex: null
    };
  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor
        };
      }
    }
  },
  watch: {
    indexList: function indexList() {
      this.$nextTick(this.onScroll);
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      if (isHidden(this.$el)) {
        return;
      }

      var scrollTop = getScrollTop(this.scroller);
      var scrollerRect = this.getScrollerRect();
      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: _this.getElementTop(item.$el, scrollerRect)
        };
      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        this.children.forEach(function (item, index) {
          if (index === active || index === active - 1) {
            var rect = item.$el.getBoundingClientRect();
            item.left = rect.left;
            item.width = rect.width;
          } else {
            item.left = null;
            item.width = null;
          }

          if (index === active) {
            item.active = true;
            item.top = Math.max(_this.stickyOffsetTop, rects[index].top - scrollTop) + scrollerRect.top;
          } else if (index === active - 1) {
            var activeItemTop = rects[active].top - scrollTop;
            item.active = activeItemTop > 0;
            item.top = activeItemTop + scrollerRect.top - item.height;
          } else {
            item.active = false;
          }
        });
      }
    },
    getScrollerRect: function getScrollerRect() {
      var scroller = this.scroller;
      var scrollerRect = {
        top: 0,
        left: 0
      };

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      }

      return scrollerRect;
    },
    getElementTop: function getElementTop(ele, scrollerRect) {
      var scroller = this.scroller;

      if (scroller === window || scroller === document.body) {
        return scroll_getElementTop(ele);
      }

      var eleRect = ele.getBoundingClientRect();
      return eleRect.top - scrollerRect.top + getScrollTop(scroller);
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;
        var reachTop = this.sticky ? prevHeight + this.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        preventDefault(event);
        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.sticky && this.stickyOffsetTop) {
          setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": index_bar_bem('index', {
          active: active
        }),
        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index
        }
      }, [index]);
    });
    return h("div", {
      "class": index_bar_bem()
    }, [h("div", {
      "class": index_bar_bem('sidebar'),
      "style": {
        zIndex: this.zIndex + 1
      },
      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [Indexes]), this.slots('default')]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vue-lazyload/vue-lazyload.js
var vue_lazyload = __webpack_require__(10);
var vue_lazyload_default = /*#__PURE__*/__webpack_require__.n(vue_lazyload);

// CONCATENATED MODULE: ./es/lazyload/index.js

/* harmony default export */ var lazyload = (vue_lazyload_default.a);
// CONCATENATED MODULE: ./es/list/index.js






var list_createNamespace = Object(create["a" /* createNamespace */])('list'),
    list_createComponent = list_createNamespace[0],
    list_bem = list_createNamespace[1],
    list_t = list_createNamespace[2];

/* harmony default export */ var es_list = (list_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = getScrollEventTarget(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  data: function data() {
    return {
      // use sync innerLoading state to avoid repeated loading in some edge cases
      innerLoading: this.loading
    };
  },
  updated: function updated() {
    this.innerLoading = this.loading;
  },
  mounted: function mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },
  watch: {
    loading: 'check',
    finished: 'check'
  },
  methods: {
    // @exposed-api
    check: function check() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.innerLoading || _this.finished || _this.error) {
          return;
        }

        var el = _this.$el,
            scroller = _this.scroller,
            offset = _this.offset,
            direction = _this.direction;
        var scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }

        var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        /* istanbul ignore next */

        if (!scrollerHeight || isHidden(el)) {
          return false;
        }

        var isReachEdge = false;

        var placeholderRect = _this.$refs.placeholder.getBoundingClientRect();

        if (direction === 'up') {
          isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          _this.innerLoading = true;

          _this.$emit('input', true);

          _this.$emit('load');
        }
      });
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    },
    genLoading: function genLoading() {
      var h = this.$createElement;

      if (this.innerLoading && !this.finished) {
        return h("div", {
          "class": list_bem('loading'),
          "key": "loading"
        }, [this.slots('loading') || h(es_loading, {
          "attrs": {
            "size": "16"
          }
        }, [this.loadingText || list_t('loading')])]);
      }
    },
    genFinishedText: function genFinishedText() {
      var h = this.$createElement;

      if (this.finished) {
        var text = this.slots('finished') || this.finishedText;

        if (text) {
          return h("div", {
            "class": list_bem('finished-text')
          }, [text]);
        }
      }
    },
    genErrorText: function genErrorText() {
      var h = this.$createElement;

      if (this.error) {
        var text = this.slots('error') || this.errorText;

        if (text) {
          return h("div", {
            "on": {
              "click": this.clickErrorText
            },
            "class": list_bem('error-text')
          }, [text]);
        }
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": list_bem('placeholder')
    });
    return h("div", {
      "class": list_bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.innerLoading
      }
    }, [this.direction === 'down' ? this.slots() : Placeholder, this.genLoading(), this.genFinishedText(), this.genErrorText(), this.direction === 'up' ? this.slots() : Placeholder]);
  }
}));
// EXTERNAL MODULE: ./es/locale/index.js + 1 modules
var locale = __webpack_require__(5);

// CONCATENATED MODULE: ./es/nav-bar/index.js




 // Types

var nav_bar_createNamespace = Object(create["a" /* createNamespace */])('nav-bar'),
    nav_bar_createComponent = nav_bar_createNamespace[0],
    nav_bar_bem = nav_bar_createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", helper_default()([{
    "class": [nav_bar_bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[BORDER_BOTTOM] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex
    }
  }, inherit(ctx)]), [h("div", {
    "class": nav_bar_bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || utils["e" /* noop */]
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(es_icon, {
    "class": nav_bar_bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [nav_bar_bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": nav_bar_bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || utils["e" /* noop */]
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};
/* harmony default export */ var nav_bar = (nav_bar_createComponent(NavBar));
// CONCATENATED MODULE: ./es/notice-bar/index.js



var notice_bar_createNamespace = Object(create["a" /* createNamespace */])('notice-bar'),
    notice_bar_createComponent = notice_bar_createNamespace[0],
    notice_bar_bem = notice_bar_createNamespace[1];

/* harmony default export */ var notice_bar = (notice_bar_createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = notice_bar_bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = notice_bar_bem('play--infinite');
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(es_icon, {
          "class": notice_bar_bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(es_icon, {
          "class": notice_bar_bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": notice_bar_bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": notice_bar_bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [notice_bar_bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
}));
// CONCATENATED MODULE: ./es/notify/Notify.js






 // Types

var Notify_createNamespace = Object(create["a" /* createNamespace */])('notify'),
    Notify_createComponent = Notify_createNamespace[0],
    Notify_bem = Notify_createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(popup, helper_default()([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "duration": 0.2,
      "lockScroll": false
    },
    "style": style,
    "class": [Notify_bem([props.type]), props.className]
  }, inherit(ctx, true)]), [props.message]);
}

Notify.props = _extends({}, popupMixinProps, {
  background: String,
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger'
  },
  color: {
    type: String,
    default: WHITE
  },
  duration: {
    type: Number,
    default: 3000
  }
});
/* harmony default export */ var notify_Notify = (Notify_createComponent(Notify));
// CONCATENATED MODULE: ./es/notify/index.js






var timer;
var notify_instance;

function notify_parseOptions(message) {
  return Object(utils["c" /* isObj */])(message) ? message : {
    message: message
  };
}

function es_notify_Notify(options) {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return;
  }

  if (!notify_instance) {
    notify_instance = mount(notify_Notify, {
      on: {
        click: function click(event) {
          if (notify_instance.onClick) {
            notify_instance.onClick(event);
          }
        },
        close: function close() {
          if (notify_instance.onClose) {
            notify_instance.onClose();
          }
        },
        opened: function opened() {
          if (notify_instance.onOpened) {
            notify_instance.onOpened();
          }
        }
      }
    });
  }

  options = _extends({}, es_notify_Notify.currentOptions, {}, notify_parseOptions(options));

  _extends(notify_instance, options);

  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(es_notify_Notify.clear, options.duration);
  }

  return notify_instance;
}

function notify_defaultOptions() {
  return {
    type: 'danger',
    value: true,
    message: '',
    color: WHITE,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

es_notify_Notify.clear = function () {
  if (notify_instance) {
    notify_instance.value = false;
  }
};

es_notify_Notify.currentOptions = notify_defaultOptions();

es_notify_Notify.setDefaultOptions = function (options) {
  _extends(es_notify_Notify.currentOptions, options);
};

es_notify_Notify.resetDefaultOptions = function () {
  es_notify_Notify.currentOptions = notify_defaultOptions();
};

es_notify_Notify.install = function () {
  external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(notify_Notify);
};

external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$notify = es_notify_Notify;
/* harmony default export */ var notify = (es_notify_Notify);
// CONCATENATED MODULE: ./es/number-keyboard/Key.js




var Key_createNamespace = Object(create["a" /* createNamespace */])('key'),
    Key_createComponent = Key_createNamespace[0],
    Key_bem = Key_createNamespace[1];

/* harmony default export */ var Key = (Key_createComponent({
  mixins: [TouchMixin],
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return Key_bem(classNames);
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      // compatible with Vue 2.6 event bubble bug
      event.stopPropagation();
      this.touchStart(event);
      this.active = true;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": [BORDER, this.className]
    }, [this.slots('default') || this.text]);
  }
}));
// CONCATENATED MODULE: ./es/number-keyboard/index.js






var number_keyboard_createNamespace = Object(create["a" /* createNamespace */])('number-keyboard'),
    number_keyboard_createComponent = number_keyboard_createNamespace[0],
    number_keyboard_bem = number_keyboard_createNamespace[1],
    number_keyboard_t = number_keyboard_createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];
/* harmony default export */ var number_keyboard = (number_keyboard_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray'],
            type: 'extra'
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey,
            type: 'extra'
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || number_keyboard_t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.show && this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [number_keyboard_bem('title'), BORDER_TOP]
    }, [titleLeftSlot && h("span", {
      "class": number_keyboard_bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": number_keyboard_bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(Key, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete'), key.type === 'extra' && _this.slots('extra-key')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": number_keyboard_bem('sidebar')
    }, [h(Key, {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(Key, {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": number_keyboard_bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": event_stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": number_keyboard_bem('body')
    }, [Keys, Sidebar])])]);
  }
}));
// CONCATENATED MODULE: ./es/pagination/index.js



var pagination_createNamespace = Object(create["a" /* createNamespace */])('pagination'),
    pagination_createComponent = pagination_createNamespace[0],
    pagination_bem = pagination_createNamespace[1],
    pagination_t = pagination_createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ var pagination = (pagination_createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": pagination_bem({
        simple: simple
      })
    }, [h("li", {
      "class": [pagination_bem('item', {
        disabled: value === 1
      }), pagination_bem('prev'), BORDER],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || pagination_t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [pagination_bem('item', {
          active: page.active
        }), pagination_bem('page'), BORDER],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": pagination_bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [pagination_bem('item', {
        disabled: value === this.count
      }), pagination_bem('next'), BORDER],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || pagination_t('next')])]);
  }
}));
// CONCATENATED MODULE: ./es/panel/index.js





 // Types

var panel_createNamespace = Object(create["a" /* createNamespace */])('panel'),
    panel_createComponent = panel_createNamespace[0],
    panel_bem = panel_createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(cell, {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": panel_bem('header-value')
      },
      "class": panel_bem('header')
    }), h("div", {
      "class": panel_bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [panel_bem('footer'), BORDER_TOP]
    }, [slots.footer()])];
  };

  return h(cell_group, helper_default()([{
    "class": panel_bem(),
    "scopedSlots": {
      default: Content
    }
  }, inherit(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
/* harmony default export */ var panel = (panel_createComponent(Panel));
// CONCATENATED MODULE: ./es/password-input/index.js



 // Types

var password_input_createNamespace = Object(create["a" /* createNamespace */])('password-input'),
    password_input_createComponent = password_input_createNamespace[0],
    password_input_bem = password_input_createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var _ref;

  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _class;

    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var showCursor = props.focused && i === props.value.length;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: Object(unit["a" /* addUnit */])(props.gutter)
      };
    }

    Points.push(h("li", {
      "class": (_class = {}, _class[BORDER_LEFT] = showBorder, _class),
      "style": style
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char, showCursor && h("div", {
      "class": password_input_bem('cursor')
    })]));
  }

  return h("div", {
    "class": password_input_bem()
  }, [h("ul", helper_default()([{
    "class": [password_input_bem('security'), (_ref = {}, _ref[BORDER_SURROUND] = !props.gutter, _ref)],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        emit(ctx, 'focus', event);
      }
    }
  }, inherit(ctx, true)]), [Points]), info && h("div", {
    "class": password_input_bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  focused: Boolean,
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};
/* harmony default export */ var password_input = (password_input_createComponent(PasswordInput));
// CONCATENATED MODULE: ./es/progress/index.js


var progress_createNamespace = Object(create["a" /* createNamespace */])('progress'),
    progress_createComponent = progress_createNamespace[0],
    progress_bem = progress_createNamespace[1];

/* harmony default export */ var es_progress = (progress_createComponent({
  props: {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    pivotColor: String,
    trackColor: String,
    strokeWidth: [String, Number],
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.setWidth();
  },
  watch: {
    showPivot: 'setWidth',
    pivotText: 'setWidth'
  },
  methods: {
    setWidth: function setWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = Object(utils["b" /* isDef */])(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      left: (this.progressWidth - this.pivotWidth) * percentage / 100 + "px",
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: this.progressWidth * percentage / 100 + 'px'
    };
    var wrapperStyle = {
      background: this.trackColor,
      height: Object(unit["a" /* addUnit */])(this.strokeWidth)
    };
    return h("div", {
      "class": progress_bem(),
      "style": wrapperStyle
    }, [h("span", {
      "class": progress_bem('portion'),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": progress_bem('pivot')
    }, [text])])]);
  }
}));
// CONCATENATED MODULE: ./es/pull-refresh/index.js






var pull_refresh_createNamespace = Object(create["a" /* createNamespace */])('pull-refresh'),
    pull_refresh_createComponent = pull_refresh_createNamespace[0],
    pull_refresh_bem = pull_refresh_createNamespace[1],
    pull_refresh_t = pull_refresh_createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];
/* harmony default export */ var pull_refresh = (pull_refresh_createComponent({
  mixins: [TouchMixin],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },
  computed: {
    touchable: function touchable() {
      return this.status !== 'loading' && this.status !== 'success' && !this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      this.duration = this.animationDuration;

      if (loading) {
        this.setStatus(this.headHeight, true);
      } else if (this.slots('success') || this.successText) {
        this.showSuccessTip();
      } else {
        this.setStatus(0, false);
      }
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
    this.scrollEl = getScrollEventTarget(this.$el);
  },
  methods: {
    checkPullStart: function checkPullStart(event) {
      this.ceiling = getScrollTop(this.scrollEl) === 0;

      if (this.ceiling) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (this.touchable) {
        this.checkPullStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable) {
        return;
      }

      if (!this.ceiling) {
        this.checkPullStart(event);
      }

      this.touchMove(event);

      if (this.ceiling && this.deltaY >= 0 && this.direction === 'vertical') {
        preventDefault(event);
        this.setStatus(this.ease(this.deltaY));
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this = this;

      if (this.touchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;

      if (distance > headHeight) {
        if (distance < headHeight * 2) {
          distance = headHeight + (distance - headHeight) / 2;
        } else {
          distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
        }
      }

      return Math.round(distance);
    },
    setStatus: function setStatus(distance, isLoading) {
      var status;

      if (isLoading) {
        status = 'loading';
      } else if (distance === 0) {
        status = 'normal';
      } else {
        status = distance < this.headHeight ? 'pulling' : 'loosing';
      }

      this.distance = distance;

      if (status !== this.status) {
        this.status = status;
      }
    },
    genStatus: function genStatus() {
      var h = this.$createElement;
      var status = this.status,
          distance = this.distance;
      var slot = this.slots(status, {
        distance: distance
      });

      if (slot) {
        return slot;
      }

      var nodes = [];
      var text = this[status + "Text"] || pull_refresh_t(status);

      if (TEXT_STATUS.indexOf(status) !== -1) {
        nodes.push(h("div", {
          "class": pull_refresh_bem('text')
        }, [text]));
      }

      if (status === 'loading') {
        nodes.push(h(es_loading, {
          "attrs": {
            "size": "16"
          }
        }, [text]));
      }

      return nodes;
    },
    showSuccessTip: function showSuccessTip() {
      var _this2 = this;

      this.status = 'success';
      setTimeout(function () {
        _this2.setStatus(0);
      }, this.successDuration);
    }
  },
  render: function render() {
    var h = arguments[0];
    var style = {
      transitionDuration: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : ''
    };
    return h("div", {
      "class": pull_refresh_bem()
    }, [h("div", {
      "ref": "track",
      "class": pull_refresh_bem('track'),
      "style": style
    }, [h("div", {
      "class": pull_refresh_bem('head')
    }, [this.genStatus()]), this.slots()])]);
  }
})); //
// CONCATENATED MODULE: ./es/rate/index.js





var rate_createNamespace = Object(create["a" /* createNamespace */])('rate'),
    rate_createComponent = rate_createNamespace[0],
    rate_bem = rate_createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

/* harmony default export */ var es_rate = (rate_createComponent({
  mixins: [TouchMixin],
  props: {
    size: [Number, String],
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    value: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    list: function list() {
      var list = [];

      for (var i = 1; i <= this.count; i++) {
        list.push(getRateStatus(this.value, i, this.allowHalf));
      }

      return list;
    },
    sizeWithUnit: function sizeWithUnit() {
      return Object(unit["a" /* addUnit */])(this.size);
    },
    gutterWithUnit: function gutterWithUnit() {
      return Object(unit["a" /* addUnit */])(this.gutter);
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    select: function select(index) {
      if (!this.disabled && !this.readonly && index !== this.value) {
        this.$emit('input', index);
        this.$emit('change', index);
      }
    },
    onTouchStart: function onTouchStart(event) {
      var _this = this;

      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchStart(event);
      var rects = this.$refs.items.map(function (item) {
        return item.getBoundingClientRect();
      });
      var ranges = [];
      rects.forEach(function (rect, index) {
        if (_this.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left
          });
        }
      });
      this.ranges = ranges;
    },
    onTouchMove: function onTouchMove(event) {
      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        preventDefault(event);
        var clientX = event.touches[0].clientX;
        this.select(this.getScoreByPosition(clientX));
      }
    },
    getScoreByPosition: function getScoreByPosition(x) {
      for (var i = this.ranges.length - 1; i > 0; i--) {
        if (x > this.ranges[i].left) {
          return this.ranges[i].score;
        }
      }

      return this.allowHalf ? 0.5 : 1;
    },
    genStar: function genStar(status, index) {
      var _this2 = this;

      var h = this.$createElement;
      var icon = this.icon,
          color = this.color,
          count = this.count,
          voidIcon = this.voidIcon,
          disabled = this.disabled,
          voidColor = this.voidColor,
          disabledColor = this.disabledColor;
      var score = index + 1;
      var isFull = status === 'full';
      var isVoid = status === 'void';
      var style;

      if (this.gutterWithUnit && score !== count) {
        style = {
          paddingRight: this.gutterWithUnit
        };
      }

      return h("div", {
        "ref": "items",
        "refInFor": true,
        "key": index,
        "attrs": {
          "role": "radio",
          "tabindex": "0",
          "aria-setsize": count,
          "aria-posinset": score,
          "aria-checked": String(!isVoid)
        },
        "style": style,
        "class": rate_bem('item')
      }, [h(es_icon, {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isFull ? icon : voidIcon,
          "data-score": score,
          "color": disabled ? disabledColor : isFull ? color : voidColor
        },
        "class": rate_bem('icon'),
        "on": {
          "click": function click() {
            _this2.select(score);
          }
        }
      }), this.allowHalf && h(es_icon, {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isVoid ? voidIcon : icon,
          "data-score": score - 0.5,
          "color": disabled ? disabledColor : isVoid ? voidColor : color
        },
        "class": rate_bem('icon', 'half'),
        "on": {
          "click": function click() {
            _this2.select(score - 0.5);
          }
        }
      })]);
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h("div", {
      "class": rate_bem(),
      "attrs": {
        "tabindex": "0",
        "role": "radiogroup"
      }
    }, [this.list.map(function (status, index) {
      return _this3.genStar(status, index);
    })]);
  }
}));
// CONCATENATED MODULE: ./es/row/index.js


var row_createNamespace = Object(create["a" /* createNamespace */])('row'),
    row_createComponent = row_createNamespace[0],
    row_bem = row_createNamespace[1];

/* harmony default export */ var row = (row_createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": row_bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/search/index.js






 // Types

var search_createNamespace = Object(create["a" /* createNamespace */])('search'),
    search_createComponent = search_createNamespace[0],
    search_bem = search_createNamespace[1],
    search_t = search_createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": search_bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return h("div", {
      "class": search_bem('action'),
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "on": {
        "click": onCancel
      }
    }, [slots.action ? slots.action() : props.actionText || search_t('cancel')]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: _extends({}, ctx.listeners, {
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }

        emit(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = inherit(ctx);
  inheritData.attrs = undefined;
  return h("div", helper_default()([{
    "class": search_bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": search_bem('content', props.shape)
  }, [Label(), h(field, helper_default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ var search = (search_createComponent(Search));
// CONCATENATED MODULE: ./es/sidebar/index.js



var sidebar_createNamespace = Object(create["a" /* createNamespace */])('sidebar'),
    sidebar_createComponent = sidebar_createNamespace[0],
    sidebar_bem = sidebar_createNamespace[1];

/* harmony default export */ var sidebar = (sidebar_createComponent({
  mixins: [ParentMixin('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": sidebar_bem()
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/sidebar-item/index.js






var sidebar_item_createNamespace = Object(create["a" /* createNamespace */])('sidebar-item'),
    sidebar_item_createComponent = sidebar_item_createNamespace[0],
    sidebar_item_bem = sidebar_item_createNamespace[1];

/* harmony default export */ var sidebar_item = (sidebar_item_createComponent({
  mixins: [ChildrenMixin('vanSidebar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": sidebar_item_bem({
        select: this.select,
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": sidebar_item_bem('text')
    }, [this.title, h(es_info, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": sidebar_item_bem('info')
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/skeleton/index.js


 // Types

var skeleton_createNamespace = Object(create["a" /* createNamespace */])('skeleton'),
    skeleton_createComponent = skeleton_createNamespace[0],
    skeleton_bem = skeleton_createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": skeleton_bem('title'),
        "style": {
          width: Object(unit["a" /* addUnit */])(props.titleWidth)
        }
      });
    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": skeleton_bem('row'),
        "style": {
          width: Object(unit["a" /* addUnit */])(getRowWidth(i))
        }
      }));
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = Object(unit["a" /* addUnit */])(props.avatarSize);
      return h("div", {
        "class": skeleton_bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size
        }
      });
    }
  }

  return h("div", helper_default()([{
    "class": skeleton_bem({
      animate: props.animate
    })
  }, inherit(ctx)]), [Avatar(), h("div", {
    "class": skeleton_bem('content')
  }, [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};
/* harmony default export */ var skeleton = (skeleton_createComponent(Skeleton));
// CONCATENATED MODULE: ./es/sku/lang.js
/**
 * Sku only provide zh-CN lang by default
 */
/* harmony default export */ var lang = ({
  'zh-CN': {
    vanSku: {
      select: '选择',
      selected: '已选',
      selectSku: '请先选择商品规格',
      soldout: '库存不足',
      originPrice: '原价',
      minusTip: '至少选择一件',
      minusStartTip: function minusStartTip(start) {
        return start + "\u4EF6\u8D77\u552E";
      },
      unavailable: '商品已经无法购买啦',
      stock: '剩余',
      stockUnit: '件',
      quotaTip: function quotaTip(quota) {
        return "\u6BCF\u4EBA\u9650\u8D2D" + quota + "\u4EF6";
      },
      quotaUsedTip: function quotaUsedTip(quota, count) {
        return "\u6BCF\u4EBA\u9650\u8D2D" + quota + "\u4EF6\uFF0C\u4F60\u5DF2\u8D2D\u4E70" + count + "\u4EF6";
      }
    },
    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车'
    },
    vanSkuImgUploader: {
      oversize: function oversize(maxSize) {
        return "\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8";
      },
      fail: '上传失败<br />重新上传'
    },
    vanSkuStepper: {
      quotaLimit: function quotaLimit(quota) {
        return "\u9650\u8D2D" + quota + "\u4EF6";
      },
      quotaStart: function quotaStart(start) {
        return start + "\u4EF6\u8D77\u552E";
      },
      comma: '，',
      num: '购买数量'
    },
    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码'
      },
      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码'
      }
    }
  }
});
// CONCATENATED MODULE: ./es/sku/components/SkuHeader.js



 // Types

var SkuHeader_createNamespace = Object(create["a" /* createNamespace */])('sku-header'),
    SkuHeader_createComponent = SkuHeader_createNamespace[0],
    SkuHeader_bem = SkuHeader_createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var img;
  sku.tree.some(function (item) {
    var id = selectedSku[item.k_s];

    if (id && item.v) {
      var matchedSku = item.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0] || {};
      img = matchedSku.previewImgUrl || matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });
  return img;
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", helper_default()([{
    "class": [SkuHeader_bem(), BORDER_BOTTOM]
  }, inherit(ctx)]), [h("div", {
    "class": SkuHeader_bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": SkuHeader_bem('goods-info')
  }, [slots.default && slots.default()])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};
/* harmony default export */ var components_SkuHeader = (SkuHeader_createComponent(SkuHeader));
// CONCATENATED MODULE: ./es/sku/components/SkuHeaderItem.js


 // Types

var SkuHeaderItem_createNamespace = Object(create["a" /* createNamespace */])('sku-header-item'),
    SkuHeaderItem_createComponent = SkuHeaderItem_createNamespace[0],
    SkuHeaderItem_bem = SkuHeaderItem_createNamespace[1];

function SkuHeaderItem_SkuHeader(h, props, slots, ctx) {
  return h("div", helper_default()([{
    "class": SkuHeaderItem_bem()
  }, inherit(ctx)]), [slots.default && slots.default()]);
}

/* harmony default export */ var SkuHeaderItem = (SkuHeaderItem_createComponent(SkuHeaderItem_SkuHeader));
// CONCATENATED MODULE: ./es/sku/components/SkuRow.js



 // Types

var SkuRow_createNamespace = Object(create["a" /* createNamespace */])('sku-row'),
    SkuRow_createComponent = SkuRow_createNamespace[0],
    SkuRow_bem = SkuRow_createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", helper_default()([{
    "class": [SkuRow_bem(), BORDER_BOTTOM]
  }, inherit(ctx)]), [h("div", {
    "class": SkuRow_bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};
/* harmony default export */ var components_SkuRow = (SkuRow_createComponent(SkuRow));
// CONCATENATED MODULE: ./es/sku/constants.js
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ var constants = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});
// CONCATENATED MODULE: ./es/sku/utils/skuHelper.js


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var skuHelper_isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== UNSELECTED_SKU_VALUE_ID;
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var skuHelper_getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== UNSELECTED_SKU_VALUE_ID) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var skuHelper_isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = _extends({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== UNSELECTED_SKU_VALUE_ID;
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};
/* harmony default export */ var skuHelper = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: skuHelper_getSelectedSkuValues,
  isAllSelected: skuHelper_isAllSelected,
  isSkuChoosable: skuHelper_isSkuChoosable
});
// CONCATENATED MODULE: ./es/sku/components/SkuRowItem.js




var SkuRowItem_createNamespace = Object(create["a" /* createNamespace */])('sku-row-item'),
    SkuRowItem_createComponent = SkuRowItem_createNamespace[0];

/* harmony default export */ var SkuRowItem = (SkuRowItem_createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    choosable: function choosable() {
      return skuHelper_isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', _extends({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    var imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [imgUrl && h("img", {
      "class": "van-sku-row__item-img",
      "attrs": {
        "src": imgUrl
      }
    }), h("span", {
      "class": "van-sku-row__item-name"
    }, [this.skuValue.name])]);
  }
}));
// CONCATENATED MODULE: ./es/stepper/index.js






var stepper_createNamespace = Object(create["a" /* createNamespace */])('stepper'),
    stepper_createComponent = stepper_createNamespace[0],
    stepper_bem = stepper_createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;

function equal(value1, value2) {
  return String(value1) === String(value2);
} // add num and avoid float number


function add(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

/* harmony default export */ var stepper = (stepper_createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: Number,
    name: {
      type: [Number, String],
      default: ''
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var defaultValue = Object(utils["b" /* isDef */])(this.value) ? this.value : this.defaultValue;
    var value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.disableMinus || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.disablePlus || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = Object(unit["a" /* addUnit */])(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = Object(unit["a" /* addUnit */])(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      if (this.buttonSize) {
        var size = Object(unit["a" /* addUnit */])(this.buttonSize);
        return {
          width: size,
          height: size
        };
      }
    }
  },
  watch: {
    value: function value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },
    max: 'check',
    min: 'check',
    integer: 'check',
    decimalLength: 'check',
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val, {
        name: this.name
      });
    }
  },
  methods: {
    check: function check() {
      var val = this.format(this.currentValue);

      if (!equal(val, this.currentValue)) {
        this.currentValue = val;
      }
    },
    // filter illegal characters
    filter: function filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '');

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }

      return value;
    },
    format: function format(value) {
      value = this.filter(value); // format range

      value = value === '' ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min); // format decimal

      if (Object(utils["b" /* isDef */])(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },
    onInput: function onInput(event) {
      var value = event.target.value; // allow input to be empty

      if (value === '') {
        return;
      }

      var formatted = this.filter(value); // limit max decimal length

      if (Object(utils["b" /* isDef */])(this.decimalLength) && formatted.indexOf('.') !== -1) {
        var pair = formatted.split('.');
        formatted = pair[0] + "." + pair[1].slice(0, this.decimalLength);
      }

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },
    emitChange: function emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value, {
          name: this.name
        });
      } else {
        this.currentValue = value;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = this.format(add(+this.currentValue, diff));
      this.emitChange(value);
      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      var value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);
      resetScroll();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        preventDefault(event);
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": stepper_bem()
    }, [h("button", helper_default()([{
      "directives": [{
        name: "show",
        value: this.showMinus
      }],
      "attrs": {
        "type": "button"
      },
      "style": this.buttonStyle,
      "class": stepper_bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": stepper_bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", helper_default()([{
      "directives": [{
        name: "show",
        value: this.showPlus
      }],
      "attrs": {
        "type": "button"
      },
      "style": this.buttonStyle,
      "class": stepper_bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuStepper.js



var namespace = Object(create["a" /* createNamespace */])('sku-stepper');
var SkuStepper_createComponent = namespace[0];
var SkuStepper_t = namespace[2];
var QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT,
    STOCK_LIMIT = LIMIT_TYPE.STOCK_LIMIT;
/* harmony default export */ var SkuStepper = (SkuStepper_createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    hideQuotaText: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    startSaleNum: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      var intValue = parseInt(num, 10);

      if (intValue >= this.stepperMinLimit && intValue <= this.stepperLimit) {
        this.skuEventBus.$emit('sku:numChange', intValue);
      }
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum && this.stepperMinLimit <= limit) {
        this.currentNum = limit;
      }

      this.checkState(this.stepperMinLimit, limit);
    },
    stepperMinLimit: function stepperMinLimit(start) {
      if (start > this.currentNum || start > this.stepperLimit) {
        this.currentNum = start;
      }

      this.checkState(start, this.stepperLimit);
    }
  },
  computed: {
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    },
    stepperMinLimit: function stepperMinLimit() {
      return this.startSaleNum < 1 ? 1 : this.startSaleNum;
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else {
        var textArr = [];

        if (this.startSaleNum > 1) {
          textArr.push(SkuStepper_t('quotaStart', this.startSaleNum));
        }

        if (this.quota > 0) {
          textArr.push(SkuStepper_t('quotaLimit', this.quota));
        }

        text = textArr.join(SkuStepper_t('comma'));
      }

      return text;
    }
  },
  created: function created() {
    this.checkState(this.stepperMinLimit, this.stepperLimit);
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
      this.checkState(this.stepperMinLimit, this.stepperLimit);
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed,
        startSaleNum: this.startSaleNum
      });
    },
    onChange: function onChange(currentValue) {
      var intValue = parseInt(currentValue, 10);
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(intValue);
      this.$emit('change', intValue);
    },
    checkState: function checkState(min, max) {
      // 如果选择小于起售，则强制变为起售
      if (this.currentNum < min || min > max) {
        this.currentNum = min;
      } else if (this.currentNum > max) {
        // 当前选择数量大于最大可选时，需要重置已选数量
        this.currentNum = max;
      }

      this.skuEventBus.$emit('sku:stepperState', {
        valid: min <= max,
        min: min,
        max: max,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed,
        startSaleNum: this.startSaleNum
      });
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || SkuStepper_t('num')]), h(stepper, {
      "class": "van-sku__stepper",
      "attrs": {
        "min": this.stepperMinLimit,
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput,
        "integer": true
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    }), !this.hideQuotaText && this.quotaText && h("span", {
      "class": "van-sku__stepper-quota"
    }, ["(", this.quotaText, ")"])])]);
  }
}));
// CONCATENATED MODULE: ./es/utils/validate/email.js
/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}
// CONCATENATED MODULE: ./es/uploader/utils.js
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function utils_readFile(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve();
      return;
    }

    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
// CONCATENATED MODULE: ./es/uploader/index.js







var uploader_createNamespace = Object(create["a" /* createNamespace */])('uploader'),
    uploader_createComponent = uploader_createNamespace[0],
    uploader_bem = uploader_createNamespace[1];

/* harmony default export */ var uploader = (uploader_createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    deletable: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(unit["a" /* addUnit */])(this.previewSize);
    }
  },
  methods: {
    getDetail: function getDetail(index) {
      if (index === void 0) {
        index = this.fileList.length;
      }

      return {
        name: this.name,
        index: index
      };
    },
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.getDetail());

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return utils_readFile(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            var result = {
              file: file
            };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        utils_readFile(files, this.resultType).then(function (content) {
          var result = {
            file: files
          };

          if (content) {
            result.content = content;
          }

          _this2.onAfterRead(result, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      this.resetInput();

      if (oversize) {
        this.$emit('oversize', files, this.getDetail());
        return;
      }

      this.$emit('input', [].concat(this.fileList, toArray(files)));

      if (this.afterRead) {
        this.afterRead(files, this.getDetail());
      }
    },
    onDelete: function onDelete(file, index) {
      var _this3 = this;

      if (this.beforeDelete) {
        var response = this.beforeDelete(file, this.getDetail(index));

        if (!response) {
          return;
        }

        if (response.then) {
          response.then(function () {
            _this3.deleteFile(file, index);
          }).catch(utils["e" /* noop */]);
          return;
        }
      }

      this.deleteFile(file, index);
    },
    deleteFile: function deleteFile(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file, this.getDetail(index));
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var _this4 = this;

      if (!this.previewFullImage) {
        return;
      }

      var imageFiles = this.fileList.filter(function (item) {
        return isImageFile(item);
      });
      var imageContents = imageFiles.map(function (item) {
        return item.content || item.url;
      });
      this.imagePreview = image_preview({
        images: imageContents,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item),
        onClose: function onClose() {
          _this4.$emit('close-preview');
        }
      });
    },
    // @exposed-api
    closeImagePreview: function closeImagePreview() {
      if (this.imagePreview) {
        this.imagePreview.close();
      }
    },
    genPreviewItem: function genPreviewItem(item, index) {
      var _this5 = this;

      var h = this.$createElement;
      var DeleteIcon = this.deletable && h(es_icon, {
        "attrs": {
          "name": "clear"
        },
        "class": uploader_bem('preview-delete'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();

            _this5.onDelete(item, index);
          }
        }
      });
      var Preview = isImageFile(item) ? h(es_image, {
        "attrs": {
          "fit": this.imageFit,
          "src": item.content || item.url,
          "width": this.previewSize,
          "height": this.previewSize,
          "radius": 4
        },
        "class": uploader_bem('preview-image'),
        "on": {
          "click": function click() {
            _this5.onPreviewImage(item);
          }
        }
      }) : h("div", {
        "class": uploader_bem('file'),
        "style": {
          width: this.previewSizeWithUnit,
          height: this.previewSizeWithUnit
        }
      }, [h(es_icon, {
        "class": uploader_bem('file-icon'),
        "attrs": {
          "name": "description"
        }
      }), h("div", {
        "class": [uploader_bem('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url])]);
      return h("div", {
        "class": uploader_bem('preview'),
        "on": {
          "click": function click() {
            _this5.$emit('click-preview', item, _this5.getDetail(index));
          }
        }
      }, [Preview, DeleteIcon]);
    },
    genPreviewList: function genPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.genPreviewItem);
      }
    },
    genUpload: function genUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": _extends({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": uploader_bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": uploader_bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": uploader_bem('upload'),
        "style": style
      }, [h(es_icon, {
        "attrs": {
          "name": "plus"
        },
        "class": uploader_bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": uploader_bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": uploader_bem()
    }, [h("div", {
      "class": uploader_bem('wrapper')
    }, [this.genPreviewList(), this.genUpload()])]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuImgUploader.js





var SkuImgUploader_createNamespace = Object(create["a" /* createNamespace */])('sku-img-uploader'),
    SkuImgUploader_createComponent = SkuImgUploader_createNamespace[0],
    SkuImgUploader_bem = SkuImgUploader_createNamespace[1],
    SkuImgUploader_t = SkuImgUploader_createNamespace[2];

/* harmony default export */ var SkuImgUploader = (SkuImgUploader_createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this; // 上传文件


      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast(SkuImgUploader_t('oversize', this.maxSize));
    },
    genUploader: function genUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(uploader, {
        "class": SkuImgUploader_bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024
        },
        "on": {
          "oversize": this.onOversize
        }
      }, [h("div", {
        "class": SkuImgUploader_bem('img')
      }, [content])]);
    },
    genMask: function genMask() {
      var h = this.$createElement;
      return h("div", {
        "class": SkuImgUploader_bem('mask')
      }, [this.uploadFail ? [h(es_icon, {
        "attrs": {
          "name": "warning-o",
          "size": "20px"
        }
      }), h("div", {
        "class": SkuImgUploader_bem('warn-text'),
        "domProps": {
          "innerHTML": SkuImgUploader_t('fail')
        }
      })] : h(es_loading, {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white"
        }
      })]);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": SkuImgUploader_bem()
    }, [this.value && this.genUploader([h("img", {
      "attrs": {
        "src": this.value
      }
    }), h(es_icon, {
      "attrs": {
        "name": "clear"
      },
      "class": SkuImgUploader_bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        }
      }
    })], true), this.paddingImg && this.genUploader([h("img", {
      "attrs": {
        "src": this.paddingImg
      }
    }), this.genMask()], !this.uploadFail), !this.value && !this.paddingImg && this.genUploader(h("div", {
      "class": SkuImgUploader_bem('trigger')
    }, [h(es_icon, {
      "attrs": {
        "name": "photograph",
        "size": "22px"
      }
    })]))]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuMessages.js








var SkuMessages_createNamespace = Object(create["a" /* createNamespace */])('sku-messages'),
    SkuMessages_createComponent = SkuMessages_createNamespace[0],
    SkuMessages_bem = SkuMessages_createNamespace[1],
    SkuMessages_t = SkuMessages_createNamespace[2];

/* harmony default export */ var SkuMessages = (SkuMessages_createComponent({
  props: {
    messages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || SkuMessages_t("placeholder." + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            var textType = SkuMessages_t(message.type === 'image' ? 'upload' : 'fill');
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !Object(number["b" /* isNumber */])(value)) {
            return SkuMessages_t('invalid.tel');
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return SkuMessages_t('invalid.mobile');
          }

          if (message.type === 'email' && !isEmail(value)) {
            return SkuMessages_t('invalid.email');
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return SkuMessages_t('invalid.id_no');
          }
        }
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h(cell_group, {
      "class": SkuMessages_bem(),
      "attrs": {
        "border": this.messages.length > 0
      }
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(cell, {
        "class": SkuMessages_bem('image-cell'),
        "attrs": {
          "value-class": SkuMessages_bem('image-cell-value'),
          "label": SkuMessages_t('imageLabel'),
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(SkuImgUploader, {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.$set(_this3.messageValues[index], "value", $$v);
          }
        }
      })]) : h(field, {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.$set(_this3.messageValues[index], "value", $$v);
          }
        }
      });
    })]);
  }
}));
// CONCATENATED MODULE: ./es/sku/components/SkuActions.js



 // Types

var SkuActions_createNamespace = Object(create["a" /* createNamespace */])('sku-actions'),
    SkuActions_createComponent = SkuActions_createNamespace[0],
    SkuActions_bem = SkuActions_createNamespace[1],
    SkuActions_t = SkuActions_createNamespace[2];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", helper_default()([{
    "class": SkuActions_bem()
  }, inherit(ctx)]), [props.showAddCartBtn && h(es_button, {
    "attrs": {
      "size": "large",
      "type": "warning",
      "text": props.addCartText || SkuActions_t('addCart')
    },
    "on": {
      "click": createEmitter('sku:addCart')
    }
  }), h(es_button, {
    "attrs": {
      "size": "large",
      "type": "danger",
      "text": props.buyText || SkuActions_t('buy')
    },
    "on": {
      "click": createEmitter('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};
/* harmony default export */ var components_SkuActions = (SkuActions_createComponent(SkuActions));
// CONCATENATED MODULE: ./es/sku/Sku.js















var Sku_namespace = Object(create["a" /* createNamespace */])('sku');
var Sku_createComponent = Sku_namespace[0],
    Sku_bem = Sku_namespace[1],
    Sku_t = Sku_namespace[2];
var Sku_QUOTA_LIMIT = LIMIT_TYPE.QUOTA_LIMIT;
/* harmony default export */ var Sku = (Sku_createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    safeAreaInsetBottom: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    startSaleNum: {
      type: Number,
      default: 1
    },
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    stockThreshold: {
      type: Number,
      default: 50
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku();
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: 'resetSelectedSku',
    initialSku: function initialSku() {
      this.resetStepper();
      this.resetSelectedSku();
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return skuHelper_isAllSelected(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return getSkuComb(this.sku.list, this.selectedSku);
      }

      return null;
    },
    selectedSkuValues: function selectedSkuValues() {
      return skuHelper_getSelectedSkuValues(this.skuTree, this.selectedSku);
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    originPrice: function originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }

      return this.sku.origin_price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        this.skuTree.forEach(function (treeItem) {
          if (!treeItem.v) {
            return;
          }

          treeItem.v.forEach(function (vItem) {
            var img = vItem.previewImgUrl || vItem.imgUrl || vItem.img_url;

            if (img) {
              imageList.push(img);
            }
          });
        });
      }

      return imageList;
    },
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.sku.stock_num;
    },
    stockText: function stockText() {
      var h = this.$createElement;
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return [Sku_t('stock') + " ", h("span", {
        "class": Sku_bem('stock-num', {
          highlight: this.stock < this.stockThreshold
        })
      }, [this.stock]), " " + Sku_t('stockUnit')];
    },
    selectedText: function selectedText() {
      var _this = this;

      if (this.selectedSkuComb) {
        return Sku_t('selected') + " " + this.selectedSkuValues.map(function (item) {
          return item.name;
        }).join('；');
      }

      var unselected = this.skuTree.filter(function (item) {
        return _this.selectedSku[item.k_s] === UNSELECTED_SKU_VALUE_ID;
      }).map(function (item) {
        return item.k;
      }).join('；');
      return Sku_t('select') + " " + unselected;
    }
  },
  created: function created() {
    var skuEventBus = new external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:stepperState', this.onStepperState);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = Object(utils["b" /* isDef */])(selectedNum) ? selectedNum : this.startSaleNum; // 用来缓存不合法的情况

      this.stepperError = null;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        // 当首次加载（skuStepper 为空）时，传入数量如果不合法，可能会存在问题
        this.selectedNum = num;
      }
    },
    // @exposed-api
    resetSelectedSku: function resetSelectedSku() {
      var _this2 = this;

      this.selectedSku = {}; // 重置 selectedSku

      this.skuTree.forEach(function (item) {
        _this2.selectedSku[item.k_s] = _this2.initialSku[item.k_s] || UNSELECTED_SKU_VALUE_ID;
      }); // 只有一个 sku 规格值时默认选中

      this.skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && skuHelper_isSkuChoosable(_this2.sku.list, _this2.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this2.selectedSku[key] = valueId;
        }
      });
      var skuValues = this.selectedSkuValues;

      if (skuValues.length > 0) {
        this.$nextTick(function () {
          _this2.$emit('sku-selected', {
            skuValue: skuValues[skuValues.length - 1],
            selectedSku: _this2.selectedSku,
            selectedSkuComb: _this2.selectedSkuComb
          });
        });
      }
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return Sku_t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return Sku_t('selectSku');
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3; // 点击已选中的sku时则取消选中


      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? _extends({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = UNSELECTED_SKU_VALUE_ID, _extends2)) : _extends({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this3 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('open-preview', params);
      image_preview({
        images: this.imageList,
        startPosition: index,
        closeOnPopstate: true,
        onClose: function onClose() {
          _this3.$emit('close-preview', params);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        if (this.startSaleNum > 1) {
          es_toast(Sku_t('minusStartTip', this.startSaleNum));
        } else {
          es_toast(Sku_t('minusTip'));
        }
      } else if (action === 'plus') {
        if (limitType === Sku_QUOTA_LIMIT) {
          if (quotaUsed > 0) {
            es_toast(Sku_t('quotaUsedTip', quota, quotaUsed));
          } else {
            es_toast(Sku_t('quotaTip', quota));
          }
        } else {
          es_toast(Sku_t('soldout'));
        }
      }
    },
    onStepperState: function onStepperState(data) {
      if (data.valid) {
        this.stepperError = null;
      } else {
        this.stepperError = _extends({}, data, {
          action: 'plus'
        });
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      // 有信息表示该sku根本不符合购买条件
      if (this.stepperError) {
        return this.onOverLimit(this.stepperError);
      }

      var error = this.validateSku();

      if (error) {
        es_toast(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    // @exposed-api
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        originPrice = this.originPrice,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      originPrice: originPrice,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this4.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(components_SkuHeader, {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price]), this.priceTag && h("span", {
      "class": "van-sku__price-tag"
    }, [this.priceTag])]), slots('sku-header-origin-price') || originPrice && h(SkuHeaderItem, [Sku_t('originPrice'), " \uFFE5", originPrice]), !this.hideStock && h(SkuHeaderItem, [h("span", {
      "class": "van-sku__stock"
    }, [this.stockText])]), this.hasSku && !this.hideSelectedText && h(SkuHeaderItem, [this.selectedText]), slots('sku-header-extra')]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(components_SkuRow, {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(SkuRowItem, {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(SkuStepper, {
      "ref": "skuStepper",
      "attrs": {
        "stock": this.stock,
        "quota": this.quota,
        "quotaUsed": this.quotaUsed,
        "startSaleNum": this.startSaleNum,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig,
        "hideQuotaText": this.hideQuotaText
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(SkuMessages, {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(components_SkuActions, {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(popup, {
      "attrs": {
        "round": true,
        "closeable": true,
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "safeAreaInsetBottom": this.safeAreaInsetBottom
      },
      "class": "van-sku-container",
      "model": {
        value: _this4.show,
        callback: function callback($$v) {
          _this4.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
}));
// CONCATENATED MODULE: ./es/sku/index.js












locale["a" /* default */].add(lang);
Sku.SkuActions = components_SkuActions;
Sku.SkuHeader = components_SkuHeader;
Sku.SkuHeaderItem = SkuHeaderItem;
Sku.SkuMessages = SkuMessages;
Sku.SkuStepper = SkuStepper;
Sku.SkuRow = components_SkuRow;
Sku.SkuRowItem = SkuRowItem;
Sku.skuHelper = skuHelper;
Sku.skuConstants = constants;
/* harmony default export */ var es_sku = (Sku);
// CONCATENATED MODULE: ./es/slider/index.js




var slider_createNamespace = Object(create["a" /* createNamespace */])('slider'),
    slider_createComponent = slider_createNamespace[0],
    slider_bem = slider_createNamespace[1];

/* harmony default export */ var slider = (slider_createComponent({
  mixins: [TouchMixin],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },
  data: function data() {
    return {
      dragStatus: ''
    };
  },
  computed: {
    range: function range() {
      return this.max - this.min;
    }
  },
  created: function created() {
    // format initial value
    this.updateValue(this.value);
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.wrapper);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      preventDefault(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.startValue = this.value;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render() {
    var _barStyle;

    var h = arguments[0];
    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = Object(unit["a" /* addUnit */])(this.barHeight), _barStyle.background = this.activeColor, _barStyle);

    if (this.dragStatus) {
      barStyle.transition = 'none';
    }

    return h("div", {
      "style": style,
      "class": slider_bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": slider_bem('bar'),
      "style": barStyle
    }, [h("div", {
      "ref": "wrapper",
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
      },
      "class": slider_bem('button-wrapper')
    }, [this.slots('button') || h("div", {
      "class": slider_bem('button')
    })])])]);
  }
}));
// CONCATENATED MODULE: ./es/step/index.js





var step_createNamespace = Object(create["a" /* createNamespace */])('step'),
    step_createComponent = step_createNamespace[0],
    step_bem = step_createNamespace[1];

/* harmony default export */ var es_step = (step_createComponent({
  mixins: [ChildrenMixin('vanSteps')],
  computed: {
    status: function status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }

      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },
  methods: {
    genCircle: function genCircle() {
      var h = this.$createElement;
      var _this$parent = this.parent,
          activeIcon = _this$parent.activeIcon,
          activeColor = _this$parent.activeColor,
          inactiveIcon = _this$parent.inactiveIcon;

      if (this.status === 'process') {
        return this.slots('active-icon') || h(es_icon, {
          "class": step_bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(es_icon, {
          "class": step_bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": step_bem('circle')
      });
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var status = this.status;
    var _this$parent2 = this.parent,
        activeColor = _this$parent2.activeColor,
        direction = _this$parent2.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": [BORDER, step_bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": step_bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": step_bem('circle-container')
    }, [this.genCircle()]), h("div", {
      "class": step_bem('line')
    })]);
  }
}));
// CONCATENATED MODULE: ./es/steps/index.js




var steps_createNamespace = Object(create["a" /* createNamespace */])('steps'),
    steps_createComponent = steps_createNamespace[0],
    steps_bem = steps_createNamespace[1];

/* harmony default export */ var steps = (steps_createComponent({
  mixins: [ParentMixin('vanSteps')],
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: GREEN
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": steps_bem([this.direction])
    }, [h("div", {
      "class": steps_bem('items')
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./es/submit-bar/index.js




 // Types

var submit_bar_createNamespace = Object(create["a" /* createNamespace */])('submit-bar'),
    submit_bar_createComponent = submit_bar_createNamespace[0],
    submit_bar_bem = submit_bar_createNamespace[1],
    submit_bar_t = submit_bar_createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceArr = (price / 100).toFixed(props.decimalLength).split('.');
      var decimalStr = props.decimalLength ? "." + priceArr[1] : '';
      return h("div", {
        "style": {
          textAlign: props.textAlign ? props.textAlign : ''
        },
        "class": submit_bar_bem('text')
      }, [h("span", [props.label || submit_bar_t('label')]), h("span", {
        "class": submit_bar_bem('price')
      }, [props.currency, h("span", {
        "class": submit_bar_bem('price', 'integer')
      }, [priceArr[0]]), decimalStr]), props.suffixLabel && h("span", {
        "class": submit_bar_bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": submit_bar_bem('tip')
      }, [tipIcon && h(es_icon, {
        "class": submit_bar_bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": submit_bar_bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", helper_default()([{
    "class": submit_bar_bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, inherit(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": submit_bar_bem('bar')
  }, [slots.default && slots.default(), Text(), h(es_button, {
    "attrs": {
      "round": true,
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": submit_bar_bem('button', props.buttonType),
    "on": {
      "click": function click() {
        emit(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  },
  textAlign: String
};
/* harmony default export */ var submit_bar = (submit_bar_createComponent(SubmitBar));
// CONCATENATED MODULE: ./es/swipe-cell/index.js






var swipe_cell_createNamespace = Object(create["a" /* createNamespace */])('swipe-cell'),
    swipe_cell_createComponent = swipe_cell_createNamespace[0],
    swipe_cell_bem = swipe_cell_createNamespace[1];

var THRESHOLD = 0.15;
/* harmony default export */ var swipe_cell = (swipe_cell_createComponent({
  mixins: [TouchMixin, click_outside_ClickOutsideMixin({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    // @deprecated
    // should be removed in next major version, use beforeClose instead
    onClose: Function,
    beforeClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    // @exposed-api
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.opened = true;
      this.offset = offset;
      this.$emit('open', {
        position: position,
        name: this.name,
        // @deprecated
        // should be removed in next major version
        detail: this.name
      });
    },
    // @exposed-api
    close: function close(position) {
      this.offset = 0;

      if (this.opened) {
        this.opened = false;
        this.$emit('close', {
          position: position,
          name: this.name
        });
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        this.dragging = true;
        this.lockClick = true;
        var isPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (isPrevent) {
          preventDefault(event, this.stopPropagation);
        }

        this.offset = range(this.deltaX + this.startOffset, -this.computedRightWidth, this.computedLeftWidth);
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this = this;

      if (this.disabled) {
        return;
      }

      if (this.dragging) {
        this.toggle(this.offset > 0 ? 'left' : 'right');
        this.dragging = false; // compatible with desktop scenario

        setTimeout(function () {
          _this.lockClick = false;
        }, 0);
      }
    },
    toggle: function toggle(direction) {
      var offset = Math.abs(this.offset);
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD;
      var computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;

      if (computedRightWidth && direction === 'right' && offset > computedRightWidth * threshold) {
        this.open('right');
      } else if (computedLeftWidth && direction === 'left' && offset > computedLeftWidth * threshold) {
        this.open('left');
      } else {
        this.close();
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (this.opened && !this.lockClick) {
        if (this.beforeClose) {
          this.beforeClose({
            position: position,
            name: this.name,
            instance: this
          });
        } else if (this.onClose) {
          this.onClose(position, this, {
            name: this.name
          });
        } else {
          this.close(position);
        }
      }
    },
    getClickHandler: function getClickHandler(position, stop) {
      var _this2 = this;

      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this2.onClick(position);
      };
    },
    genLeftPart: function genLeftPart() {
      var h = this.$createElement;
      var content = this.slots('left');

      if (content) {
        return h("div", {
          "ref": "left",
          "class": swipe_cell_bem('left'),
          "on": {
            "click": this.getClickHandler('left', true)
          }
        }, [content]);
      }
    },
    genRightPart: function genRightPart() {
      var h = this.$createElement;
      var content = this.slots('right');

      if (content) {
        return h("div", {
          "ref": "right",
          "class": swipe_cell_bem('right'),
          "on": {
            "click": this.getClickHandler('right', true)
          }
        }, [content]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transitionDuration: this.dragging ? '0s' : '.6s'
    };
    return h("div", {
      "class": swipe_cell_bem(),
      "on": {
        "click": this.getClickHandler('cell')
      }
    }, [h("div", {
      "class": swipe_cell_bem('wrapper'),
      "style": wrapperStyle
    }, [this.genLeftPart(), this.slots(), this.genRightPart()])]);
  }
}));
// CONCATENATED MODULE: ./es/tabbar/index.js




var tabbar_createNamespace = Object(create["a" /* createNamespace */])('tabbar'),
    tabbar_createComponent = tabbar_createNamespace[0],
    tabbar_bem = tabbar_createNamespace[1];

/* harmony default export */ var tabbar = (tabbar_createComponent({
  mixins: [ParentMixin('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [(_ref = {}, _ref[BORDER_TOP_BOTTOM] = this.border, _ref), tabbar_bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./es/tabbar-item/index.js







var tabbar_item_createNamespace = Object(create["a" /* createNamespace */])('tabbar-item'),
    tabbar_item_createComponent = tabbar_item_createNamespace[0],
    tabbar_item_bem = tabbar_item_createNamespace[1];

/* harmony default export */ var tabbar_item = (tabbar_item_createComponent({
  mixins: [ChildrenMixin('vanTabbar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var config = Object(utils["c" /* isObj */])(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = Object(utils["b" /* isDef */])(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": tabbar_item_bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": tabbar_item_bem('icon')
    }, [slots('icon', {
      active: active
    }) || icon && h(es_icon, {
      "attrs": {
        "name": icon
      }
    }), h(es_info, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })]), h("div", {
      "class": tabbar_item_bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
}));
// CONCATENATED MODULE: ./es/tree-select/index.js





 // Types

var tree_select_createNamespace = Object(create["a" /* createNamespace */])('tree-select'),
    tree_select_createComponent = tree_select_createNamespace[0],
    tree_select_bem = tree_select_createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  var isMultiple = Array.isArray(activeId);

  function isActiveItem(id) {
    return isMultiple ? activeId.indexOf(id) !== -1 : activeId === id;
  }

  var Navs = items.map(function (item) {
    return h(sidebar_item, {
      "attrs": {
        "dot": item.dot,
        "info": item.info,
        "title": item.text,
        "disabled": item.disabled
      },
      "class": [tree_select_bem('nav-item'), item.className]
    });
  });

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', tree_select_bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            if (!item.disabled) {
              var newActiveId = item.id;

              if (isMultiple) {
                newActiveId = activeId.slice();
                var index = newActiveId.indexOf(item.id);

                if (index !== -1) {
                  newActiveId.splice(index, 1);
                } else if (newActiveId.length < props.max) {
                  newActiveId.push(item.id);
                }
              }

              emit(ctx, 'update:active-id', newActiveId);
              emit(ctx, 'click-item', item); // compatible with legacy usage, should be removed in next major version

              emit(ctx, 'itemclick', item);
            }
          }
        }
      }, [item.text, isActiveItem(item.id) && h(es_icon, {
        "attrs": {
          "name": "checked"
        },
        "class": tree_select_bem('selected')
      })]);
    });
  }

  return h("div", helper_default()([{
    "class": tree_select_bem(),
    "style": {
      height: Object(unit["a" /* addUnit */])(height)
    }
  }, inherit(ctx)]), [h(sidebar, {
    "class": tree_select_bem('nav'),
    "attrs": {
      "activeKey": mainActiveIndex
    },
    "on": {
      "change": function change(index) {
        emit(ctx, 'update:main-active-index', index);
        emit(ctx, 'click-nav', index); // compatible with legacy usage, should be removed in next major version

        emit(ctx, 'navclick', index);
      }
    }
  }, [Navs]), h("div", {
    "class": tree_select_bem('content')
  }, [Content()])]);
}

TreeSelect.props = {
  max: {
    type: Number,
    default: Infinity
  },
  items: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  height: {
    type: [Number, String],
    default: 300
  },
  activeId: {
    type: [Number, String, Array],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};
/* harmony default export */ var tree_select = (tree_select_createComponent(TreeSelect));
// CONCATENATED MODULE: ./es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* concated harmony reexport ActionSheet */__webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return action_sheet; });
/* concated harmony reexport AddressEdit */__webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return address_edit; });
/* concated harmony reexport AddressList */__webpack_require__.d(__webpack_exports__, "AddressList", function() { return address_list; });
/* concated harmony reexport Area */__webpack_require__.d(__webpack_exports__, "Area", function() { return es_area; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return es_button; });
/* concated harmony reexport Calendar */__webpack_require__.d(__webpack_exports__, "Calendar", function() { return calendar; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card; });
/* concated harmony reexport Cell */__webpack_require__.d(__webpack_exports__, "Cell", function() { return cell; });
/* concated harmony reexport CellGroup */__webpack_require__.d(__webpack_exports__, "CellGroup", function() { return cell_group; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return es_checkbox; });
/* concated harmony reexport CheckboxGroup */__webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return checkbox_group; });
/* concated harmony reexport Circle */__webpack_require__.d(__webpack_exports__, "Circle", function() { return circle; });
/* concated harmony reexport Col */__webpack_require__.d(__webpack_exports__, "Col", function() { return col; });
/* concated harmony reexport Collapse */__webpack_require__.d(__webpack_exports__, "Collapse", function() { return collapse; });
/* concated harmony reexport CollapseItem */__webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return collapse_item; });
/* concated harmony reexport ContactCard */__webpack_require__.d(__webpack_exports__, "ContactCard", function() { return contact_card; });
/* concated harmony reexport ContactEdit */__webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return contact_edit; });
/* concated harmony reexport ContactList */__webpack_require__.d(__webpack_exports__, "ContactList", function() { return contact_list; });
/* concated harmony reexport CountDown */__webpack_require__.d(__webpack_exports__, "CountDown", function() { return count_down; });
/* concated harmony reexport Coupon */__webpack_require__.d(__webpack_exports__, "Coupon", function() { return es_coupon; });
/* concated harmony reexport CouponCell */__webpack_require__.d(__webpack_exports__, "CouponCell", function() { return coupon_cell; });
/* concated harmony reexport CouponList */__webpack_require__.d(__webpack_exports__, "CouponList", function() { return coupon_list; });
/* concated harmony reexport DatetimePicker */__webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return datetime_picker; });
/* concated harmony reexport Dialog */__webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* concated harmony reexport Divider */__webpack_require__.d(__webpack_exports__, "Divider", function() { return divider; });
/* concated harmony reexport DropdownItem */__webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return dropdown_item; });
/* concated harmony reexport DropdownMenu */__webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return dropdown_menu; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return field; });
/* concated harmony reexport GoodsAction */__webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return goods_action; });
/* concated harmony reexport GoodsActionButton */__webpack_require__.d(__webpack_exports__, "GoodsActionButton", function() { return goods_action_button; });
/* concated harmony reexport GoodsActionIcon */__webpack_require__.d(__webpack_exports__, "GoodsActionIcon", function() { return goods_action_icon; });
/* concated harmony reexport Grid */__webpack_require__.d(__webpack_exports__, "Grid", function() { return grid; });
/* concated harmony reexport GridItem */__webpack_require__.d(__webpack_exports__, "GridItem", function() { return grid_item; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return es_icon; });
/* concated harmony reexport Image */__webpack_require__.d(__webpack_exports__, "Image", function() { return es_image; });
/* concated harmony reexport ImagePreview */__webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return image_preview; });
/* concated harmony reexport IndexAnchor */__webpack_require__.d(__webpack_exports__, "IndexAnchor", function() { return index_anchor; });
/* concated harmony reexport IndexBar */__webpack_require__.d(__webpack_exports__, "IndexBar", function() { return index_bar; });
/* concated harmony reexport Info */__webpack_require__.d(__webpack_exports__, "Info", function() { return es_info; });
/* concated harmony reexport Lazyload */__webpack_require__.d(__webpack_exports__, "Lazyload", function() { return lazyload; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "List", function() { return es_list; });
/* concated harmony reexport Loading */__webpack_require__.d(__webpack_exports__, "Loading", function() { return es_loading; });
/* concated harmony reexport Locale */__webpack_require__.d(__webpack_exports__, "Locale", function() { return locale["a" /* default */]; });
/* concated harmony reexport NavBar */__webpack_require__.d(__webpack_exports__, "NavBar", function() { return nav_bar; });
/* concated harmony reexport NoticeBar */__webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return notice_bar; });
/* concated harmony reexport Notify */__webpack_require__.d(__webpack_exports__, "Notify", function() { return notify; });
/* concated harmony reexport NumberKeyboard */__webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return number_keyboard; });
/* concated harmony reexport Overlay */__webpack_require__.d(__webpack_exports__, "Overlay", function() { return es_overlay; });
/* concated harmony reexport Pagination */__webpack_require__.d(__webpack_exports__, "Pagination", function() { return pagination; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel; });
/* concated harmony reexport PasswordInput */__webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return password_input; });
/* concated harmony reexport Picker */__webpack_require__.d(__webpack_exports__, "Picker", function() { return picker; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return popup; });
/* concated harmony reexport Progress */__webpack_require__.d(__webpack_exports__, "Progress", function() { return es_progress; });
/* concated harmony reexport PullRefresh */__webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return pull_refresh; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return es_radio; });
/* concated harmony reexport RadioGroup */__webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return radio_group; });
/* concated harmony reexport Rate */__webpack_require__.d(__webpack_exports__, "Rate", function() { return es_rate; });
/* concated harmony reexport Row */__webpack_require__.d(__webpack_exports__, "Row", function() { return row; });
/* concated harmony reexport Search */__webpack_require__.d(__webpack_exports__, "Search", function() { return search; });
/* concated harmony reexport Sidebar */__webpack_require__.d(__webpack_exports__, "Sidebar", function() { return sidebar; });
/* concated harmony reexport SidebarItem */__webpack_require__.d(__webpack_exports__, "SidebarItem", function() { return sidebar_item; });
/* concated harmony reexport Skeleton */__webpack_require__.d(__webpack_exports__, "Skeleton", function() { return skeleton; });
/* concated harmony reexport Sku */__webpack_require__.d(__webpack_exports__, "Sku", function() { return es_sku; });
/* concated harmony reexport Slider */__webpack_require__.d(__webpack_exports__, "Slider", function() { return slider; });
/* concated harmony reexport Step */__webpack_require__.d(__webpack_exports__, "Step", function() { return es_step; });
/* concated harmony reexport Stepper */__webpack_require__.d(__webpack_exports__, "Stepper", function() { return stepper; });
/* concated harmony reexport Steps */__webpack_require__.d(__webpack_exports__, "Steps", function() { return steps; });
/* concated harmony reexport Sticky */__webpack_require__.d(__webpack_exports__, "Sticky", function() { return es_sticky; });
/* concated harmony reexport SubmitBar */__webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return submit_bar; });
/* concated harmony reexport Swipe */__webpack_require__.d(__webpack_exports__, "Swipe", function() { return es_swipe; });
/* concated harmony reexport SwipeCell */__webpack_require__.d(__webpack_exports__, "SwipeCell", function() { return swipe_cell; });
/* concated harmony reexport SwipeItem */__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return swipe_item; });
/* concated harmony reexport Switch */__webpack_require__.d(__webpack_exports__, "Switch", function() { return es_switch; });
/* concated harmony reexport SwitchCell */__webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return switch_cell; });
/* concated harmony reexport Tab */__webpack_require__.d(__webpack_exports__, "Tab", function() { return tab; });
/* concated harmony reexport Tabbar */__webpack_require__.d(__webpack_exports__, "Tabbar", function() { return tabbar; });
/* concated harmony reexport TabbarItem */__webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return tabbar_item; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return tabs; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return es_tag; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return es_toast; });
/* concated harmony reexport TreeSelect */__webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return tree_select; });
/* concated harmony reexport Uploader */__webpack_require__.d(__webpack_exports__, "Uploader", function() { return uploader; });



















































































var version = '2.4.0';

function install(Vue) {
  var components = [action_sheet, address_edit, address_list, es_area, es_button, calendar, card, cell, cell_group, es_checkbox, checkbox_group, circle, col, collapse, collapse_item, contact_card, contact_edit, contact_list, count_down, es_coupon, coupon_cell, coupon_list, datetime_picker, dialog, divider, dropdown_item, dropdown_menu, field, goods_action, goods_action_button, goods_action_icon, grid, grid_item, es_icon, es_image, image_preview, index_anchor, index_bar, es_info, es_list, es_loading, locale["a" /* default */], nav_bar, notice_bar, notify, number_keyboard, es_overlay, pagination, panel, password_input, picker, popup, es_progress, pull_refresh, es_radio, radio_group, es_rate, row, search, sidebar, sidebar_item, skeleton, es_sku, slider, es_step, stepper, steps, es_sticky, submit_bar, es_swipe, swipe_cell, swipe_item, es_switch, switch_cell, tab, tabbar, tabbar_item, tabs, es_tag, es_toast, tree_select, uploader];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var es = __webpack_exports__["default"] = ({
  install: install,
  version: version
});

/***/ })
/******/ ]);
});