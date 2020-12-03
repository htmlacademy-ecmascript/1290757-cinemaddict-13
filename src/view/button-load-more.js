import AbstractView from "./abstract";
import {Button, Event} from "../const.js";
import {checkButtonPress} from "../utils/common";

const createButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton extends AbstractView {
  constructor() {
    super();

    this._loadMoreButtonHandler = this._loadMoreButtonHandler.bind(this);
  }

  _getTemplate() {
    return createButtonTemplate();
  }

  _loadMoreButtonHandler(evt) {
    evt.preventDefault();

    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.loadMore, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.loadMore, Button.MOUSE_MAIN);
    }
  }

  setLoadMoreButtonHandler(callback) {
    this._callback.loadMore = callback;

    this.element.addEventListener(Event.MOUSE_DOWN, this._loadMoreButtonHandler);
    this.element.addEventListener(Event.KEY_DOWN, this._loadMoreButtonHandler);
  }

  removeLoadMoreButtonHandler(callback) {
    this._callback.loadMore = callback;

    this.element.removeEventListener(Event.MOUSE_DOWN, this._loadMoreButtonHandler);
    this.element.removeEventListener(Event.KEY_DOWN, this._loadMoreButtonHandler);
  }
}
