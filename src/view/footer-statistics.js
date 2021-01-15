import AbstractView from "./abstract";

const createFooterStatisticsTemplate = (totalFilms) => `<p>${totalFilms} movies inside</p>`;

export default class FooterStatistics extends AbstractView {
  constructor(totalFilms = 0) {
    super();
    this._totalFilms = totalFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._totalFilms);
  }
}
