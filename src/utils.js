const ENTER_BUTTON_KYE = `Enter`;
const ESCAPE_BUTTON_KYE = `Escape`;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

const getArrayWithRandomItems = (arr) => {
  return arr.filter(() => {
    return Boolean(getRandomInteger());
  });
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

export {
  getRandomInteger,
  getRandomArrayItem,
  getArrayWithRandomItems,
  pressEnter,
  pressEscape,
  pressLeftMouseButton
};
