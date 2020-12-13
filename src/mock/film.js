import dayjs from "dayjs";
import {getRandomInteger, getRandomArrayItem, getArrayWithRandomItems} from "../utils/common.js";
import {PROPOSALS, ACTORS, MAX_DAYS} from "../const";
import {generateComment} from "./comment.js";

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

const generateDescription = () => getArrayWithRandomItems(PROPOSALS).join(` `);
const generateDate = () => dayjs().startOf(`year`).add(getRandomInteger(MAX_DAYS), `day`).format(`D MMMM YYYY`);
const getComments = () => new Array(getRandomInteger(MAX_COMMENT)).fill().map(generateComment);
const getWatchlistStatus = () => isWatched ? false : Boolean(getRandomInteger());
const getFavoritesStatus = () => isWatched ? Boolean(getRandomInteger()) : false;

const getWatchedStatus = () => {
  isWatched = Boolean(getRandomInteger());
};

const generateId = () => Number(Date.now()) + getRandomInteger(MAX_ID);

const generateFilm = () => {
  getWatchedStatus();

  return {
    id: generateId(),
    name: getRandomArrayItem(NAMES),
    poster: getRandomArrayItem(POSTERS),
    description: generateDescription(),
    comments: getComments(),
    rating: generateRating(MAX_RATING),
    releaseDate: generateDate(),
    runtime: getRandomInteger(MAX_RUNTIME, MIN_RUNTIME),
    genres: getArrayWithRandomItems(GENRES),
    director: getRandomArrayItem(DIRECTORS),
    writers: getArrayWithRandomItems(WRITERS),
    actors: getArrayWithRandomItems(ACTORS),
    country: getRandomArrayItem(COUNTRIES),
    age: getRandomArrayItem(AGE_RATING),
    watched: isWatched,
    watchlist: getWatchlistStatus(),
    favorite: getFavoritesStatus()
  };
};

export {generateFilm};
