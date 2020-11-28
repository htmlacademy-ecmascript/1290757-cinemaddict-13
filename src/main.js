import Profile from "./view/profile.js";
import Filter from "./view/filter.js";
import Sorting from "./view/sorting.js";
import FilmsContainer from "./view/films-container.js";
import Film from "./view/film.js";
import LoadMoreButton from "./view/button.js";
import Popup from "./view/popup.js";
import FooterStatistics from "./view/footer-statistics.js";
import {generateFilm} from "./mock/film.js";
import {generateStats} from "./mock/stats.js";
import {generateFilterData} from "./mock/filter.js";
import {checkButtonPress, render} from "./utils.js";
import {RenderPosition} from "./const.js";

const MOVIES_PER_STEP = 5;
const ADDITIONAL_FILMS_COUNT = 2;
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
let popupElement;

const loadMoreButtonElement = new LoadMoreButton();

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
      render(filmsContainer, new Film(film).element, RenderPosition.BEFORE_END);
    });

  renderedTaskCount += MOVIES_PER_STEP;

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
  });

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
    loadMoreButtonElement.removeElement();
    loadMoreButton.removeEventListener(Event.MOUSE, onMoreFilmShow);
  }
};

const onMoreFilmShow = (evt) => {
  evt.preventDefault();

  showMoreFilm(evt);
};

const popupClose = () => {
  const filmDetails = body.querySelector(`.film-details`);

  body.removeChild(filmDetails);
  body.classList.remove(`hide-overflow`);
  popupElement.removeElement();

  closePopupButton.removeEventListener(Event.MOUSE, onPopupClose);
  closePopupButton.removeEventListener(Event.KEYBOARD, onPopupClose);
  document.removeEventListener(Event.KEYBOARD, onPopupClose);
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
  popupElement = new Popup(filmData);

  render(body, popupElement.element, RenderPosition.BEFORE_END);
  body.classList.add(`hide-overflow`);

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

const setFilmCardHandler = (cards) => {
  cards.forEach((film) => {
    film.addEventListener(Event.MOUSE, onDetailFilmShow);
    film.addEventListener(Event.KEYBOARD, onDetailFilmShow);
  });
};

const renderAdditionalFilmBlocks = (container, sortedFilms) => {
  for (let i = 0; i < ADDITIONAL_FILMS_COUNT; i++) {
    render(container, new Film(sortedFilms[i]).element, RenderPosition.BEFORE_END);
  }

  const additionalFilmCards = container.querySelectorAll(`.film-card`);

  setFilmCardHandler(additionalFilmCards);
};


render(header, new Profile(stats).element, RenderPosition.BEFORE_END);
render(main, new Filter(filterData).element, RenderPosition.BEFORE_END);
render(main, new Sorting().element, RenderPosition.BEFORE_END);
render(main, new FilmsContainer().element, RenderPosition.BEFORE_END);
render(footerStatistics, new FooterStatistics(TOTAL_FILMS).element, RenderPosition.BEFORE_END);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < Math.min(films.length, MOVIES_PER_STEP); i++) {
  render(filmsContainer, new Film(films[i]).element, RenderPosition.BEFORE_END);

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  setFilmCardHandler(filmCards);
}

if (TOTAL_FILMS > MOVIES_PER_STEP) {
  render(filmList, loadMoreButtonElement.element, RenderPosition.BEFORE_END);

  loadMoreButton = filmList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(Event.MOUSE, onMoreFilmShow);
}

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);
  const topRatedFilms = [...films];

  topRatedFilms.sort((a, b) => b.rating - a.rating);

  renderAdditionalFilmBlocks(topRatedFilmsContainer, topRatedFilms);
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);
  const mostCommentedFilms = [...films];

  mostCommentedFilms.sort((a, b) => b.comments.length - a.comments.length);

  renderAdditionalFilmBlocks(mostCommentedFilmsContainer, mostCommentedFilms);
}
