import {getRandomArrayItem, getRandomInteger} from "../utils";
import {PROPOSALS, ACTORS, MAX_DAYS} from "../const";
import dayjs from "dayjs";

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const generateDate = () => dayjs().startOf(`year`).add(getRandomInteger(MAX_DAYS), `day`).format(`YYYY/M/D H:mm`);

const generateComment = () => {
  return {
    text: getRandomArrayItem(PROPOSALS),
    emotion: getRandomArrayItem(EMOTIONS),
    author: getRandomArrayItem(ACTORS),
    date: generateDate()
  };
};

export {generateComment};
