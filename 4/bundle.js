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
/*! exports provided: PROPOSALS, ACTORS, MAX_DAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROPOSALS", function() { return PROPOSALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTORS", function() { return ACTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DAYS", function() { return MAX_DAYS; });
const MAX_DAYS = 300;
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
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _view_film_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/film.js */ "./src/view/film.js");
/* harmony import */ var _view_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/button.js */ "./src/view/button.js");
/* harmony import */ var _view_stats_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/stats.js */ "./src/view/stats.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/footer-statistics.js */ "./src/view/footer-statistics.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_stats_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/stats.js */ "./src/mock/stats.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");














const MOVIES_PER_STEP = 5;
const MOVIES_TOP_RATED = 2;
const MOVIES_MOST_COMMENTED = 2;
const TOTAL_FILMS = 31;

let renderedTaskCount = MOVIES_PER_STEP;
let loadMoreButton;
let filmCards;
let filmData;
let closePopupButton;

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = body.querySelector(`.footer__statistics`);
const films = new Array(TOTAL_FILMS).fill().map(_mock_film_js__WEBPACK_IMPORTED_MODULE_9__["generateFilm"]);
const stats = Object(_mock_stats_js__WEBPACK_IMPORTED_MODULE_10__["generateStats"])(films);
const filterData = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_11__["generateFilterData"])(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const showMoreFilm = () => {
  filmCards.forEach((film) => {
    film.removeEventListener(`mousedown`, onDetailFilmShow);
  });

  films
    .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
    .forEach((film) => {
      render(filmsContainer, Object(_view_film_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsTemplate"])(film), `beforeend`);
    });

  renderedTaskCount += MOVIES_PER_STEP;

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(`mousedown`, onDetailFilmShow);
  });

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
    loadMoreButton.removeEventListener(`mousedown`, onMoreFilmShow);
  }
};

const onMoreFilmShow = (evt) => {
  evt.preventDefault();

  showMoreFilm(evt);
};

const popupClose = () => {
  const filmDetails = body.querySelector(`.film-details`);

  closePopupButton.removeEventListener(`mousedown`, onPopupClose);
  closePopupButton.removeEventListener(`keydown`, onPopupClose);
  document.removeEventListener(`keydown`, onPopupClose);

  body.removeChild(filmDetails);
};

const onPopupClose = (evt) => {
  if (evt.type === `keydown`) {
    if (evt.target.className === `film-details__close-btn`) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressEnter"])(evt, popupClose);
    } else {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressEscape"])(evt, popupClose);
    }
  } else if (evt.type === `mousedown`) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressLeftMouseButton"])(evt, popupClose);
  }
};

const showDetailFilm = () => {
  render(body, Object(_view_popup_js__WEBPACK_IMPORTED_MODULE_7__["createPopupTemplate"])(filmData), `beforeend`);

  closePopupButton = body.querySelector(`.film-details__close-btn`);

  closePopupButton.addEventListener(`mousedown`, onPopupClose);
  closePopupButton.addEventListener(`keydown`, onPopupClose);
  document.addEventListener(`keydown`, onPopupClose);
};

const getDetailData = (evt) => {
  const dataId = evt.target.parentElement.id;

  return films.filter((film) => {
    return film.id === Number(dataId);
  })[0];
};

const onDetailFilmShow = (evt) => {
  if (evt.target.classList.contains(`film-card__poster`)
    || evt.target.classList.contains(`film-card__title`)
    || evt.target.classList.contains(`film-card__comments`)) {
    evt.preventDefault();

    filmData = getDetailData(evt);

    if (evt.type === `keydown`) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressEnter"])(evt, showDetailFilm);
    } else if (evt.type === `mousedown`) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressLeftMouseButton"])(evt, showDetailFilm);
    }
  }
};

const showStats = () => {
  main.innerHTML = ``;

  render(main, Object(_view_filter_js__WEBPACK_IMPORTED_MODULE_1__["createFilterTemplate"])(filterData), `beforeend`);
  render(main, Object(_view_stats_js__WEBPACK_IMPORTED_MODULE_6__["createStatisticsTemplate"])(stats), `beforeend`);
};

const onStatsShow = (evt) => {
  if (evt.type === `keydown`) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressEnter"])(evt, showStats);
  } else if (evt.type === `mousedown`) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_12__["pressLeftMouseButton"])(evt, showStats);
  }
};

render(header, Object(_view_profile_js__WEBPACK_IMPORTED_MODULE_0__["createProfileTemplate"])(stats), `beforeend`);
render(main, Object(_view_filter_js__WEBPACK_IMPORTED_MODULE_1__["createFilterTemplate"])(filterData), `beforeend`);
render(main, Object(_view_sorting_js__WEBPACK_IMPORTED_MODULE_2__["createSortingTemplate"])(), `beforeend`);
render(main, Object(_view_films_container_js__WEBPACK_IMPORTED_MODULE_3__["createFilmsContainerTemplate"])(), `beforeend`);
render(footerStatistics, Object(_view_footer_statistics_js__WEBPACK_IMPORTED_MODULE_8__["createFooterStatisticsTemplate"])(TOTAL_FILMS), `beforeend`);

const statsButton = main.querySelector(`.main-navigation__additional`);

statsButton.addEventListener(`mousedown`, onStatsShow);
statsButton.addEventListener(`keydown`, onStatsShow);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < Math.min(films.length, MOVIES_PER_STEP); i++) {
  render(filmsContainer, Object(_view_film_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsTemplate"])(films[i]), `beforeend`);

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(`mousedown`, onDetailFilmShow);
    film.addEventListener(`keydown`, onDetailFilmShow);
  });
}

if (TOTAL_FILMS > MOVIES_PER_STEP) {
  render(filmList, Object(_view_button_js__WEBPACK_IMPORTED_MODULE_5__["createButtonTemplate"])(), `beforeend`);

  loadMoreButton = filmList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`mousedown`, onMoreFilmShow);
}

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);

  const topRatedFilms = [...films];

  topRatedFilms.sort((a, b) => {
    return b.rating - a.rating;
  });

  for (let i = 0; i < MOVIES_TOP_RATED; i++) {
    render(topRatedFilmsContainer, Object(_view_film_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsTemplate"])(topRatedFilms[i]), `beforeend`);
  }

  const topRatedFilmCards = topRatedFilmsContainer.querySelectorAll(`.film-card`);

  topRatedFilmCards.forEach((film) => {
    film.addEventListener(`mousedown`, onDetailFilmShow);
    film.addEventListener(`keydown`, onDetailFilmShow);
  });
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);

  const mostCommentedFilms = [...films];

  mostCommentedFilms.sort((a, b) => {
    return b.comments.length - a.comments.length;
  });

  for (let i = 0; i < MOVIES_MOST_COMMENTED; i++) {
    render(mostCommentedFilmsContainer, Object(_view_film_js__WEBPACK_IMPORTED_MODULE_4__["createFilmsTemplate"])(mostCommentedFilms[i]), `beforeend`);
  }

  const mostCommentedFilmCards = mostCommentedFilmsContainer.querySelectorAll(`.film-card`);

  mostCommentedFilmCards.forEach((film) => {
    film.addEventListener(`mousedown`, onDetailFilmShow);
    film.addEventListener(`keydown`, onDetailFilmShow);
  });
}


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);




const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const generateDate = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_2___default()().startOf(`year`).add(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_1__["MAX_DAYS"]), `day`).format(`YYYY/M/D H:mm`);
};

const generateComment = () => {
  return {
    text: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_1__["PROPOSALS"]),
    emotion: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(EMOTIONS),
    author: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomArrayItem"])(_const__WEBPACK_IMPORTED_MODULE_1__["ACTORS"]),
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
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

const generateDescription = () => {
  const descriptionArr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_2__["PROPOSALS"]);

  return typeof descriptionArr === `string` ? descriptionArr : descriptionArr.join(` `);
};

const generateDate = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().startOf(`year`).add(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(_const__WEBPACK_IMPORTED_MODULE_2__["MAX_DAYS"]), `day`).format(`D MMMM YYYY`);
};

const getComments = () => {
  const commentCount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_COMMENT);

  return new Array(commentCount).fill().map(_comment_js__WEBPACK_IMPORTED_MODULE_3__["generateComment"]);
};

const getWatchedStatus = () => {
  isWatched = Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])());
};

const getWatchlistStatus = () => {
  return isWatched ? false : Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])());
};

const getFavoritesStatus = () => {
  return isWatched ? Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])()) : false;
};

const generateFilm = () => {
  getWatchedStatus();

  return {
    id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_ID),
    name: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(NAMES),
    poster: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(POSTERS),
    description: generateDescription(),
    comments: getComments(),
    rating: generateRating(MAX_RATING),
    releaseDate: generateDate(),
    runtime: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MAX_RUNTIME, MIN_RUNTIME),
    genres: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(GENRES),
    director: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(DIRECTORS),
    writers: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(WRITERS),
    actors: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getArrayWithRandomItems"])(_const__WEBPACK_IMPORTED_MODULE_2__["ACTORS"]),
    country: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(COUNTRIES),
    age: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(AGE_RATING),
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
const getWatchedFilms = (films) => {
  return films.filter((film) => {
    return film.watched;
  });
};

const getWatchlistFilms = (films) => {
  return films.filter((film) => {
    return film.watchlist;
  });
};

const getFavoriteFilms = (films) => {
  return films.filter((film) => {
    return film.watchlist;
  });
};

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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, getRandomArrayItem, getArrayWithRandomItems, pressEnter, pressEscape, pressLeftMouseButton, getFormatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayWithRandomItems", function() { return getArrayWithRandomItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressEnter", function() { return pressEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressEscape", function() { return pressEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressLeftMouseButton", function() { return pressLeftMouseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatTime", function() { return getFormatTime; });
const ENTER_BUTTON_KYE = `Enter`;
const ESCAPE_BUTTON_KYE = `Escape`;

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
  const randomItems = arr.filter(() => {
    return Boolean(getRandomInteger());
  });

  return randomItems.length === 0 ? arr[0] : randomItems;
};

const pressEnter = (evt, action) => {
  if (evt.key === ENTER_BUTTON_KYE) {
    evt.preventDefault();
    action(evt);
  }
};

const pressEscape = (evt, action) => {
  if (evt.key === ESCAPE_BUTTON_KYE) {
    evt.preventDefault();
    action();
  }
};

const pressLeftMouseButton = (evt, action) => {
  if (evt.button === 0) {
    evt.preventDefault();
    action(evt);
  }
};

const getFormatTime = (minutes) => {
  return Math.floor(minutes / 60)
    ? `${Math.floor(minutes / 60)}h ${Math.floor(minutes % 60)}m`
    : `${Math.floor(minutes % 60)}m`;
};




/***/ }),

/***/ "./src/view/button.js":
/*!****************************!*\
  !*** ./src/view/button.js ***!
  \****************************/
/*! exports provided: createButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonTemplate", function() { return createButtonTemplate; });
const createButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};




/***/ }),

/***/ "./src/view/film.js":
/*!**************************!*\
  !*** ./src/view/film.js ***!
  \**************************/
/*! exports provided: createFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsTemplate", function() { return createFilmsTemplate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const SHORT_DESCRIPTION_LENGTH = 139;

const createFilmsTemplate = (film) => {
  const {id, name, poster, description, comments, rating, releaseDate, runtime, genres} = film;

  const commentCount = comments.length;
  const year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(releaseDate).format(`YYYY`);
  const duration = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getFormatTime"])(runtime);
  const shortDescription = description.length > SHORT_DESCRIPTION_LENGTH
    ? `${description.substr(0, SHORT_DESCRIPTION_LENGTH)}&hellip;`
    : description;

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
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};




/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: createFilmsContainerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsContainerTemplate", function() { return createFilmsContainerTemplate; });
const createFilmsContainerTemplate = () => {
  return `<section class="films">
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
};




/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
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




/***/ }),

/***/ "./src/view/footer-statistics.js":
/*!***************************************!*\
  !*** ./src/view/footer-statistics.js ***!
  \***************************************/
/*! exports provided: createFooterStatisticsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooterStatisticsTemplate", function() { return createFooterStatisticsTemplate; });
const createFooterStatisticsTemplate = (totalFilms) => {
  return `<p>${totalFilms} movies inside</p>`;
};




/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: createPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function() { return createPopupTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createCommentsTemplate = (comments) => {
  return comments.length === 0 ? `` : `<ul class="film-details__comments-list">
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
};

const createGenresTemplate = (genres) => {
  return genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
};

const createPopupTemplate = (filmData) => {
  const {name, poster, description, comments, rating, releaseDate, runtime, genres, director, writers, actors, country, age} = filmData;

  const commentCount = comments.length;
  const genreTitle = genres.length > 1 ? `Genres` : `Genre`;
  const duration = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getFormatTime"])(runtime);
  const genresTemplate = createGenresTemplate(genres);
  const writersTemplate = writers.join(`, `);
  const actorsTemplate = actors.join(`, `);
  const commentsTemplate = createCommentsTemplate(comments);

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
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>

          ${commentsTemplate}

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
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




/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: createProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileTemplate", function() { return createProfileTemplate; });
const createRankTemplate = (rank) => {
  return rank !== `` ? `<p class="profile__rating">${rank}</p>` : ``;
};

const createProfileTemplate = (stats) => {
  const rankTemplate = createRankTemplate(stats.rank);

  return `<section class="header__profile profile">
    ${rankTemplate}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};




/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: createSortingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortingTemplate", function() { return createSortingTemplate; });
const createSortingTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};




/***/ }),

/***/ "./src/view/stats.js":
/*!***************************!*\
  !*** ./src/view/stats.js ***!
  \***************************/
/*! exports provided: createStatisticsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStatisticsTemplate", function() { return createStatisticsTemplate; });
const createDurationTemplate = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);

  return hours > 0
    ? `<p class="statistic__item-text">${hours} <span class="statistic__item-description">h</span> ${minutes} <span class="statistic__item-description">m</span></p>`
    : `<p class="statistic__item-text">${minutes} <span class="statistic__item-description">m</span></p>`;
};

const createStatisticsTemplate = (stats) => {
  const {watched, rank, totalDuration, favoriteGenre} = stats;

  const durationTemplate = createDurationTemplate(totalDuration);

  return `<section class="statistic">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">${rank}</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
      <label for="statistic-today" class="statistic__filters-label">Today</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
      <label for="statistic-week" class="statistic__filters-label">Week</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
      <label for="statistic-month" class="statistic__filters-label">Month</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${watched} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        ${durationTemplate}
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">${favoriteGenre}</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

  </section>`;
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map