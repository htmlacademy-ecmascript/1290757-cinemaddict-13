import {createElement} from "../utils/render.js";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one.`);
    }

    this._element = null;
    this._callback = {};
  }

  get element() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  _getTemplate() {
    throw new Error(`AbstractView method not implemented: getTemplate`);
  }

  removeElement() {
    this._element = null;
  }
}
