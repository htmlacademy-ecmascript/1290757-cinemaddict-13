import FilmsModel from "../model/film.js";

const Method = {
  GET: `GET`,
  PUT: `PUT`,
  POST: `POST`,
  DELETE: `DELETE`
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

export default class Api {
  constructor(endPoint, authorization) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getComment(film) {
    return this._load({url: `/comments/${film.id}`})
      .then(Api.toJSON)
      .then((comments) => comments.map(FilmsModel.adaptCommentToClient));
  }

  addComment(film) {
    return this._load({
      url: `/comments/${film.id}`,
      method: Method.POST,
      body: JSON.stringify(FilmsModel.adaptCommentToServer(film.comment)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then((data) => FilmsModel.adaptAddCommentToClient(data));
  }

  deleteComment(id) {
    return this._load({
      url: `/comments/${id}`,
      method: Method.DELETE
    });
  }

  getFilms() {
    return this._load({url: `/movies`})
      .then(Api.toJSON)
      .then((films) => films.map(FilmsModel.adaptFilmToClient));
  }

  updateFilm(film) {
    return this._load({
      url: `/movies/${film.id}`,
      method: Method.PUT,
      body: JSON.stringify(FilmsModel.adaptFilmToServer(film)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON)
      .then(FilmsModel.adaptFilmToClient);
  }

  sync(films) {
    return this._load({
      url: `/movies/sync`,
      method: Method.POST,
      body: JSON.stringify(films.map(FilmsModel.adaptFilmToServer)),
      headers: new Headers({"Content-Type": `application/json`})
    })
      .then(Api.toJSON);
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    headers.append(`Authorization`, this._authorization);

    return fetch(`${this._endPoint}${url}`, {method, body, headers})
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (response.status < SuccessHTTPStatusRange.MIN || response.status > SuccessHTTPStatusRange.MAX) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
