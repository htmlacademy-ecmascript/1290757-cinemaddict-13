import Profile from "./view/profile.js";
import Filter from "./view/filter.js";
import Sorting from "./view/sorting.js";
import FilmsContainer from "./view/films-container.js";
import Film from "./view/film.js";
import LoadMoreButton from "./view/button-load.js";
import Popup from "./view/popup.js";
import FooterStatistics from "./view/footer-statistics.js";
import NoFilm from "./view/no-film";
import {generateFilm} from "./mock/film.js";
import {generateStats} from "./mock/stats.js";
import {generateFilterData} from "./mock/filter.js";
import {render} from "./utils/render.js";
import {checkButtonPress} from "./utils/common.js";
import {RenderPosition, Event} from "./const.js";

const MOVIES_PER_STEP = 5;
const TOTAL_FILMS = 31;
const MAX_ADDITIONAL_FILMS = 2;
const Button = {
  ENTER: `Enter`,
  ESCAPE: `Escape`,
  MOUSE_MAIN: 0
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
    film.removeEventListener(Event.MOUSE_DOWN, onDetailFilmShow);
  });

  films
    .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
    .forEach((film) => {
      render(filmsContainer, new Film(film).element, RenderPosition.BEFORE_END);
    });

  renderedTaskCount += MOVIES_PER_STEP;

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(Event.MOUSE_DOWN, onDetailFilmShow);
  });

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
    loadMoreButtonElement.removeElement();
    loadMoreButton.removeEventListener(Event.MOUSE_DOWN, onMoreFilmShow);
  }
};

const onMoreFilmShow = () => {
  showMoreFilm();
};

const popupClose = () => {
  const filmDetails = body.querySelector(`.film-details`);

  body.removeChild(filmDetails);
  body.classList.remove(`hide-overflow`);
  popupElement.removeElement();

  closePopupButton.removeEventListener(Event.MOUSE_DOWN, onPopupClose);
  closePopupButton.removeEventListener(Event.KEY_DOWN, onPopupClose);
  document.removeEventListener(Event.KEY_DOWN, onPopupClose);
};

const onPopupClose = (evt) => {
  if (evt.type === Event.KEY_DOWN) {
    if (evt.target.className === `film-details__close-btn`) {
      checkButtonPress(evt, popupClose, Button.ENTER);
    } else {
      checkButtonPress(evt, popupClose, Button.ESCAPE);
    }
  } else if (evt.type === Event.MOUSE_DOWN) {
    checkButtonPress(evt, popupClose, Button.MOUSE_MAIN);
  }
};

const showDetailFilm = () => {
  popupElement = new Popup(filmData);

  render(body, popupElement.element, RenderPosition.BEFORE_END);
  body.classList.add(`hide-overflow`);

  closePopupButton = body.querySelector(`.film-details__close-btn`);

  closePopupButton.addEventListener(Event.MOUSE_DOWN, onPopupClose);
  closePopupButton.addEventListener(Event.KEY_DOWN, onPopupClose);
  document.addEventListener(Event.KEY_DOWN, onPopupClose);
};

const getDetailData = (evt) => films.filter((film) => film.id === Number(evt.target.parentElement.id))[0];

const onDetailFilmShow = (evt) => {
  if (evt.target.classList.contains(`film-card__poster`)
    || evt.target.classList.contains(`film-card__title`)
    || evt.target.classList.contains(`film-card__comments`)) {
    evt.preventDefault();

    filmData = getDetailData(evt);

    if (evt.type === Event.KEY_DOWN) {
      checkButtonPress(evt, showDetailFilm, Button.ENTER);
    } else if (evt.type === Event.MOUSE_DOWN) {
      checkButtonPress(evt, showDetailFilm, Button.MOUSE_MAIN);
    }
  }
};

const setFilmCardHandler = (cards) => {
  cards.forEach((film) => {
    film.addEventListener(Event.MOUSE_DOWN, onDetailFilmShow);
    film.addEventListener(Event.KEY_DOWN, onDetailFilmShow);
  });
};

const renderAdditionalFilmBlocks = (container, sortedFilms) => {
  for (let i = 0; i < Math.min(sortedFilms.length, MAX_ADDITIONAL_FILMS); i++) {
    render(container, new Film(sortedFilms[i]).element, RenderPosition.BEFORE_END);
  }

  const additionalFilmCards = container.querySelectorAll(`.film-card`);

  setFilmCardHandler(additionalFilmCards);
};


render(header, new Profile(stats).element, RenderPosition.BEFORE_END);
render(main, new Filter(filterData).element, RenderPosition.BEFORE_END);

if (films.length) {
  render(main, new Sorting().element, RenderPosition.BEFORE_END);
  render(main, new FilmsContainer().element, RenderPosition.BEFORE_END);
} else {
  render(main, new NoFilm().element, RenderPosition.BEFORE_END);
}

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

  loadMoreButtonElement.setMouseDownHandler(onMoreFilmShow);
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
