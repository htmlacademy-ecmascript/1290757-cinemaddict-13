import {createElement} from "../utils";

const createFilmsContainerTemplate = () =>
  `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>
  </section>`;

export default class NoFilm {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createFilmsContainerTemplate();
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
