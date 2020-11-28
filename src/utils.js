import {RenderPosition, SECOND_IN_MINUTE} from "./const.js";

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

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

const getFormatTime = (minutes) => Math.floor(minutes / SECOND_IN_MINUTE)
  ? `${Math.floor(minutes / SECOND_IN_MINUTE)}h ${Math.floor(minutes % SECOND_IN_MINUTE)}m`
  : `${Math.floor(minutes % SECOND_IN_MINUTE)}m`;

export {
  getRandomInteger,
  getRandomArrayItem,
  getArrayWithRandomItems,
  checkButtonPress,
  getFormatTime,
  renderElement,
  createElement
};
