import AbstractView from "./abstract";
import {getRank} from "../utils/stats";

const createProfileTemplate = (rank) => {
  return `<section class="header__profile profile">
    ${rank !== `` ? `<p class="profile__rating">${rank}</p>` : ``}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class Profile extends AbstractView {
  constructor(filmsCount = 0) {
    super();
    this._rank = getRank(filmsCount);
  }

  _getTemplate() {
    return createProfileTemplate(this._rank);
  }
}
