import Abstract from "./abstract";

const createFooterStatisticsTemplate = (totalFilms) => `<p>${totalFilms} movies inside</p>`;

export default class FooterStatistics extends Abstract {
  constructor(totalFilms) {
    super();
    this._totalFilms = totalFilms;
  }

  _getTemplate() {
    return createFooterStatisticsTemplate(this._totalFilms);
  }
}
