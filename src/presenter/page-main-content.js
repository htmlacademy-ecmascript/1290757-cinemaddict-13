import FilterView from "../view/filter.js";
import SortingView from "../view/sorting.js";
import FilmsContainerView from "../view/films-container.js";
import FilmView from "../view/film.js";
import NoFilmView from "../view/no-film";
import LoadMoreButtonView from "../view/button-load-more.js";
import PopupView from "../view/popup.js";
import {remove, render} from "../utils/render.js";
import {RenderPosition, TOTAL_FILMS} from "../const.js";

const MOVIES_PER_STEP = 5;
const MAX_ADDITIONAL_FILMS = 2;

export default class PageMainContent {
  constructor(bodyContainer) {
    this._films = null;
    this._filterData = null;

    this._bodyContainer = bodyContainer;
    this._mainContainer = bodyContainer.querySelector(`.main`);
    this._filmList = null;
    this._filmsContainer = null;
    this._filmListExtra = null;

    this._sortingView = new SortingView();
    this._filmsContainerView = new FilmsContainerView();
    this._noFilmView = new NoFilmView();
    this._loadMoreButtonView = new LoadMoreButtonView();
  }

  init(films, filterData) {
    this._films = films;
    this._filterData = filterData;

    this._renderFilter();

    if (!this._films.length) {
      this._renderNoFilms();
      return;
    }

    this._renderSorting();
    this._renderFilmsContainer();
    this._filmList = this._mainContainer.querySelector(`.films-list`);
    this._filmsContainer = this._filmList.querySelector(`.films-list__container`);
    this._filmListExtra = this._mainContainer.querySelectorAll(`.films-list.films-list--extra`);
    this._renderFilmsList(this._filmsContainer, this._films, MOVIES_PER_STEP);

    if (TOTAL_FILMS > MOVIES_PER_STEP) {
      this._renderLoadMoreButton(this._filmList, this._films, this._filmsContainer);
    }

    this._renderTopRatedFilms();
    this._renderMostCommentedFilms();
  }

  _renderFilter() {
    render(this._mainContainer, new FilterView(this._filterData).element, RenderPosition.BEFORE_END);
  }

  _renderSorting() {
    render(this._mainContainer, this._sortingView.element, RenderPosition.BEFORE_END);
  }

  _renderFilmsContainer() {
    render(this._mainContainer, this._filmsContainerView.element, RenderPosition.BEFORE_END);
  }

  _renderNoFilms() {
    render(this._mainContainer, this._noFilmView.element, RenderPosition.BEFORE_END);
  }

  _renderFilmsList(container, filmsList, limit) {
    for (let i = 0; i < Math.min(filmsList.length, limit); i++) {
      this._renderFilm(container, filmsList[i]);
    }
  }

  _renderFilm(container, filmData) {
    const filmElement = new FilmView(filmData);

    let popupElement;

    const popupClose = () => {
      const filmDetails = this._bodyContainer.querySelector(`.film-details`);

      popupElement.removePopupHandler(onPopupClose);
      this._bodyContainer.removeChild(filmDetails);
      this._bodyContainer.classList.remove(`hide-overflow`);
      popupElement.removeElement();
    };

    const onPopupClose = () => {
      popupClose();
    };

    const getDetailData = (evt) => this._films.filter((film) => film.id === Number(evt.target.parentElement.id))[0];

    const showDetailFilm = (evt) => {
      popupElement = new PopupView(getDetailData(evt, this._bodyContainer));

      render(this._bodyContainer, popupElement.element, RenderPosition.BEFORE_END);
      popupElement.setPopupHandler(onPopupClose);
      this._bodyContainer.classList.add(`hide-overflow`);
    };

    const onDetailFilmShow = (evt) => {
      showDetailFilm(evt);
    };

    render(container, filmElement.element, RenderPosition.BEFORE_END);
    filmElement.setFilmHandler(onDetailFilmShow);
  }

  _renderTopRatedFilms() {
    const topRatedFilmsContainer = this._filmListExtra[0].querySelector(`.films-list__container`);
    const topRatedFilms = [...this._films];

    topRatedFilms.sort((a, b) => b.rating - a.rating);

    this._renderFilmsList(topRatedFilmsContainer, topRatedFilms, MAX_ADDITIONAL_FILMS);
  }

  _renderMostCommentedFilms() {
    const mostCommentedFilmsContainer = this._filmListExtra[1].querySelector(`.films-list__container`);
    const mostCommentedFilms = [...this._films];

    mostCommentedFilms.sort((a, b) => b.comments.length - a.comments.length);

    this._renderFilmsList(mostCommentedFilmsContainer, mostCommentedFilms, MAX_ADDITIONAL_FILMS);
  }

  _renderLoadMoreButton(filmList, films, filmsContainer) {
    let renderedTaskCount = MOVIES_PER_STEP;

    const showMoreFilm = () => {
      films
        .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
        .forEach((film) => {
          this._renderFilm(filmsContainer, film);
        });

      renderedTaskCount += MOVIES_PER_STEP;

      if (renderedTaskCount >= films.length) {
        this._loadMoreButtonView.removeLoadMoreButtonHandler(onMoreFilmShow);
        remove(this._loadMoreButtonView);
      }
    };

    const onMoreFilmShow = () => {
      showMoreFilm();
    };

    render(filmList, this._loadMoreButtonView.element, RenderPosition.BEFORE_END);
    this._loadMoreButtonView.setLoadMoreButtonHandler(onMoreFilmShow);
  }
}
