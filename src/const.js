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

export {PROPOSALS, ACTORS, MAX_DAYS, SECONDS_IN_MINUTE, RenderPosition, Event, Button, TOTAL_FILMS, SortType,
  UserAction, UpdateType, FilterType, AUTHORIZATION, END_POINT};
