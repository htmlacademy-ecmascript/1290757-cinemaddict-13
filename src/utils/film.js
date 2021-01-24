import dayjs from "dayjs";

const TimeIntervals = {
  YEAR: {
    dayjsValue: `y`,
    name: `year`,
    limit: 100
  },
  MONTH: {
    dayjsValue: `M`,
    name: `month`,
    limit: 12
  },
  DAY: {
    dayjsValue: `d`,
    name: `day`,
    limit: 30
  },
  HOUR: {
    dayjsValue: `h`,
    name: `hour`,
    limit: 24
  },
  MINUTE: {
    dayjsValue: `m`,
    name: `minute`,
    limit: 60
  }
};

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

const covertCommentDateToString = (comments) => {
  comments.forEach((comment) => {
    Object.values(TimeIntervals).forEach((interval) => {
      const diff = dayjs().diff(comment.date, interval.dayjsValue);

      if (diff >= 1 && diff < interval.limit) {
        comment.date = `${diff} ${diff === 1 ? interval.name : interval.name + `s`} ago`;
      } else if (interval.dayjsValue === TimeIntervals.MINUTE.dayjsValue && diff < 1) {
        comment.date = `now`;
      }
    });
  });
};

export {
  sortFilmByDate,
  sortFilmByRating,
  covertCommentDateToString
};
