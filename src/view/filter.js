import AbstractView from "./abstract";
import {Button, Event, FilterType} from "../const.js";
import {checkButtonPress} from "../utils/common";

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {type, name, count} = filter;

  return `<a href="#${type}" data-type="${type}" class="main-navigation__item ${type === currentFilterType ? `main-navigation__item--active` : ``}">
    ${name} ${type === FilterType.ALL ? `` : `<span class="main-navigation__item-count">${count}</span>`}
  </a>`;
};

const createFilterTemplate = (filterItems, currentFilterType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join(``);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">${filterItemsTemplate}</div>
    <a href="#stats" class="main-navigation__additional ${currentFilterType === FilterType.STATISTICS ? `main-navigation__additional--active` : ``}">Stats</a>
  </nav>`;
};

export default class Filter extends AbstractView {
  constructor(filter, currentFilterType) {
    super();
    this._filter = filter;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
    this._statisticsClickHandler = this._statisticsClickHandler.bind(this);
  }

  _getTemplate() {
    return createFilterTemplate(this._filter, this._currentFilter);
  }

  _statisticsClickHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.statisticsClick, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.statisticsClick, Button.MOUSE_MAIN);
    }
  }

  _filterTypeChangeHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.filterTypeChange, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.filterTypeChange, Button.MOUSE_MAIN);
    }
  }

  setStatisticsClickHandler(callback) {
    this._callback.statisticsClick = callback;
    const statisticsButtons = this.element.querySelector(`.main-navigation__additional`);

    statisticsButtons.addEventListener(Event.MOUSE_DOWN, this._statisticsClickHandler);
    statisticsButtons.addEventListener(Event.KEY_DOWN, this._statisticsClickHandler);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this._filterButtons = this.element.querySelectorAll(`.main-navigation__item`);

    this._filterButtons.forEach((button) => {
      button.addEventListener(Event.MOUSE_DOWN, this._filterTypeChangeHandler);
      button.addEventListener(Event.KEY_DOWN, this._filterTypeChangeHandler);
    });
  }
}
