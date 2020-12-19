import Abstract from "./abstract";

export default class Smart extends Abstract {
  constructor() {
    super();
    this._data = {};
  }

  _updateData(update) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);
  }

  _updateElement() {
    let prevElement = this._element;
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.element;

    parent.replaceChild(newElement, prevElement);
    this._restoreHandlers();
  }

  _restoreHandlers() {
    throw new Error(`Abstract method not implemented: resetHandlers`);
  }
}
