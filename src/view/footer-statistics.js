import {createElement} from "../utils";

const createFooterStatisticsTemplate = (totalFilms) => `<p>${totalFilms} movies inside</p>`;

export default class FooterStatistics {
  constructor(totalFilms) {
    this._element = null;
    this._totalFilms = totalFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._totalFilms);
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }
}
