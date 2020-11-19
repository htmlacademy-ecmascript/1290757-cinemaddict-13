import {createUsernameTemplate} from "./view/username.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortingTemplate} from "./view/sorting.js";
import {createFilmsContainerTemplate} from "./view/films-container.js";
import {createFilmsTemplate} from "./view/film.js";
import {createButtonTemplate} from "./view/button.js";
import {createStatisticsTemplate} from "./view/stats.js";
import {createPopupTemplate} from "./view/popup.js";

const MOVIES_ON_PAGE = 5;
const MOVIES_TOP_RATED = 2;
const MOVIES_MOST_COMMENTED = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);

render(header, createUsernameTemplate(), `beforeend`);
render(main, createMenuTemplate(), `beforeend`);
render(main, createSortingTemplate(), `beforeend`);
render(main, createFilmsContainerTemplate(), `beforeend`);

const filmList = main.querySelector(`.films-list`);
const filmsContainer = filmList.querySelector(`.films-list__container`);
const filmListExtra = main.querySelectorAll(`.films-list.films-list--extra`);

for (let i = 0; i < MOVIES_ON_PAGE; i++) {
  render(filmsContainer, createFilmsTemplate(), `beforeend`);
}

render(filmList, createButtonTemplate(), `beforeend`);

if (filmListExtra[0]) {
  const topRatedFilmsContainer = filmListExtra[0].querySelector(`.films-list__container`);

  for (let i = 0; i < MOVIES_TOP_RATED; i++) {
    render(topRatedFilmsContainer, createFilmsTemplate(), `beforeend`);
  }
}

if (filmListExtra[1]) {
  const mostCommentedFilmsContainer = filmListExtra[1].querySelector(`.films-list__container`);

  for (let i = 0; i < MOVIES_MOST_COMMENTED; i++) {
    render(mostCommentedFilmsContainer, createFilmsTemplate(), `beforeend`);
  }
}

render(main, createStatisticsTemplate(), `beforeend`);
render(body, createPopupTemplate(), `beforeend`);
