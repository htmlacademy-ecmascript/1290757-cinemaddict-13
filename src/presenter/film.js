import FilmView from "../view/film.js";
import PopupView from "../view/popup.js";
import {render} from "../utils/render.js";
import {RenderPosition} from "../const.js";

export default class Film {
  constructor(filmContainer, bodyContainer) {
    this._filmContainer = filmContainer;
    this._bodyContainer = bodyContainer;

    this._filmView = null;
    this._popupView = null;

    this._onDetailFilmShow = this._onDetailFilmShow.bind(this);
    this._onPopupClose = this._onPopupClose.bind(this);
  }

  init(film) {
    this._film = film;

    this._filmView = new FilmView(film);
    this._popupView = new PopupView(this._film);

    this._filmView.setFilmHandler(this._onDetailFilmShow);

    render(this._filmContainer, this._filmView, RenderPosition.BEFORE_END);
  }

  _popupClose() {
    const filmDetails = this._bodyContainer.querySelector(`.film-details`);

    this._popupView.removePopupHandler(this._onPopupClose);
    this._bodyContainer.removeChild(filmDetails);
    this._bodyContainer.classList.remove(`hide-overflow`);
    this._popupView.removeElement();
  }

  _onPopupClose() {
    this._popupClose();
  }

  _showDetailFilm() {
    render(this._bodyContainer, this._popupView.element, RenderPosition.BEFORE_END);
    this._popupView.setPopupHandler(this._onPopupClose);
    this._bodyContainer.classList.add(`hide-overflow`);
  }

  _onDetailFilmShow(evt) {
    this._showDetailFilm(evt);
  }
}
