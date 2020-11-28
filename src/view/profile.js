import {createElement} from "../utils";

const createRankTemplate = (rank) => rank !== `` ? `<p class="profile__rating">${rank}</p>` : ``;

const createProfileTemplate = (stats) => {
  const rankTemplate = createRankTemplate(stats.rank);

  return `<section class="header__profile profile">
    ${rankTemplate}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class Profile {
  constructor(stats) {
    this._element = null;
    this._stats = stats;
  }

  _getTemplate() {
    return createProfileTemplate(this._stats);
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
