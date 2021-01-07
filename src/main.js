import Profile from "./view/profile.js";
import FooterStatistics from "./view/footer-statistics.js";
import PageMainContent from "./presenter/page-main-content.js";
import FilterPresenter from "./presenter/filter.js";
import FilmModel from "./model/film.js";
import FilterModel from "./model/filter.js";
import {generateStats} from "./mock/stats.js";
import {render} from "./utils/render.js";
import {RenderPosition, TOTAL_FILMS, UpdateType} from "./const.js";
import Api from "./api.js";

const AUTHORIZATION = `Basic az36347hxjmwyhepv`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

const body = document.querySelector(`body`);
const header = body.querySelector(`.header`);
const main = body.querySelector(`.main`);
const footerStatistics = body.querySelector(`.footer__statistics`);
const filmsModel = new FilmModel();
const filterModel = new FilterModel();
const api = new Api(END_POINT, AUTHORIZATION);

api.getFilms()
  .then((films) => {
    filmsModel.setFilms(UpdateType.INIT, films);
    render(header, new Profile(stats).element, RenderPosition.BEFORE_END);
    render(footerStatistics, new FooterStatistics(TOTAL_FILMS).element, RenderPosition.BEFORE_END);
  })
  .catch(() => {
    filmsModel.setFilms(UpdateType.INIT, []);
    render(header, new Profile(stats).element, RenderPosition.BEFORE_END);
    render(footerStatistics, new FooterStatistics(TOTAL_FILMS).element, RenderPosition.BEFORE_END);
  });

const stats = generateStats(filmsModel.films);

const pageMainContentPresenter = new PageMainContent(body, main, filmsModel, filterModel, api);
const filterPresenter = new FilterPresenter(main, filterModel, filmsModel);

filterPresenter.init();
pageMainContentPresenter.init();
