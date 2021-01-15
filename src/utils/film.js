import dayjs from "dayjs";

const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortFilmByDate = (filmA, filmB) => {
  const weight = getWeightForNullDate(filmA.releaseDate, filmB.releaseDate);

  if (weight) {
    return weight;
  }

  return dayjs(filmB.releaseDate).diff(dayjs(filmA.releaseDate));
};

const sortFilmByRating = (filmA, filmB) => {
  return filmB.rating - filmA.rating;
};

export {
  sortFilmByDate,
  sortFilmByRating,
};
