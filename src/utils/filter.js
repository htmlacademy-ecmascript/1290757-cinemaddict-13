import {FilterType} from "../const";

const getFilteredFilms = (films) => {
  const filter = {
    [FilterType.ALL]: [],
    [FilterType.WATCHLIST]: [],
    [FilterType.HISTORY]: [],
    [FilterType.FAVORITES]: [],
  };

  films.forEach((film) => {
    filter[FilterType.ALL].push(film);

    if (film.watchlist) {
      filter[FilterType.WATCHLIST].push(film);
    }

    if (film.watched) {
      filter[FilterType.HISTORY].push(film);
    }

    if (film.favorite) {
      filter[FilterType.FAVORITES].push(film);
    }
  });

  return filter;
};

export {getFilteredFilms};
