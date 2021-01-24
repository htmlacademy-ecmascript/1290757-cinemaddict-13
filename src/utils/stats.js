import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const Rating = {
  NOVICE: {
    limit: 1,
    name: `novice`
  },
  FAN: {
    limit: 11,
    name: `fan`
  },
  MOVIE_BUFF: {
    limit: 21,
    name: `movie buff`
  }
};

const getFilmsStats = (films) => {
  let filmsStats = {
    count: 0,
    minutes: 0,
    genres: new Map()
  };

  films.forEach((film) => {
    if (film.watched) {
      filmsStats.count++;
      filmsStats.minutes += film.runtime;

      for (const genre of film.genres) {
        if (filmsStats.genres.get(genre) === undefined) {
          filmsStats.genres.set(genre, 1);
        } else {
          const currentValue = filmsStats.genres.get(genre);

          filmsStats.genres.set(genre, currentValue + 1);
        }
      }
    }
  });

  return filmsStats;
};

const getRank = (films) => {
  let rank = ``;

  if (films.length !== 0) {
    const count = films.filter((film) => film.watched).length;

    if (count >= Rating.NOVICE.limit && count < Rating.FAN.limit) {
      rank = Rating.NOVICE.name;
    } else if (count >= Rating.FAN.limit && count < Rating.MOVIE_BUFF.limit) {
      rank = Rating.FAN.name;
    } else if (count >= Rating.MOVIE_BUFF.limit) {
      rank = Rating.MOVIE_BUFF.name;
    }
  }

  return rank;
};

const sortCharsData = (charsData) => Object.entries(charsData).sort((genreA, genreB) => genreB[1] - genreA[1]);
const sortGenreByCount = (charsData) => Object.fromEntries(sortCharsData(charsData));

const getFavoriteGenre = (films) => {
  if (films.length === 0) {
    return ``;
  }

  const charsData = getCharsData(films);

  return sortCharsData(charsData)[0][0];
};

const getStats = (films) => {
  const filmsStats = getFilmsStats(films);

  return {
    watched: filmsStats.count,
    rank: getRank(films),
    totalDuration: filmsStats.minutes,
    favoriteGenre: getFavoriteGenre(films),
  };
};

const getFilmInDateRange = (data) => {
  const {films, dateFrom, dateTo} = data;
  const watchedFilms = films.filter((film) => film.watched);

  if (dateFrom === null) {
    return watchedFilms;
  }

  return watchedFilms.filter((watchedFilm) => {
    return dayjs(watchedFilm.watchingDate).isSame(dateFrom) ||
      dayjs(watchedFilm.watchingDate).isBetween(dateFrom, dateTo) ||
      dayjs(watchedFilm.watchingDate).isSame(dateTo);
  });
};

const getCharsData = (films) => {
  let chartData = {};

  films.forEach((film) => {
    film.genres.forEach((genre) => {
      if (chartData[genre]) {
        chartData[genre]++;
      } else {
        chartData[genre] = 1;
      }
    });
  });

  return chartData;
};

export {getStats, getFilmInDateRange, getCharsData, sortGenreByCount, getRank};
