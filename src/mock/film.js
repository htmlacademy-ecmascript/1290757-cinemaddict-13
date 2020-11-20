import dayjs from "dayjs";

const MAX_COMMENT = 5;
const MAX_RATING = 10;
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
const DESCRIPTION_TEXTS = [
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
    return getRandomInteger();
  });
};

const generateDescription = () => {
  return getArrayWithRandomItems(DESCRIPTION_TEXTS).join(` `);
};

const generateDate = () => {
  return dayjs().startOf(`year`).add(getRandomInteger(0, 300), `day`).format(`D MMMM YYYY`);
};

const generateTime = () => {
  const minutes = getRandomInteger(1, 120);

  return Math.floor(minutes / 60)
    ? `${Math.floor(minutes / 60)}h ${minutes % 60}m`
    : `${minutes % 60}m`;
};

const generateFilm = () => {
  return {
    name: getRandomArrayItem(NAMES),
    poster: getRandomArrayItem(POSTERS),
    description: generateDescription(),
    commentCount: getRandomInteger(0, MAX_COMMENT),
    rating: getRandomInteger(0, MAX_RATING),
    releaseDate: generateDate(),
    runtime: generateTime(),
    genres: getArrayWithRandomItems(GENRES)
  };
};

export {generateFilm};
