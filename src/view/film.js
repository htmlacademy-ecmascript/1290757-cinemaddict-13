import dayjs from "dayjs";
import {getFormatTime} from "../utils/render.js";
import AbstractView from "./abstract";
import {Button, Event} from "../const";
import {checkButtonPress} from "../utils/common";

const SHORT_DESCRIPTION_LENGTH = 139;

const checkFlagStatus = (value) => value ? `film-card__controls-item--active` : ``;

const createTemplate = (film) => {
  const {id, name, poster, description, comments, rating, releaseDate, runtime, genres, watched, watchlist,
    favorite} = film;

  const commentCount = comments.length;
  const year = dayjs(releaseDate).format(`YYYY`);
  const duration = getFormatTime(runtime);
  const shortDescription = description.length > SHORT_DESCRIPTION_LENGTH
    ? `${description.substr(0, SHORT_DESCRIPTION_LENGTH)}&hellip;`
    : description;
  const watchedStatus = checkFlagStatus(watched);
  const watchlistStatus = checkFlagStatus(watchlist);
  const favoriteStatus = checkFlagStatus(favorite);

  return `<article id="${id}" class="film-card">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${name}" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <a class="film-card__comments">${commentCount} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistStatus}"
       type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedStatus}"
       type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteStatus}"
       type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class Film extends AbstractView {
  constructor(film) {
    super();

    this._film = film;
    this._callHandler = this._callHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickClickHandler = this._watchlistClickClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);

    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;
  }

  _getTemplate() {
    return createTemplate(this._film);
  }

  _callHandler(evt) {
    if (evt.target.classList.contains(`film-card__poster`)
      || evt.target.classList.contains(`film-card__title`)
      || evt.target.classList.contains(`film-card__comments`)) {

      if (evt.type === Event.KEY_DOWN) {
        checkButtonPress(evt, this._callback.showDetail, Button.ENTER);
      } else if (evt.type === Event.MOUSE_DOWN) {
        checkButtonPress(evt, this._callback.showDetail, Button.MOUSE_MAIN);
      }
    }
  }

  _watchedClickHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.watchedClick, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.watchedClick, Button.MOUSE_MAIN);
    }
  }

  _watchlistClickClickHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.watchlistClick, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.watchlistClick, Button.MOUSE_MAIN);
    }
  }

  _favoriteClickHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.favoriteClick, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.favoriteClick, Button.MOUSE_MAIN);
    }
  }

  setShowDetailHandler(callback) {
    this._callback.showDetail = callback;

    this.element.addEventListener(Event.MOUSE_DOWN, this._callHandler);
    this.element.addEventListener(Event.KEY_DOWN, this._callHandler);
  }

  removeShowDetailHandler(callback) {
    this._callback.showDetail = callback;

    this.element.removeEventListener(Event.MOUSE_DOWN, this._callHandler);
    this.element.removeEventListener(Event.KEY_DOWN, this._callHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton = this.element.querySelector(`.film-card__controls-item--mark-as-watched`);

    this._watchedButton.addEventListener(Event.MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.addEventListener(Event.KEY_DOWN, this._watchedClickHandler);
  }

  removeWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton.removeEventListener(Event.MOUSE_DOWN, this._watchedClickHandler);
    this._watchedButton.removeEventListener(Event.KEY_DOWN, this._watchedClickHandler);
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton = this.element.querySelector(`.film-card__controls-item--add-to-watchlist`);

    this._watchlistButton.addEventListener(Event.MOUSE_DOWN, this._watchlistClickClickHandler);
    this._watchlistButton.addEventListener(Event.KEY_DOWN, this._watchlistClickClickHandler);
  }

  removeWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton.removeEventListener(Event.MOUSE_DOWN, this._watchlistClickClickHandler);
    this._watchlistButton.removeEventListener(Event.KEY_DOWN, this._watchlistClickClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton = this.element.querySelector(`.film-card__controls-item--favorite`);

    this._favoriteButton.addEventListener(Event.MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.addEventListener(Event.KEY_DOWN, this._favoriteClickHandler);
  }

  removeFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton.removeEventListener(Event.MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.removeEventListener(Event.KEY_DOWN, this._favoriteClickHandler);
  }
}
