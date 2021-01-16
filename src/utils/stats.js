import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

const RATING = {
  novice: {
    limit: 1,
    name: `novice`
  },
  fan: {
    limit: 11,
    name: `fan`
  },
  movieBuff: {
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

const getRank = (count) => {
  let rank = ``;

  if (count >= RATING.novice.limit && count < RATING.fan.limit) {
    rank = RATING.novice.name;
  } else if (count >= RATING.fan.limit && count < RATING.movieBuff.limit) {
    rank = RATING.fan.name;
  } else if (count >= RATING.movieBuff.limit) {
    rank = RATING.movieBuff.name;
  }

  return rank;
};

const getFavoriteGenre = (genresData) => {
  if (!genresData.size) {
    return ``;
  }

  let favoriteGenre;

  for (const [key, value] of genresData) {
    if (!favoriteGenre) {
      favoriteGenre = [key, value];
    } else {
      if (favoriteGenre[1] < value) {
        favoriteGenre = [key, value];
      }
    }
  }

  return favoriteGenre[0];
};

const getStats = (films) => {
  const filmsStats = getFilmsStats(films);

  return {
    watched: filmsStats.count,
    rank: getRank(filmsStats.count),
    totalDuration: filmsStats.minutes,
    favoriteGenre: getFavoriteGenre(filmsStats.genres),
  };
};

const getFilmInDateRange = (films, dateFrom, dateTo) => {
  return films.filter((film) => {
    return dayjs(film.watchingDate).isSame(dateFrom) ||
      dayjs(film.watchingDate).isBetween(dateFrom, dateTo) ||
      dayjs(film.watchingDate).isSame(dateTo);
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

export {getStats, getFilmInDateRange, getCharsData};
