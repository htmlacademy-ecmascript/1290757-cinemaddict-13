import FilmView from "../view/film.js";
import PopupView from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";
import {RenderPosition} from "../const.js";
import {UserAction, UpdateType} from "../const.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default class Film {
  constructor(filmContainer, bodyContainer, updateData) {
    this._container = filmContainer;
    this._bodyContainer = bodyContainer;
    this._updateData = updateData;

    this._view = null;
    this._popupView = null;
    this._isPopupOpen = false;

    this._popupShowHandler = this._popupShowHandler.bind(this);
    this._popupCloseHandler = this._popupCloseHandler.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
    this._handleDeleteComment = this._handleDeleteComment.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmView = this._view;
    const prevPopupView = this._popupView;

    this._view = new FilmView(film);
    this._popupView = new PopupView(film);

    this._view.setShowDetailHandler(this._popupShowHandler);
    this._view.setWatchedClickHandler(this._handleWatchedClick);
    this._view.setWatchlistClickHandler(this._handleWatchlistClick);
    this._view.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevFilmView === null || prevPopupView === null) {
      render(this._container, this._view, RenderPosition.BEFORE_END);
      return;
    }

    if (this._container.contains(prevFilmView.element)) {
      replace(this._view, prevFilmView);
    }

    if (this._bodyContainer.contains(prevPopupView.element)) {
      this._popupView = new PopupView(film);
      replace(this._popupView, prevPopupView);
    }

    remove(prevFilmView);
    remove(prevPopupView);
  }

  destroy() {
    if (this._isPopupOpen) {
      this._popupView.removeClosePopupHandler(this._popupCloseHandler);
      this._popupView.removeWatchedClickHandler(this._handleWatchedClick);
      this._popupView.removeWatchlistClickHandler(this._handleWatchlistClick);
      this._popupView.removeFavoriteClickHandler(this._handleFavoriteClick);
      this._popupView.removeCommentAddHandler(this._handleAddComment);
      this._popupView.removeCommentDeleteHandler(this._handleDeleteComment);
    }
    remove(this._view);
    remove(this._popupView);
  }

  _handleAddComment(comment) {
    if (comment.text === `` || comment.emotion === ``) {
      return;
    }

    this._updateData(UserAction.ADD_COMMENT, UpdateType.MAJOR, {
      "id": this._film.id,
      "comment": comment
    });

    this.updatePopup();
  }

  _handleDeleteComment(evt) {
    this._updateData(UserAction.DELETE_COMMENT, UpdateType.MAJOR, {
      "id": this._film.id,
      "index": evt.target.dataset.count
    });

    this.updatePopup();
  }

  _handleWatchedClick() {
    this._updateData(UserAction.CHANGE_STATUS, UpdateType.MINOR, Object.assign({}, this._film, {
      watched: !this._film.watched,
      watchingDate: dayjs.utc().format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`)
    }));

    if (this._isPopupOpen) {
      this.updatePopup();
    }
  }

  _handleWatchlistClick() {
    this._updateData(UserAction.CHANGE_STATUS, UpdateType.MINOR, Object.assign({}, this._film, {
      watchlist: !this._film.watchlist
    }));

    if (this._isPopupOpen) {
      this.updatePopup();
    }
  }

  _handleFavoriteClick() {
    this._updateData(UserAction.CHANGE_STATUS, UpdateType.MINOR, Object.assign({}, this._film, {
      favorite: !this._film.favorite
    }));

    if (this._isPopupOpen) {
      this.updatePopup();
    }
  }

  _popupClose() {
    const filmDetails = this._bodyContainer.querySelector(`.film-details`);

    if (!filmDetails) {
      return;
    }

    this._bodyContainer.removeChild(filmDetails);
    this._bodyContainer.classList.remove(`hide-overflow`);
    this._popupView.removeElement();
    this._isPopupOpen = false;
  }

  _popupCloseHandler() {
    this._popupClose();
  }

  updatePopup() {
    this._popupClose();
    this._popupShow();
  }

  _popupShow() {
    this._popupView = new PopupView(this._film);
    render(this._bodyContainer, this._popupView.element, RenderPosition.BEFORE_END);
    this._popupView.setClosePopupHandler(this._popupCloseHandler);
    this._popupView.setWatchedClickHandler(this._handleWatchedClick);
    this._popupView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.setFavoriteClickHandler(this._handleFavoriteClick);
    this._popupView.setCommentAddHandler(this._handleAddComment);
    this._popupView.setCommentDeleteHandler(this._handleDeleteComment);
    this._bodyContainer.classList.add(`hide-overflow`);
    this._isPopupOpen = true;
  }

  _popupShowHandler(evt) {
    this.updatePopup(evt);
  }
}
