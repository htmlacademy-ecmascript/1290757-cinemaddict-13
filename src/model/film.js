import Observer from "../utils/observer.js";

export default class Films extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(films) {
    this._films = films.slice();
  }

  get films() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting task`);
    }

    this._films = [
      ...this._films.slice(0, index),
      update,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addComment(updateType, update) {
    const film = this._films.find((item) => item.id === update.id);
    film.comments.push(update.comment);

    this._notify(updateType, update);
  }

  deleteComment(updateType, update) {
    const film = this._films.find((item) => item.id === update.id);
    film.comments = [
      ...film.comments.slice(0, update.index),
      ...film.comments.slice(update.index + 1)
    ];

    this._notify(updateType, update);
  }

  static adaptCommentToClient(comment) {
    const adaptedComment = Object.assign({}, comment, {
      text: comment.comment,
      emotion: comment.emotion,
      author: comment.author,
      date: new Date(comment.date)
    });

    return adaptedComment;
  }

  static adaptCommentToServer(comment) {
    const adaptedTask = Object.assign({}, comment, {
      "comment": comment.text,
      "date": comment.date.toISOString(),
      "emotion": comment.emotion
    });

    return adaptedTask;
  }

  static adaptFilmToClient(film, comments) {
    const adaptedFilm = Object.assign({}, film, {
      id: film.id,
      name: film.film_info.title,
      poster: film.film_info.poster,
      description: film.film_info.description,
      comments,
      rating: film.film_info.total_rating,
      releaseDate: new Date(film.film_info.release.date),
      runtime: film.film_info.runtime,
      genres: film.film_info.genre,
      director: film.film_info.director,
      writers: film.film_info.writers,
      actors: film.film_info.actors,
      country: film.film_info.release.release_country,
      age: film.film_info.age_rating,
      watched: film.user_details.already_watched,
      watchlist: film.user_details.watchlist,
      favorite: film.user_details.favorite
    });

    return adaptedFilm;
  }

  static adaptFilmToServer(film) {
    const adaptedTask = Object.assign({}, film, {
      "comments": film.comments,
      "user_details": {
        "already_watched": film.watched,
        "watchlist": film.watchlist,
        "favorite": film.favorite,
      },
    });

    return adaptedTask;
  }
}
