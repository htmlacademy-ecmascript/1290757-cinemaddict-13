import {getRandomArrayItem, getRandomInteger} from "../utils";
import {PROPOSALS, ACTORS} from "../const";
import dayjs from "dayjs";

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const generateDate = () => {
  return dayjs().startOf(`year`).add(getRandomInteger(0, 300), `day`).format(`YYYY/M/D H:mm`);
};

const generateComment = () => {
  return {
    text: getRandomArrayItem(PROPOSALS),
    emotion: getRandomArrayItem(EMOTIONS),
    author: getRandomArrayItem(ACTORS),
    date: generateDate()
  };
};

export {generateComment};
