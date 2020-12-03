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
    action();
  }
};

export {
  getRandomInteger,
  getRandomArrayItem,
  getArrayWithRandomItems,
  checkButtonPress
};
