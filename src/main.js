import {createProfileTemplate} from "./view/profile.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import {createFilmsTemplate} from "./view/film.js";
import {createButtonTemplate} from "./view/button.js";
import {createStatisticsTemplate} from "./view/stats.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateFilm} from "./mock/film.js";

const MOVIES_PER_STEP = 5;
const MOVIES_TOP_RATED = 2;
const MOVIES_MOST_COMMENTED = 2;
const TOTAL_FILMS = 18;

const films = new Array(TOTAL_FILMS).fill().map(generateFilm);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);

render(header, createProfileTemplate(), `beforeend`);
render(main, createMenuTemplate(), `beforeend`);
render(main, createSortingTemplate(), `beforeend`);
render(main, createFilmsContainerTemplate(), `beforeend`);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < Math.min(films.length, MOVIES_PER_STEP); i++) {
  render(filmsContainer, createFilmsTemplate(films[i]), `beforeend`);
}

if (TOTAL_FILMS > MOVIES_PER_STEP) {
  let renderedTaskCount = MOVIES_PER_STEP;

  render(filmList, createButtonTemplate(), `beforeend`);

  const loadMoreButton = filmList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films
      .slice(renderedTaskCount, renderedTaskCount + MOVIES_PER_STEP)
      .forEach((film) => render(filmsContainer, createFilmsTemplate(film), `beforeend`));

    renderedTaskCount += MOVIES_PER_STEP;

    if (renderedTaskCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);

  for (let i = 0; i < MOVIES_TOP_RATED; i++) {
    render(topRatedFilmsContainer, createFilmsTemplate(generateFilm()), `beforeend`);
  }
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);

  for (let i = 0; i < MOVIES_MOST_COMMENTED; i++) {
    render(mostCommentedFilmsContainer, createFilmsTemplate(generateFilm()), `beforeend`);
  }
}

//render(main, createStatisticsTemplate(), `beforeend`);
//render(body, createPopupTemplate(), `beforeend`);
