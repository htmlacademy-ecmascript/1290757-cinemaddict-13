import dayjs from "dayjs";
import {getFormatTime} from "../utils/render.js";
import AbstractView from "./abstract";

const SHORT_DESCRIPTION_LENGTH = 139;

const checkFlagStatus = (value) => value ? `film-card__controls-item--active` : ``;

const createFilmTemplate = (film) => {
  const {id, name, poster, description, comments, rating, releaseDate, runtime, genres, watched, watchlist, favorite} = film;

  const commentCount = comments.length;
  const year = dayjs(releaseDate).format(`YYYY`);
  const duration = getFormatTime(runtime);
  const shortDescription = description.length > SHORT_DESCRIPTION_LENGTH
    ? `${description.substr(0, SHORT_DESCRIPTION_LENGTH)}&hellip;`
    : description;
  const watchedStatus = checkFlagStatus(watched);
  const watchlistStatus = checkFlagStatus(watchlist);
  const favoriteStatus = checkFlagStatus(favorite);

  return `<article id="${id}" class="film-card">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${name}" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <a class="film-card__comments">${commentCount} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistStatus}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedStatus}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteStatus}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class Film extends AbstractView {
  constructor(film) {
    super();
    this._film = film;
  }

  _getTemplate() {
    return createFilmTemplate(this._film);
  }
}
