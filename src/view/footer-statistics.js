import AbstractView from "./abstract";

const createTemplate = (totalFilms) => `<p>${totalFilms} movies inside</p>`;

export default class FooterStatistics extends AbstractView {
  constructor(totalFilms) {
    super();
    this._totalFilms = totalFilms;
  }

  _getTemplate() {
    return createTemplate(this._totalFilms);
  }
}
