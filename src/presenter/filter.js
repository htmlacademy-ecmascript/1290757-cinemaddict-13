import FilterView from "../view/filter.js";
import {render, replace, remove} from "../utils/render.js";
import {getFilteredFilms} from "../utils/filter.js";
import {FilterType, UpdateType, RenderPosition} from "../const.js";

export default class Filter {
  constructor(filterContainer, filterModel, filmsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._filmsModel = filmsModel;
    this._currentFilter = null;
    this._filterComponent = null;

    this.init = this.init.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);
    this._handleStatisticsClick = this._handleStatisticsClick.bind(this);

    this._filmsModel.addObserver(this.init);
    this._filterModel.addObserver(this.init);
  }

  init() {
    this._currentFilter = this._filterModel.filter;

    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(filters, this._currentFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);
    this._filterComponent.setStatisticsClickHandler(this._handleStatisticsClick);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.BEFORE_END);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _handleStatisticsClick() {
    if (this._currentFilter === FilterType.STATISTICS) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, FilterType.STATISTICS);
  }

  _handleFilterTypeChange(evt) {
    const filterType = evt.target.dataset.type ? evt.target.dataset.type : evt.target.parentElement.dataset.type;

    if (this._currentFilter === filterType) {
      return;
    }

    this._filterModel.setFilter(UpdateType.MAJOR, filterType);
  }

  _getFilters() {
    const films = this._filmsModel.films;
    const filteredFilms = getFilteredFilms(films);

    return [
      {
        type: FilterType.ALL,
        name: `All movies`,
        count: films.length
      },
      {
        type: FilterType.WATCHLIST,
        name: `Watchlist`,
        count: filteredFilms[FilterType.WATCHLIST].length
      },
      {
        type: FilterType.HISTORY,
        name: `History`,
        count: filteredFilms[FilterType.HISTORY].length
      },
      {
        type: FilterType.FAVORITES,
        name: `Favorites`,
        count: filteredFilms[FilterType.FAVORITES].length
      },
    ];
  }
}
