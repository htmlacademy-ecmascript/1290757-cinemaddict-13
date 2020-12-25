import {getFormatTime} from "../utils/render.js";
import SmartView from "./smart";
import {ACTORS, Button, Event} from "../const";
import {checkButtonPress, getRandomArrayItem} from "../utils/common";
import dayjs from "dayjs";

const EMOJIS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

const checkFlagStatus = (value) => value ? `checked` : ``;

const createEmojisTemplate = (emotion) => {
  return `<div class="film-details__emoji-list">
    ${EMOJIS.map((emoji) => `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}" ${checkFlagStatus(emoji === emotion)}>
      <label class="film-details__emoji-label" for="emoji-${emoji}">
        <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
      </label>`).join(``)}
  </div>`;
};

const createChosenEmojiTemplate = (emotion) => emotion.length === 0 ? ``
  : `<img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">`;

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

const createPopupTemplate = (filmData, commentData) => {
  const {name, poster, description, comments, rating, releaseDate, runtime, genres, director, writers, actors, country,
    age, watched, watchlist, favorite} = filmData;

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
  const commentInput = commentData.text ? commentData.text : ``;
  const emojiTemplate = createEmojisTemplate(commentData.emotion);
  const chosenEmojiTemplate = createChosenEmojiTemplate(commentData.emotion);

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
            <div class="film-details__add-emoji-label">${chosenEmojiTemplate}</div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${commentInput}</textarea>
            </label>

            ${emojiTemplate}
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

export default class Popup extends SmartView {
  constructor(filmData) {
    super();

    this._filmData = filmData;
    this._data = {
      text: ``,
      emotion: ``,
      author: getRandomArrayItem(ACTORS),
      date: dayjs().format(`YYYY/M/D H:mm`)
    };
    this._scrollTop = 0;

    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._addCommentHandler = this._addCommentHandler.bind(this);
    this._commentTextInputHandler = this._commentTextInputHandler.bind(this);
    this._changeEmotionHandler = this._changeEmotionHandler.bind(this);

    this._closeButton = null;
    this._watchedButton = null;
    this._watchlistButton = null;
    this._favoriteButton = null;

    this._setInnerHandlers();
  }

  _getTemplate() {
    return createPopupTemplate(this._filmData, this._data);
  }

  _setScrollTop() {
    this._scrollTop = this._element.scrollTop;
  }

  _restoreScrollTop() {
    this._element.scrollTo({top: this._scrollTop});
  }

  _setInnerHandlers() {
    this.element
      .querySelector(`.film-details__inner`)
      .addEventListener(Event.KEY_DOWN, this._addCommentHandler);

    this.element
      .querySelector(`.film-details__comment-input`)
      .addEventListener(Event.INPUT, this._commentTextInputHandler);

    this.element
      .querySelectorAll(`.film-details__emoji-item`)
      .forEach((input) => {
        input.addEventListener(Event.CHANGE, this._changeEmotionHandler);
      });
  }

  _restoreHandlers() {
    this._setInnerHandlers();
    this.setClosePopupHandler(this._callback.closePopup);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setWatchlistClickHandler(this._callback.watchlistClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
  }

  _addComment() {
    if (this._data.text === `` || this._data.emotion === ``) {
      return;
    }

    this._filmData.comments.push(this._data);
    this._updateData({
      text: ``,
      emotion: ``
    });

    this._setScrollTop();
    this._updateElement();
    this._restoreScrollTop();
  }

  _addCommentHandler(evt) {
    if (evt.key === Button.ENTER && evt.ctrlKey) {
      evt.preventDefault();
      this._addComment();
    }
  }

  _changeEmotion(emotion) {
    this._updateData({
      emotion: emotion.value,
    });

    this._setScrollTop();
    this._updateElement();
    this._restoreScrollTop();
  }

  _changeEmotionHandler(evt) {
    evt.preventDefault();

    this._changeEmotion(evt.target);
  }

  _commentTextInputUpdate() {
    const text = this._element.querySelector(`.film-details__comment-input`).value;

    this._updateData({
      text,
    });
  }

  _commentTextInputHandler(evt) {
    evt.preventDefault();
    this._commentTextInputUpdate();
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
