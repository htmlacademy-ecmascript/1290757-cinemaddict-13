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

  deleteComment(updateType, index) {
    this._films.comments = [
      ...this._films.comments.slice(0, index),
      ...this._films.comments.slice(index + 1)
    ];

    this._notify(updateType);
  }
}
