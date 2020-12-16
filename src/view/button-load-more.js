import AbstractView from "./abstract";
import {Button, Event} from "../const.js";
import {checkButtonPress} from "../utils/common";

const createLoadMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton extends AbstractView {
  constructor() {
    super();

    this._loadMoreHandler = this._loadMoreHandler.bind(this);
  }

  _getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  setLoadMoreHandler(callback) {
    this._callback.loadMore = callback;

    this.element.addEventListener(Event.MOUSE_DOWN, this._loadMoreHandler);
    this.element.addEventListener(Event.KEY_DOWN, this._loadMoreHandler);
  }

  removeLoadMoreHandler(callback) {
    this._callback.loadMore = callback;

    this.element.removeEventListener(Event.MOUSE_DOWN, this._loadMoreHandler);
    this.element.removeEventListener(Event.KEY_DOWN, this._loadMoreHandler);
  }

  _loadMoreHandler(evt) {
    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, this._callback.loadMore, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, this._callback.loadMore, Button.MOUSE_MAIN);
    }
  }
}
