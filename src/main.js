import Profile from "./view/profile.js";
import FooterStatistics from "./view/footer-statistics.js";
import PageMainContent from "./presenter/page-main-content.js";
import FilterPresenter from "./presenter/filter.js";
import FilmModel from "./model/film.js";
import FilterModel from "./model/filter.js";
import {generateFilm} from "./mock/film.js";
import {generateStats} from "./mock/stats.js";
import {render} from "./utils/render.js";
import {RenderPosition, TOTAL_FILMS} from "./const.js";
import Api from "./api.js";

const AUTHORIZATION = `Basic az36347hxjmwyhepv`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = body.querySelector(`.footer__statistics`);
const films = new Array(TOTAL_FILMS).fill().map(generateFilm);
const stats = generateStats(films);
const filmsModel = new FilmModel();
const filterModel = new FilterModel();
const api = new Api(END_POINT, AUTHORIZATION);

api.getTasks().then((items) => {
  console.log(items);
  // Есть проблема: cтруктура объекта похожа, но некоторые ключи называются иначе,
  // а ещё на сервере используется snake_case, а у нас camelCase.
  // Можно, конечно, переписать часть нашего клиентского приложения, но зачем?
  // Есть вариант получше - паттерн "Адаптер"
});

filmsModel.setFilms(films);

const pageMainContentPresenter = new PageMainContent(body, main, filmsModel, filterModel);
const filterPresenter = new FilterPresenter(main, filterModel, filmsModel);

render(header, new Profile(stats).element, RenderPosition.BEFORE_END);
filterPresenter.init();
pageMainContentPresenter.init();
render(footerStatistics, new FooterStatistics(TOTAL_FILMS).element, RenderPosition.BEFORE_END);
