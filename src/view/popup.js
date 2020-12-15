import {getFormatTime} from "../utils/render.js";
import AbstractView from "./abstract";
import {Button, Event} from "../const";
import {checkButtonPress} from "../utils/common";

const createCommentsTemplate = (comments) => comments.length === 0 ? ``
  : `<ul class="film-details__comments-list">
    ${comments.map((comment) => `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${comment.date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`).join(``)}
  </ul>`;

const createGenresTemplate = (genres) => genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
const checkFlagStatus = (value) => value ? `checked` : ``;

const createPopupTemplate = (filmData) => {
  const {name, poster, description, comments, rating, releaseDate, runtime, genres, director, writers, actors, country, age, watched, watchlist, favorite} = filmData;

  const commentCount = comments.length;
  const genreTitle = genres.length > 1 ? `Genres` : `Genre`;
  const duration = getFormatTime(runtime);
  const genresTemplate = createGenresTemplate(genres);
  const writersTemplate = writers.join(`, `);
  const actorsTemplate = actors.join(`, `);
  const commentsTemplate = createCommentsTemplate(comments);
  const watchedStatus = checkFlagStatus(watched);
  const watchlistStatus = checkFlagStatus(watchlist);
  const favoriteStatus = checkFlagStatus(favorite);

  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${poster}" alt="${name}">

            <p class="film-details__age">${age}+</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${name}</h3>
                <p class="film-details__title-original">Original: ${name}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writersTemplate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actorsTemplate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${releaseDate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${duration}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${country}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">${genreTitle}</td>
                <td class="film-details__cell">${genresTemplate}</td>
              </tr>
            </table>

            <p class="film-details__film-description">${description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${watchlistStatus}>
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watchedStatus}>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favoriteStatus}>
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>

          ${commentsTemplate}

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

export default class Popup extends AbstractView {
  constructor(filmData) {
    super();

    this._filmData = filmData;
    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);

    this._closeButton = null;
    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;
  }

  _getTemplate() {
    return createPopupTemplate(this._filmData);
  }

  _closePopupHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      if (evt.target.className === `film-details__close-btn`) {
        checkButtonPress(evt, this._callback.closePopup, Button.ENTER);
      } else {
        checkButtonPress(evt, this._callback.closePopup, Button.ESCAPE);
      }
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.closePopup, Button.MOUSE_MAIN);
    }
  }

  _watchedClickHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.watchedClick, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.watchedClick, Button.MOUSE_MAIN);
    }
  }

  _watchlistClickHandler(evt) {
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

  removeElement() {
    this._element = null;
    this._closeButton = null;
    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;
  }

  setClosePopupHandler(callback) {
    this._callback.closePopup = callback;

    this._closeButton = this._element.querySelector(`.film-details__close-btn`);

    this._closeButton.addEventListener(Event.MOUSE_DOWN, this._closePopupHandler);
    this._closeButton.addEventListener(Event.KEY_DOWN, this._closePopupHandler);
    document.addEventListener(Event.KEY_DOWN, this._closePopupHandler);
  }

  removeClosePopupHandler(callback) {
    this._callback.closePopup = callback;

    this._closeButton.removeEventListener(Event.MOUSE_DOWN, this._closePopupHandler);
    this._closeButton.removeEventListener(Event.KEY_DOWN, this._closePopupHandler);
    document.removeEventListener(Event.KEY_DOWN, this._closePopupHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;

    this._watchedButton = this._element.querySelector(`.film-details__control-label--watched`);

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

    this._watchlistButton = this._element.querySelector(`.film-details__control-label--watchlist`);

    this._watchlistButton.addEventListener(Event.MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.addEventListener(Event.KEY_DOWN, this._watchlistClickHandler);
  }

  removeWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;

    this._watchlistButton.removeEventListener(Event.MOUSE_DOWN, this._watchlistClickHandler);
    this._watchlistButton.removeEventListener(Event.KEY_DOWN, this._watchlistClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton = this._element.querySelector(`.film-details__control-label--favorite`);

    this._favoriteButton.addEventListener(Event.MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.addEventListener(Event.KEY_DOWN, this._favoriteClickHandler);
  }

  removeFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;

    this._favoriteButton.removeEventListener(Event.MOUSE_DOWN, this._favoriteClickHandler);
    this._favoriteButton.removeEventListener(Event.KEY_DOWN, this._favoriteClickHandler);
  }
}
