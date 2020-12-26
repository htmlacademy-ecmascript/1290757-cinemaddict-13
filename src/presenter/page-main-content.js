import FilterView from "../view/filter.js";
import SortingView from "../view/sorting.js";
import FilmsContainerView from "../view/films-container.js";
import NoFilmView from "../view/no-film";
import LoadMoreButtonView from "../view/button-load-more.js";
import FilmPresenter from "./film.js";
import {remove, render} from "../utils/render.js";
import {RenderPosition, TOTAL_FILMS, SortType} from "../const.js";
import {sortFilmByDate, sortFilmByRating} from "../utils/film.js";

const MOVIES_PER_STEP = 5;
const MAX_ADDITIONAL_FILMS = 2;
const FilmCategory = {
  COMMON: `common`,
  TOP_RATED: `topRated`,
  MOST_COMMENTED: `mostCommented`
};

export default class PageMainContent {
  constructor(bodyContainer, filmsModel) {
    this._filmsModel = filmsModel;
    this._filterData = null;
    this._bodyContainer = bodyContainer;
    this._mainContainer = bodyContainer.querySelector(`.main`);
    this._filmList = null;
    this._filmsContainer = null;
    this._filmListExtra = null;
    this._renderedFilmCount = MOVIES_PER_STEP;
    this._filmPresenter = new Map();
    this._setTypesForFilmPresenterCollection();
    this._currentSortType = SortType.DEFAULT;

    this._sortingView = new SortingView();
    this._filmsContainerView = new FilmsContainerView();
    this._noFilmView = new NoFilmView();
    this._loadMoreButtonView = new LoadMoreButtonView();

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._showMoreFilmsHandler = this._showMoreFilmsHandler.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(filterData) {
    this._filterData = filterData;

    this._renderFilter();

    if (!this._filmsModel.films.length) {
      this._renderNoFilms();
      return;
    }

    this._renderSorting();
    this._renderFilmsContainer();
    this._filmList = this._mainContainer.querySelector(`.films-list`);
    this._filmsContainer = this._filmList.querySelector(`.films-list__container`);
    this._filmListExtra = this._mainContainer.querySelectorAll(`.films-list.films-list--extra`);
    this._renderFilmsList();

    if (TOTAL_FILMS > MOVIES_PER_STEP) {
      this._renderLoadMoreButton();
    }

    this._renderTopRatedFilms();
    this._renderMostCommentedFilms();
  }

  _getFilms() {
    switch (this._currentSortType) {
      case SortType.BY_DATE:
        return this._filmsModel.films.slice().sort(sortFilmByDate);
      case SortType.BY_RATING:
        return this._filmsModel.films.slice().sort(sortFilmByRating);
    }

    return this._filmsModel.films;
  }

  _setTypesForFilmPresenterCollection() {
    const filmCategoryKeys = Object.keys(FilmCategory);

    filmCategoryKeys.forEach((category) => {
      this._filmPresenter.set(FilmCategory[category], {});
    });
  }

  _renderFilter() {
    render(this._mainContainer, new FilterView(this._filterData).element, RenderPosition.BEFORE_END);
  }

  _renderSorting() {
    render(this._mainContainer, this._sortingView.element, RenderPosition.BEFORE_END);
    this._sortingView.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFilmsContainer() {
    render(this._mainContainer, this._filmsContainerView.element, RenderPosition.BEFORE_END);
  }

  _renderNoFilms() {
    render(this._mainContainer, this._noFilmView.element, RenderPosition.BEFORE_END);
  }

  _renderFilmsList(container = this._filmsContainer, filmsList = this._filmsModel.films, limit = MOVIES_PER_STEP, type = FilmCategory.COMMON) {
    for (let i = 0; i < Math.min(filmsList.length, limit); i++) {
      this._renderFilm(container, filmsList[i], type);
    }
  }

  _renderFilm(container, film, type) {
    const presenter = new FilmPresenter(container, this._bodyContainer, this._handleFilmChange);
    presenter.init(film);
    this._filmPresenter.get(type)[film.id] = presenter;
  }

  _renderTopRatedFilms() {
    const container = this._filmListExtra[0].querySelector(`.films-list__container`);
    const films = [...this._filmsModel.films];

    films.sort((a, b) => b.rating - a.rating);

    this._renderFilmsList(container, films, MAX_ADDITIONAL_FILMS, FilmCategory.TOP_RATED);
  }

  _renderMostCommentedFilms() {
    const container = this._filmListExtra[1].querySelector(`.films-list__container`);
    const films = [...this._filmsModel.films];

    films.sort((a, b) => b.comments.length - a.comments.length);

    this._renderFilmsList(container, films, MAX_ADDITIONAL_FILMS, FilmCategory.MOST_COMMENTED);
  }

  _clearFilmList() {
    this._filmPresenter.forEach((value) => {
      Object
        .values(value)
        .forEach((presenter) => presenter.destroy());
    });

    this._filmPresenter = new Map()
      .set(FilmCategory.COMMON, {})
      .set(FilmCategory.TOP_RATED, {})
      .set(FilmCategory.MOST_COMMENTED, {});

    this._renderedFilmCount = MOVIES_PER_STEP;
    remove(this._loadMoreButtonView);
  }

  _updateFilm(items, updatedFilm) {
    const index = items.findIndex((item) => item.id === updatedFilm.id);

    if (index === -1) {
      return items;
    }

    return [
      ...items.slice(0, index),
      updatedFilm,
      ...items.slice(index + 1)
    ];
  }

  _handleFilmChange(updateFilm) {
    this._filmPresenter.forEach((value) => {
      if (value[updateFilm.id]) {
        value[updateFilm.id].init(updateFilm);
      }
    });
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType(sortType);
    this._clearFilmList();
    this._renderFilmsList();
  }

  _renderLoadMoreButton() {
    render(this._filmList, this._loadMoreButtonView.element, RenderPosition.BEFORE_END);
    this._loadMoreButtonView.setLoadMoreHandler(this._showMoreFilmsHandler);
  }

  _showMoreFilms() {
    this._filmsModel.films
      .slice(this._renderedFilmCount, this._renderedFilmCount + MOVIES_PER_STEP)
      .forEach((film) => {
        this._renderFilm(this._filmsContainer, film, FilmCategory.COMMON);
      });

    this._renderedFilmCount += MOVIES_PER_STEP;

    if (this._renderedFilmCount >= this._filmsModel.films.length) {
      this._loadMoreButtonView.removeLoadMoreHandler(this._showMoreFilmsHandler);
      remove(this._loadMoreButtonView);
    }
  }

  _showMoreFilmsHandler() {
    this._showMoreFilms();
  }
}
