import Abstract from "./abstract";

const createButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

export default class LoadMoreButton extends Abstract {
  _getTemplate() {
    return createButtonTemplate();
  }
}
