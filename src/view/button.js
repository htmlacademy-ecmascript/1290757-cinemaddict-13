import {createElement} from "../utils";

const createButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createButtonTemplate();
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
