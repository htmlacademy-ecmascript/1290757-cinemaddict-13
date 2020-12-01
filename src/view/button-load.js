import AbstractView from "./abstract";
import {Event} from "../const.js";

const createButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton extends AbstractView {
  constructor() {
    super();

    this._clickHandler = this._clickHandler.bind(this);
  }

  _getTemplate() {
    return createButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();

    this._callback.click();
  }

  setMouseDownHandler(callback) {
    this._callback.click = callback;

    this.element.addEventListener(Event.MOUSE_DOWN, this._clickHandler);
  }
}
