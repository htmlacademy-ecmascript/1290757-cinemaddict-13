import {createProfileTemplate} from "./view/profile.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import {createFilmsTemplate} from "./view/film.js";
import {createButtonTemplate} from "./view/button.js";
import {createStatisticsTemplate} from "./view/stats.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateFilm} from "./mock/film.js";
import {pressEnter, pressEscape, pressLeftMouseButton} from "./utils.js";

const MOVIES_PER_STEP = 5;
const MOVIES_TOP_RATED = 2;
const MOVIES_MOST_COMMENTED = 2;
const TOTAL_FILMS = 18;

let renderedTaskCount = MOVIES_PER_STEP;
let loadMoreButton;
let filmCards;
let closePopupButton;

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const films = new Array(TOTAL_FILMS).fill().map(generateFilm);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const showMoreFilm = (evt) => {
  evt.preventDefault();

  filmCards.forEach((film) => {
    film.removeEventListener(`click`, onDetailFilmShow);
  });

  films
    .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
    .forEach((film) => {
      render(filmsContainer, createFilmsTemplate(film), `beforeend`);
    });

  renderedTaskCount += MOVIES_PER_STEP;

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(`click`, onDetailFilmShow);
  });

  if (renderedTaskCount >= films.length) {
    loadMoreButton.remove();
    loadMoreButton.removeEventListener(`click`, onMoreFilmShow);
  }
};

const onMoreFilmShow = (evt) => {
  showMoreFilm(evt);
};

const popupClose = () => {
  const filmDetails = body.querySelector(`.film-details`);

  closePopupButton.removeEventListener(`mousedown`, onPopupClose);
  closePopupButton.removeEventListener(`keydown`, onPopupClose);
  document.removeEventListener(`keydown`, onPopupClose);

  body.removeChild(filmDetails);
};

const onPopupClose = (evt) => {
  if (evt.type === `keydown`) {
    if (evt.target.className === `film-details__close-btn`) {
      pressEnter(evt, popupClose);
    } else {
      pressEscape(evt, popupClose);
    }
  } else if (evt.type === `mousedown`) {
    pressLeftMouseButton(evt, popupClose);
  }
};

const showDetailFilm = (filmData) => {
  render(body, createPopupTemplate(filmData), `beforeend`);

  closePopupButton = body.querySelector(`.film-details__close-btn`);

  closePopupButton.addEventListener(`mousedown`, onPopupClose);
  closePopupButton.addEventListener(`keydown`, onPopupClose);
  document.addEventListener(`keydown`, onPopupClose);
};

const getDetailData = (evt) => {
  const dataId = evt.target.parentElement.id;

  return films.filter((film) => {
    return film.id === Number(dataId);
  })[0];
};

const onDetailFilmShow = (evt) => {
  if (evt.target.classList.contains(`film-card__poster`)
    || evt.target.classList.contains(`film-card__title`)
    || evt.target.classList.contains(`film-card__comments`)) {
    evt.preventDefault();

    const filmData = getDetailData(evt);

    showDetailFilm(filmData);
  }
};

render(header, createProfileTemplate(), `beforeend`);
render(main, createFilterTemplate(), `beforeend`);
render(main, createSortingTemplate(), `beforeend`);
render(main, createFilmsContainerTemplate(), `beforeend`);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < Math.min(films.length, MOVIES_PER_STEP); i++) {
  render(filmsContainer, createFilmsTemplate(films[i]), `beforeend`);

  filmCards = filmsContainer.querySelectorAll(`.film-card`);

  filmCards.forEach((film) => {
    film.addEventListener(`click`, onDetailFilmShow);
  });
}

if (TOTAL_FILMS > MOVIES_PER_STEP) {
  render(filmList, createButtonTemplate(), `beforeend`);
  loadMoreButton = filmList.querySelector(`.films-list__show-more`);
  loadMoreButton.addEventListener(`click`, onMoreFilmShow);
}

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);

  const topRatedFilms = [...films];

  topRatedFilms.sort((a, b) => {
    return b.rating - a.rating;
  });

  for (let i = 0; i < MOVIES_TOP_RATED; i++) {
    render(topRatedFilmsContainer, createFilmsTemplate(topRatedFilms[i]), `beforeend`);
  }

  const topRatedFilmCards = topRatedFilmsContainer.querySelectorAll(`.film-card`);

  topRatedFilmCards.forEach((film) => {
    film.addEventListener(`click`, onDetailFilmShow);
  });
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);

  const mostCommentedFilms = [...films];

  mostCommentedFilms.sort((a, b) => {
    return b.comments.length - a.comments.length;
  });

  for (let i = 0; i < MOVIES_MOST_COMMENTED; i++) {
    render(mostCommentedFilmsContainer, createFilmsTemplate(mostCommentedFilms[i]), `beforeend`);
  }

  const mostCommentedFilmCards = mostCommentedFilmsContainer.querySelectorAll(`.film-card`);

  mostCommentedFilmCards.forEach((film) => {
    film.addEventListener(`click`, onDetailFilmShow);
  });
}

//render(main, createStatisticsTemplate(), `beforeend`);
