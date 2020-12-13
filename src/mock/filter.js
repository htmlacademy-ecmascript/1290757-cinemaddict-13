const getWatchedFilms = (films) => films.filter((film) => film.watched);
const getWatchlistFilms = (films) => films.filter((film) => film.watchlist);
const getFavoriteFilms = (films) => films.filter((film) => film.favorite);

const generateFilter = (films) => {
  return {
    watched: getWatchedFilms(films),
    watchlist: getWatchlistFilms(films),
    favorite: getFavoriteFilms(films),
  };
};

export {generateFilter};
