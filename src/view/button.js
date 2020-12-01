import AbstractView from "./abstract";

const createButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton extends AbstractView {
  _getTemplate() {
    return createButtonTemplate();
  }
}
