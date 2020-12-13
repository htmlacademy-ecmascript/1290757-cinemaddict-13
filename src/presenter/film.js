import FilmView from "../view/film.js";
import PopupView from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";
import {RenderPosition} from "../const.js";

export default class Film {
  constructor(filmContainer, bodyContainer, updateData) {
    this._container = filmContainer;
    this._bodyContainer = bodyContainer;
    this._updateData = updateData;

    this._view = null;
    this._popupView = null;

    this._popupShowHandler = this._popupShowHandler.bind(this);
    this._popupCloseHandler = this._popupCloseHandler.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
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
    this._popupView.setWatchedClickHandler(this._handleWatchedClick);
    this._popupView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevFilmView === null || prevPopupView === null) {
      render(this._container, this._view, RenderPosition.BEFORE_END);
      return;
    }

    if (this._container.contains(prevFilmView.element)) {
      replace(this._view, prevFilmView);
    }

    if (this._bodyContainer.contains(prevPopupView.element)) {
      replace(this._popupView, prevPopupView);
      this._popupView.setClosePopupHandler(this._popupCloseHandler);
    }

    remove(prevFilmView);
    remove(prevPopupView);
  }

  _destroy() {
    remove(this._view);
    remove(this._popupView);
  }

  _handleWatchedClick() {
    this._updateData(Object.assign({}, this._film, {
      watched: !this._film.watched
    }));
  }

  _handleWatchlistClick() {
    this._updateData(Object.assign({}, this._film, {
      watchlist: !this._film.watchlist
    }));
  }

  _handleFavoriteClick() {
    this._updateData(Object.assign({}, this._film, {
      favorite: !this._film.favorite
    }));
  }

  _popupClose() {
    const filmDetails = this._bodyContainer.querySelector(`.film-details`);

    if (!filmDetails) {
      return;
    }

    this._popupView.removeClosePopupHandler(this._popupCloseHandler);
    this._popupView.removeWatchedClickHandler(this._handleWatchedClick);
    this._popupView.removeWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.removeFavoriteClickHandler(this._handleFavoriteClick);
    this._bodyContainer.removeChild(filmDetails);
    this._bodyContainer.classList.remove(`hide-overflow`);
    this._popupView.removeElement();
  }

  _popupCloseHandler() {
    this._popupClose();
  }

  _popupShow() {
    this._popupClose();

    render(this._bodyContainer, this._popupView.element, RenderPosition.BEFORE_END);
    this._popupView.setClosePopupHandler(this._popupCloseHandler);
    this._bodyContainer.classList.add(`hide-overflow`);
  }

  _popupShowHandler(evt) {
    this._popupShow(evt);
  }
}
