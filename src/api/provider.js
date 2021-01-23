import FilmsModel from "../model/film.js";
import {isOnline} from "../utils/common.js";

const getSyncedTasks = (items) => {
  return items.filter(({success}) => success)
    .map(({payload}) => payload.film);
};

const createStoreStructure = (items) => {
  return items.reduce((acc, current) => {
    return Object.assign({}, acc, {
      [current.id]: current,
    });
  }, {});
};

export default class Provider {
  constructor(api, store) {
    this._api = api;
    this._store = store;
  }

  getFilms() {
    if (isOnline()) {
      return this._api.getFilms()
        .then((films) => {
          const items = createStoreStructure(films.map(FilmsModel.adaptFilmToServer));
          this._store.setItems(items);
          return films;
        });
    }

    const storeFilms = Object.values(this._store.getItems());

    return Promise.resolve(storeFilms.map(FilmsModel.adaptFilmToClient));
  }

  updateFilm(film) {
    if (isOnline()) {
      return this._api.updateFilm(film)
        .then((updatedFilm) => {
          this._store.setItem(updatedFilm.id, FilmsModel.adaptFilmToServer(updatedFilm));
          return updatedFilm;
        });
    }

    this._store.setItem(film.id, FilmsModel.adaptFilmToServer(Object.assign({}, film)));

    return Promise.resolve(film);
  }

  getComment(film) {
    if (isOnline()) {
      return this._api.getComment(film)
        .then((comment) => {
          const items = createStoreStructure(comment);
          this._store.setItems(items);
          return comment;
        });
    }

    const storeComment = Object.values(this._store.getItems());

    return Promise.resolve(storeComment[film.id].comments.map(FilmsModel.adaptCommentToClient));
  }

  addComment(film) {
    if (isOnline()) {
      return this._api.addComment(film)
        .then((data) => {
          this._store.setItem(data.id, FilmsModel.adaptCommentToServer(data.comments));
          return data;
        });
    }

    return Promise.reject(new Error(`Add comment failed`));
  }

  deleteComment(id) {
    if (isOnline()) {
      return this._api.deleteComment(id)
        .then(() => this._store.removeItem(id));
    }

    return Promise.reject(new Error(`Delete comment failed`));
  }

  sync() {
    if (isOnline()) {
      const storeFilms = Object.values(this._store.getItems());

      return this._api.sync(storeFilms)
        .then((response) => {
          // Забираем из ответа синхронизированные задачи
          const createdFilms = getSyncedTasks(response.created);
          const updatedFilms = getSyncedTasks(response.updated);

          // Добавляем синхронизированные задачи в хранилище.
          // Хранилище должно быть актуальным в любой момент.
          const items = createStoreStructure([...createdFilms, ...updatedFilms]);

          this._store.setItems(items);
        });
    }

    return Promise.reject(new Error(`Sync data failed`));
  }
}
