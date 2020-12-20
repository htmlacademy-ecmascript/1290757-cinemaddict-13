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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: PROPOSALS, ACTORS, MAX_DAYS, SECONDS_IN_MINUTE, RenderPosition, Event, Button, TOTAL_FILMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPOSALS", function() { return PROPOSALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTORS", function() { return ACTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DAYS", function() { return MAX_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_MINUTE", function() { return SECONDS_IN_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_FILMS", function() { return TOTAL_FILMS; });
const MAX_DAYS = 300;
const SECONDS_IN_MINUTE = 60;
const TOTAL_FILMS = 31;
const PROPOSALS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const ACTORS = [
  `Erich von Stroheim`,
  `Mary Beth Hughes`,
  `Dan Duryea`,
  `Leonardo DiCaprio`,
  `Brad Pitt`,
  `Tom Cruise`,
  `Angelina Jolie`
];
const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`
};
const Event = {
  MOUSE_DOWN: `mousedown`,
  KEY_DOWN: `keydown`,
  SUBMIT: `submit`,
  INPUT: `input`,
  CHANGE: `change`
};
const Button = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
  MOUSE_MAIN: 0
};




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile.js */ "./src/view/profile.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _presenter_page_main_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/page-main-content.js */ "./src/presenter/page-main-content.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_stats_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/stats.js */ "./src/mock/stats.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filter */ "./src/mock/filter.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./const.js */ "./src/const.js");









const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const footerStatistics = body.querySelector(`.footer__statistics`);
const films = new Array(_const_js__WEBPACK_IMPORTED_MODULE_7__["TOTAL_FILMS"]).fill().map(_mock_film_js__WEBPACK_IMPORTED_MODULE_3__["generateFilm"]);
const stats = Object(_mock_stats_js__WEBPACK_IMPORTED_MODULE_4__["generateStats"])(films);
const filterData = Object(_mock_filter__WEBPACK_IMPORTED_MODULE_6__["generateFilterData"])(films);
const pageMainContentPresenter = new _presenter_page_main_content_js__WEBPACK_IMPORTED_MODULE_2__["default"](body);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(header, new _view_profile_js__WEBPACK_IMPORTED_MODULE_0__["default"](stats).element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);

pageMainContentPresenter.init(films, filterData);

Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_5__["render"])(footerStatistics, new _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_1__["default"](_const_js__WEBPACK_IMPORTED_MODULE_7__["TOTAL_FILMS"]).element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComment", function() { return generateComment; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);




const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const generateDate = () => dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf(`year`).add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_1__["MAX_DAYS"]), `day`).format(`YYYY/M/D H:mm`);

const generateComment = () => {
  return {
    text: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_1__["PROPOSALS"]),
    emotion: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(EMOTIONS),
    author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_1__["ACTORS"]),
    date: generateDate()
  };
};




/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment.js */ "./src/mock/comment.js");





const MAX_COMMENT = 5;
const MAX_RATING = 10;
const MIN_RUNTIME = 1;
const MAX_RUNTIME = 120;
const MAX_ID = 999999;
const NAMES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `The Great Flamarion`,
  `Made for Each Other`
];
const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];
const GENRES = [
  `Drama`,
  `Film-Noir`,
  `Mystery`,
  `Musical`,
  `Western`,
  `Comedy`,
  `Cartoon`
];
const DIRECTORS = [
  `Anthony Mann`,
  `Peter Jackson`,
  `Robert Zemeckis`,
  `David Lynch`,
  `George Lucas`,
  `Thomas Harper Ince`,
  `Elia Kazan`
];
const WRITERS = [
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Ernest Hemingway`,
  `John Houston`,
  `Truman Capote`,
];
const COUNTRIES = [
  `USA`,
  `Russia`,
  `UK`,
  `Canada`,
  `India`,
  `France`,
  `Mexico`
];
const AGE_RATING = [
  `0`,
  `6`,
  `12`,
  `16`,
  `18`
];

let isWatched = false;

const generateRating = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Number(lower + Math.random() * (upper - lower)).toFixed(1);
};

const generateDescription = () => Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_2__["PROPOSALS"]).join(` `);
const generateDate = () => dayjs__WEBPACK_IMPORTED_MODULE_0___default()().startOf(`year`).add(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["MAX_DAYS"]), `day`).format(`D MMMM YYYY`);
const getComments = () => new Array(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_COMMENT)).fill().map(_comment_js__WEBPACK_IMPORTED_MODULE_3__["generateComment"]);
const getWatchlistStatus = () => isWatched ? false : Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])());
const getFavoritesStatus = () => isWatched ? Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])()) : false;

const getWatchedStatus = () => {
  isWatched = Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])());
};

const generateId = () => Number(Date.now()) + Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_ID);

const generateFilm = () => {
  getWatchedStatus();

  return {
    id: generateId(),
    name: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(NAMES),
    poster: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(POSTERS),
    description: generateDescription(),
    comments: getComments(),
    rating: generateRating(MAX_RATING),
    releaseDate: generateDate(),
    runtime: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_RUNTIME, MIN_RUNTIME),
    genres: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(GENRES),
    director: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(DIRECTORS),
    writers: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(WRITERS),
    actors: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_2__["ACTORS"]),
    country: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(COUNTRIES),
    age: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(AGE_RATING),
    watched: isWatched,
    watchlist: getWatchlistStatus(),
    favorite: getFavoritesStatus()
  };
};




/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilterData", function() { return generateFilterData; });
const getWatchedFilms = (films) => films.filter((film) => film.watched);
const getWatchlistFilms = (films) => films.filter((film) => film.watchlist);
const getFavoriteFilms = (films) => films.filter((film) => film.favorite);

const generateFilterData = (films) => {
  return {
    watched: getWatchedFilms(films),
    watchlist: getWatchlistFilms(films),
    favorite: getFavoriteFilms(films),
  };
};




/***/ }),

/***/ "./src/mock/stats.js":
/*!***************************!*\
  !*** ./src/mock/stats.js ***!
  \***************************/
/*! exports provided: generateStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateStats", function() { return generateStats; });
const RATING = {
  novice: {
    limit: 1,
    name: `novice`
  },
  fan: {
    limit: 11,
    name: `fan`
  },
  movieBuff: {
    limit: 21,
    name: `movie buff`
  }
};

const getFilmsStats = (films) => {
  let filmsStats = {
    count: 0,
    minutes: 0,
    genres: new Map()
  };

  films.forEach((film) => {
    if (film.watched) {
      filmsStats.count++;
      filmsStats.minutes += film.runtime;

      for (const genre of film.genres) {
        if (filmsStats.genres.get(genre) === undefined) {
          filmsStats.genres.set(genre, 1);
        } else {
          const currentValue = filmsStats.genres.get(genre);

          filmsStats.genres.set(genre, currentValue + 1);
        }
      }
    }
  });

  return filmsStats;
};

const getRank = (count) => {
  let rank = ``;

  if (count >= RATING.novice.limit && count < RATING.fan.limit) {
    rank = RATING.novice.name;
  } else if (count >= RATING.fan.limit && count < RATING.movieBuff.limit) {
    rank = RATING.fan.name;
  } else if (count >= RATING.movieBuff.limit) {
    rank = RATING.movieBuff.name;
  }

  return rank;
};

const getFavoriteGenre = (genresData) => {
  if (!genresData.size) {
    return ``;
  }

  let favoriteGenre;

  for (const [key, value] of genresData) {
    if (!favoriteGenre) {
      favoriteGenre = [key, value];
    } else {
      if (favoriteGenre[1] < value) {
        favoriteGenre = [key, value];
      }
    }
  }

  return favoriteGenre[0];
};

const generateStats = (films) => {
  const filmsStats = getFilmsStats(films);

  return {
    watched: filmsStats.count,
    rank: getRank(filmsStats.count),
    totalDuration: filmsStats.minutes,
    favoriteGenre: getFavoriteGenre(filmsStats.genres),
  };
};




/***/ }),

/***/ "./src/presenter/film.js":
/*!*******************************!*\
  !*** ./src/presenter/film.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var _view_film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film.js */ "./src/view/film.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const.js */ "./src/const.js");





class Film {
  constructor(filmContainer, bodyContainer, updateData) {
    this._container = filmContainer;
    this._bodyContainer = bodyContainer;
    this._updateData = updateData;

    this._view = null;
    this._popupView = null;
    this._isPopupOpen = false;

    this._popupShowHandler = this._popupShowHandler.bind(this);
    this._popupCloseHandler = this._popupCloseHandler.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmView = this._view;
    const prevPopupView = this._popupView;

    this._view = new _view_film_js__WEBPACK_IMPORTED_MODULE_0__["default"](film);
    this._popupView = new _view_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"](film);

    this._view.setShowDetailHandler(this._popupShowHandler);
    this._view.setWatchedClickHandler(this._handleWatchedClick);
    this._view.setWatchlistClickHandler(this._handleWatchlistClick);
    this._view.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevFilmView === null || prevPopupView === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._container, this._view, _const_js__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFORE_END);
      return;
    }

    if (this._container.contains(prevFilmView.element)) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._view, prevFilmView);
    }

    if (this._bodyContainer.contains(prevPopupView.element)) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["replace"])(this._popupView, prevPopupView);
      this._popupView.setClosePopupHandler(this._popupCloseHandler);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevFilmView);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(prevPopupView);
  }

  _destroy() {
    this._popupView.removeClosePopupHandler(this._popupCloseHandler);
    this._popupView.removeWatchedClickHandler(this._handleWatchedClick);
    this._popupView.removeWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.removeFavoriteClickHandler(this._handleFavoriteClick);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._view);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["remove"])(this._popupView);
  }

  _handleWatchedClick() {
    this._updateData(Object.assign({}, this._film, {
      watched: !this._film.watched
    }));

    if (this._isPopupOpen) {
      this._updatePopup();
    }
  }

  _handleWatchlistClick() {
    this._updateData(Object.assign({}, this._film, {
      watchlist: !this._film.watchlist
    }));

    if (this._isPopupOpen) {
      this._updatePopup();
    }
  }

  _handleFavoriteClick() {
    this._updateData(Object.assign({}, this._film, {
      favorite: !this._film.favorite
    }));

    if (this._isPopupOpen) {
      this._updatePopup();
    }
  }

  _popupClose() {
    const filmDetails = this._bodyContainer.querySelector(`.film-details`);

    if (!filmDetails) {
      return;
    }

    this._bodyContainer.removeChild(filmDetails);
    this._bodyContainer.classList.remove(`hide-overflow`);
    this._popupView.removeElement();
    this._isPopupOpen = false;
  }

  _popupCloseHandler() {
    this._popupClose();
  }

  _updatePopup() {
    this._popupClose();
    this._popupShow();
  }

  _popupShow() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(this._bodyContainer, this._popupView.element, _const_js__WEBPACK_IMPORTED_MODULE_3__["RenderPosition"].BEFORE_END);
    this._popupView.setClosePopupHandler(this._popupCloseHandler);
    this._popupView.setWatchedClickHandler(this._handleWatchedClick);
    this._popupView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.setFavoriteClickHandler(this._handleFavoriteClick);
    this._bodyContainer.classList.add(`hide-overflow`);
    this._isPopupOpen = true;
  }

  _popupShowHandler(evt) {
    this._updatePopup(evt);
  }
}


/***/ }),

/***/ "./src/presenter/page-main-content.js":
/*!********************************************!*\
  !*** ./src/presenter/page-main-content.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageMainContent; });
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_no_film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/no-film */ "./src/view/no-film.js");
/* harmony import */ var _view_button_load_more_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/button-load-more.js */ "./src/view/button-load-more.js");
/* harmony import */ var _film_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film.js */ "./src/presenter/film.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const.js */ "./src/const.js");









const MOVIES_PER_STEP = 5;
const MAX_ADDITIONAL_FILMS = 2;

class PageMainContent {
  constructor(bodyContainer) {
    this._films = null;
    this._filterData = null;
    this._bodyContainer = bodyContainer;
    this._mainContainer = bodyContainer.querySelector(`.main`);
    this._filmList = null;
    this._filmsContainer = null;
    this._filmListExtra = null;
    this._renderedFilmCount = MOVIES_PER_STEP;
    this._filmPresenter = {};

    this._sortingView = new _view_sorting_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._filmsContainerView = new _view_films_container_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._noFilmView = new _view_no_film__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this._loadMoreButtonView = new _view_button_load_more_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._showMoreFilmsHandler = this._showMoreFilmsHandler.bind(this);
  }

  init(films, filterData) {
    this._films = films;
    this._filterData = filterData;

    this._renderFilter();

    if (!this._films.length) {
      this._renderNoFilms();
      return;
    }

    this._renderSorting();
    this._renderFilmsContainer();
    this._filmList = this._mainContainer.querySelector(`.films-list`);
    this._filmsContainer = this._filmList.querySelector(`.films-list__container`);
    this._filmListExtra = this._mainContainer.querySelectorAll(`.films-list.films-list--extra`);
    this._renderFilmsList();

    if (_const_js__WEBPACK_IMPORTED_MODULE_7__["TOTAL_FILMS"] > MOVIES_PER_STEP) {
      this._renderLoadMoreButton();
    }

    this._renderTopRatedFilms();
    this._renderMostCommentedFilms();
  }

  _renderFilter() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._mainContainer, new _view_filter_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._filterData).element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);
  }

  _renderSorting() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._mainContainer, this._sortingView.element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);
  }

  _renderFilmsContainer() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._mainContainer, this._filmsContainerView.element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._mainContainer, this._noFilmView.element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);
  }

  _renderFilmsList(container = this._filmsContainer, filmsList = this._films, limit = MOVIES_PER_STEP) {
    for (let i = 0; i < Math.min(filmsList.length, limit); i++) {
      this._renderFilm(container, filmsList[i]);
    }
  }

  _renderFilm(container, film) {
    const presenter = new _film_js__WEBPACK_IMPORTED_MODULE_5__["default"](container, this._bodyContainer, this._handleFilmChange);
    presenter.init(film);
    this._filmPresenter[film.id] = presenter;
  }

  _renderTopRatedFilms() {
    const container = this._filmListExtra[0].querySelector(`.films-list__container`);
    const films = [...this._films];

    films.sort((a, b) => b.rating - a.rating);

    this._renderFilmsList(container, films, MAX_ADDITIONAL_FILMS);
  }

  _renderMostCommentedFilms() {
    const container = this._filmListExtra[1].querySelector(`.films-list__container`);
    const films = [...this._films];

    films.sort((a, b) => b.comments.length - a.comments.length);

    this._renderFilmsList(container, films, MAX_ADDITIONAL_FILMS);
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderedFilmCount = MOVIES_PER_STEP;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(this._loadMoreButtonView);
  }

  _updateFilm(items, updatedFilm) {
    const index = items.findIndex((item) => item.id === updatedFilm.id);

    if (index === -1) {
      return items;
    }

    return [
      ...items.slice(0, index),
      updatedFilm,
      ...items.slice(index + 1)
    ];
  }

  _handleFilmChange(updateFilm) {
    this._films = this._updateFilm(this._films, updateFilm);
    this._filmPresenter[updateFilm.id].init(updateFilm);
  }

  _renderLoadMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["render"])(this._filmList, this._loadMoreButtonView.element, _const_js__WEBPACK_IMPORTED_MODULE_7__["RenderPosition"].BEFORE_END);
    this._loadMoreButtonView.setLoadMoreHandler(this._showMoreFilmsHandler);
  }

  _showMoreFilms() {
    this._films
      .slice(this._renderedFilmCount, this._renderedFilmCount + MOVIES_PER_STEP)
      .forEach((film) => {
        this._renderFilm(this._filmsContainer, film);
      });

    this._renderedFilmCount += MOVIES_PER_STEP;

    if (this._renderedFilmCount >= this._films.length) {
      this._loadMoreButtonView.removeLoadMoreHandler(this._showMoreFilmsHandler);
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_6__["remove"])(this._loadMoreButtonView);
    }
  }

  _showMoreFilmsHandler() {
    this._showMoreFilms();
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomInteger, getRandomArrayItem, getArrayWithRandomItems, checkButtonPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayWithRandomItems", function() { return getArrayWithRandomItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkButtonPress", function() { return checkButtonPress; });
const getRandomInteger = (b = 1, a = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(arr.length - 1);

  return arr[randomIndex];
};

const getArrayWithRandomItems = (arr) => {
  const randomItems = arr.filter(() => Boolean(getRandomInteger()));

  return randomItems.length === 0 ? Array(arr[0]) : randomItems;
};

const checkButtonPress = (evt, action, button) => {
  if (evt.key === button || evt.button === button) {
    evt.preventDefault();
    action(evt);
  }
};




/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: getFormatTime, render, createElement, remove, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatTime", function() { return getFormatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _view_abstract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/abstract */ "./src/view/abstract.js");



const render = (container, child, place) => {
  if (container instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    container = container.element;
  }

  if (child instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    child = child.element;
  }

  switch (place) {
    case _const_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTER_BEGIN:
      container.prepend(child);
      break;
    case _const_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFORE_END:
      container.append(child);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getFormatTime = (minutes) => Math.floor(minutes / _const_js__WEBPACK_IMPORTED_MODULE_0__["SECONDS_IN_MINUTE"])
  ? `${Math.floor(minutes / _const_js__WEBPACK_IMPORTED_MODULE_0__["SECONDS_IN_MINUTE"])}h ${Math.floor(minutes % _const_js__WEBPACK_IMPORTED_MODULE_0__["SECONDS_IN_MINUTE"])}m`
  : `${Math.floor(minutes % _const_js__WEBPACK_IMPORTED_MODULE_0__["SECONDS_IN_MINUTE"])}m`;

const remove = (component) => {
  if (!(component instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_1__["default"])) {
    throw new Error(`Can remove only components`);
  }

  component.element.remove();
  component.removeElement();
};

const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    oldChild = oldChild.element;
  }

  if (newChild instanceof _view_abstract__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    newChild = newChild.element;
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};




/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  get element() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this._getTemplate());
    }

    return this._element;
  }

  _getTemplate() {
    throw new Error(`AbstractView method not implemented: getTemplate`);
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/button-load-more.js":
/*!**************************************!*\
  !*** ./src/view/button-load-more.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButton; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");




const createLoadMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

class LoadMoreButton extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    this._loadMoreHandler = this._loadMoreHandler.bind(this);
  }

  _getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  setLoadMoreHandler(callback) {
    this._callback.loadMore = callback;

    this.element.addEventListener(_const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].MOUSE_DOWN, this._loadMoreHandler);
    this.element.addEventListener(_const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].KEY_DOWN, this._loadMoreHandler);
  }

  removeLoadMoreHandler(callback) {
    this._callback.loadMore = callback;

    this.element.removeEventListener(_const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].MOUSE_DOWN, this._loadMoreHandler);
    this.element.removeEventListener(_const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].KEY_DOWN, this._loadMoreHandler);
  }

  _loadMoreHandler(evt) {
    if (evt.type === _const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["checkButtonPress"])(evt, this._callback.loadMore, _const_js__WEBPACK_IMPORTED_MODULE_1__["Button"].ENTER);
    } else if (evt.type === _const_js__WEBPACK_IMPORTED_MODULE_1__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["checkButtonPress"])(evt, this._callback.loadMore, _const_js__WEBPACK_IMPORTED_MODULE_1__["Button"].MOUSE_MAIN);
    }
  }
}


/***/ }),

/***/ "./src/view/film.js":
/*!**************************!*\
  !*** ./src/view/film.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");






const SHORT_DESCRIPTION_LENGTH = 139;

const checkFlagStatus = (value) => value ? `film-card__controls-item--active` : ``;

const createFilmTemplate = (film) => {
  const {id, name, poster, description, comments, rating, releaseDate, runtime, genres, watched, watchlist,
    favorite} = film;

  const commentCount = comments.length;
  const year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(releaseDate).format(`YYYY`);
  const duration = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_1__["getFormatTime"])(runtime);
  const shortDescription = description.length > SHORT_DESCRIPTION_LENGTH
    ? `${description.substr(0, SHORT_DESCRIPTION_LENGTH)}&hellip;`
    : description;
  const watchedStatus = checkFlagStatus(watched);
  const watchlistStatus = checkFlagStatus(watchlist);
  const favoriteStatus = checkFlagStatus(favorite);

  return `<article id="${id}" class="film-card">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${name}" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <a class="film-card__comments">${commentCount} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistStatus}"
       type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedStatus}"
       type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteStatus}"
       type="button">Mark as favorite</button>
    </div>
  </article>`;
};

class Film extends _abstract__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(film) {
    super();

    this._film = film;
    this._showDetailHandler = this._showDetailHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);

    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;
  }

  _getTemplate() {
    return createFilmTemplate(this._film);
  }

  _showDetailHandler(evt) {
    if (evt.target.classList.contains(`film-card__poster`)
      || evt.target.classList.contains(`film-card__title`)
      || evt.target.classList.contains(`film-card__comments`)) {

      if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN) {
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.showDetail, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].ENTER);
      } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN) {
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.showDetail, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].MOUSE_MAIN);
      }
    }
  }

  _watchedClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.watchedClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.watchedClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].MOUSE_MAIN);
    }
  }

  _watchlistClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.watchlistClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.watchlistClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].MOUSE_MAIN);
    }
  }

  _favoriteClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.favoriteClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_4__["checkButtonPress"])(evt, this._callback.favoriteClick, _const__WEBPACK_IMPORTED_MODULE_3__["Button"].MOUSE_MAIN);
    }
  }

  setShowDetailHandler(callback) {
    this._callback.showDetail = callback;

    this.element.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._showDetailHandler);
    this.element.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._showDetailHandler);
  }

  removeShowDetailHandler(callback) {
    this._callback.showDetail = callback;

    this.element.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._showDetailHandler);
    this.element.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._showDetailHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton = this.element.querySelector(`.film-card__controls-item--mark-as-watched`);

    this._watchedButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._watchedClickHandler);
  }

  removeWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._watchedClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton = this.element.querySelector(`.film-card__controls-item--add-to-watchlist`);

    this._watchlistButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._watchlistClickHandler);
  }

  removeWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._watchlistClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton = this.element.querySelector(`.film-card__controls-item--favorite`);

    this._favoriteButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._favoriteClickHandler);
  }

  removeFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_3__["Event"].KEY_DOWN, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsContainer; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFilmsContainerTemplate = () =>
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`;

class FilmsContainer extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createFilmsContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFilterTemplate = (filter) => {
  const {watched, watchlist, favorite} = filter;

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist.length}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watched.length}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite.length}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

class Filter extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(filter) {
    super();
    this._filter = filter;
  }

  _getTemplate() {
    return createFilterTemplate(this._filter);
  }
}


/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistics; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createFooterStatisticsTemplate = (totalFilms) => `<p>${totalFilms} movies inside</p>`;

class FooterStatistics extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(totalFilms) {
    super();
    this._totalFilms = totalFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._totalFilms);
  }
}


/***/ }),

/***/ "./src/view/no-film.js":
/*!*****************************!*\
  !*** ./src/view/no-film.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilm; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createNoFilmTemplate = () =>
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`;

class NoFilm extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createNoFilmTemplate();
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _smart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart */ "./src/view/smart.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common */ "./src/utils/common.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);






const createChosenEmojiTemplate = (emotion) => emotion.length === 0 ? ``
  : `<img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">`;

const createCommentsTemplate = (comments) => comments.length === 0 ? ``
  : `<ul class="film-details__comments-list">
    ${comments.map((comment) => `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${comment.date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`).join(``)}
  </ul>`;

const createGenresTemplate = (genres) => genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
const checkFlagStatus = (value) => value ? `checked` : ``;

const createPopupTemplate = (filmData, commentData) => {
  const {name, poster, description, comments, rating, releaseDate, runtime, genres, director, writers, actors, country,
    age, watched, watchlist, favorite} = filmData;

  const commentCount = comments.length;
  const genreTitle = genres.length > 1 ? `Genres` : `Genre`;
  const duration = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["getFormatTime"])(runtime);
  const genresTemplate = createGenresTemplate(genres);
  const writersTemplate = writers.join(`, `);
  const actorsTemplate = actors.join(`, `);
  const commentsTemplate = createCommentsTemplate(comments);
  const watchedStatus = checkFlagStatus(watched);
  const watchlistStatus = checkFlagStatus(watchlist);
  const favoriteStatus = checkFlagStatus(favorite);
  const commentInput = commentData.text ? commentData.text : ``;
  const emojiSmile = checkFlagStatus(commentData.emotion === `smile`);
  const emojiSleeping = checkFlagStatus(commentData.emotion === `sleeping`);
  const emojiPuke = checkFlagStatus(commentData.emotion === `puke`);
  const emojiAngry = checkFlagStatus(commentData.emotion === `angry`);
  const chosenEmojiTemplate = createChosenEmojiTemplate(commentData.emotion);

  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${poster}" alt="${name}">

            <p class="film-details__age">${age}+</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${name}</h3>
                <p class="film-details__title-original">Original: ${name}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writersTemplate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actorsTemplate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${releaseDate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${duration}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${country}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">${genreTitle}</td>
                <td class="film-details__cell">${genresTemplate}</td>
              </tr>
            </table>

            <p class="film-details__film-description">${description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${watchlistStatus}>
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watchedStatus}>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favoriteStatus}>
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>

          ${commentsTemplate}

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label">${chosenEmojiTemplate}</div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${commentInput}</textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${emojiSmile}>
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" ${emojiSleeping}>
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" ${emojiPuke}>
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" ${emojiAngry}>
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

class Popup extends _smart__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(filmData) {
    super();

    this._filmData = filmData;
    this._data = {
      text: ``,
      emotion: ``,
      author: Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_2__["ACTORS"]),
      date: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(`YYYY/M/D H:mm`)
    };
    this._scrollTop = 0;

    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._addCommentHandler = this._addCommentHandler.bind(this);
    this._commentTextInputHandler = this._commentTextInputHandler.bind(this);
    this._changeEmotionHandler = this._changeEmotionHandler.bind(this);

    this._closeButton = null;
    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;

    this._setInnerHandlers();
  }

  _getTemplate() {
    return createPopupTemplate(this._filmData, this._data);
  }

  _setScrollTop() {
    this._scrollTop = this._element.scrollTop;
  }

  _restoreScrollTop() {
    this._element.scrollTo({top: this._scrollTop});
  }

  _setInnerHandlers() {
    this.element
      .querySelector(`.film-details__inner`)
      .addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._addCommentHandler);

    this.element
      .querySelector(`.film-details__comment-input`)
      .addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].INPUT, this._commentTextInputHandler);

    this.element
      .querySelectorAll(`.film-details__emoji-item`)
      .forEach((input) => {
        input.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].CHANGE, this._changeEmotionHandler);
      });
  }

  _restoreHandlers() {
    this._setInnerHandlers();
    this.setClosePopupHandler(this._callback.closePopup);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setWatchlistClickHandler(this._callback.watchlistClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
  }

  _addComment() {
    if (this._data.text === `` || this._data.emotion === ``) {
      return;
    }

    this._filmData.comments.push(this._data);
    this._updateData({
      text: ``,
      emotion: ``
    });

    this._setScrollTop();
    this._updateElement();
    this._restoreScrollTop();
  }

  _addCommentHandler(evt) {
    if (evt.key === _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ENTER && evt.ctrlKey) {
      evt.preventDefault();
      this._addComment();
    }
  }

  _changeEmotion(emotion) {
    this._updateData({
      emotion: emotion.value,
    });

    this._setScrollTop();
    this._updateElement();
    this._restoreScrollTop();
  }

  _changeEmotionHandler(evt) {
    evt.preventDefault();

    this._changeEmotion(evt.target);
  }

  _commentTextInputUpdate() {
    const text = this._element.querySelector(`.film-details__comment-input`).value;

    this._updateData({
      text,
    });
  }

  _commentTextInputHandler(evt) {
    evt.preventDefault();
    this._commentTextInputUpdate();
  }

  _closePopupHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN) {
      if (evt.target.className === `film-details__close-btn`) {
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.closePopup, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ENTER);
      } else {
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.closePopup, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ESCAPE);
      }
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.closePopup, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].MOUSE_MAIN);
    }
  }

  _watchedClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.watchedClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.watchedClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].MOUSE_MAIN);
    }
  }

  _watchlistClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.watchlistClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.watchlistClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].MOUSE_MAIN);
    }
  }

  _favoriteClickHandler(evt) {
    if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.favoriteClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].ENTER);
    } else if (evt.type === _const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["checkButtonPress"])(evt, this._callback.favoriteClick, _const__WEBPACK_IMPORTED_MODULE_2__["Button"].MOUSE_MAIN);
    }
  }

  removeElement() {
    this._element = null;
    this._closeButton = null;
    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;
    this._emotionInputs = null;
  }

  setClosePopupHandler(callback) {
    this._callback.closePopup = callback;

    this._closeButton = this._element.querySelector(`.film-details__close-btn`);

    this._closeButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._closePopupHandler);
    this._closeButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._closePopupHandler);
    document.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._closePopupHandler);
  }

  removeClosePopupHandler(callback) {
    this._callback.closePopup = callback;

    this._closeButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._closePopupHandler);
    this._closeButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._closePopupHandler);
    document.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._closePopupHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton = this._element.querySelector(`.film-details__control-label--watched`);

    this._watchedButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._watchedClickHandler);
  }

  removeWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._watchedClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton = this._element.querySelector(`.film-details__control-label--watchlist`);

    this._watchlistButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._watchlistClickHandler);
  }

  removeWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._watchlistClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton = this._element.querySelector(`.film-details__control-label--favorite`);

    this._favoriteButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.addEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._favoriteClickHandler);
  }

  removeFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.removeEventListener(_const__WEBPACK_IMPORTED_MODULE_2__["Event"].KEY_DOWN, this._favoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createRankTemplate = (rank) => rank !== `` ? `<p class="profile__rating">${rank}</p>` : ``;

const createProfileTemplate = (stats) => {
  const rankTemplate = createRankTemplate(stats.rank);

  return `<section class="header__profile profile">
    ${rankTemplate}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class Profile extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(stats) {
    super();
    this._stats = stats;
  }

  _getTemplate() {
    return createProfileTemplate(this._stats);
  }
}


/***/ }),

/***/ "./src/view/smart.js":
/*!***************************!*\
  !*** ./src/view/smart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Smart; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


class Smart extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this._data = {};
  }

  _updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);
  }

  _updateElement() {
    let prevElement = this._element;
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.element;

    parent.replaceChild(newElement, prevElement);
    this._restoreHandlers();
  }

  _restoreHandlers() {
    throw new Error(`Abstract method not implemented: resetHandlers`);
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/view/abstract.js");


const createSortingTemplate = () =>
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;

class Sorting extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  _getTemplate() {
    return createSortingTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map