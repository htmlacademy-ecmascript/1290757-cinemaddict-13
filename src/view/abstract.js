import {createElement} from "../utils/render.js";
import {SHAKE_ANIMATION_TIMEOUT} from "../const.js";

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

  shake() {
    this.element.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;
    setTimeout(() => {
      this.element.style.animation = ``;
    }, SHAKE_ANIMATION_TIMEOUT);
  }

  _getTemplate() {
    throw new Error(`AbstractView method not implemented: getTemplate`);
  }

  removeElement() {
    this._element = null;
  }
}
