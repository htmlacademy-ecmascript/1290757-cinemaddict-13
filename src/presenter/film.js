import FilmView from "../view/film.js";
import PopupView from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";
import {RenderPosition} from "../const.js";
import {UserAction, UpdateType} from "../const.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {toast} from "../utils/toast";
import {isOnline} from "../utils/common.js";

dayjs.extend(utc);

export default class Film {
  constructor(filmContainer, bodyContainer, updateData, api) {
    this._container = filmContainer;
    this._bodyContainer = bodyContainer;
    this._updateData = updateData;
    this._api = api;

    this._view = null;
    this._popupView = null;
    this._isPopupOpen = false;

    this._popupShowHandler = this._popupShowHandler.bind(this);
    this._popupCloseHandler = this._popupCloseHandler.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleAddComment = this._handleAddComment.bind(this);
    this._handleDeleteComment = this._handleDeleteComment.bind(this);
    this._handleCommentLoad = this._handleCommentLoad.bind(this);
  }

  init(film) {
    this._film = film;
    this._changeableData = {
      watched: this._film.watched,
      watchingDate: this._film.watchingDate,
      watchlist: this._film.watchlist,
      favorite: this._film.favorite
    };

    const prevFilmView = this._view;

    this._view = new FilmView(film);

    this._view.setShowDetailHandler(this._popupShowHandler);
    this._view.setWatchedClickHandler(this._handleWatchedClick);
    this._view.setWatchlistClickHandler(this._handleWatchlistClick);
    this._view.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevFilmView === null) {
      render(this._container, this._view, RenderPosition.BEFORE_END);
      return;
    }

    if (this._container.contains(prevFilmView.element)) {
      replace(this._view, prevFilmView);
    }

    remove(prevFilmView);
  }

  replacePopup() {
    const prevPopupView = this._popupView;

    if (prevPopupView && this._bodyContainer.contains(prevPopupView.element)) {
      const scrollTop = prevPopupView._element.scrollTop;
      this._initPopup();
      replace(this._popupView, prevPopupView);
      this._popupView.element.scrollTo({top: scrollTop});
    }
  }

  destroy() {
    if (this._isPopupOpen) {
      this._destroyPopup();
    }

    remove(this._view);
  }

  setChangeStatusAborting() {
    if (this._isPopupOpen) {
      this._popupView.shake();
      return;
    }

    this._view.shake();
  }

  setAddCommentAborting() {
    this._popupView.shakeField();
  }

  setDeleteCommentAborting(data) {
    this._popupView.shakeComment(data);
  }

  updatePopup() {
    this._popupClose();
    this._popupShow();
  }

  _destroyPopup() {
    this._popupView.removeClosePopupHandler(this._popupCloseHandler);
    this._popupView.removeWatchedClickHandler(this._handleWatchedClick);
    this._popupView.removeWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.removeFavoriteClickHandler(this._handleFavoriteClick);
    this._popupView.removeCommentAddHandler(this._handleAddComment);
    this._popupView.removeCommentDeleteHandler(this._handleDeleteComment);
    remove(this._popupView);
  }

  _handleAddComment(comment) {
    if (comment.text === `` || comment.emotion === ``) {
      return;
    }

    this._updateData(UserAction.ADD_COMMENT, UpdateType.PATCH, {
      "id": this._film.id,
      "comment": comment
    });
  }

  _handleDeleteComment(evt) {
    this._updateData(UserAction.DELETE_COMMENT, UpdateType.PATCH, {
      "id": this._film.id,
      "commentId": this._film.comments[evt.target.dataset.count]
    });
  }

  _handleCommentLoad(comments) {
    this._updateData(UserAction.LOAD_COMMENTS, UpdateType.PATCH, {
      "id": this._film.id,
      "comments": comments
    });
  }

  _setUpdateType() {
    return this._isPopupOpen ? UpdateType.MINOR : UpdateType.PRE_MAJOR;
  }

  _handleWatchedClick() {
    const updateType = this._setUpdateType();

    this._updateData(UserAction.CHANGE_STATUS, updateType, Object.assign({}, this._film, {
      watched: !this._film.watched,
      watchingDate: dayjs.utc().format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`)
    }));

    if (this._isPopupOpen) {
      this._changeableData = {
        watched: !this._film.watched,
        watchingDate: dayjs.utc().format(`YYYY-MM-DDTHH:mm:ss.SSS[Z]`)
      };
    }
  }

  _handleWatchlistClick() {
    const updateType = this._setUpdateType();

    this._updateData(UserAction.CHANGE_STATUS, updateType, Object.assign({}, this._film, {
      watchlist: !this._film.watchlist
    }));

    if (this._isPopupOpen) {
      this._changeableData = {
        watchlist: !this._film.watchlist
      };
    }
  }

  _handleFavoriteClick() {
    const updateType = this._setUpdateType();

    this._updateData(UserAction.CHANGE_STATUS, updateType, Object.assign({}, this._film, {
      favorite: !this._film.favorite
    }));

    if (this._isPopupOpen) {
      this._changeableData = {
        favorite: !this._film.favorite
      };
    }
  }

  _updateFilmStatus() {
    this._updateData(UserAction.CHANGE_STATUS, UpdateType.PRE_MAJOR, Object.assign({}, this._film, {
      watched: this._changeableData.watched,
      watchingDate: this._changeableData.watchingDate,
      watchlist: this._changeableData.watchlist,
      favorite: this._changeableData.favorite
    }));
  }

  _popupClose() {
    if (this._isPopupOpen) {
      this._popupView.removeClosePopupHandler(this._popupCloseHandler);
      this._popupView.removeWatchedClickHandler(this._handleWatchedClick);
      this._popupView.removeWatchlistClickHandler(this._handleWatchlistClick);
      this._popupView.removeFavoriteClickHandler(this._handleFavoriteClick);
      this._popupView.removeCommentAddHandler(this._handleAddComment);
      this._popupView.removeCommentDeleteHandler(this._handleDeleteComment);

      remove(this._popupView);
      this._popupView.removeElement();
      this._bodyContainer.classList.remove(`hide-overflow`);
      this._isPopupOpen = false;
    }
  }

  _popupCloseHandler() {
    this._popupClose();
    this._updateFilmStatus();
  }

  _loadComment() {
    if (!isOnline()) {
      toast(`You can't load comment offline`);
      return;
    }

    this._api.getComment(this._film)
      .then((comments) => {
        this._handleCommentLoad(comments);
      });
  }

  _initPopup() {
    this._popupView = new PopupView(this._film);
    this._setPopupHandlers();
  }

  _setPopupHandlers() {
    this._popupView.setClosePopupHandler(this._popupCloseHandler);
    this._popupView.setWatchedClickHandler(this._handleWatchedClick);
    this._popupView.setWatchlistClickHandler(this._handleWatchlistClick);
    this._popupView.setFavoriteClickHandler(this._handleFavoriteClick);
    this._popupView.setCommentAddHandler(this._handleAddComment);
    this._popupView.setCommentDeleteHandler(this._handleDeleteComment);
  }

  _popupShow() {
    this._initPopup();

    render(this._bodyContainer, this._popupView.element, RenderPosition.BEFORE_END);
    this._bodyContainer.classList.add(`hide-overflow`);
    this._isPopupOpen = true;
    this._loadComment();
  }

  _popupShowHandler(evt) {
    this.updatePopup(evt);
  }
}
