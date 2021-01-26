const SECONDS_IN_MINUTE = 60;

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
  META: `Meta`,
  MOUSE_MAIN: 0
};

const SortType = {
  DEFAULT: `default`,
  BY_DATE: `byDate`,
  BY_RATING: `byRating`
};

const UserAction = {
  CHANGE_STATUS: `CHANGE_STATUS`,
  ADD_COMMENT: `ADD_COMMENT`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  LOAD_COMMENTS: `LOAD_COMMENTS`
};

const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  PRE_MAJOR: `PRE_MAJOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

const FilterType = {
  ALL: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
  STATISTICS: `statistics`
};

const AUTHORIZATION = `Basic az36347hxjmwyhepv`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;
const SHAKE_ANIMATION_TIMEOUT = 600;

export {SECONDS_IN_MINUTE, RenderPosition, Event, Button, SortType, UserAction, UpdateType, FilterType, AUTHORIZATION,
  END_POINT, SHAKE_ANIMATION_TIMEOUT};
