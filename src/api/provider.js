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

  addFilm(film) {
    if (isOnline()) {
      return this._api.addFilm(film)
        .then((newFilm) => {
          this._store.setItem(newFilm.id, FilmsModel.adaptFilmToServer(newFilm));
          return newFilm;
        });
    }

    return Promise.reject(new Error(`Add task failed`));
  }

  deleteFilm(film) {
    if (isOnline()) {
      return this._api.deleteFilm(film)
        .then(() => this._store.removeItem(film.id));
    }

    return Promise.reject(new Error(`Delete task failed`));
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
