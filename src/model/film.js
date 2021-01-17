import Observer from "../utils/observer.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default class Films extends Observer {
  constructor() {
    super();
    this._films = [];
  }

  setFilms(updateType, films) {
    this._films = films.slice();

    this._notify(updateType);
  }

  get films() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting film`);
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

    if (update.index === -1) {
      throw new Error(`Can't delete unexisting comment`);
    }

    film.comments.splice(update.index, 1);

    this._notify(updateType, update);
  }

  setComments(updateType, update) {
    const film = this._films.find((item) => item.id === update.id);

    if (update.index === -1) {
      throw new Error(`Can't delete unexisting comment`);
    }

    film.loadedComments = update.comments;

    this._notify(updateType, update);
  }

  static adaptCommentToClient(comment) {
    return Object.assign({}, {
      text: comment.comment,
      emotion: comment.emotion,
      author: comment.author,
      date: dayjs(comment.date).format(`YYYY/M/D H:mm`)
    });
  }

  static adaptCommentToServer(comment) {
    return Object.assign({}, {
      "comment": comment.text,
      "date": dayjs.utc().format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`),
      "emotion": comment.emotion
    });
  }

  static adaptFilmToClient(film) {
    return Object.assign({}, film, {
      id: film.id,
      name: film.film_info.title,
      poster: film.film_info.poster,
      description: film.film_info.description,
      comments: film.comments,
      rating: film.film_info.total_rating,
      releaseDate: dayjs(film.film_info.release.date).format(`D MMMM YYYY`),
      runtime: film.film_info.runtime,
      genres: film.film_info.genre,
      director: film.film_info.director,
      writers: film.film_info.writers,
      actors: film.film_info.actors,
      country: film.film_info.release.release_country,
      age: film.film_info.age_rating,
      watched: film.user_details.already_watched,
      watchlist: film.user_details.watchlist,
      favorite: film.user_details.favorite,
      watchingDate: film.user_details.watching_date
    });
  }

  static adaptFilmToServer(film) {
    return Object.assign({}, {
      "id": film.id,
      "comments": film.comments,
      "film_info": film.film_info,
      "user_details": {
        "already_watched": film.watched,
        "watchlist": film.watchlist,
        "favorite": film.favorite,
        "watching_date": film.watchingDate
      }
    });
  }
}
