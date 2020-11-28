import {createProfileTemplate} from "./view/profile.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import Film from "./view/film.js";
import {createButtonTemplate} from "./view/button.js";
import {createPopupTemplate} from "./view/popup.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";
import {generateStats} from "./mock/stats.js";
import {generateFilterData} from "./mock/filter.js";
import {checkButtonPress, renderTemplate, renderElement} from "./utils.js";
import {RenderPosition} from "./const.js";

const MOVIES_PER_STEP = 5;
const MOVIES_TOP_RATED = 2;
const MOVIES_MOST_COMMENTED = 2;
const TOTAL_FILMS = 31;
const Button = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
  MOUSE_MAIN: 0
};
const Event = {
  MOUSE: `mousedown`,
  KEYBOARD: `keydown`,
};

let renderedTaskCount = MOVIES_PER_STEP;
let loadMoreButton;
let filmCards;
let filmData;
let closePopupButton;

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = body.querySelector(`.footer__statistics`);
const films = new Array(TOTAL_FILMS).fill().map(generateFilm);
const stats = generateStats(films);
const filterData = generateFilterData(films);

const showMoreFilm = () => {
  filmCards.forEach((film) => {
    film.removeEventListener(Event.MOUSE, onDetailFilmShow);
  });

  films
    .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
    .forEach((film) => {
      renderElement(filmsContainer, new Film(film).getElement(), RenderPosition.BEFORE_END);
    });

  renderedTaskCount += MOVIES_PER_STEP;

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
  });

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
    loadMoreButton.removeEventListener(Event.MOUSE, onMoreFilmShow);
  }
};

const onMoreFilmShow = (evt) => {
  evt.preventDefault();

  showMoreFilm(evt);
};

const popupClose = () => {
  const filmDetails = body.querySelector(`.film-details`);

  closePopupButton.removeEventListener(Event.MOUSE, onPopupClose);
  closePopupButton.removeEventListener(Event.KEYBOARD, onPopupClose);
  document.removeEventListener(Event.KEYBOARD, onPopupClose);

  body.removeChild(filmDetails);
};

const onPopupClose = (evt) => {
  if (evt.type === Event.KEYBOARD) {
    if (evt.target.className === `film-details__close-btn`) {
      checkButtonPress(evt, popupClose, Button.ENTER);
    } else {
      checkButtonPress(evt, popupClose, Button.ESCAPE);
    }
  } else if (evt.type === Event.MOUSE) {
    checkButtonPress(evt, popupClose, Button.MOUSE_MAIN);
  }
};

const showDetailFilm = () => {
  renderTemplate(body, createPopupTemplate(filmData), RenderPosition.BEFORE_END);

  closePopupButton = body.querySelector(`.film-details__close-btn`);

  closePopupButton.addEventListener(Event.MOUSE, onPopupClose);
  closePopupButton.addEventListener(Event.KEYBOARD, onPopupClose);
  document.addEventListener(Event.KEYBOARD, onPopupClose);
};

const getDetailData = (evt) => films.filter((film) => film.id === Number(evt.target.parentElement.id))[0];

const onDetailFilmShow = (evt) => {
  if (evt.target.classList.contains(`film-card__poster`)
    || evt.target.classList.contains(`film-card__title`)
    || evt.target.classList.contains(`film-card__comments`)) {
    evt.preventDefault();

    filmData = getDetailData(evt);

    if (evt.type === Event.KEYBOARD) {
      checkButtonPress(evt, showDetailFilm, Button.ENTER);
    } else if (evt.type === Event.MOUSE) {
      checkButtonPress(evt, showDetailFilm, Button.MOUSE_MAIN);
    }
  }
};

renderTemplate(header, createProfileTemplate(stats), RenderPosition.BEFORE_END);
renderTemplate(main, createFilterTemplate(filterData), RenderPosition.BEFORE_END);
renderTemplate(main, createSortingTemplate(), RenderPosition.BEFORE_END);
renderTemplate(main, createFilmsContainerTemplate(), RenderPosition.BEFORE_END);
renderTemplate(footerStatistics, createFooterStatisticsTemplate(TOTAL_FILMS), RenderPosition.BEFORE_END);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < Math.min(films.length, MOVIES_PER_STEP); i++) {
  renderElement(filmsContainer, new Film(films[i]).getElement(), RenderPosition.BEFORE_END);

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
    film.addEventListener(Event.KEYBOARD, onDetailFilmShow);
  });
}

if (TOTAL_FILMS > MOVIES_PER_STEP) {
  renderTemplate(filmList, createButtonTemplate(), RenderPosition.BEFORE_END);

  loadMoreButton = filmList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(Event.MOUSE, onMoreFilmShow);
}

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);

  const topRatedFilms = [...films];

  topRatedFilms.sort((a, b) => b.rating - a.rating);

  for (let i = 0; i < MOVIES_TOP_RATED; i++) {
    renderElement(topRatedFilmsContainer, new Film(topRatedFilms[i]).getElement(), RenderPosition.BEFORE_END);
  }

  const topRatedFilmCards = topRatedFilmsContainer.querySelectorAll(`.film-card`);

  topRatedFilmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
    film.addEventListener(Event.KEYBOARD, onDetailFilmShow);
  });
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);

  const mostCommentedFilms = [...films];

  mostCommentedFilms.sort((a, b) => b.comments.length - a.comments.length);

  for (let i = 0; i < MOVIES_MOST_COMMENTED; i++) {
    renderElement(mostCommentedFilmsContainer, new Film(mostCommentedFilms[i]).getElement(), RenderPosition.BEFORE_END);
  }

  const mostCommentedFilmCards = mostCommentedFilmsContainer.querySelectorAll(`.film-card`);

  mostCommentedFilmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
    film.addEventListener(Event.KEYBOARD, onDetailFilmShow);
  });
}
