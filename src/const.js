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
};
const Button = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
  MOUSE_MAIN: 0
};

export {PROPOSALS, ACTORS, MAX_DAYS, SECONDS_IN_MINUTE, RenderPosition, Event, Button, TOTAL_FILMS};
